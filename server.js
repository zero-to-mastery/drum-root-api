const express = require("express");
const cors = require("cors");

const { handleSignin } = require("./controllers/signin");
const { handleSignout } = require("./controllers/signout");
const { requireAuth } = require("./controllers/authorization");
const { getLayout } = require("./controllers/drumLayout");

const app = express();

// Enable CORS
app.use(cors());

// Body parser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("It's Working!");
});

app.post("/signin", handleSignin);
app.post("/signout", handleSignout);
app.get("/drumlayout", requireAuth, getLayout);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

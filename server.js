const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { handleSignin } = require("./controllers/signin");
const { handleSignout } = require("./controllers/signout");
const { requireAuth } = require("./controllers/authorization");
const { getLayout } = require("./controllers/drumLayout");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("It's Working!");
});

app.post("/signin", handleSignin);
app.post("/signout", handleSignout);
app.get("/drumlayout", requireAuth, getLayout);

app.listen(3000, () => {
  console.log("app is running on port 3000");
});

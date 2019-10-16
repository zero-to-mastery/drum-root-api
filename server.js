const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const signin = require("./controllers/signin");
const signout = require("./controllers/signout");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("It's Working!");
});

app.post("/signin", signin.handleSignin);
app.post("/signout", signout.handleSignout);

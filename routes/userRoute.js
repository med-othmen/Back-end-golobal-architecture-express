const express = require("express");
const Router = express.Router();

Router.get("/getAllUsers", (req, res) => {
  res.send("Hello Users");
});

module.exports = Router;

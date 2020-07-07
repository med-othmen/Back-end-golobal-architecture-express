const express = require("express");
const Router = express.Router();

Router.get("/getAllHistorique", (req, res) => {
  res.send("this my all Historique");
});

module.exports = Router;

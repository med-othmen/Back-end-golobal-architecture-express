"user strict";

var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lital",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("succc");
});

module.exports = connection;

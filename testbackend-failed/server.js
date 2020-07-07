const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// load all my Routes
const Products = require("./routes/productRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use my Routes
app.use("/Lital/Product", Products);

// Server connection
const Port = 5000;

app.listen(Port, (err) => {
  if (err) {
    console.log("Error when running the server");
  } else {
    console.log(`Server running on port ${Port}`);
  }
});

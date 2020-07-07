const express = require("express");

const app = express();

// load all my Routes

const Products = require("./routes/productRoute");
const User = require("./routes/userRoute");
const Historique = require("./routes/historiqueRoute");

// Use my Routes

app.use("/Lital/Product", Products);
app.use("/Lital/User", User);
app.use("/Lital/Historique", Historique);

// Server connection

const Port = 5000;

app.listen(Port, (err) => {
  if (err) {
    console.log("Error when running the server");
  } else {
    console.log(`Server running on port ${Port}`);
  }
});

var connection = require("./db.js");

// constructor
class Product {
  constructor(task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
  }
}
Product.getallproduct = (result) => {
  connection.query("SELECT * FROM Product", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    console.log("Products : ", res);
    result(null, res);
  });
};

module.exports = Product;

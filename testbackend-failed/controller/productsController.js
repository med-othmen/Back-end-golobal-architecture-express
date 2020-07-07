const Product = require("../model/ProductModel");

module.exports = {
  get: (req, res) => {
    Product.getallproduct((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers.",
        });
      else {
        res.send(data);
      }
    });
  },
};

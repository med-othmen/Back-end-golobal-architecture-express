const express = require("express");
const productController = require("../controller/productsController");

const Router = express.Router();
// get All Products

Router.get("/getAllProducts", productController.getAllProducts);

// Add new Product

Router.post("/addProduct", productController.addProduct);

module.exports = Router;

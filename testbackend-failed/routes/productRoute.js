const express = require("express");
const product = require("../controller/productsController");

const router = express.Router();
// get All Products
router.get("/getAllProducts", product.getallproduct);

module.exports = router;

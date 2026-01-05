const express = require("express");
const Product = require("../model/product.model");
const router = express.Router();
const { getProducts, getProduct } = require("../controllers/product.controller")



router.get("/", getProducts)

router.get("/:id", getProduct)

module.exports = router;
const express = require('express');
const product = express.Router();

/* 
 *  Product controller 
 */
const {getAllProductsList,
getProduct,
getAllCategoryProductsList} = require("../controller/Product.controller");

product.get("/getallproduct",getAllCategoryProductsList);

product.get("/getaprodcut/:prodID",getProduct);

product.get("/:category/produts",getAllCategoryProductsList);

module.exports = product;
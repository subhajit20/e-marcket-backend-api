const express = require('express');
const category = express.Router();
const UserAuth = require("../middleware/UserAuth");

/* 
 *  Category controller 
 */
const {
    getallcategories,
    getcategory,
    addcategory
} = require('../controller/Category.controller');

category.get("/categories", getallcategories);

category.get("/getcategory/categoryname", getcategory);

category.post("/addcategory", UserAuth, addcategory);

module.exports = category;
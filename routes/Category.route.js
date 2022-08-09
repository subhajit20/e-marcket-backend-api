const express = require('express');
const category = express.Router();

 /* 
  *  Category controller 
  */
 const {getallcategories,
        getcategory,
        addcategory} = require('../controller/Category.controller');

category.get("/categories",getallcategories);

category.get("/getcategory/categoryname",getcategory);

category.post("/addcategory",addcategory);

module.exports = category;
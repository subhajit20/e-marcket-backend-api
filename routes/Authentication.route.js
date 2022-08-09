const express = require("express");
const authentication = express.Router();

 /** 
  *  @Authentication controller 
  **/
const {signup,login} = require("../controller/Authentication.controller")

authentication.post("/signup",signup);

authentication.post("/login",login);


module.exports = authentication
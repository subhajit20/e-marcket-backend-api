const express = require("express");
const UserRouter = express.Router();

const {formFields,signupValidation} = require("../validation/Signup.validation");
const {SignupController} = require("../controller/User.controller");

UserRouter.post("/signup",formFields,signupValidation,SignupController);

module.exports = UserRouter;
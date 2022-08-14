const express = require("express");
const UserRouter = express.Router();

const {formFields,signupValidation} = require("../validation/Signup.validation");
const {loginFormField,loginValidation} = require("../validation/Login.validation");

const {SignupController,
        LoginController
} = require("../controller/User.controller");

UserRouter.post("/signup",formFields,signupValidation,SignupController);

UserRouter.post("/login",loginFormField,loginValidation,LoginController);

module.exports = UserRouter;
const {check,validationResult} = require("express-validator");
const User = require("../schemas/User.model");
const createError = require("http-errors");

const formFields = [
    check("username")
        .isLength({min:3})
        .withMessage("Your name is too short")
        .isLength({max:10})
        .withMessage("Your name is too long,Please put a small name")
        .isAlphanumeric()
        .withMessage("Your name should be contains with both alphabets and numbers")
        .custom(async (value)=>{
            const isUser = await  User.find({
                username:value
            });
            if(isUser){
                throw createError("Username is already exist...");
            }else{
                console.log("Username is not there...");
            }
        }),
    check("u_email")
        .isEmail()
        .withMessage("Your email is not valid")
        .custom(async (value)=>{
            const isEmail = await  User.findOne({
                u_email:value
            });
            if(isEmail){
                throw createError("Email is already exist...");
            }else{
                console.log("Email is not there...")
            }
        }),
    check('password')
        .isStrongPassword()
        .withMessage(
            "Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol"
        )
        .trim()
        .isLength({ min: 8 })
        .withMessage(
            "Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol"
        )
        .custom(async (password,{req})=>{
            if(password === req.body.confirmpassword){
                console.log("Password is matched...")
            }else if(password !== req.body.confirmpassword){
                throw createError("Password is not matched correctly..")
            }
        })
        
]

const signupValidation = (req, res, next) => {
    const error = validationResult(req);
    const mapperError = error.mapped();
    if (Object.keys(mapperError).length === 0) {
        next()
    } else {
        res.status(500).json({
            err: mapperError
        })
    }
}

module.exports = {
    formFields,signupValidation
};
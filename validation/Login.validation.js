const { check, validationResult } = require("express-validator");
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const User = require("../schemas/User.model");

const loginFormField = [
    check("username")
    .isLength({ min: 3 })
    .withMessage("Username must have minimum 3 characters long...")
    .isLength({ max: 10 })
    .withMessage("Username is too long...")
    .custom(async(value) => {
        const myuser = await User.findOne({ username: value });
        if (myuser) {
            return true;
        } else {
            throw createError("Username is invalid...")
        }
    }),
    check("password")

    .custom(async(password) => {
        const myuser = await User.findOne({ username: req.body.username });
        if (myuser) {
            const isValidPassword = await bcrypt.compare(password, myuser.password);

            if (isValidPassword) {
                return true;
            } else {
                throw createError("Username and Password is not valid...")
            }
        } else {
            throw createError("Username and password is invalid...")
        }
    })
];

const loginValidation = (req, res, next) => {
    const error = validationResult(req);
    const mapperError = error.mapped();
    if (Object.keys(mapperError).length === 0) {
        next()
    } else {
        res.status(500).json({
            err: mapperError
        })
    }
};

module.exports = {
    loginFormField,
    loginValidation
};
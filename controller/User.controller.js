const User = require("../schemas/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * @param {req}  <--- Client request 
 * 
 */
async function SignupController(req, res) {
    const mypassword = req.body.password;
    const hasingPassword = await bcrypt.hash(mypassword, 10);
    const newuser = await new User({...req.body, password: hasingPassword });
    const savedUser = await newuser.save();
    if (savedUser) {
        res.status(200).json({
            msg: "You have successfully created your account..."
        })
    } else {
        res.status(404).json({
            msg: "Signup failed..."
        })
    }
}

/**
 * @Login controller
 */
async function LoginController(req, res) {
    try {
        const isUsername = await User.findOne({ username: req.body.username });
        if (isUsername) {
            const isValidPassword = await bcrypt.compare(req.body.password, isUsername.password);
            if (isValidPassword) {
                /**
                 * @Generating access token for authectication
                 */
                const access_token = jwt.sign({
                    username: isUsername.username,
                    email: isUsername.u_email,
                    userid: isUsername.userID
                }, process.env.ACCESS_TOKEN, {
                    expiresIn: '1m'
                });
                /**
                 * @Generating refresh token for authectication
                 */
                const refres_token = jwt.sign({
                    username: isUsername.username,
                    email: isUsername.u_email,
                    userid: isUsername.userID
                }, process.env.REFRESS_TOKEN, {
                    expiresIn: '1h'
                })

                res.status(200).json({
                    success: {
                        msg: "You successfuly logged in",
                        username: isUsername.username,
                        email: isUsername.u_email
                    },
                    access_token: access_token,
                    refres_token: refres_token
                })
            } else {
                res.status(404).json({
                    msg: "Login Failed...",
                })
            }
        } else {
            res.status(502).json({
                msg: "Username is not valid",
            })
        }
    } catch (e) {
        res.status(500).json({
            msg: "Login Failed!!"
        })
    }
}

module.exports = {
    SignupController,
    LoginController
}

const User = require("../schemas/User.model");
const bcrypt = require("bcrypt");
/**
 * @signup controller 
 */

async function SignupController(req,res){
    try{
        const mypassword = req.body.password;
        const hasingPassword = await bcrypt.hash(mypassword, 10);
        const newuser = new User({...req.body,password:hasingPassword});
        newuser.save();
        if(newuser){
            res.status(200).json({
                msg:"You have successfully created your account..."
            })
        }else{
            res.status(404).json({
                msg:"Signup failed..."
            })
        }
    }catch(e){
        res.status(500).json({
            msg:"Something went wrong..."
        })
    }
}

module.exports = {
    SignupController
}
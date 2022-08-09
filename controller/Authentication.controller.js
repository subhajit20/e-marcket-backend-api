/**
 * @req signup controller
 *
 */
function signup(req,res){
    res.status(200).json({
        msg:"This is signup controller..."
    })
}

/**
 * @req Login controller
 *
 */
 function login(req,res){
    res.status(200).json({
        msg:"This is login controller..."
    })
}

module.exports = {
    signup,
    login
}
const jwt = require("jsonwebtoken");

function UserAuth(req, res, next) {
    const userToken = req.headers['authorization'];
    const mainToken = userToken.split(' ')[1];
    try {
        const isValidToken = jwt.verify(mainToken, process.env.ACCESS_TOKEN);
        if (isValidToken) {
            req.token = mainToken;
            next();
        } else if (!isValidToken) {
            res.status(404).json({
                msg: "Token has been expired, please login to get new access token..."
            })
        }
    } catch (e) {
        res.status(500).json({
            msg: "Token is invalid :)"
        })
    }
}

module.exports = UserAuth;
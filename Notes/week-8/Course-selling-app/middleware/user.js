const jwt = require("jsonwebtoken")
const {JWT_user_secret} = require("../config")

function auth(req,res,next){
    const token = req.headers.token
    const decodedInfo = jwt.verify(token,JWT_user_secret)

    if(decodedInfo){
        req.userid = decodedInfo.id;
        next()
    }else{
        res.json({
            msg:"invalid token"
        })
    }
}

module.exports = {
    auth:auth
}
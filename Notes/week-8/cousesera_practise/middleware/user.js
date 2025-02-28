const jwt = require("jsonwebtoken")
const {user_secret} = require("../config")

function auth(req,res,next){

    // const token = req.headers.token
    const token = req.headers.token
    const decodedinfo = jwt.verify(token,user_secret)

    if(decodedinfo){
        req.userid = decodedinfo.id
        next()
    }else{
        res.json({
            msg:"invalid token"
        })
    }

}

module.exports={
    auth
}
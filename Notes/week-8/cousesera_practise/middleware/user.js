const jwt = require("jsonwebtoken")
const user_secret = process.env.user_secret

function user_auth(req,res,next){

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
    user_auth
}
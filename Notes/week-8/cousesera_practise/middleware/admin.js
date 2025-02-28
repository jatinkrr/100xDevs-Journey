const jwt = require("jsonwebtoken")
const admin_secret = process.env.admin_secret

function admin_auth(req,res,next){

    const token = req.headers.token
    const decodedinfo = jwt.verify(token,admin_secret)

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
    admin_auth
}

const jwt = require("jsonwebtoken")
const {admin_secret} = require("../config")

function auth(req,res,next){

    const token = req.headers.token
    const decodedinfo = jwt.verify(token,admin_secret)

    if(decodedinfo){
        // req.adminId = decodedinfo.id
        req.userId = decodedinfo.id;
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


const jwt = require("jsonwebtoken")

const user_JWT_SECRET = process.env.user_JWT_SECRET

function middleware(req,res,next){
    const token = req.headers.token
    const decodedinfo = jwt.verify(token,user_JWT_SECRET)

    if(decodedinfo){
        req.userid = decodedinfo.id
        next()
    }else{
        res.json({
            msg:"invalid token"
        })
    }
}

module.exports = {
    middleware
}
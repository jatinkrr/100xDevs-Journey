const jwt = require("jsonwebtoken")

const admin_JWT_SECRET = process.env.admin_JWT_SECRET

 function middleware(req,res,next){
    const token = req.headers.token
    const decodedinfo = jwt.verify(token,admin_JWT_SECRET)

    if(decodedinfo){
        req.adminid = decodedinfo.id
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
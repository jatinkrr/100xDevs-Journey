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

// const jwt = require("jsonwebtoken")
// const { admin_secret } = require("../config")

// function auth(req, res, next) {
//     const token = req.headers.token;

//     if (!token) {
//         return res.status(401).json({ msg: "Token is missing!" });
//     }

//     try {
//         const decodedInfo = jwt.verify(token, admin_secret);

//         if (decodedInfo) {
//             req.adminId = decodedInfo.id; // Use 'req.adminId' consistently
//             next();
//         } else {
//             res.status(401).json({ msg: "Invalid token" });
//         }
//     } catch (error) {
//         console.error("JWT Verification Error:", error.message);
//         res.status(401).json({ msg: "Invalid or expired token" });
//     }
// }

// module.exports = { auth }

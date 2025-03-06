const {Router} = require("express")
const {usermodel} = require("../db")
// const {middlewares} = require("../middlewares/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const user_JWT_SECRET = process.env.user_JWT_SECRET
const userRoute = Router()


userRoute.post("/signup",async (req,res)=>{
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email 
    const password = req.body.password;

try{
    const hashedpassword = await bcrypt.hash(password,5)
   await usermodel.create({
        firstName,
        lastName,
        email,
        password:hashedpassword
    })
    res.json({
        msg:"you are signed up"
    })

}catch(e){
    res.json({
        msg:"email already exists"
    })
}
})

userRoute.post("/signin",async (req,res)=>{

    const email = req.body.email 
    const password = req.body.password

    
    const user=await usermodel.findOne({
        email
    })
    if(!user){
        res.json({
            msg:"user not exists in DataBase"
        })
    }
    const matchPassword = await bcrypt.compare(password, user.password)

    if(matchPassword){
        const token = jwt.sign({
            id:user._id
        },user_JWT_SECRET)
        res.json({
           token : token
        })
    }else{
        res.json({
            msg:"invalid credantials"
        })
    }

})

module.exports = {
    userRoute
}
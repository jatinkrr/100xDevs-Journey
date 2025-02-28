const {Router} = require("express")
const {usermodel} = require("../db")
const jwt = require("jsonwebtoken")
const user_secret = process.env.user_secret
const userRoute = Router()
const bcrypt = require("bcrypt")

userRoute.post("/signup",async (req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    const hashedpassword = await bcrypt.hash(password,5)
try{
    await usermodel.create({
        firstName,
        lastName,
        email,
        password:hashedpassword
    })
    res.json("you are signed up")
}catch(e){
    res.json({
        msg:"email already exits"
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
            msg:"email not found"
        })
    }
    const matchPassword =await bcrypt.compare(password,user.password)
    if(matchPassword){
        const token = jwt.sign({
            id:user._id
        },user_secret)
        res.json({
            token:token
        })
    }else{
        res.json({
            msg:"invalid credantials"
        })
    }
})
userRoute.post("/purchases",(req,res)=>{

})

module.exports = {
    userRoute
}
const {Router} = require("express")
const {usermodel} = require("../db")
const jwt = require("jsonwebtoken")
const {user_secret} =require("../config")
const userRoute = Router()
const bcrypt = require("bcrypt")
const {auth} = require("../middleware/user")

userRoute.post("/signup",async (req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ msg: "All fields are required!" });
    }

    try{
    const hashedpassword = await bcrypt.hash(password,5)
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
userRoute.post("/purchases",auth,(req,res)=>{

})

module.exports = {
    userRoute
}
const {Router}= require("express")

const { usermodel}= require("../db")
const jwt = require("jsonwebtoken")
const {JWT_user_secret} = require("../config")
const bcrypt = require("bcrypt")
const {auth} = require("../middleware/user")

const userRoute = Router()

userRoute.post("/signup",async(req,res)=>{

    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName;
    // const email = req.body.email;
    // const password = req.body.password;
    const {firstName,lastName,email,password} = req.body

    const hashedpassword =await bcrypt.hash(password,5)
    try{
   await usermodel.create({
        firstName,
        lastName,
        email,
        password:hashedpassword
    })

    res.json({
        msg:"you are signed in"
    })
}catch(e){
    res.json({
        msg:"email already exists"
    })
}
    
})
userRoute.post("/signin",async (req,res)=>{
    
   const {email,password}= req.body
   
   const response = await usermodel.findOne({email} )
   if(!response){
       res.json({
           msg:"user not found in db"
        })
        return
    }
    const matchPassword =await bcrypt.compare(password,response.password)
    
    if(matchPassword){
        const token = jwt.sign({
            id:response._id
        },JWT_user_secret)
        res.json({
            token:token
        })
    }else{
        res.json({ 
            msg:"invalid token"
        })
    }


}) 

  
userRoute.get("/purchases",async (req,res)=>{
    
}) 

  module.exports = {
    userRoute
  }
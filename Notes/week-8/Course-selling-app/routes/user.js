const {Router}= require("express")
const { usermodel}= require("../db")

const userRoute = Router()

userRoute.post("/signup",async(req,res)=>{

    
})
userRoute.post("/signin",async (req,res)=>{
    
}) 

  
userRoute.get("/purchases",async (req,res)=>{
    
}) 

  module.exports = {
    userRoute
  }
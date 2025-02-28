const { Router } = require("express")
const { adminmodel}= require("../db")
const adminRouter = Router()
const jwt = require("jsonwebtoken")
const {JWT_ADMIN_TOKEN} = require("../config")
const {auth} = require("../middleware/admin")
const bcrypt = require("bcrypt")

adminRouter.post("/signup",async(req,res)=>{
    const {firstName,lastName,email,password} = req.body

    const hashedpassword =await bcrypt.hash(password,5)
    try{
   await adminmodel.create({
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
    

adminRouter.post("/signin",async (req,res)=>{
      
   const {email,password}= req.body
   
   const response = await adminmodel.findOne({email} )
   if(!response){
       res.json({
           msg:"user not found in db"
        })
        return
    }
    try{
    const matchPassword =await bcrypt.compare(password,response.password)
    
    if(matchPassword){
        const token = jwt.sign({
            id:response._id
        },JWT_ADMIN_TOKEN)
        res.json({
            token:token
        })
    }else{
        res.json({ 
            msg:"invalid token"
        })
    }
}catch(e){
    res.json({
        msg:"error"
    })
}


}) 
adminRouter.post("/course",auth,async (req,res)=>{
    const adminId = req.userId;

    const{ title,description,price,imageUrl } = req.body;

   const course = await adminmodel.create({
    title,
    description,
    price,
    imageUrl,
    createrId:adminId
    })
    res.json({
        msg:"courses created",
        couseId:course._id
    })
}) 
adminRouter.put("/course",auth,async (req,res)=>{
    const adminId = req.userId;

    const{ title,description,price,imageUrl,couseId } = req.body;

   const course = await adminmodel.updateOne({
    _id:couseId
   },{
    title,
    description,
    price,
    imageUrl,
    
    })
    res.json({
        msg:"courses updated",
        couseId:course._id
    })
}) 

adminRouter.get("/course/preview",async (req,res)=>{
    
}) 

module.exports = {
    adminRouter
}
  
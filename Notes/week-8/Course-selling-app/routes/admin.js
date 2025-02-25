const { Router } = require("express")
const { adminmodel}= require("../db")
const adminRouter = Router()

adminRouter.post("/signup",async(req,res)=>{

    
})
adminRouter.post("/signin",async (req,res)=>{
    
}) 
adminRouter.put("/course",async (req,res)=>{
    
}) 
adminRouter.get("/course/preview",async (req,res)=>{
    
}) 

module.exports = {
    adminRouter
}

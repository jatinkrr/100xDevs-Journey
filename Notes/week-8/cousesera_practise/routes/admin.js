const {Router} = require("express")

const {adminmodel} = require("../db")

const adminRoute = Router()

adminRoute.post("/signup",(req,res)=>{
    
})
adminRoute.post("/signin",(req,res)=>{

})
adminRoute.post("/course",(req,res)=>{

})
adminRoute.put("/purchase",(req,res)=>{

})
adminRoute.get("/purchase/preview",(req,res)=>{

})
 
module.exports={
    adminRoute
}

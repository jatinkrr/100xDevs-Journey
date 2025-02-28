const {Router} = require("express")
const {usermodel} = require("../db")

const userRoute = Router()

userRoute.post("/signup",(req,res)=>{
    
})
userRoute.post("/signin",(req,res)=>{

})
userRoute.post("/purchases",(req,res)=>{

})

module.exports = {
    userRoute
}
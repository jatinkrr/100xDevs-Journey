
const {Router} = require("express")
const {adminmodel} = require("../db")
const jwt = require("jsonwebtoken")
const admin_secret = process.env.admin_secret
const adminRoute = Router()
const bcrypt = require("bcrypt")
const {admin_auth} = require("../middleware/user")

adminRoute.post("/signup",async (req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    const hashedpassword = await bcrypt.hash(password,5)
try{
    await adminmodel.create({
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
adminRoute.post("/signin",async (req,res)=>{
    const email = req.body.email
    const password = req.body.password

    const user=await adminmodel.findOne({
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
        },admin_secret)
        res.json({
            token:token
        })
    }else{
        res.json({
            msg:"invalid credantials"
        })
    }
})
adminRoute.post("/course",admin_auth,(req,res)=>{

})
adminRoute.put("/purchase",admin_auth,(req,res)=>{

})
adminRoute.get("/purchase/preview",admin_auth,(req,res)=>{

})
 
module.exports={
    adminRoute
}

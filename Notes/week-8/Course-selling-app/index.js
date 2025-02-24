const express = require("express")
const {usermodel} = require("./db")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
mongoose.connect("mongodb+srv://hunny:EKcZB1K9@cluster0.3vulh.mongodb.net/course-selling-app")

const jwt = require("jsonwebtoken")
const JWT_SECRET = "randomisRandom"

const app = express()
app.use(express.json())
app.post("/signup",async(req,res)=>{

    try{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword =await bcrypt.hash(password,5)

    await usermodel.create({
        name:name,
        email:email,
        password:hashedPassword
        // password:password
    })
    
    res.json({
        msg:"you are signed in"
    })
}catch(e){
    res.json({
        msg:"email already exits"
    })
}
})
app.post("/signin",async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;   

    const response =await usermodel.findOne({
        email
    })

    const compare = await bcrypt.compare(password,response.password)
    if(compare){
        const token = jwt.sign({
            id : response._id
        },JWT_SECRET)
        res.json({
            token:token
        })
    }else{
        res.json({
            msg:"invalid credantial"
        })
    }

})
  
app.listen(3000)

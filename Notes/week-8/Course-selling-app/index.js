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
})
app.post("/signin",(req,res)=>{
    const Username = req.body.Username;
    const password = req.body.password;

    

})

app.listen(3000)

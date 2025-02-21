const express = require("express")
const {usermodel,todomodel} = require("./db")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "kjsvnjsbvvbe"

const app = express()

app.post("/signup",(req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    
    usermodel.create({
        name:name,
        email:email,
        password:password
    })
})

app.post("/signin",(req,res)=>{
    
})
app.post("/todo",(req,res)=>{
    
})
app.get("/todos",(req,res)=>{
    
})

app.listen(8080)
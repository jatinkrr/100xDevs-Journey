const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "ilovekiara"

const { UserModel, TodoModel } = require("../db")
const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://jatinkr0104:@EKcZB1K9@hunny.3vulh.mongodb.net/todo-jatin-2");
mongoose.connect("mongodb+srv://jatinkr0104:EKcZB1K9@<CLUSTER_URL>/<DATABASE_NAME>?retryWrites=true&w=majority");



const app = express()
app.use(express.json())

app.post("/signup",async (req,res)=>{
    const email = req.body.email;
    const password= req.body.password;
    const name = req.body.name;

   await UserModel.insertMany({ //await isley use kara, ager baad mai request fail hoti hai toh yeah bina await ke "you are loged in show ker dega"
        email:email,
        password:password,
        name:name
    })
    res.json({
        message:"you are logged in"
    })

})
app.post("/signin",async (req,res)=>{
    const email = req.body.email;
    const password= req.body.password;

         const user = await UserModel.create({
        email:email,
        password:password
    })
    console.log(user)
    if(user){
        const token = jwt.sign({
            id:user._id
        },  JWT_SECRET)

        res.json({
            token:token
        })
    }else{
        res.send(403).json({
            msg:"wrong credentials"
        })
    }
})
app.post("/todo",(req,res)=>{

})
app.get("/todos",(req,res)=>{

})

app.listen(3002)
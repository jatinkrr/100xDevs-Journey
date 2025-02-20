const express = require("express")
const mongoose = require("mongoose")
const {usermodel,todomodel} = require('./db')
mongoose.connect("mongodb+srv://hunny:EKcZB1K9@cluster0.3vulh.mongodb.net/todo-jatin0108")
const jwt = require("jsonwebtoken")
const   JWT_SECRET  = "random i live kiara"

const app = express()
app.use(express.json())

app.post("/signup",async (req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

   await usermodel.create({
        name:name,
        email:email,
        password:password
    })
    res.json({
        msg:"you are signed in"
    })
})
app.post("/signin",(req,res)=>{
    const email = req.body.email
    const password = req.body.password

    const user = usermodel.findOne({
        email,password
    })
    if(user){
        const token = jwt.sign({
            id:user._id
        },JWT_SECRET)
        res.json({
            token:token
        })
    }else{
        res.json({
            "msg":"invalid crisential"
        })
    }
})
function auth(req,res,next){
    const token = req.headers.token
    const decodedinfo = jwt.verify(token, JWT_SECRET)

    if(decodedinfo){
        req.userid = decodedinfo.id;
        next() 
    }else{
        res.json({
           msg: "invalid token"
        })
    }

}
app.post("/todo",auth,async (req,res)=>{
    const title = req.body.title
    const done = req.body.done
    // const userId = req.body.userId

     await todomodel.create({
        title:title,
        done:done
        // userId:userId
     })
     res.json({
        msg:"yodo added"
     })

})
app.get("/todos",auth,async(req,res)=>{
    const userid = req.userId
    const user = await todomodel.find({
        userid
    })
    res.json({
        user
    })
})

// app.listen(3000)
app.listen(3000)
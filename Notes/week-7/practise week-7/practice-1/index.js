const express = require("express")
const mongoose = require("mongoose")
const jwt= require("jsonwebtoken")
const JWT_SECRET = "random Ilove you"
const {usermodel,todomodel} = require("./db")
const app = express()
app.use(express.json())
mongoose.connect("mongodb+srv://hunny:EKcZB1K9@cluster0.3vulh.mongodb.net/todo-jatin222")

app.post("/signup",async (req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    
    await usermodel.create({
        email:email, 
        password:password,
        name :name
    })
    res.json({
        msg:"you are logged in"
    })
    
})
app.post("/signin",async (req,res)=>{
    const email = req.body.email
    const password = req.body.password

    const users = await usermodel.findOne({
        email:email,
        password:password
    })
    if(users){
        const token = jwt.sign({
            id:users._id.toString() //bcouz yeah object id hai to isse string mai convert kerdenge
        },JWT_SECRET)
        res.json({
            token:token
        })
    }else{
        res.json({
            msg:"wrong credentials"
        })
    }
})

function auth(req,res,next){
    const token = req.headers.token;
    const decodedinfo = jwt.verify(token,JWT_SECRET)
    if(decodedinfo){
        req.userId = decodedinfo.id
        next()
    }else{
        res.json({
            msg:"invalid cred"
        })
    }
}

app.post("/todo",auth,async (req,res)=>{
    // title:String,
    // done:String,
    // userId:ObjectId

     const title=req.body.title
     const done=req.body.done
    //  const userId=req.body.userId

   await todomodel.create({
        title:title,
        done:done
    })
     res.json({
       msg:"todo done"


     })

// const userId = req.userId

//     res.json({
//         userId:userId
//     })
})
app.get("/todos",auth,async (req,res)=>{
    const userId = req.userId
    const todos = await todomodel.find({
        userId

    })
    res.json({
        todos
    })
})

app.listen(3000)















//practise 



// const express = require("express")
// const {UserModel, TodoModel} = require("./db")

// const jwt = require("jsonwebtoken")
// const mongoose = require("mongoose")
// const   JWT_SECRET   = "ASDASDA@123"
// const app = express()
// app.use(express.json())
// mongoose.connect("mongodb+srv://hunny:EKcZB1K9@cluster0.3vulh.mongodb.net/todo-jatin")
// // .then(() => console.log("MongoDB connected"))
// // .catch(err => console.log("MongoDB connection error:", err));

// app.post("/signup",async function(req,res){
//     const email = req.body.email;
//     const password = req.body.password;
//     const name = req.body.name;

//      await UserModel.create({
//         email:email,
//         password:password,
//         name:name
//      })
//      res.json({
//         msg:"you are logged in"
//      })
// })
// app.post("/signin",async (req,res)=>{
//     const email = req.body.email;
//     const password = req.body.password;

//     const user = await UserModel.findOne({
//         email:email,
//         password:password
//     })
//     if(user){
//         const token = jwt.sign({
//             id: user._id
//         },JWT_SECRET);
//         res.json({
//             token:token
//         })
//     }else{
//         res.json({
//             msg:"wring credential"
//         })
//     }
// })

// function auth(req,res,next){
//     const token = req.headers.token;
//     const decodeinfo = jwt.verify(token,JWT_SECRET)
//     // const username = decodeinfo.username

//     if(decodedinfo){
//         req.userId = decodedinfo.userId;
//         next()
//     }else{
//         res.json({
//             msg:"wrong token"
//         })
//     }
// }
// app.post("/todo",auth,(req,res)=>{

// })
// app.get("/todos",(req,res)=>{

// })
// app.listen(3000)
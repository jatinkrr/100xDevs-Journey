const express = require("express")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const {usermodel,todomodel} = require("./db")
const {z} = require("zod")
mongoose.connect("mongodb+srv://hunny:EKcZB1K9@cluster0.3vulh.mongodb.net/userdata-todo-newone")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));
const jwt = require("jsonwebtoken")
const JWT_SECRET = "random user i love random"
const app = express()
app.use(express.json())

app.post("/signup",async (req,res)=>{

    const requiredBody = z.object({
        name: z.string().min(3).max(100),
        email: z.string().min(3).max(30).email(),
        password: z.string().min(3).max(30)
    })
    //const parsebodywithsucess = requireBody.parse()   //it will parse the data or return error but safeparse will also give what the error
    const parseBodyWithSucess = requiredBody.safeParse(req.body);
    if(!parseBodyWithSucess.success){
        res.json({
            msg:"incooreect format",
            error: parseBodyWithSucess.error
        })
        return
    }


    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    
    const hashedPassword = await bcrypt.hash(password,2)
    console.log(hashedPassword)
    
    
    try{

   await usermodel.create({
        name:name,
        email:email,
        password:hashedPassword
    })

    res.json({
        msg:"you are signed in"
    })
    }catch (e){
        res.json({
            msg:"user already loggin with this email"
        })
    }

})
app.post("/signin",async (req,res)=>{
    const email = req.body.email
    const password = req.body.password

    const userss = await usermodel.findOne({
        email:email
    });
    if(!userss){
        res.json({
            msg:"user not found in db"
        })
        return
    }
    const passwordMatch = bcrypt.compare(password,userss.password)
    if(passwordMatch){
        const token = jwt.sign({
            id:userss._id
        },JWT_SECRET)
        res.json({
            token:token
        })
    }else{
        res.json({
            msg:"invalid credantials"
        })
    }





})
app.post("/todo",(req,res)=>{
    
})
app.post("/todos",(req,res)=>{
    
})

app.listen(8080)





























// const express = require("express")
// const bcrypt = require("bcrypt")
// const {usermodel,todomodel} = require("./db")
// const mongoose = require("mongoose")
// const jwt = require("jsonwebtoken")
// const JWT_SECRET = "kjsvnjsbvvbe"
// const app = express()
// app.use(express.json())
// mongoose.connect("mongodb+srv://hunny:EKcZB1K9@cluster0.3vulh.mongodb.net/userdata-todo-app")

// app.post("/signup",async(req,res)=>{
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
// try{
//     const hashedPassword = await bcrypt.hash(password,5);
//     console.log(hashedPassword)

//     await usermodel.create({
//         name:name,
//         email:email, 
//         password:hashedPassword
//     })
//     res.json({
//         msg:"you are signed up"

//     })
// } catch(e){
//     res.json({
//         msg:"user already exits"
//     })
// }
// })

// app.post("/signin",async(req,res)=>{
//     const email = req.body.email;
//     const password = req.body.password;

//     const response = await usermodel.findOne({
//         email:email
//     })
// if(!response){
//     res.json({
//         msg:"user not find in db"
//     })
// }
//     const passwordMatch =await bcrypt.compare(password,response.password)
//     if(passwordMatch){
//         const token = jwt.sign({
//             id:response._id

//         },JWT_SECRET)
//         res.json({
//             token:token
//         }) 
//     }else{
//         res.json({
//             msg:"invalid credential"
//         })
//     }

// })
// function auth(req,res,next){
//     const token = req.headers.token
//     const decodedinfo = jwt.verify(token,JWT_SECRET);

//     if(decodedinfo){
//         req.userId = decodedinfo.id
//         next()
//     }
//     else{
//         res.json({
//             msg:"invalid token"
//         })
//     }

// }
// app.post("/todo",auth,(req,res)=>{
    
// })
// app.get("/todos",(req,res)=>{
    
// })

// app.listen(8080)
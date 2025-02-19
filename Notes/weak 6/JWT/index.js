const express = require("express")
const jwt = require("jsonwebtoken")


const JWT_SECRET = "randomhunnyilovekiara"
const app = express();
app.use(express.json())

let user = [];


app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    user.push({
        username, password
    })
    res.json({
        msg:"you are signed up"
    })
    console.log(user)
})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let foundUser=[]
    for(let i=0; i<user.length;i++){
        if(user[i].username == username && user[i].password == password){
            foundUser = user[i];
        }
    }
    if(foundUser){
        const token= jwt.sign({
            username:username
        },JWT_SECRET) ;//converting a username into json webtoken use "jwt.sign()" it is not encrypt
        res.json({
            token:token
        })
    }else{
        res.json({
            msg:"invalid username"
        })
    }
    console.log(user)
})

app.get("/me",(req,res)=>{
    const token = req.headers.token; //now it will send jwt token
    const decodedInformation= jwt.verify(token,JWT_SECRRET) //{USERNAME:JATIN@GMAIL.COM}, USER JWT_SECRET TO DECODE IT
    const username = decodedInformation.username
    let foundUser = null;

    for(let i=0; i<user.length;i++){
        if(user[i].username == username){
            foundUser = user[i]

        }
    }
    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }else{
        res.json({
            msg:"invalid token"
        })
    }
})

app.listen(3000)
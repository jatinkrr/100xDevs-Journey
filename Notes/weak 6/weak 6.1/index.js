const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET ="randomjatinilovekiara"
const app = express();
app.use(express.json())

let user =[]

app.post("/signup",(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    user.push({
        username,
        password
    })
    res.json({
        msg:"user you signed in"
    })
    console.log(user)
})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let founduser=[];
    for(let i=0; i<user.length; i++){
        if(user[i].username == username && user[i].password==password){
            founduser = user[i]
        }
    }
    if(founduser){
        const token = jwt.sign({
            username:username
        },JWT_SECRET);
        res.json({
            token:token
        })
    }
    res.send({
        msg:"invalid username"
    })
})
// app.get("/me",(req,res)=>{
//     const token = req.headers.token;
//     const decodedInfo = jwt.verify(token,JWT_SECRET)
//     const username = decodedInfo.username
//     let founduser = null;
//     for(let i=0; i<user.length; i++){   
//         if(user[i].username == username){
//             founduser= user[i]
//         }
//     }
//     if(founduser){
//         res.json({
//             username:founduser.username,
//             password:founduser.password
//         })

//     }else{
//         res.send({
//             msg:"invalid username"
//         })
//     }
// })



app.listen(3000)
const express = require("express")

const app = express()
app.use(express.json())

const user = [];
function randomToken(){
    let option = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for(let i=0; i<32; i++){
        token =token + option[Math.floor(Math.random()*option.length)]
    }
    return token;
}

app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
  user.push({
    username,
    password
  })
  res.json({
      msg:"you are signed up"
    })
    console.log(user)

})

app.post("/signin", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let foundUser=[]

    for(let i=0; i<user.length; i++){
        if(user[i].username==username && user[i].password==password){
            foundUser = user[i];
        }   
    }

    if(foundUser){
        const token = randomToken()
        foundUser.token = token;

        res.json({
            token: token
        })
    }else{
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(user)
})

app.get("/me",(req,res)=>{
    const token = req.headers.token; //yaha "headers" ayega "header" nahi

    let foundUser = null;

    for(let i=0; i<user.length; i++){
        if(user[i].token == token){ //yaha per galti thi userData.token ker raha tha bus per user[i].token come
            foundUser = user[i]
        }
    }
    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
        // console.log(user)
    }
    else{
        res.json({
            msg:"incorrect token"
        })
    }
})


app.listen(3001)











// const express = require("express")

// const app = express()

// app.use(express.json())

// const user = [];

// function randomToken(){
//     let option = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token ="";
//     for(let i=0; i<32; i++){
//         token = token + option[Math.floor(Math.random()*option.length)]
//         //math.floor will conver "2.444534" to "2"
//     }
//     return token;
// }

// app.post("/signUp",(req,res)=>{
//     const username = req.body.username;
//     const password = req.body.password;
//     // const token = ["dkajdnsdfjhzn"]

//     user.push({
//         username,
//         password
//     })
//     res.send({
//         message:"you are sign up"
//     })

//     console.log(user)
// })


// app.post("/signin",(req,res)=>{
//     const username = req.body.username;
//     const password = req.body.password;

//     let foundUser = []
    
//     for(let i=0; i<user.length; i++){
//         if(user[i].username == username && user[i].password == password
//         ){
//             foundUser = user[i];
//         }
//     }
//     if(foundUser){
//         const token = randomToken()
//         foundUser.token = token;
//         res.json({
//             token: token
//         })
//      } else {
//         res.status(403).send({
//             message: "Invalid username or password"
//         })
//     }
//     console.log(user)
// })

// app.get("/me",(req,res)=>{
//     const token = req.headers.token
//     let foundUser = null;

//     for(let i=0; i<user.length; i++){
//         if(user[i].token == token){
//             foundUser = user[i]
//         }
//     }
//     if(foundUser){
//         res.json({
//             username: foundUser.username,
//             password: foundUser.password
//         })
//     }else{
//         res.json({
//             message:"token invalid"
//         })
//     }


// })



// app.listen(3000)
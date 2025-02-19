const express = require("express")
const jwt = require("jsonwebtoken")
const cors = require("cors")

const JWT_SECRET = "hunnyIlovekiara"
const app = express()
// app.use(jwt())
app.use(express.json())
app.use(cors())

const userData = [] // ise bhi string mai kerke dekhna hai

app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password

    userData.push({
        username,password
    })

    res.json({
        username:username,
        password:password 
    })

    
})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password

    let userFound = "";

    for(let i=0; i<userData.length; i++){
        if(userData[i].username == username && userData[i].password == password){
            userFound = userData[i]
        }
    }

    if(userFound){
        const token = jwt.sign({
            username:username
            
        },JWT_SECRET);
        

        res.json({
            token:token
            // username:username
        })
    }else{
        res.send({
            msg:"invalid username"
        })
    }
})

function auth(req,res,next){
    const token = req.headers.token;
    const decodinfo = jwt.verify(token,JWT_SECRET)
    
    if(decodinfo.username){
        req.username = decodinfo.username
       next()
    }else{
        res.json({
            msg:"you are not logged in"
        })
    }
}
app.get("/me",auth,(req,res)=>{
    
    let foundUser = null; //isko string mai rakh ker bhi dekhna

    for(let i=0; i<userData.length; i++){
        if(userData[i].username === req.username){
            foundUser = userData[i]
        }
    }
    if(foundUser){
        res.json({
            username: foundUser.username,
            password : foundUser.password
        })
    }else{
        res.send({
            msg:"username not found"
        })
    }
    console.log(userData)
})

app.listen(8080)













// const express = require("express")
// const jwt = require("jsonwebtoken")

// const JWT_SECRET="randomHunnyIloveLoveshakshi"
// const app = express()

// app.use(express.json())
// const user = []

// app.post("/signup",(req,res)=>{
//     const username = req.body.username
//     const password = req.body.password

//     user.push({
//         username,password
//     })
//     res.json({
//         username:username,
//         password:password
//     })
// })

// app.post("/signin",(req,res)=>{
//     const username = req.body.username
//     const password = req.body.password

//     let userfound =""
//     for(let i=0; i<user.length;i++){
//         if(user[i].username == username && user[i].password == password){
//             userfound = user[i]
//         }
//     }
//     if(userfound){
//         const token = jwt.sign({
//             username:username
//         },JWT_SECRET)
//         res.json({
//             token:token
//         })
//     }else{
//         res.json({
//             msg:"username is incoreect"
//         })
//     }
// })
// function auth(req,res,next){
//     const token = req.headers.token
//     const decodeinfo = jwt.verify(token,JWT_SECRET);
//     const username = decodeinfo.username

//     if(username){
//         req.username = username
//         next()
//     }else{
//         res.json({
//             msg:"you are not logged in"
//         })
//     }

// }
// app.get("/me",auth,(req,res)=>{
    
//     let userfound = null;
//     for(let i=0; i<user.length;i++){
//         if(user[i].username == req.username){
//             userfound = user[i]
//         }
//     }
//     if(userfound){
//         res.json({
//             username : userfound.username,
//             password : userfound.password
//         })
//     }else{
//         res.json({
//             msg:"invalid token"
//         })
//     }
// })

// app.listen(3001)
























// const express = require("express");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");

// const JWT_SECRET = "hunnyIlovekiara"; // 🔴 Change this to an environment variable in production
// const app = express();

// app.use(express.json());
// app.use(cors());

// let users = []; // 🔵 Simulating a database (use MongoDB/PostgreSQL in real-world apps)

// // 🟢 SIGNUP Route (Register New User)
// app.post("/signup", (req, res) => {
//     const { username, password } = req.body;

//     if (!username || !password) {
//         return res.status(400).json({ msg: "Username and password are required" });
//     }

//     // Check if user already exists
//     const existingUser = users.find(user => user.username === username);
//     if (existingUser) {
//         return res.status(400).json({ msg: "Username already exists" });
//     }

//     users.push({ username, password });
//     res.status(201).json({ msg: "User registered successfully", username });
// });

// // 🟢 SIGNIN Route (Login User)
// app.post("/signin", (req, res) => {
//     const { username, password } = req.body;

//     if (!username || !password) {
//         return res.status(400).json({ msg: "Username and password are required" });
//     }

//     const user = users.find(user => user.username === username && user.password === password);
//     if (!user) {
//         return res.status(401).json({ msg: "Invalid username or password" });
//     }

//     const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });

//     res.json({ token, username });
// });

// // 🟢 Middleware for Authentication
// function auth(req, res, next) {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(401).json({ msg: "Access denied. No token provided" });
//     }

//     const token = authHeader.split(" ")[1];

//     try {
//         const decoded = jwt.verify(token, JWT_SECRET);
//         req.username = decoded.username;
//         next();
//     } catch (error) {
//         return res.status(403).json({ msg: "Invalid or expired token" });
//     }
// }

// // 🟢 GET User Info Route (Protected)
// app.get("/me", auth, (req, res) => {
//     const user = users.find(user => user.username === req.username);
//     if (!user) {
//         return res.status(404).json({ msg: "User not found" });
//     }

//     res.json({ username: user.username, password: user.password });
// });

// // 🟢 Start Server
// app.listen(8080, () => console.log("✅ Server running on port 8080"));

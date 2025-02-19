const express = require("express")

const app = express()
app.use(express.json())

// app.post("/sum", function(req,res){
//     const a = parseInt(req.body.a)
//     const b = parseInt(req.body.b)

//     res.send({
//         answer:a+b
//     })
// })

app.post("/",function(req,res){
    const data = req.body;
    console.log(data)

    res.send("completed")
})

app.listen(3000)
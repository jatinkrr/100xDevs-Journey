const express = require("express")

const app = express()

function middle(req,res,next){
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    if(a > b){
        next();
    }else{
        res.json({
            msg:"soory a < b "
        })
    }
}


app.get("/sum/:a/:b",middle,(req,res)=>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    res.json({
        add:a+b
    })

})
app.get("/sub",(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        add:a-b
    })

})
app.get("/multi",(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        add:a*b
    })

})
app.listen(3000)
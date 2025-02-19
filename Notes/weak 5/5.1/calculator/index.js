const express = require("express")

const app = express()

function loggerMiddleware(req,res,next){
    console.log("method is" + req.method)
    console.log("host is"+ req.url)
    console.log("date is "+ new Date())

    
}
app.use(loggerMiddleware)

app.get("/add/:a/:b", function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.send({
        ans:a+b
    })
    
})
app.get("/multiply", function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    res.send({
        ans:a*b
    })
})
app.get("/divide", function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    res.send({
        ans:a/b
    })
})
app.get("/subtract", function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    res.send({
        ans:a-b
    })
})


app.listen(3000)
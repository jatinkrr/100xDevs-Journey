const express= require("express")
const app = express();


// function isage(age){
//     if(age>=15){
//         return true;
//     }else{
//         return false;
//     }
// }


function isageMiddleware(req,res,next){
    const age =req.query.age
    if(age>=14){
        next();
    }else{
        res.json({
            msg:"sorry you are not of age yet"
        });
    }

}

app.use(isageMiddleware)

app.get("/ride1",isageMiddleware, function(req,res){
   
    res.json({
    msg:"you can excess ride 1"
        })
   
})
app.get("/ride2",isageMiddleware, function(req,res){
   
    res.json({
    msg:"you can excess ride 2"
        })
   
})
app.get("/ride3",isageMiddleware, function(req,res){
   
    res.json({
    msg:"you can excess ride 3"
        })
   
})
app.listen(3001)
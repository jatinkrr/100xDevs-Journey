const express = require("express");
const app = express()

const user=[{
    name:"jatin",
    kedney:[{
        healthy:true
        

}]
}];

app.get("/",function(req,res){
    //logic
    const jatinKedney = user[0].kedney;
    // console.log(jatinKedney) 
    const numberOfkeydney = jatinKedney.length;
    let numberofheathykedney=0;
    for(let i =0; i<jatinKedney.length; i++){
        if(jatinKedney[i].healthy){
            numberofheathykedney= numberofheathykedney + 1;
        }
    }
    const numberofunhealthyheathykedney = numberOfkeydney - numberofheathykedney;
    res.json({
        numberOfkeydney,
        numberofheathykedney,
        numberofunhealthyheathykedney
    })
   
})


// app.post("/",function(){

// })


app.listen(3000); 
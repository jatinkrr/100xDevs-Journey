const express = require('express');

function sumis(n){
    let ans=0
    for(let i=0; i<=n;i++){
        ans= ans+i;
    }
    return ans;
}

const app = express();
app.get("/", function(req,res){
    // const n= req.query.n;
    const ans=sumis(40);
    res.send(ans.toString());
});

app.listen(3000)
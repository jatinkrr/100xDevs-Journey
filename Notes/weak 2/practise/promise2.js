const fs = require("fs");
function readTheFile(send){
    function print(err,data){
        send(data)
    }
    fs.readFile("a.txt","utf-8",print)
}

const p = new Promise(readTheFile);
function callback(content){
    console.log(content)
}
p.then(callback)
// function random(resolve){
//     return setTimeout(resolve,3000);
// }
// let p = new Promise(random);

// function callback(){
//     console.log("callback is called")
// }
// p.then(callback)




// const fs= require("fs");

// function print(arr,data){
//     console.log(data);
// }

// fs.readFile("a.txt","utf-8",print)






//create a promisified version of clean file -----> pending
// function random(resolve){
//     resolve();
// }

// function cleanFile(){ 
//      new Promise(random);
// }

// function callback(){
//     console.log ("file is cleaned");
// }

// cleanFile("a.txt").then(callback);





// promise example

const fs = require("fs");

function readTheFile(){
    fs.readFile("a.txt","utf-8", function(err, data){
console.log(data)    
})

}
function readfile(){
    return new Promise(readTheFile);
}


p = readfile()
function callback(content){
    console.log(content)
}

p.then(callback)
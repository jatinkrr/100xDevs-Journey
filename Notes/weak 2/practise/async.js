// const fs= require('fs');
// function print(err,data){
//     console.log(data);
// }
// fs.readFile("a.txt","utf-8", print);
// console.log("done");





const fs= require("fs");
function print(err,data){
    console.log(data);
}

fs.readFile("a.txt", "utf-8", print)
fs.readFile("b.txt", "utf-8", print)
console.log("hello world from main")
// function wait3Sec(resolve){
//     setTimeout(resolve,3000)
// }
// function main(){
//     console.log("main is called");
// }
// wait3Sec(main)


function wait3Sec(resolve){
    setTimeout(resolve,3000);
}
const p = new Promise(wait3Sec);

function callback(){
    console.log("hello");
}
p.then(callback)
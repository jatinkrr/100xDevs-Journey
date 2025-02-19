function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function doOperation(a,b,op){
    return op(a,b);
}

console.log(doOperation(1,5,sum))

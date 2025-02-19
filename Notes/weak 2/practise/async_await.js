function setTimeOutPomisified(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
}

async function solve(){
    await setTimeOutPomisified(1000);
    console.log("hi");
    await setTimeOutPomisified(3000);
    console.log("hello");
    await setTimeOutPomisified(5000);
    console.log("hi there");
}
solve()
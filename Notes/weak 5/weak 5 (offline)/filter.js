const input = ["hunny","bummy","horny"]

const ans = input.filter((i)=>{
    if(i.startsWith("h")){
        return true;
    }else{
        return false;
    }
})
console.log(ans)
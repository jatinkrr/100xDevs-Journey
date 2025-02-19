function setTimeoutt(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
}



setTimeoutt(1000).then(function(){
    console.log("hi");

    setTimeoutt(3000).then(function(){
        console.log("hello");

        setTimeoutt(5000).then(function (){
            console.log("hi there")
        })
    })
})


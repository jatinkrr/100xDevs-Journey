import { useState, useEffect } from 'react'


function App() {
  return(
    <Clock></Clock>
    // <Counter></Counter>  
  )

}


function Clock(){

  let[second,setsecond] = useState(0)


    console.log("counter")
    // we cant directly use se interval here coz when clock rerender then output will start flashing on th screens,
    // "use HOOKING into the lifecycle event of react"

    //in lifecycle there is events 1) mounting, 2) re-rendering, 3) unmounting 
    // mounting "jabh pehli baar counter render ho tabh setinterval run kerna bus"
    // for using this all jargons use "useeffect" hook


    // useEffect is a gaurd our setInterval from re-rendaring
    useEffect(function(){

      setInterval(() => {
        setsecond(second => second + 1);

        //we can write "setsecond(second => second+1)" in different form like this

        // setsecond(function(second){
        //   return second+1
        // })
          }, 1000);
          
      console.log("mounted") 
    },[]) // jo bhi useEffect ke ander likha hai vo baar baar render nahi hoga bus ek baar hi hoga
    // this this empty eraay is known as" dependancy array" learn it funter



  return (
   <div>

     <span> <h1>{second}</h1></span>
   </div>
    
    
  )

}















// function Counter(){

//   let [count,setCount]= useState(0)

//   function increaseCount(){
//     setCount(count+1)
//   }


//   function decreaseCount(){
//     setCount(count - 1 )
//   }

//   function resetCount(){
//     setCount( 0 )
//   }

//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={increaseCount}>Increase count</button>
//         <button onClick={decreaseCount}>Decrease count</button>
//         <button onClick={resetCount}>Reset count</button>
//     </div>
//   )

// }

export default App

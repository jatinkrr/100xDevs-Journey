import { useState } from 'react'


function App() {
  return(
    <Clock></Clock>
    // <Counter></Counter>  
  )

}


function Clock(){

  let [hours,sethours] = useState(0)
  let[minute,setminute] = useState(0)
  let[second,setsecond] = useState(0)

  
   setInterval(()=>{
      sethours(hours+1)
    },3600000)

    setInterval(() => {
      setminute(minute+1)
    }, 60000);
    
    setInterval(() => {
      setsecond(second+1)
    }, 1000);
    



  return (
   <div>
     <span> <h1>{hours}</h1></span>
     <span> <h1>{minute}</h1></span>
     <span> <h1>{second}</h1></span>
   </div>
    
      // {/* <button onClick={increaseHours}>startClock</button> */}
    
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

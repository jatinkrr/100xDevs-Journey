import { useState } from 'react'


function App() {
  return(
    <Counter></Counter>  
  )

}


function Counter(){

  let [count,setCount]= useState(0)

  function increaseCount(){
    setCount(count+1)
  }



  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increaseCount}>Increase count</button>
    </div>
  )

}

export default App

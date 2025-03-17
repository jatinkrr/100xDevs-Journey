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


  function decreaseCount(){
    setCount(count - 1 )
  }

  function resetCount(){
    setCount( 0 )
  }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increaseCount}>Increase count</button>
        <button onClick={decreaseCount}>Decrease count</button>
        <button onClick={resetCount}>Reset count</button>
    </div>
  )

}

export default App

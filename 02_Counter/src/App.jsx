import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter, setCounter] =  useState(0);

  //  let counter = 6;

   const addValue = ()=>{
    // counter = counter + 1;
    setCounter(counter + 1)
    // Increase only one time
    setCounter( (prevCounter) => prevCounter + 1)  // if we want to run then use call back function
    // setCounter(counter + 1)
    // setCounter(counter + 1)
   }
   const removeValue = ()=>{
    counter = counter - 1;
    setCounter(counter);
    // console.log("clicked", counter)
   }
   


  return (
    <>
     <h1>Divyansh and React</h1>
     <h3>counter value : {counter}</h3>

     <button disabled={counter >= 20} onClick={addValue}>
         Add value
      </button>
     <br />
     <br />
     <button disabled={counter <= 0} onClick={removeValue}>
        Remove value
      </button>
    </>
  )
}

export default App

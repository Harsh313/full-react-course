import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]=useState(5)

 //let Counter =5
 const addvalue = ()=>{
  counter=counter+1
  setCounter(counter)
 }
 const removevalue = ()=>{
  if(counter>=1){
    counter=counter-1;
  setCounter(counter);
  }
 }
  return (
    <>
     <h1>Counter aur react</h1>
     <h2>Counter Value {counter}</h2>
     <button onClick={addvalue}>Add Value</button>
     <br />
     <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App

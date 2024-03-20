
import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(0)

  function cal(val1: number, val2: number): number {
    return val1+ val2
  }
  
  const sums = cal(1,20)
  setNum(sums)
 

  return (
    <>
    <h1>Calculator</h1>
    <p>{num}</p>
    </>
  )
}

export default App

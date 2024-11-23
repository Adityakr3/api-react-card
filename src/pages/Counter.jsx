import React from 'react'
import { useState } from 'react'
export const Counter = () => {
    const [count , setCount] = useState(1)
  return (
    <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
        <button onClick={()=>{
        setCount(count-1)
      }}> Decerement </button>
      <h1 style={{padding:"18px"}}> {count} </h1>
      <button onClick={()=>{
        setCount(count+1)
      }}> Increment </button>
    </div>
  )
}

 

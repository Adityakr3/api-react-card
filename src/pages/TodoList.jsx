import React from 'react'

export const TodoList = () => {
  return (
    <div>
      <nav style={{width:"100%", height:"98px" ,backgroundColor:"blue", padding:"28px" , gap:"18px" , display:"flex" }}>
         <input value=""  placeholder='Write Your Text Here' style={{width:"85%" , textAlign:"center" ,padding:"16px" ,color:"black" , fontSize:"22px" }} type="text" />
         <button style={{padding:"12px 28px",backgroundColor:"green",color:"black"}}>Add</button>
      </nav>
    </div>
  )
}


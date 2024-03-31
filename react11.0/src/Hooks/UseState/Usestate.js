import React, { useState } from 'react'

const Usestate = () => {
    const[Count,setCount]=useState(0)
    const[color,setcolor]=useState('red')
    const[bgcolor,setbgcolor]=useState('green')
    const[name,setname]=useState()

   
  return (
    <div>
    <center>
      <h1 style={{color:`${color}`,background:`${bgcolor}`}}>Count:{Count}</h1>
        <button onClick={()=>setCount(Count+1)}>+</button>
        <button onClick={()=>setCount(Count-1)}>-</button>
        <br></br>
        
        <button onClick={()=>setcolor('blue')}>color</button>
        <button onClick={()=>setbgcolor('orange')}>bgcolor</button>
        </center>
        <br></br>
        <input type='text' onChange={(e)=>{setname(e.target.value)}}></input>
        <h1>My name is `${name}</h1>





        
    </div>
  )
}

export default Usestate

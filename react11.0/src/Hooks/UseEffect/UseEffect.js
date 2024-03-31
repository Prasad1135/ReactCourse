import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[count,setCount]=useState(0)

useEffect(()=>{
    document.title=`${count}`
},[count])

//UseEffect Using Add EventListener
useEffect(()=>{
    let a=document.getElementById('btn1')
    a.addEventListener('click',()=>{
        document.body.style.background='blue'
    })
})
useEffect(()=>{
  let b=document.getElementById('btn2')
  b.addEventListener('click',()=>{
    document.body.style.background='red'
  })
})
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      
      <button id='btn1'>Bgcolor</button>
    </div>
  )
}

export default UseEffect

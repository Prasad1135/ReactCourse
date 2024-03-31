import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
  const[name,setName]=useState('')
  const count=useRef(0)
  useEffect(()=>{
    count.current=count.current+1
    count.current=count.current-1
  })
  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)}></input>
      <h1>My name is {name}</h1>
      <h1>count{count.current}</h1>
    </div>
  )
}

export default UseRef

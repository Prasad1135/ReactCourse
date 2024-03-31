import React, {useLayoutEffect, useState} from 'react'

const UselayoutEffect = () => {
   const[name,setName]=useState('')
   const[count,setCount]=useState(0)
   const[color,setColor]=useState('red')

   useLayoutEffect(()=>{
    document.title=`${name}`
   },[name])

  useLayoutEffect(()=>{
  document.title=`${count}`
  },[count])

  useLayoutEffect(()=>{
    let a=document.getElementById('btn1')
    a.addEventListener('click',()=>{
      document.body.style.background='red'
    })
  })

  return (
    <div>
      <input type='text' onChange={(e)=>setName(e.target.value)}></input>
      <h1>My name is {name}</h1>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button id='btn1' onClick={()=>setColor('green')}>Bgcolor</button>
    </div>
  )
}

export default UselayoutEffect

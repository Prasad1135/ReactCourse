import React, { useCallback, useState } from 'react'

const Usecallback = () => {
    const[count,setCount]=useState(0)
    const increment=useCallback(()=>{
        setCount(count+1)
    },[count])
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Usecallback

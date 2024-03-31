import React, { useState } from 'react'

const Ternary = () => {
    const [score]=useState(34)
  return (
    <div>
      {(score>=35)?(<h1>Yess I'm Pass</h1>):(<h1>No i'm Fail</h1>)}
    </div>
  )
}

export default Ternary

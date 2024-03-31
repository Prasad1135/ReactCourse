import React, { useId } from 'react'

const Useid = () => {
    const id1=useId()
    const id2=useId()
  return (
    <div>
      <h1 id={id1}>Prasad</h1>
      <h2 id={id2}>Mane</h2>
    </div>
  )
}

export default Useid

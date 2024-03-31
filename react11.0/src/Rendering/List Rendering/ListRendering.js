import React from 'react'

const ListRendering = () => {
    const name=["Prasad","Ganesh","Rohidas"]
  return (
    <div>
      {name.map((e)=><h1>{e}</h1>)}
    </div>
  )
}

export default ListRendering

import React from 'react'

const FunctionalProps = (props) => {
    function Clickbtn() {
        document.body.style.background=props.color;

    }
  return (
    <div>
      <h1>My name is {props.name} and my age is {props.age}</h1>
      <button type='button' onClick={Clickbtn}>Click</button>
    </div>
  )
}

export default FunctionalProps

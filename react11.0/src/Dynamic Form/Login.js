import React from 'react'
const Form = () => {
  return (
    <div>
      <form>
        <center>
        <label htmlFor='name'>Username</label>
        <input type='text' id='name' name='name' placeholder='Enter Username'></input>
        <br></br>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' placeholder='Enter Password'></input>
        <br></br>
       
        <br></br>
        <button>Login</button>
        </center>
      </form>
    </div>
  )
}

export default Form

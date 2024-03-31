import React, { useState } from 'react'

const FormHandling = () => {
    const[input,setInput]=useState({name:"",email:"",password:""})

    function handleChange(e){
        setInput({...input,[e.target.name]:[e.target.value]})
    }

    function handleSubmit(e){
        e.preventDefault()
        if (input.password.length<=5) {
            alert('Login Successfully')
        } else {
          alert('enter password greter than 5')  
        }
        console.log(input);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Username</label>
        <input type='text' id='name' name='name' value={input.name} onChange={handleChange} placeholder='Enter Your name '></input>
        <br></br>
        <label htmlFor='email'>Email</label>
        <input type={'email'} id='email' name='email' value={input.email} onChange={handleChange} placeholder='Enter Your email '></input>
        <br></br>
        <label htmlFor='password'>Password</label>
        <input type={'password'} id='password' name='password' value={input.password} onChange={handleChange} placeholder='Enter Your password '></input>
        <br></br>
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default FormHandling

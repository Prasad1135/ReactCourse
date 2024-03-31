import React, { useEffect, useState } from 'react'
import Home from './Home';
import {auth,provider} from './Config'
import {signInWithPopup} from "firebase/auth";


const Signin = () => {
    const[value,setValue]=useState('')

    function handleClick(){
        signInWithPopup(auth,provider)
        .then((data)=>{
            setValue(data.user.email)
            window.localStorage.setItem('Email',data.user.email)
        })
    }

    useEffect(()=>{
        setValue(window.localStorage.getItem('email'))
    },[])

  return (
    <div>
      {(value)?(<Home/>):(<button onClick={handleClick}>Signin with google</button>)}
    </div>
  )
}

export default Signin

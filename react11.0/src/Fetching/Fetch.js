import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setData(data))
    })
  return (
    <div>
    {
        data && data.map((item)=>{
            return(
                <div>
                    <img src={item.image} height={'300px'} width={'40%'} alt=''></img>
                    <h1>{item.id}</h1>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
            )
        })
    }
    </div>
  )
}

export default Fetch

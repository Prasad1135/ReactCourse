import React, { useEffect, useState } from 'react'

const SearchData = () => {
    const[data,setData]=useState([])
    const[search,setSearch]=useState('')

 useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setData(data))
 })
    return (
    <div>
        <center><input type='text' placeholder='Search' onChange={(e)=>setSearch(e.target.value)}></input></center>
        <center>
            {data && data.filter((item)=>item.name.toLowerCase().includes(search)).map((item)=>{
                return(
                   <p>{item.name}</p> 
                )
            })}
        </center>
      
    </div>
  )
}
export default SearchData

import React,{ useState } from 'react'

const Dropdown = () => {
    const countries=[
        {name:'India',
    states:[{name:"Maharashtra"},{name:"Tamilnadu"},{name:"Pune"},{name:"Mumbai"}]},
    {name:'Pakistan',
    states:[{name:"Kabul"},{name:"Lahor"}]}
    ]
    const[state,setState]=useState([])

    function handleState(e){
        setState(countries.find((item)=>item.name===e.target.value).states)
    }
  return (
    <div>
      <select onChange={handleState}>
      {countries.map((item)=>{
        return(
            <option value={item.name}>{item.name}</option>
        )
        
        
      })}
      </select>

      <select onChange={handleState}>
      {state.map((item)=>{
        return(
            <option value={item.name}>{item.name}</option>
        )
        
        
      })}
      </select>
    </div>
  )
}

export default Dropdown

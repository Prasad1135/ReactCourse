import React, { useState } from 'react'
import './KFC.css'
const KFC = () => {
    const[count,setCount]=useState(0)
  return (
    <div class='card'>
        <section className='cards'>
        <img src='https://content3.jdmagicbox.com/comp/anand/u7/9999p2692.2692.210618211637.p4u7/catalogue/kfc-vallabh-vidyanagar-vallabh-vidyanagar-anand-kfc-1efsg1qymv.jpg' height={'300px'} alt=''></img>
       
        <h1>Cheese Burger</h1>
        <button class='quan' onClick={()=>setCount(count+1)}>+</button>
        <h5 class='quan'>Quantity:{count}</h5>
        <button class='quan' onClick={()=>setCount(count-1)}>-</button>
        
        
        <h4>price</h4>
        <h4>Discount</h4>
        <button>Add cart</button>
        </section>
    </div>
  )
}

export default KFC

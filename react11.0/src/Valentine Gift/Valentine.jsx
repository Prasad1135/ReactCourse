import React, { useEffect } from 'react'
import './Style.css'
const Valentine = () => {
useEffect(()=>{
    document.title="❤Happy Velentine Day My Dear Bayko❤"
})
  return (
    <div id="container">
    <div className="book">
     <div className="cover">
      <div className='boo'>
     <div className="notes">Happy</div>
     <div className="heart"></div>
     <div className="smile"></div>
     <div className="eyes"></div>
    </div>
   </div>
   </div>
  </div>
  )
}

export default Valentine

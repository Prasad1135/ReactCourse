import React, { useEffect, useState } from 'react'
import './Pixabay.css'
const Pixabay = () => {
    const[data,setData]=useState([])
    const [isImageClicked, setIsImageClicked] = useState(false);
    const[search,setSearch]=useState('')

    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=27465062-827a40ce7a6d1f80fc3a6743e&q=${search}&image_type=photo&pretty=true`)
        .then(res=>res.json())
        .then(data=>setData(data.hits))
    })

    const handleImageClick = () => {
        setIsImageClicked(!isImageClicked);
      };

  return (
    <div>
        <nav>
            <div className='navbar'>
            <h1>Pixabay</h1>
            <p className='acc'>Sign Up</p>
            <p className='acc'>Log in</p>
            
            </div>
           
        </nav>
        <center>
            <img src={'https://cdn.pixabay.com/photo/2023/06/25/19/03/grasses-8088021_1280.jpg'} height={'400px'} width={'100%'} alt=''></img>
            <br></br>
            <br></br>
           
        </center> <center>
            <div className='main'>
            <input type='text' placeholder='search' onChange={(e)=>setSearch(e.target.value)}></input>
            <button>Search</button>
            
            </div>
            </center>
        <br></br>
        <br></br>
        <div className='row'>
            {
                data && data.map((item)=>{
                    return(
                        <div className='card'>
                            <img src={item.webformatURL} height={'300px'} width={'300px'} onClick={handleImageClick} alt=''></img>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Pixabay

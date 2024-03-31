// import React from 'react'

// const Javascript = () => {
//     let name ="Prasad"
//     let Place ="Pune"
    
//     function clicked() {
//         document.body.style.background="red"
//     }
//     function keyup() {
//         document.body.style.background="green"
//     }
//     function keydown() {
//         document.body.style.background="blue"
//     }
//     function blurr() {
//         let a=document.getElementById('ip1')
//         a.value=a.value.toUpperCase()
//     }
//     console.log('Hiii');
//   return (
//     <div>
//       <button onClick={clicked}>Click</button>
//       <input type='text' id='ip1' onKeyUp={keyup} onKeyDown={keydown} onBlur={blurr}></input>
//         <h1>{`My name is ${name} and my place is ${Place}`}</h1>
//     </div>
//   )
// }

// export default Javascript












import React from 'react'
import './javascript.css'
const Javascript = () => {
    let x=async function(){
        try {
            let data=await fetch('https://fakestoreapi.com/products')
            console.log(data);
            let finalData =await data.json()
            console.log(finalData);
            finalData.map((x)=>{
                let body=document.body
                let section =document.createElement('section')
                section.innerHTML += `<div class='cards'>
                <img src=${x.image} height='100px' width='100px'>
                <p>id:${x.id}</p>
                <p>title:${x.title}</p>
                <p>price:${x.price}</p>
                <p>description:${x.description}</p>
                </div>`
                body.appendChild(section)
            })
        } catch (error) {
          console.log("error");  
        }
    }
    x()

return (
    <div>
      
      
    </div>
  )
}

export default Javascript

import React from 'react'
import img1 from './Image/varisu1.jpg'
import video from './Video/varisus.mp4'
import audio1 from './Audio/Varisua.mp3'
const Html = () => {
  return (
    <div>
      <center><h1>Welcome to Html in ReactJS</h1></center>
      <img src='https://assets-in.bmscdn.com/discovery-catalog/events/et00332034-exvbuvcknx-landscape.jpg' height={'500px'} width={'100%'} alt=''></img>
      <img src={img1} height={'500px'} width={'100%'}  alt=''></img>
     
      <a href='https://www.flipkart.com/' target='_blank'>Flipcart</a>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/I3yIT-y8ras" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <video src={video} autoPlay controls loop height={'300px'} width={'100%'}></video>
      <audio src={audio1} autoplay controls loop></audio>
      <table border={'1'} bgcolor='skyblue' cellPadding={'5px'} cellSpacing={'3px'}>
      <thead>
      <tr>
        <th>Sr No</th>
        <th>Name</th>
        <th>Designation</th>
      </tr>
    </thead>
      <tbody>
        <tr>
          <td rowSpan={2}> 01</td>
          <td>Prasad</td>
          <td>SE</td>
        </tr>
        <tr>
        {/* <td>02</td> */}
        <td>Rohidas</td>
        <td>Network Engineer</td>
        </tr>
        <tr>
        <td>03</td>
          <td>Ganesh</td>
          <td>Intern</td>
        </tr>
      </tbody>
      <tfoot>
        <tr><td colspan={'3'}>@Footer
        </td>
        </tr>

      </tfoot>
    </table>

    </div>
    
  )
}

export default Html

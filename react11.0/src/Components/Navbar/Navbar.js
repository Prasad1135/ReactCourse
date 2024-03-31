import React from 'react'
import './navbar.css'
import img from '../Right/images/img.jpg'
import logo from './IMG/logo1.png'
function Navbar() {
    return (
        <>
            <section className="navbar" style={{position:'fixed',width:'100%'}} >
                <div className='logo' >
                    <i class="fa fa-bars" aria-hidden="true"></i>
                    <img src={logo} style={{ width: '91px' }} />
                </div>
                <ul>
                    <input type='text' placeholder='Search' id='inputfiled' />
                    <i class="fa fa-search" aria-hidden="true"></i>

                    <i class="fa fa-microphone" style={{ fontSize: '1.2rem' }} aria-hidden="true"></i>
                </ul>
                <div className='rightbar'>
                    <i class="fa fa-video-camera" aria-hidden="true"></i>
                    <i class="fa fa-bell" aria-hidden="true"></i>
                    <img src={img} style={{ width: '35px', borderRadius: '70%' }} />
                </div>
            </section>

        </>
    )
}

export default Navbar

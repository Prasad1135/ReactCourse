import React from 'react'
import Navbar from './Navbar/Navbar'
import Left from './Left/Left'
import Right from './Right/Right'

import './youtube.css'

function Youtube() {
    return (
        <>

            <Navbar />

            <div className='row' >
                <div className='content' >
                    <Left />
                </div>
                <div className='content2' >
                    <Right />
                </div>
            </div>

        </>
    )
}

export default Youtube

import React, { useState } from 'react'
import './style.css'

const api = {
    base: 'https://api.openweathermap.org/data/2.5/',
    key: 'e0a33f68b1218a3c1da28de86e24a08b'
}


function Weather() {
    const [weather, setWeather] = useState({})
    const [city, setCity] = useState('')
    function search() {
        fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
            .then((rep) => rep.json())
            .then((data) => setWeather(data))
    }

    return (
        
        <div class='maincard'>
            <center>

                <input type='text' placeholder='Enter City' onChange={(e) => setCity(e.target.value)} />
                <button type='button' onClick={search}><i class="fa fa-search" aria-hidden="true"></i></button>
                <br></br><br></br>

            </center>
            {

                (typeof weather.main != "undefined") ? (


                    <div class="cards">
                        <center>
                             <img src={'https://media.tenor.com/0iRjzpnsnrcAAAAM/clouds-rain.gif'} height={'100px'} width={'400px'} alt=''></img>
                                <p> <b>{weather.name}</b> </p>                          
                                <p>Temp:<b>{weather.main.temp}°c</b></p> 
                            <p>Clouds:<br></br> <b>{weather.weather[0].description}</b></p>
                        </center>
                    </div>
                ) : ("")
            }
        </div>
    
    )
}

export default Weather

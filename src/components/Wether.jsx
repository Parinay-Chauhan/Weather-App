import React from 'react'
import './Wether.css'
import search_icon from "../assets/search.png"
import clear_icon from "../assets/clear.png"
import cloud_icon from "../assets/cloud.png"
import drizzle_icon from "../assets/drizzle.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"
import wind_icon from "../assets/wind.png"
import humidity_icon from "../assets/humidity.png"

const Wether = () => {
    return (
        <div className='weather'>
            <div className='search-bar'>
                <input type="text" placeholder='Search' />
                <img src={search_icon} alt="" />
            </div>

            <img src={clear_icon} alt="" className='weather-icon' />
            <p className='temperature'>16°c</p>
            <p className='location'>Delhi</p>
        </div>
    )
}

export default Wether

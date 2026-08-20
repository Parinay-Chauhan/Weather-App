import React from 'react'
import './Wether.css'
import search_icon from "../assets/search.png"

const Wether = () => {
    return (
        <div className='weather'>
            <div className='search-bar'>
                <input type="text" placeholder='Search' />
                <img src={search_icon} alt="" />
            </div>

            <img src="" alt="" />
        </div>
    )
}

export default Wether

import React, { useState } from 'react'
import "./Nav.css"
// import { Link } from 'react-router-dom'

const Nav = ({ onclick, open ,onchangefunc ,InputValue }) => {

    return (
        <header>
            <nav className='flex'>
                <div className="left flex">
                    <div className="logo"><img height={"100%"} weight={"100%"} src="frontend/public/Logo.svg" alt="" /></div>
                </div>
                <div className="navM flex">
                    <form action="" className='flex'>
                        <img src="frontend/public/search.svg" alt="" />
                        <input
                        value={InputValue}
                        onChange={onchangefunc}
                        type="text" placeholder='Search for anything... ' />
                    </form>
                </div>
                <div className="right flex">
                    <span className='Watchlist flex'>
                        <p>My Watchlist</p>
                        <img src="frontend/public/Ellipse 33.svg" alt="" />
                    </span>
                    <div className="hamburgur" onClick={onclick}>
                        {open ?
                            <i className="fas fa-times"></i>
                            : <i className="fas fa-bars"></i>}
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Nav

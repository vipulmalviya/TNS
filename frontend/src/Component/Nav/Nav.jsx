import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = ({onclick , open}) => {
    return (
        <header>
            <nav className='flex'>
                <div className="left flex">
                    <div className="logo"><img height={"100%"} weight={"100%"} src="frontend/public/Logo.svg" alt="" /></div>
                </div>
                {/* {visible && <div className="rightL">
                    <h1>searchbar</h1>
                </div>} */}
                <div className="right flex">
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

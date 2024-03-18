import React, { useState } from 'react'
import "./Footer.css"

const Footer = () => {

    const [click, setClick] = useState(false)

    function clickfunc() {
        setClick(!click)
    }

    return (
        <footer className='footer'>
            <div className={`footerT flex ${click ? "footercls" : ""}`}>
                <div className='Flogo'>
                    <img src="frontend/public/Logo.svg" alt="" />
                </div>
                <div className='social flex'>
                    <img src="frontend/public/facebook.svg" alt="" />
                    <img src="frontend/public/instagram.svg" alt="" />
                    <img src="frontend/public/tweeter.svg" alt="" />
                </div>
            </div>
            <div className={`footerM flex ${click ? "footercls" : ""}`}>
                <div className='footerM-l'>
                    <h2 className=''>
                        Still couldn’t figure out?<br /> What to watch?<br />
                        <span> Join our Fight-Club</span>
                    </h2>
                    <p>It’s free to join and helps finding underrated titles, around like minded there is a sense of cinema.</p>
                    <div className='footerbtns flex'>
                        <button><img src="frontend/public/Frame 20.svg" alt="" /></button>
                        <button><img src="frontend/public/Frame 50.svg" alt="" /></button>
                    </div>
                </div>
                <div className='footerM-r flex' >
                    <div>
                        <h3 className=''>Usefull links</h3>
                        <div className='flex footeM-r-box'>
                            <div className='links'>
                                <p>About Thenextstream</p>
                                <p>What is TNS Score?</p>
                                <p>Buy an Advance for us</p>
                                <p>Contact</p>
                            </div>
                            <div className='links'>
                                <p>About Thenextstream</p>
                                <p>What is TNS Score?</p>
                                <p>Buy an Advance for us</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div className="search">
                            <input type="email" className="input-with-icon" placeholder='Bandiya would love to see your emails' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerB flex'>
                <p>© 2024 Silvertounge. All Rights Reserved.</p>
                <button onClick={clickfunc}>{click ? "v" : "v"}</button>
            </div>
        </footer>
    )
}

export default Footer

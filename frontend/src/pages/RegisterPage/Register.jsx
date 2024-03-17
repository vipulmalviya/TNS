import React, { Fragment, useState } from 'react'
import Nav from '../../Component/Nav/Nav'
import "./Register.css"
import Button from '../../Component/buttons/Button'
import ButtonSec from '../../Component/buttons/ButtonSec';
import axios from 'axios'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'


const Register = ({ click, prop ,open}) => {
    // const [open, setOpen] = useState(false)
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/register', { email, pass }
            .then(result => {
                console.log(result)
                navigate('/home')
            }))
            .catch(err => console.log(err))
    }

    return (
        <Fragment>
            <motion.div
                initial={{ left: "100%" }}
                animate={{ left: "0%" }}
                transition={{ duration: 0.5 }}
                exit={{ left: "100%" }}
                className="Rleft flex" >
                <h1 className='hinglight'>Find Classics to Hidden Gems: <br />  Where Every Frame Tells a Tale</h1>
                <p>Discover, Explore, and Experience the Best in Movies & Shows, Curated Just for You</p>
                <li><img src='/frontend/public/Icon.svg' className="icone" /><span>Personalized Recommendations</span></li>
                <li><img src='/frontend/public/Icon (1).svg' className="icone" /><span>Curated Suggestion lists</span></li>
                <li><img src='/frontend/public/Icon (1).svg' className="icone" /><span>Community Engagement</span></li>
                <li><img src='/frontend/public/Icon (1).svg' className="icone" /><span>AI-Powered Assistance</span></li>
                <li><img src='/frontend/public/Icon (1).svg' className="icone" /><span>Unlock Unseen Treasures</span></li>
                <li><img src='/frontend/public/Icon (1).svg' className="icone" /><span>Shareable Watch lists to Collaborate</span></li>
            </motion.div>
            <motion.div
                initial={{ right: "-50%" }}
                animate={{ right: open ? "-100%" : "0%" }}
                transition={{ duration: 0.5 }}
                exit={{ right: "-50%" }}
                className="Rright flex" >
                <h2 className='subhadding hinglight'>Create an account</h2>
                <p>It will help provide you a specific room for your saved information</p>
                <form className='Rform flex' onSubmit={handleSubmit}>
                    <label >Email address</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        type="email" />
                    <label >Password</label>
                    <input onChange={(e) => setPass(e.target.value)} name="password" type="password" />
                    <div className='switchbtn flex'>
                        <span className="switch flex">
                            <input id="switch-rounded" type="checkbox" />
                            <label for="switch-rounded">

                            </label>
                            <p>Receive great facts about great cinema,  our <br /> technical updates and more.</p>
                        </span>
                    </div>
                    <Button>Sign up</Button>
                </form>
                <br />
                <ButtonSec className="mb-1 flex">
                    <img src="frontend/public/google.svg" alt="" />
                    <span className='flex'>
                        Log in with Google
                    </span>

                </ButtonSec>
                <div className='Rfooter'>
                    <p>
                        By Signing up i agree to Thenextstream’s <span className='hinglight'>Terms of</span> <br /> <span className="hinglight">Service</span> and <span className="hinglight">Privacy Policy.</span>
                    </p>
                    <br />
                    <Link to="/" onClick={prop}>Already have an account<span className='hinglight'> Log in</span></Link>
                </div>
            </motion.div>
        </Fragment >
    )
}

export default Register

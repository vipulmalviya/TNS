import React, { Fragment, useState } from 'react'
import "./Login.css"
import Button from '../../Component/buttons/Button'
import ButtonSec from '../../Component/buttons/ButtonSec'
import Home from '../HomePage/Home.jsx'
import { Link,useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'



const Login = ({ clickkro, open, prop }) => {
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/', { email, pass })
      .then(result => {
        console.log(result)
        if(result.data === "Success"){ 
          navigate('/home')
          }
      })
      .catch(err => console.log(err))
  }
  return (
    <Fragment>
      <Home />
      <motion.div
        initial={{ right: "-100%" }}
        animate={{ right: open ? "0%" : "-100%" }}
        transition={{ duration: 0.5 }}
        exit={{ right: "-50%" }}
        className={`Rright flex ${open ? "" : ""}`}>
        <h2 className='subhadding hinglight'>Welcome Back!</h2>
        <p>Log in to your account</p>
        <form action="" onSubmit={handleSubmit} method="" className='Rform flex'>
          <label >Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email" />
          <label >Password</label>
          <input onChange={(e) => setPass(e.target.value)} name="password" type="password" />
          <Button>Log in</Button>
        </form>
        <br />
        <ButtonSec className="mb-1 flex">
          <img src="frontend/public/google.svg" alt="" />
          <span className='flex'>
            Log in with Google
          </span>
        </ButtonSec>
        <div className='Rfooter'>
          <Link onClick={prop} to="/register">Dont't have an account?<span onClick={clickkro} className='hinglight'> Sign up now!</span></Link>
        </div>
      </motion.div>
    </Fragment >
  )
}

export default Login

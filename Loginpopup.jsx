import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({ setShowLogin }) => {

  const [currentState, setCurrentState] = useState("sign up")
  return (
    <div className='login-popup'>

      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='login-popup-inputs'>
          {currentState==="login"?<></>:        <input type="text" placeholder=' your name' required />}
          
          <input type="email" placeholder='your email' required />

          <input type="password" placeholder='password' required />
        

        </div>
        <button>{currentState==="sign up"?"create account":"login"}</button>
        <div className='login-popup-condition'>
          <input type="checkbox" required />
          <p>i agree to continue</p>
        </div>
        {currentState==="login"? <p>create a new accout ?<span onClick={()=>setCurrentState("sign up")}>click here</span></p>:  
        <p>already have an account?<span onClick={()=>setCurrentState("login")}>login here</span></p>}
        
      
      </form>
    </div>
  )
}

export default Loginpopup
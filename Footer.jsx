import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat, facere nostrum, dolor sit ipsa ad quo voluptate consequatur molestiae fuga? Fuga, repudiandae quasi expedita ad sint quo rem voluptas!</p>
                    <div className='footer-social-icon'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footer-content-right">
                    <div className='footer-content-center'>
                        <h2>COMPANY</h2>
                        <div>
                            <ul>
                                <li>home</li>
                                <li>about us</li>
                                <li>delivery</li>
                            </ul>
                            
                        </div>
                        
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>GET IN TOUCH</h2>
                    <div>
                        <ul>
                            <li>6283987919</li>
                            <li>cibiarulnath@gmail.com</li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
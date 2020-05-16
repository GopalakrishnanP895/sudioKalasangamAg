import React from 'react'

import Facebook from '../../Images/Socials/Facebook.svg'
import Instagram from '../../Images/Socials/Instagram.png'
import Whatsapp from '../../Images/Socials/Whatsapp.svg'

import './SocialStyles.scss'

function SocialMediaComponent() {
    return (
        <div className="social-wrapper">
            <div className="social-media">
                <img src={Facebook} alt="Facebook" className="social-media-img" />
            </div>
            <div className="social-media">
                <img src={Whatsapp} alt="Whatsapp" className="social-media-img" />
            </div>
            <div className="social-media">
                <img src={Instagram} alt="Instgram" className="social-media-img" />
            </div>
        </div>
    )
}

export default SocialMediaComponent

import React from 'react'

import Logo from '../../Images/logo.png'
import Facebook from '../../Images/Socials/Facebook.svg'
import Instagram from '../../Images/Socials/Instagram.png'
import Whatsapp from '../../Images/Socials/Whatsapp.svg'
import Youtube from '../../Images/Socials/Youtube.png'
import Email from '../../Images/Socials/Email.png'

import './FooterStyles.scss'

function FooterComponent() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <ul className="footer-nav">
                <li className="footer-nav--item">
                    <a href="/" className="footer-nav--link">Home</a>
                </li>
                <li className="footer-nav--item">
                    <a href="/about" className="footer-nav--link">About</a>
                </li>
                <li className="footer-nav--item">
                    <a href="/" className="footer-nav--link">Founder</a>
                </li>
                <li className="footer-nav--item">
                    <a href="/" className="footer-nav--link">Faculty</a>
                </li>
                <li className="footer-nav--item">
                    <a href="/" className="footer-nav--link">Gallery</a>
                </li>
                <li className="footer-nav--item">
                    <a href="/" className="footer-nav--link">Videos</a>
                </li>
            </ul>

            <ul className="social-footer">
                <li className="social-footer--icon">
                    <a href="/" className="social-footer--link">
                        <img className="social-footer--img" src={Facebook} alt="Facebook"/>
                    </a>
                </li>

                <li className="social-footer--icon">
                    <a href="/" className="social-footer--link">
                        <img className="social-footer--img" src={Instagram} alt="Instagram"/>
                    </a>
                </li>

                <li className="social-footer--icon">
                    <a href="/" className="social-footer--link">
                        <img className="social-footer--img" src={Whatsapp} alt="Whatsapp"/>
                    </a>
                </li>

                <li className="social-footer--icon">
                    <a href="/" className="social-footer--link">
                        <img className="social-footer--img" src={Youtube} alt="Youtube"/>
                    </a>
                </li>

                <li className="social-footer--icon">
                    <a href="/" className="social-footer--link">
                        <img className="social-footer--img" src={Email} alt="Email" />
                    </a>
                </li>
            </ul>
            <p className="copyright">&copy; Copyright 2020 by StudioKalasangam</p>
        </footer>
    )
}

export default FooterComponent

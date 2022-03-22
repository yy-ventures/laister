import React from 'react'

// ICON
import { FaFacebookF, FaYoutube, FaTwitter, FaTiktok, FaInstagram } from 'react-icons/fa';

// LOGO
import logo from '../../assets/logo/laister.png'

import './footer.style.scss'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer__left-container">
          <div className="footer__left-container--logo-container">
            <img src={logo} alt="laister logo"/>
          </div>
          <div className="footer__left-container--text-container">
            <p>Laister is a small-scale portable digester that converts organic waste to fuel and fertilizer by utilizing household wastes. Laister targets the renewable energy sector with our services and focuses on SDG 4, 7, and 11.</p>
          </div>
        </div>
        <div className="footer__right-container">
          <div className="footer__right-container--media-container">
            <a className='link' href="#"><FaFacebookF/></a>
            <a className='link' href="#"><FaYoutube/></a>
            <a className='link' href="#"><FaTwitter/></a>
            <a className='link' href="#"><FaTiktok/></a>
            <a className='link' href="#"><FaInstagram/></a>
          </div>
          <p className='copyright'>Copyright © 2022, Laister</p>
        </div>
    </div>
  )
}

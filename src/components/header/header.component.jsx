import React from 'react'

// IMAGE
import logo from '../../assets/logo/laister.png';

import './header.style.scss'

export default function Header() {
  return (
    <div className='header'>
        <div className="header__logo-container">
          <img src={logo} alt="laister logo"/>
        </div>
        <ul className='header__nav'>
          <li className='header__nav--item'><a href="#" className='header__nav--link'>Home</a></li>
          <li className='header__nav--item'><a href="#" className='header__nav--link'>About</a></li>
          <li className='header__nav--item'><a href="#" className='header__nav--link'>Gallery</a></li>
          <li className='header__nav--item'><a href="#" className='header__nav--link'>Contact</a></li>
        </ul>
    </div>
  )
}

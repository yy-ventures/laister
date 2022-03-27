import React, {useState} from 'react'

// IMAGE
import logo from '../../assets/logo/laister.png';

// ICON
import { FaBars } from 'react-icons/fa';

import './header.style.scss'

export default function Header() {

  const [active, setActive] = useState(false);

  const handleSidebar = () => {
    setActive(!active);
  }

  console.log(active)

  return (
    <div className='header'>
      <button className='menu-btn' onClick={() => handleSidebar()}><FaBars/></button>
      <div className="header__logo-container">
        <img src={logo} alt="laister logo"/>
      </div>
      <ul className={active ? 'header__nav active' : 'header__nav'}>
        <li className='header__nav--item'><a href="#" className='header__nav--link'>Home</a></li>
        <li className='header__nav--item'><a href="#" className='header__nav--link'>About</a></li>
        <li className='header__nav--item'><a href="#" className='header__nav--link'>Gallery</a></li>
        <li className='header__nav--item'><a href="#" className='header__nav--link'>Contact</a></li>
      </ul>
    </div>
  )
}

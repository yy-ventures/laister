import React from 'react'

// ICON
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import rightArrow from '../../assets/icons/long-right-arrow.png'

import './button.style.scss';

export default function Button({text}) {
  return (
    <button className='btn'>{text} <img src={rightArrow} alt="right arrow" /> </button>
  )
}

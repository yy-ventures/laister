import React from 'react'

// COMPONENT
import Button from '../../components/button/button.component'

// LAYOUT
import lgFire from '../../assets/layout/fire-lg.png';

import './home.style.scss'

export default function Home() {
  return (
    <div className='home'>
        <div className="home__hero">
          <div className="home__hero--content-container">
            <img className='layout-1' src={lgFire} alt="fire layout" />
            <div className="box">
              <h1>Making an
                  <span className='bold'> energy-efficient, </span>
                  clean city.
              </h1>
              <Button text='Get in Touch'/>
            </div>
          </div>
          <div className="home__hero--slider-container">

          </div>
        </div>
    </div>
  )
}

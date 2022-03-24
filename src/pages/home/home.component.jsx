import React from 'react'

// COMPONENT
import Button from '../../components/button/button.component'
import HeroSlider from '../../components/hero-slider/hero-slider.component';

// IMAGE
import sliderImg from '../../assets/images/slider-img.png';
import productImg from '../../assets/images/product-img.png';
import galleryImg from '../../assets/images/gallery-img.png';
import contactImg from '../../assets/images/contact-img.png';
import sdg7 from '../../assets/images/sdg-7.png';
import sdg8 from '../../assets/images/sdg-8.png';
import sdg11 from '../../assets/images/sdg-11.png';

// LAYOUT
import lgFire from '../../assets/layout/fire-lg.png';
import smFire from '../../assets/layout/fire-sm.png';

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
            <div className="yellow-line"></div>
            {/* <HeroSlider/> */}
          </div>
        </div>
        <div className="home__mission">
          <div className="box-layout"></div>
          <div className="home__mission--content">
            <h2>Our mission is to provide
                affordable, clean energy
                access to <span className='bold'>1 million people </span>
                in the next 7 Years.
            </h2>
            <div className="yellow-line-sm"></div>
          </div>
          <div className="home__mission--image">
            <div className="img-container">
              <img src={productImg} alt="product image" />
            </div>
          </div>
        </div>
        <div className="home__about">
          <div className="home__about--image">
            <div className="img-container">
              <img src={galleryImg} alt="image" />
            </div>
            <div className="yellow-layout-lg"></div>
          </div>
          <div className="home__about--content">
            <div className="box">
              <div className="sdg-list">
                <img className='sdg-img' src={sdg7} alt="sdg 7" />
                <img className='sdg-img' src={sdg8} alt="sdg 8" />
                <img className='sdg-img' src={sdg11} alt="sdg 11" />
              </div>
              <div className="text">
                <p>Laister is a small-scale portable digester that converts organic waste to fuel and fertilizer by utilizing household wastes. Laister targets the renewable energy sector with our services and focuses on SDG 4, 7, and 11</p>
                <p>The digester, unlike existing biogas plants, is not fixed and is suitable for use in an urban area where there is space constraint. The design and size of the digester is innovative which allows the user to install it within their household or they can share a larger unit from a rooftop or garage. It eliminates all wastes produced within a community which prevents pollution and indirectly teaches users about waste management as the segregation is done by them.</p>
              </div>
            </div>
          </div>
          <div className="home__about--gallery">
            <div className="heading-container">
              <h1 className="heading">Gallery</h1>
              <div className="white-line"></div>
            </div>
            <div className="gallery-slider">
              <h3>slider component will be here</h3>
            </div>
          </div>
        </div>
        <div className="home__contact">
          <div className="home__contact--image-container">
            <div className="img-container">
              <img src={contactImg} alt="image" />
            </div>
          </div>
          <div className="home__contact--form-container">
            <img className='layout-2' src={smFire} alt="fire layout" />
            <div className="box">
              <h2 className='form-heading'>Contact us</h2>
              <form className='form'>
                <input className='input' type="text" placeholder='Name'/>
                <input className='input' type="email" placeholder='E-mail'/>
                <textarea className='textarea' type="text" placeholder='Your message'/>
                <Button text='Send Message'/>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

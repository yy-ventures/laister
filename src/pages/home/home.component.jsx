import React, {useState, useRef} from 'react'
import { useAlert } from 'react-alert'
import emailjs from '@emailjs/browser';

// COMPONENT
import Button from '../../components/button/button.component'
import HeroSlider from '../../components/hero-slider/hero-slider.component';
import GallerySlider from '../../components/gallery-slider/gallery-slider.component';

// IMAGE
import sliderImg from '../../assets/images/slider-img.png';
import productImg from '../../assets/images/product-img.png';
import galleryImg from '../../assets/images/gallery-img.png';
import contactImg from '../../assets/images/contact-img.png';
import sdg7 from '../../assets/images/sdg-7.png';
import sdg8 from '../../assets/images/sdg-8.png';
import sdg11 from '../../assets/images/sdg-11.png';
import rightArrow from '../../assets/icons/long-right-arrow.png'

// LAYOUT
import lgFire from '../../assets/layout/fire-lg.png';
import smFire from '../../assets/layout/fire-sm.png';

import './home.style.scss'

export default function Home() {
  const form = useRef();
  const alert = useAlert()
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_reo4yle', 'template_2tcp08m', form.current, 'user_o5Q1fksLSPlNeoTHcjWJA')
    .then((result) => {
      alert.show("Thank you! we have received your query!")
      form.current.reset()
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div className='home'>
        <div className="home__hero" id='home'>
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
            <HeroSlider/>
          </div>
        </div>
        <div className="home__mission" id='about'>
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
          <div className="home__about--gallery" id='gallery'>
            <div className="heading-container mb-5">
              <h1 className="heading">Gallery</h1>
              <div className="white-line"></div>
            </div>
            <div className="gallery-slider-container mb-5">
              <GallerySlider/>
            </div>
          </div>
        </div>
        <div className="home__contact" id='contact'>
          <div className="home__contact--image-container">
            <div className="img-container">
              <img src={contactImg} alt="image" />
            </div>
          </div>
          <div className="home__contact--form-container">
            <img className='layout-2' src={smFire} alt="fire layout" />
            <div className="box">
              <h2 className='form-heading'>Contact us</h2>
              <form ref={form} onSubmit={sendEmail} className='form'>
                <input type="text" name="user_name" placeholder="Full Name" className='input' required />
                <input type="email" name="user_email" placeholder="E-mail Address" className='input' required />
                <textarea name="message" placeholder='Your Message' maxLength='300' className='input' rows='4' required />
                {/* <input type="submit" value="Send" className='btn' /> */}
                <button className='btn'>Send Message<img src={rightArrow} alt="right arrow" /> </button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

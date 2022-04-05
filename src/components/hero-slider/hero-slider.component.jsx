import React, { Component } from "react";
import Slider from "react-slick";

// IMAGE
import image1 from '../../assets/images/hero-slider-img/slider-img-1.jpg'
import image2 from '../../assets/images/hero-slider-img/slider-img-2.png'
import image3 from '../../assets/images/hero-slider-img/slider-img-3.jpg'
import image4 from '../../assets/images/hero-slider-img/slider-img.jpg'

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './hero-slider.style.scss'

export default class HeroSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplaySpeed: 2000,
      autoplay: true
    };
    return (
      <div className="hero-slider">
        <Slider {...settings}>
          <div className="slide">
            <div className="slide__img-container">
              <img className="img" src={image1} />
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-container">
              <img className="img" src={image2} />
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-container">
              <img className="img" src={image3} />
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-container">
              <img className="img" src={image4} />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
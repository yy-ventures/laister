import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";

// IMAGE
import image1 from '../../assets/images/slider-img.png'
import image2 from '../../assets/images/contact-img.png'

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
            <img className="img" src={image1} />
          </div>
          <div className="slide">
            <img className="img" src={image2} />
          </div>
          <div className="slide">
            <img className="img" src={image1} />
          </div>
          <div className="slide">
            <img className="img" src={image1} />
          </div>
        </Slider>
      </div>
    );
  }
}
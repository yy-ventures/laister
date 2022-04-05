import React, { Component } from "react";
import Slider from "react-slick";

// IMAGE
import img1 from '../../assets/images/achievements/achievement-1.jpg'
import img2 from '../../assets/images/achievements/achievement-2.jpg'
import img3 from '../../assets/images/achievements/achievement-3.jpg'
import img4 from '../../assets/images/achievements/achievement-4.jpg'
import img5 from '../../assets/images/achievements/achievement-5.jpg'
import img6 from '../../assets/images/achievements/achievement-6.jpg'
import img7 from '../../assets/images/achievements/achievement-7.jpg'

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './achievement-slider.style.scss'

export default class AchievementSlider extends Component {
  render() {
    var settings = {
        dots: false,
        arrows:true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 641,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
    return (
      <div className="achievement-slider">
        <Slider {...settings}>
          <div className="card">
            <div className="card__img-container">
              <img src={img1} alt="card image" />
            </div>
          </div>
          <div className="card">
            <div className="card__img-container">
              <img src={img2} alt="card image" />
            </div>
          </div>
          <div className="card">
            <div className="card__img-container">
              <img src={img3} alt="card image" />
            </div>
          </div>
          <div className="card">
            <div className="card__img-container">
              <img src={img4} alt="card image" />
            </div>
          </div>
          <div className="card">
            <div className="card__img-container">
              <img src={img5} alt="card image" />
            </div>
          </div>
          <div className="card">
            <div className="card__img-container">
              <img src={img6} alt="card image" />
            </div>
          </div>
          <div className="card">
            <div className="card__img-container">
              <img src={img7} alt="card image" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

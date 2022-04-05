import React, { Component } from "react";
import Slider from "react-slick";

// IMAGE
import logo1 from '../../assets/images/featured-in-logo/daily-star.svg'

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './featured-slider.style.scss'

export default class FeaturedSlider extends Component {
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
      <div className="featured-slider">
        <Slider {...settings}>
          <div className="card">
            <a target="_blank" href="https://www.thedailystar.net/star-youth/news/laister-affordable-cooking-solution-1815196">
                <div className="card__img-container">
                    <img src={logo1} alt="card image" />
                </div>
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}

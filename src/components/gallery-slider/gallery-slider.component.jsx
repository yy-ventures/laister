import React, { Component } from "react";
import Slider from "react-slick";

// IMAGE
import img1 from '../../assets/images/gallery-img.png'
import img2 from '../../assets/images/contact-img.png'
import img3 from '../../assets/images/product-img.png'
import img4 from '../../assets/images/slider-img.png'
import img5 from '../../assets/images/gallery-img.png'
import img6 from '../../assets/images/gallery-img.png'

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './gallery-slider.style.scss'

export default class GallerySlider extends Component {
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
      <div className="gallery-slider">
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
        </Slider>
      </div>
    );
  }
}

import React, { Component } from "react";
import Slider from "react-slick";

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
            <h3>1</h3>
          </div>
          <div className="card">
            <h3>2</h3>
          </div>
          <div className="card">
            <h3>3</h3>
          </div>
          <div className="card">
            <h3>4</h3>
          </div>
          <div className="card">
            <h3>5</h3>
          </div>
          <div className="card">
            <h3>6</h3>
          </div>
          <div className="card">
            <h3>7</h3>
          </div>
          <div className="card">
            <h3>8</h3>
          </div>
          <div className="card">
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";

// IMAGE
import image1 from '../../assets/images/slider-img.png'

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={image1} />
          </div>
          <div>
            <img src={image1} />
          </div>
          <div>
            <img src={image1} />
          </div>
          <div>
            <img src={image1} />
          </div>
        </Slider>
      </div>
    );
  }
}
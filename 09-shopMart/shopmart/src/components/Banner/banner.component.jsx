import React from "react";

import { Carousel } from "3d-react-carousal";

import "./banner.styles.scss";

let slides = [
  <img
    className="carousel__image"
    src="https://img.freepik.com/free-psd/furniture-sale-facebook-cover-template_220159-62.jpg?size=626&ext=jpg"
    alt="1"
  />,
  <img
    className="carousel__image"
    src="https://img.freepik.com/free-vector/modern-sale-banner-with-product-description_1361-1259.jpg?size=626&ext=jpg"
    alt="2"
  />,
  <img
    className="carousel__image"
    src="https://i.ytimg.com/vi/dVuyfNVcwO4/maxresdefault.jpg"
    alt="3"
  />,
  <img
    className="carousel__image"
    src="https://i.ytimg.com/vi/W868WkrOOog/maxresdefault.jpg"
    alt="4"
  />,
];

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__container">
        <Carousel slides={slides} autoplay={true} interval={3000} />
      </div>
    </div>
  );
};

export default Banner;

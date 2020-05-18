import React from "react";
import Carousel from "react-multi-carousel";
import rajaampat1 from "../../assets/travel/rajaampat1.jpg";
import rajaampat2 from "../../assets/travel/rajaampat2.jpg";
import rajaampat3 from "../../assets/travel/rajaampat3.jpg";
import rajaampat4 from "../../assets/travel/rajaampat4.jpg";
import rajaampat5 from "../../assets/travel/rajaampat5.jpg";
import rajaampat6 from "../../assets/travel/rajaampat6.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const AmazingRajaAmpat = () => {
  return (
    <Carousel responsive={responsive}>
      <div>
        <img className="slider-image" src={rajaampat1} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={rajaampat2} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={rajaampat3} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={rajaampat4} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={rajaampat5} alt="..." />
      </div><div>
        <img className="slider-image" src={rajaampat6} alt="..." />
      </div>
    </Carousel>
  );
};

export default AmazingRajaAmpat;

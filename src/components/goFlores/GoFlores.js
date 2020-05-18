import React from "react";
import Carousel from "react-multi-carousel";
import flores1 from "../../assets/travel/flores1.jpg";
import flores2 from "../../assets/travel/flores2.jpg";
import flores3 from "../../assets/travel/flores3.jpg";
import flores4 from "../../assets/travel/flores4.jpg";
import flores5 from "../../assets/travel/flores5.jpg";
import flores6 from "../../assets/travel/flores6.jpg";

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

const GoFlores = () => {
  return (
    <Carousel responsive={responsive}>
      <div>
        <img className="slider-image" src={flores1} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={flores2} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={flores3} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={flores4} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={flores5} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={flores6} alt="..." />
      </div>
    </Carousel>
  );
};

export default GoFlores;

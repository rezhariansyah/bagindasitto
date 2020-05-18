import React from "react";
import Carousel from "react-multi-carousel";
import bali1 from "../../assets/travel/bali1.jpg";
import bali2 from "../../assets/travel/bali2.JPG";
import bali3 from "../../assets/travel/bali3.jpeg";
import bali4 from "../../assets/travel/bali4.jpg";
import bali5 from "../../assets/travel/bali5.jpg";
import bali6 from "../../assets/travel/bali6.jpg";


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

const HiBali = () => {
  return (
    <Carousel responsive={responsive}>
      <div>
        <img className="slider-image" src={bali1} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={bali2} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={bali3} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={bali4} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={bali5} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={bali6} alt="..." />
      </div>
    </Carousel>
  );
};

export default HiBali;

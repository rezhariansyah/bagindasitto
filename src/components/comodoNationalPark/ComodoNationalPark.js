import React from "react";
import Carousel from "react-multi-carousel";
import komodo1 from "../../assets/travel/komodo1.jpg";
import komodo2 from "../../assets/travel/komodo2.jpg";
import komodo3 from "../../assets/travel/komodo3.jpg";
import komodo4 from "../../assets/travel/komodo4.jpg";
import komodo5 from "../../assets/travel/komodo5.jpg";
import komodo6 from "../../assets/travel/komodo6.jpg";

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

const KomodoNationalPark = () => {
  return (
    <Carousel responsive={responsive}>
      <div>
        <img className="slider-image" src={komodo1} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={komodo2} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={komodo3} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={komodo4} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={komodo5} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={komodo6} alt="..." />
      </div>
    </Carousel>
  );
};

export default KomodoNationalPark;

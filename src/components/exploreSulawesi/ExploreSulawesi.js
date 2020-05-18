import React from "react";
import Carousel from "react-multi-carousel";
import sulawesi1 from "../../assets/travel/sulawesi1.jpeg";
import sulawesi2 from "../../assets/travel/sulawesi2.jpg";
import sulawesi3 from "../../assets/travel/sulawesi3.jpg";
import sulawesi4 from "../../assets/travel/sulawesi4.jpg";
import sulawesi5 from "../../assets/travel/sulawesi5.jpeg";

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

const ExploreSulawesi = () => {
  return (
    <Carousel responsive={responsive}>
      <div>
        <img className="slider-image" src={sulawesi1} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={sulawesi2} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={sulawesi3} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={sulawesi4} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={sulawesi5} alt="..." />
      </div>
    </Carousel>
  );
};

export default ExploreSulawesi;

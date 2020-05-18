import React from "react";
import Carousel from "react-multi-carousel";
import sumba1 from "../../assets/travel/sumba1.jpg";
import sumba2 from "../../assets/travel/sumba2.jpg";
import sumba3 from "../../assets/travel/sumba3.jpg";
import sumba4 from "../../assets/travel/sumba4.jpg";
import sumba5 from "../../assets/travel/sumba5.jpg";
import sumba6 from "../../assets/travel/sumba6.jpg";

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

const OverlandSumba = () => {
  return (
    <Carousel responsive={responsive}>
      <div>
        <img className="slider-image" src={sumba1} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={sumba2} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={sumba3} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={sumba4} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={sumba5} alt="..." />
      </div>
      <div>
        <img className="slider-image" src={sumba6} alt="..." />
      </div>
    </Carousel>
  );
};

export default OverlandSumba;

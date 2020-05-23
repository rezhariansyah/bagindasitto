import React from "react";
import Carousel from "react-multi-carousel";


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
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590271567/bali1_s3gpcb.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590271570/bali2_verfax.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590271578/bali3_foohqo.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590271586/bali4_sk5lz6.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590271593/bali5_kgizoc.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590271599/bali6_vq7h2h.jpg" alt="..." />
      </div>
    </Carousel>
  );
};

export default HiBali;

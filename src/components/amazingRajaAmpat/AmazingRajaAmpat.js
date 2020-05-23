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

const AmazingRajaAmpat = () => {
  return (
    <Carousel responsive={responsive}>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277262/rajaampat3_q0t73l.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277269/rajaampat5_oon77h.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277270/rajaampat6_xvvcbh.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277260/rajaampat1_qiaoif.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277261/rajaampat2_r5lryf.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277268/rajaampat4_x64di8.jpg" alt="..." />
      </div>
    </Carousel>
  );
};

export default AmazingRajaAmpat;

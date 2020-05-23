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

const ExploreSulawesi = () => {
  return (
    <Carousel responsive={responsive}>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277501/sulawesi1_vpy6xa.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277503/sulawesi2_z67ohf.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277540/sampul_mobile_bkttsg.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277511/sulawesi3_ornuwg.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277514/sulawesi4_eedebr.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277516/sulawesi5_eu4dto.jpg" alt="..." />
      </div>
    </Carousel>
  );
};

export default ExploreSulawesi;

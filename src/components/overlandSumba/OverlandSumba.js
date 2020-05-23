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

const OverlandSumba = () => {
  return (
    <Carousel responsive={responsive}>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277686/sumba1_wrn4sx.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277697/sumba4_hh9tfk.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277694/sumba3_zigdcq.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277691/sumba2_srv4af.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277699/sumba5_loo6ue.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277704/sumba6_jgiwhw.jpg" alt="..." />
      </div>
    </Carousel>
  );
};

export default OverlandSumba;

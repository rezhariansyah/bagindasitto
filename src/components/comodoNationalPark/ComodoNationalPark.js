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

const KomodoNationalPark = () => {
  return (
    <Carousel responsive={responsive}>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277067/komodo1_dnts1z.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277089/komodo2_fspzmu.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277094/komodo3_oujgko.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277097/komodo4_l6izu9.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277102/komodo5_y9qxmn.jpg" alt="..." />
      </div>
      <div>
        <img className="slider-image" src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590277110/komodo6_ajepqr.jpg" alt="..." />
      </div>
    </Carousel>
  );
};

export default KomodoNationalPark;

import React, { Component, Fragment } from "react";
import Gallery from "react-grid-gallery";
import image1 from "../../assets/banners/galleries/DSC02532 (1)-min.jpg";
import image2 from "../../assets/banners/galleries/DSC04061-min.JPG";
import image3 from "../../assets/banners/galleries/DSC02564-min.jpg";
import image4 from "../../assets/banners/galleries/DSC04522-min.JPG";
import image5 from "../../assets/banners/galleries/GOPR2397-min.JPG";
import image6 from "../../assets/banners/galleries/IMG_0461-min.jpg";
import image7 from "../../assets/banners/galleries/IMG_3178-min.JPG";
import "./Galleries.css";

const images = [
  {
    src: image1,
    thumbnail: image1,
    thumbnailWidth: 380,
    thumbnailHeight: 412,
  },
  {
    src: image2,
    thumbnail: image2,
    thumbnailWidth: 380,
    thumbnailHeight: 212,
  },
  {
    src: image3,
    thumbnail: image3,
    thumbnailWidth: 380,
    thumbnailHeight: 212,
  },
  {
    src: image4,
    thumbnail: image4,
    thumbnailWidth: 380,
    thumbnailHeight: 412,
  },
  {
    src: image5,
    thumbnail: image5,
    thumbnailWidth: 380,
    thumbnailHeight: 212,
  },
  {
    src: image6,
    thumbnail: image6,
    thumbnailWidth: 380,
    thumbnailHeight: 212,
  },
  {
    src: image7,
    thumbnail: image7,
    thumbnailWidth: 380,
    thumbnailHeight: 212,
  },
];

class Galeries extends Component {
  styleSmall() {
    return {
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      objectFit: "cover",
      height: "100%",
      cursor: "pointer",
    };
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-8 text-center">
              <h2>GALERIES</h2>
            </div>
          </div>
          <div className="row justify-content-center mx-auto mb-5">
            <div className="col-md-10 text-center">
              <Gallery
                images={images}
                thumbnailStyle={this.styleSmall}
                enableImageSelection={false}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#0E1E24",
            height: "100px",
            marginTop: "100px",
          }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-8 dimobile" style={{ marginTop: "22px" }}>
                <h3
                  className="mr-3"
                  style={{ color: "#7B8488", display: "inline" }}
                >
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </h3>
                <h3
                  className="mr-3"
                  style={{ color: "#7B8488", display: "inline" }}
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </h3>
                <h3
                  className="mr-3"
                  style={{ color: "#7B8488", display: "inline" }}
                >
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </h3>
              </div>
            </div>
            <div className="row justify-content-center text-center mt-2">
              <h6
                className="email"
                style={{ color: "#7B8488", display: "inline" }}
              >
                baginda13srg@gmail.com
              </h6>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Galeries;

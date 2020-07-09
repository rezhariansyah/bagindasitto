import React, { Component, Fragment } from "react";
import "./Phinisi.css";
import responsive from "../../components/multiCarousel/MultiCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from "../../assets/phinisi/PNG5.png";
import Footer from "../../components/footer/Footer";
import SchrollUp from "../../components/backToTop/BackToTop";
import ScopeOfWorkPhinisi from "../../components/scopeOfWorkPhinisi/ScopeOfWorkPhinisi";

class Phinisi extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <div className="jumbotron jumbotron-fluid mobilePhinisi">
          <div className="container">
            <div className="row align-items-end">
              <div className="col">
                <img className="logo-riara" src={logo} alt="..." />
                <a
                  href="http://riara-phinisi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  className="title-logo"
                >
                  <h6
                    className="email"
                    style={{ color: "#7B8488", display: "inline" }}
                  >
                    www.riara-phinisi.com
                  </h6>
                </a>
              </div>
            </div>
          </div>
        </div>
        <SchrollUp />
        <div className="mr-3 ml-3">
          <div className="container">
            <div className="row mb-3 mt-5">
              <div className="col-md-12">
                <h5 style={{ display: "inline" }} className="mr-3 title-slider">
                  "PANRITA"
                </h5>
                <p style={{ display: "inline" }}>
                  <i style={{ fontSize: "smaller" }}>
                    Our Experienced Handyman
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="container slider-multi">
            <Carousel responsive={responsive}>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590266090/panrita1_bwse97.jpg"
                  alt="..."
                />
              </div>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590266142/panrita2_xyi9s3.jpg"
                  alt="..."
                />
              </div>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590266151/panrita3_f6csvh.jpg"
                  alt="..."
                />
              </div>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590266157/panrita4_pims6x.jpg"
                  alt="..."
                />
              </div>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590266167/panrita5_tll51p.jpg"
                  alt="..."
                />
              </div>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590266176/panrita6_hoeuqx.jpg"
                  alt="..."
                />
              </div>
            </Carousel>
          </div>
          <div className="container">
            <div className="row mb-3 mt-5">
              <div className="col-md-12">
                <h5 style={{ display: "inline" }} className="mr-3 title-slider">
                  "TAMPARANG"
                </h5>
                <p style={{ display: "inline" }}>
                  <i style={{ fontSize: "smaller" }}>
                    A Blend of Traditional and Modern methods in our shipyard
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="container slider-multi">
            <Carousel responsive={responsive}>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590266309/tamparang1_najdsh.jpg"
                  alt="..."
                />
              </div>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590266314/tamparang2_ykk1to.jpg"
                  alt="..."
                />
              </div>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590266320/tamparang3_vidzfk.jpg"
                  alt="..."
                />
              </div>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590266326/tamparang4_mx7iki.jpg"
                  alt="..."
                />
              </div>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590266332/tamparang5_o3jrce.jpg"
                  alt="..."
                />
              </div>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590266338/tamparang6_vrtrdh.jpg"
                  alt="..."
                />
              </div>
            </Carousel>
          </div>
          <div className="container">
            <div className="row mb-3 mt-5">
              <div className="col-md-12">
                <h5 style={{ display: "inline" }} className="mr-3 title-slider">
                  "LOPI"
                </h5>
                <p style={{ display: "inline" }}>
                  <i style={{ fontSize: "smaller" }}>
                    That’s mean Boat. Boat that we have designed and produced.
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="container slider-multi">
            <Carousel responsive={responsive}>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590268188/lopi1_zexq7k.jpg"
                  alt="..."
                />
              </div>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590268193/lopi2_ifk0io.jpg"
                  alt="..."
                />
              </div>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590268200/lopi3_wjspfj.jpg"
                  alt="..."
                />
              </div>
              <div>
                <img
                  className="slider-image"
                  src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590268205/lopi4_yh5brb.jpg"
                  alt="..."
                />
              </div>
            </Carousel>
          </div>
        </div>
        <ScopeOfWorkPhinisi />
        <Footer />
      </Fragment>
    );
  }
}

export default Phinisi;

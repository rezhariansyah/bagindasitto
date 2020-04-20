import React, { Component, Fragment } from "react";
import "./Phinisi.css";
import responsive from "../../components/multiCarousel/MultiCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import panrita1 from "../../assets/phinisi/panrita/panrita1.jpg"
import panrita2 from "../../assets/phinisi/panrita/panrita2.jpg"
import panrita3 from "../../assets/phinisi/panrita/panrita3.jpg"
import panrita4 from "../../assets/phinisi/panrita/panrita4.jpg"
import panrita5 from "../../assets/phinisi/panrita/panrita5.jpg"
import panrita6 from "../../assets/phinisi/panrita/panrita6.jpg"
import tamparang1 from "../../assets/phinisi/tamparang/tamparang1.jpg"
import tamparang2 from "../../assets/phinisi/tamparang/tamparang2.jpg"
import tamparang3 from "../../assets/phinisi/tamparang/tamparang3.jpg"
import tamparang4 from "../../assets/phinisi/tamparang/tamparang4.jpg"
import tamparang5 from "../../assets/phinisi/tamparang/tamparang5.jpg"
import tamparang6 from "../../assets/phinisi/tamparang/tamparang6.jpg"
// import logo from "../../assets/phinisi/PNG5.png";
class Phinisi extends Component {
  render() {
    return (
      <Fragment>
        <div className="jumbotron jumbotron-fluid mobilePhinisi">
          <div className="overlayPhinisi" />
        </div>
        <div className="container">
          <div className="row mb-3 mt-5">
            <div className="col-md-12">
              <h3 style={{display:"inline"}} className="mr-3">"PANRITA"</h3>
              <p style={{display:"inline"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <Carousel responsive={responsive}>
            <div><img className="slider-image" src={panrita1} alt="..."/></div>
            <div><img className="slider-image" src={panrita2} alt="..."/></div>
            <div><img className="slider-image" src={panrita3} alt="..."/></div>
            <div><img className="slider-image" src={panrita4} alt="..."/></div>
            <div><img className="slider-image" src={panrita5} alt="..."/></div>
            <div><img className="slider-image" src={panrita6} alt="..."/></div>
          </Carousel>
        </div>
        <div className="container">
          <div className="row mb-3 mt-5">
            <div className="col-md-12">
              <h3 style={{display:"inline"}} className="mr-3">"TAMPARANG"</h3>
              <p style={{display:"inline"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <Carousel responsive={responsive}>
            <div><img className="slider-image" src={tamparang1} alt="..."/></div>
            <div><img className="slider-image" src={tamparang2} alt="..."/></div>
            <div><img className="slider-image" src={tamparang3} alt="..."/></div>
            <div><img className="slider-image" src={tamparang4} alt="..."/></div>
            <div><img className="slider-image" src={tamparang5} alt="..."/></div>
            <div><img className="slider-image" src={tamparang6} alt="..."/></div>
          </Carousel>
        </div>
        <div className="container">
          <div className="row mb-3 mt-5">
            <div className="col-md-12">
              <h3 style={{display:"inline"}} className="mr-3">"LOPI"</h3>
              <p style={{display:"inline"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <Carousel responsive={responsive}>
            <div><img className="slider-image" src={panrita1} alt="..."/></div>
            <div><img className="slider-image" src={panrita2} alt="..."/></div>
            <div><img className="slider-image" src={panrita3} alt="..."/></div>
            <div><img className="slider-image" src={panrita4} alt="..."/></div>
            <div><img className="slider-image" src={panrita5} alt="..."/></div>
            <div><img className="slider-image" src={panrita6} alt="..."/></div>
          </Carousel>
        </div>
      </Fragment>
    );
  }
}

export default Phinisi;

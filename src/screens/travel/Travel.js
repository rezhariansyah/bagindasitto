import React, { Component, Fragment } from "react";
import "./Travel.css";
import Footer from "../../components/footer/Footer";
import HiBali from "../../components/hiBali/HiBali";
import ExploreSulawesi from "../../components/exploreSulawesi/ExploreSulawesi";
import AmazingRajaAmpat from "../../components/amazingRajaAmpat/AmazingRajaAmpat";
import OverlandSumba from "../../components/overlandSumba/OverlandSumba";
import GoFlores from "../../components/goFlores/GoFlores";
import KomodoNationalPark from "../../components/comodoNationalPark/ComodoNationalPark";
import SchrollUp from "../../components/backToTop/BackToTop";
import logotravel from "../../assets/phinisi/TRAST.GUIDE_HITAM.png"

class Travel extends Component {
  render() {
    return (
      <Fragment>
        <div className="jumbotron jumbotron-fluid mobileTravel">
          <div className="container">
            <img className="logo-travel" src={logotravel} alt="..." />
          </div>
        </div>
        <div className="mr-3 ml-3">
        <div className="container">
            <div className="row mb-3 mt-5">
              <div className="col-md-12">
                <h6 style={{ display: "inline" }} className="mr-3 title-slider">
                  "AMAZING RAJA AMPAT"
                </h6>
                <p style={{display:"inline"}}><i style={{fontSize:"smaller"}}>The last Paradise</i></p>
              </div>
            </div>
          </div>
          <div className="container slider-multi">
            <AmazingRajaAmpat />
          </div>
          <div className="container">
            <div className="row mb-3 mt-5">
              <div className="col-md-12">
                <h6 style={{ display: "inline" }} className="mr-3 title-slider">
                  "EXPLORE SULAWESI"
                </h6>
                <p style={{display:"inline"}}><i style={{fontSize:"smaller"}}>Discover new cultures</i></p>
              </div>
            </div>
          </div>
          <div className="container slider-multi">
            <ExploreSulawesi />
          </div>
          <div className="container">
            <div className="row mb-3 mt-5">
              <div className="col-md-12">
                <h6 style={{ display: "inline" }} className="mr-3 title-slider">
                  "GO FLORES"
                </h6>
                <p style={{display:"inline"}}><i style={{fontSize:"smaller"}}>See more of Natural Life</i></p>
              </div>
            </div>
          </div>
          <div className="container slider-multi">
            <GoFlores />
          </div>
          <div className="container">
            <div className="row mb-3 mt-5">
              <div className="col-md-12">
                <h6 style={{ display: "inline" }} className="mr-3 title-slider">
                  "KOMODO NATIONAL PARK"
                </h6>
                <p style={{display:"inline"}}><i style={{fontSize:"smaller"}}>Let’s Sailing</i></p>
              </div>
            </div>
          </div>
          <div className="container slider-multi">
            <KomodoNationalPark />
          </div>
          <div className="container">
            <div className="row mb-3 mt-5">
              <div className="col-md-12">
                <h6 style={{ display: "inline" }} className="mr-3 title-slider">
                  "OVERLAND SUMBA"
                </h6>
                <p style={{display:"inline"}}><i style={{fontSize:"smaller"}}>Unforgettable Journey</i></p>
              </div>
            </div>
          </div>
          <div className="container slider-multi">
            <OverlandSumba />
          </div>
          <div className="container">
            <div className="row mb-3 mt-5">
              <div className="col-md-12">
                <h6 style={{ display: "inline" }} className="mr-3 title-slider">
                  "HI BALI"
                </h6>
                <p style={{display:"inline"}}><i style={{fontSize:"smaller"}}>Time to Adventures</i></p>
              </div>
            </div>
          </div>
          <SchrollUp />
          <div className="container slider-multi">
            <HiBali />
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Travel;

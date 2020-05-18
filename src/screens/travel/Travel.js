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

class Travel extends Component {
  render() {
    return (
      <Fragment>
        <div className="jumbotron jumbotron-fluid mobileTravel">
          <div className="container"></div>
        </div>
        <div className="mr-3 ml-3">
          <div className="container">
            <div className="row mb-3 mt-5">
              <div className="col-md-12">
                <h4 style={{ display: "inline" }} className="mr-3 title-slider">
                  "HI BALI"
                </h4>
              </div>
            </div>
          </div>
          <SchrollUp />
          <div className="container slider-multi">
            <HiBali />
          </div>
          <div className="container">
            <div className="row mb-3 mt-5">
              <div className="col-md-12">
                <h4 style={{ display: "inline" }} className="mr-3 title-slider">
                  "EXPLORE SULAWESI"
                </h4>
              </div>
            </div>
          </div>
          <div className="container slider-multi">
            <ExploreSulawesi />
          </div>
          <div className="container">
            <div className="row mb-3 mt-5">
              <div className="col-md-12">
                <h4 style={{ display: "inline" }} className="mr-3 title-slider">
                  "AMAZING RAJA AMPAT"
                </h4>
              </div>
            </div>
          </div>
          <div className="container slider-multi">
            <AmazingRajaAmpat />
          </div>
          <div className="container">
            <div className="row mb-3 mt-5">
              <div className="col-md-12">
                <h4 style={{ display: "inline" }} className="mr-3 title-slider">
                  "OVERLAND SUMBA"
                </h4>
              </div>
            </div>
          </div>
          <div className="container slider-multi">
            <OverlandSumba />
          </div>
          <div className="container">
            <div className="row mb-3 mt-5">
              <div className="col-md-12">
                <h4 style={{ display: "inline" }} className="mr-3 title-slider">
                  "GO FLORES"
                </h4>
              </div>
            </div>
          </div>
          <div className="container slider-multi">
            <GoFlores />
          </div>
          <div className="container">
            <div className="row mb-3 mt-5">
              <div className="col-md-12">
                <h4 style={{ display: "inline" }} className="mr-3 title-slider">
                  "KOMODO NATIONAL PARK"
                </h4>
              </div>
            </div>
          </div>
          <div className="container slider-multi">
            <KomodoNationalPark />
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Travel;

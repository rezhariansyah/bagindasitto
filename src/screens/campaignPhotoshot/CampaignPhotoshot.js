import React, { Component, Fragment } from "react";
import "./CampaignPhotoshot.css";
// import VideoContent from "../../components/videoContent/Video1Content";
import brandPromotion1 from "../../assets/instagram/brandPromotion1.jpg";
import brandPromotion2 from "../../assets/instagram/brandPromotion2.jpg";
import brandPromotion3 from "../../assets/instagram/brandPromotion3.jpg";
import brandPromotion4 from "../../assets/instagram/brandPromotion4.jpg";
import Footer from "../../components/footer/Footer";
import logoGuide from "../../assets/phinisi/TRAST.GUIDE_HITAM.png";
import etcetera from "../../assets/ourClient/et_cetera.jpg";
import VideoCampaignPhotoshot from "../../components/videoContent/VideoCampaignPhotoshot";


class CampaignPhotoshot extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <div className="container" style={{minHeight:"800px"}}>
          <div
            className="row justify-content-center mb-5 flex-wrap align-items-center"
            style={{ marginTop: "100px" }}
          >
            <div
              className="col-md-6"
              className="embed-responsive embed-responsive-21by9"
            >
              <VideoCampaignPhotoshot />
            </div>
            <div className="col-md-6">
              <div className="row text-center">
                <div className="col-6 text-right mt-1 travel-left">
                  <a
                    href="https://www.instagram.com/p/CAP7XMuFlGC/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={brandPromotion1}
                      className="travel-instagram"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-6 text-left mt-1 travel-right">
                  <a
                    href="https://www.instagram.com/p/B_uhwKll8sy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={brandPromotion2}
                      className="travel-instagram"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-6 text-right mt-1 travel-left">
                  <a
                    href="https://www.instagram.com/p/B-11NhdFcwf/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={brandPromotion3}
                      className="travel-instagram"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-6 text-left mt-1 travel-right">
                  <a
                    href="https://www.instagram.com/p/Bs5guSJg7BB/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={brandPromotion4}
                      className="travel-instagram"
                      alt="..."
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center"
            style={{ marginTop: "80px" }}
          ></div>
          <div className="row justify-content-center text-center flex-wrap align-items-center mt-4">
            <div className="col-4 col-md-2">
              <img src={logoGuide} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <h2><i>x</i></h2>
            </div>
            <div className="col-4 col-md-2">
              <img src={etcetera} alt="" className="client-collab" />
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default CampaignPhotoshot;

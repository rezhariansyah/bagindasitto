import React, { Component, Fragment } from "react";
import brandPromotion from "../../assets/collaboration/1.jpg";
import campaignPhotoshot from "../../assets/collaboration/2.JPG";
import youtubeContent from "../../assets/collaboration/3.JPG";
import "./Collaboration.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import ateam from "../../assets/ourClient/ateammanagement.jpg";
import sulsel from "../../assets/ourClient/sulsel.jpg";
import anjani from "../../assets/ourClient/anjanitrip_PNG.jpg";
import etcetera from "../../assets/ourClient/et_cetera.jpg";
import wrangler from "../../assets/ourClient/tw-logo.jpg";

class Collaboration extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Fragment>
        <div className="container" style={{minHeight:"800px"}}>
          <div className="row justify-content-center web-collab">
            <div className="col-md-3">
              <div className="profile-card">
                <div className="profile-img">
                  <img src={brandPromotion} alt="..." />
                </div>
                <div className="profile-content">
                  <ul className="social-link">
                    <Link to="/brand-promotion">
                      <button type="button" className="btn btn-outline-light">
                        Brand Promotion
                      </button>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="profile-card">
                <div className="profile-img">
                  <img src={campaignPhotoshot} alt="..." />
                </div>
                <div className="profile-content">
                  <ul className="social-link">
                    <Link to="/campaign-photoshot">
                      <button type="button" className="btn btn-outline-light">
                        Campaign Photoshot
                      </button>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="profile-card">
                <div className="profile-img">
                  <img src={youtubeContent} alt="..." />
                </div>
                <div className="profile-content">
                  <ul className="social-link">
                    <Link to="/youtube-content">
                      <input
                        type="button"
                        className="btn btn-outline-light"
                        value="Youtube Content"
                      />
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center"
            style={{ marginTop: "80px" }}
          >
            <div className="col-4 text-center">
              <h4>My Clients</h4>
            </div>
          </div>
          <div className="row justify-content-center text-center flex-wrap align-items-center mt-4">
            <div className="col-4 col-md-2">
              <img src={ateam} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <img src={wrangler} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <img src={sulsel} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <img src={etcetera} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <img src={anjani} alt="" className="client-collab" />
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Collaboration;

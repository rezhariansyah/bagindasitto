import React, { Component, Fragment } from "react";
import brandPromotion from "../../assets/collaboration/1.jpg";
import campaignPhotoshot from "../../assets/collaboration/2.JPG";
import youtubeContent from "../../assets/collaboration/3.JPG";
import "./Collaboration.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class Collaboration extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row justify-content-center web-collab">
            <div className="col-md-3">
              <div className="profile-card">
                <div className="profile-img">
                  <img src={brandPromotion} alt="..." />
                </div>
                <div className="profile-content">
                  <ul className="social-link">
                    <button type="button" className="btn btn-outline-light">
                      Brand Promotion
                    </button>
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
                    <button type="button" className="btn btn-outline-light">
                      Campaign Photoshot
                    </button>
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
                    <Button outline color="light">
                      <Link to="/youtube-content" style={{color:"white"}}>Youtube Content</Link>
                    </Button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Collaboration;

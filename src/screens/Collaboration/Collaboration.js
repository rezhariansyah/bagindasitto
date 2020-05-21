import React, { Component, Fragment } from "react";
import brandPromotion from "../../assets/collaboration/1.jpg";
import campaignPhotoshot from "../../assets/collaboration/2.JPG";
import youtubeContent from "../../assets/collaboration/3.JPG";
import "./Collaboration.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

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
                    <h2 className="title-card-collab">
                      Brand Promotion
                    </h2>
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
                    <h2 className="title-card-collab">
                      Campaign Photoshot
                    </h2>
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
                    <Link to="/youtube-content" style={{textDecoration:"none"}}>
                      <h2 className="title-card-collab">Youtube Content</h2>
                    </Link>
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

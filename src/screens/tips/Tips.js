import React, { Component } from "react";
import { Link } from "react-router-dom";
import brandPromotion from "../../assets/collaboration/1.jpg";
import campaignPhotoshot from "../../assets/collaboration/2.JPG";
import youtubeContent from "../../assets/collaboration/3.JPG";
import "./Tips.css";

class Tips extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center web-collab">
          <div className="col-md-3">
            <div className="profile-card">
              <div className="profile-img">
                <img
                  src={brandPromotion}
                  alt="Team Image"
                />
              </div>
              <div className="profile-content">
                <ul className="social-link">
                 <h2 style={{color:"white"}}>Brand Promotion</h2>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="profile-card">
              <div className="profile-img">
                <img
                  src={campaignPhotoshot}
                  alt="Team Image"
                />
              </div>
              <div className="profile-content">
                <ul className="social-link">
                  <h2 style={{color:"white"}}>Campaign Photoshot</h2>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="profile-card">
              <div className="profile-img">
                <img
                  src={youtubeContent}
                  alt="Team Image"
                />
              </div>
              <div className="profile-content">
                <ul className="social-link">
                  <h2 style={{color:"white"}}>Youtube Content</h2>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Tips;

import React, { Component, Fragment } from "react";
import "./InstagramTravel.css";
import instagram1 from "../../assets/instagram/travelFooter1.jpg";
import instagram2 from "../../assets/instagram/travelFooter2.jpg";
import instagram3 from "../../assets/instagram/travelFooter3.jpg";
import instagram4 from "../../assets/instagram/travelFooter4.jpg";

const InstagramTravel = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <h3>Instagram</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-6 text-right mt-1 travel-left">
          <a
            href="https://www.instagram.com/p/CAP7XMuFlGC/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram1} className="travel-instagram" alt="..." />
          </a>
        </div>
        <div className="col-6 text-left mt-1 travel-right">
          <a
            href="https://www.instagram.com/p/B_uhwKll8sy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram2} className="travel-instagram" alt="..." />
          </a>
        </div>
        <div className="col-6 text-right mt-1 travel-left">
          <a
            href="https://www.instagram.com/p/B-11NhdFcwf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram3} className="travel-instagram" alt="..." />
          </a>
        </div>
        <div className="col-6 text-left mt-1 travel-right">
          <a
            href="https://www.instagram.com/p/Bs5guSJg7BB/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram4} className="travel-instagram" alt="..." />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default InstagramTravel;

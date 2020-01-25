import React from "react";
import about from "../../assets/banners/compress/about-min.jpg";
import travel from "../../assets/banners/compress/travel.png";
import health from "../../assets/banners/compress/health-min.jpg";
import tips from "../../assets/banners/compress/tips-min.jpg";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mb-4">
        <h2>CATEGORIES</h2>
      </div>
      <div className="row justify-content-sm-center ">
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="card">
            <img src={about} className="card-img-top" alt="..." />
            <div className="title">
              <input type="button" value="ABOUT" className="btn btn-outline-light" />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="card">
            <img src={travel} className="card-img-top" alt="..." />
            <div className="title">
              <input type="button" value="TRAVEL" className="btn btn-outline-light" />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="card">
            <img src={health} className="card-img-top" alt="..." />
            <div className="title">
              <input type="button" value="HEALTH" className="btn btn-outline-light" />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="card">
            <img src={tips} className="card-img-top" alt="..." />
            <div className="title">
              <input type="button" value="TIPS" className="btn btn-outline-light" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
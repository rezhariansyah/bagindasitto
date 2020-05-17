import React from "react";
import { Link } from "react-router-dom";
import about from "../../assets/categories/about.JPG";
import travel from "../../assets/banners/compress/travel.png";
import phinisi from "../../assets/categories/maps-min.png";
import tips from "../../assets/banners/compress/tips-min.jpg";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="container" style={{marginTop:"100px"}}>
      <div className="row justify-content-center mb-4">
        <h2 style={{textShadow:"3px 3px 4px rgba(172,172,172,0.99)"}}>CATEGORIES</h2>
      </div>
      <div className="row justify-content-sm-center ">
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="card">
            <img src={about} className="card-img-top" alt="..." />
            <div className="title">
            <Link to='/about'><input type="button" value="ABOUT" className="btn btn-outline-light" /></Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="card">
            <img src={travel} className="card-img-top" alt="..." />
            <div className="title">
              <Link to='/travel'><input type="button" value="TRAVEL" className="btn btn-outline-light" /></Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="card">
            <img src={phinisi} className="card-img-top" alt="..." />
            <div className="title">
              <Link to='/phinisi'><input type="button" value="PHINISI" className="btn btn-outline-light" /></Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="card">
            <img src={tips} className="card-img-top" alt="..." />
            <div className="title">
              <Link to='/tips'><input type="button" value="SUSTAINABLE" className="btn btn-outline-light" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

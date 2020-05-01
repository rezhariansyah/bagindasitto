import React, { Component, Fragment } from "react";

import "./Instagram.css";
import gambar1 from "../../assets/instagram/gambar1.jpg";
import gambar2 from "../../assets/instagram/gambar2.jpg";
import gambar3 from "../../assets/instagram/gambar3.jpg";
import gambar4 from "../../assets/instagram/gambar4.jpg";
import gambar5 from "../../assets/instagram/gambar5.jpg";
import gambar6 from "../../assets/instagram/gambar6.jpg";
import gambar7 from "../../assets/instagram/gambar7.jpg";
import gambar8 from "../../assets/instagram/gambar8.jpg";
import gambar9 from "../../assets/instagram/gambar9.jpg";

const Instagram = () => {
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-12 text-center">
                <p>Instagram</p>
              </div>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-6 col-md-4 left-img text-align-right">
                <img src={gambar1} className="instagram-img mt-1" alt="..." />
              </div>
              <div className="col-6 col-md-4 right-img text-align-left">
                <img src={gambar2} className="instagram-img mt-1" alt="..." />
              </div>
              <div className="col-6 col-md-4 left-img text-align-right">
                <img src={gambar3} className="instagram-img mt-1" alt="..." />
              </div>
              <div className="col-6 col-md-4 right-img text-align-left">
                <img src={gambar4} className="instagram-img mt-1" alt="..." />
              </div>
              <div className="col-6 col-md-4 left-img text-align-right">
                <img src={gambar5} className="instagram-img mt-1" alt="..." />
              </div>
              <div className="col-6 col-md-4 right-img text-align-left">
                <img src={gambar6} className="instagram-img mt-1" alt="..." />
              </div>
              <div className="col-6 col-md-4 left-img text-align-right">
                <img src={gambar7} className="instagram-img mt-1" alt="..." />
              </div>
              <div className="col-6 col-md-4 right-img text-align-left">
                <img src={gambar8} className="instagram-img mt-1" alt="..." />
              </div>
              <div className="col-6 col-md-4">
                <img src={gambar9} className="instagram-img mt-1" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
          style={{
            backgroundColor: "#0E1E24",
            height: "100px",
            marginTop: "100px",
          }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-8 dimobile" style={{ marginTop: "22px" }}>
                <h3
                  className="mr-3"
                  style={{ color: "#7B8488", display: "inline" }}
                >
                  <a
                    style={{ color: "#7B8488", cursor: "pointer" }}
                    target="_blank"
                    href="https://www.youtube.com/channel/UCvIVcgltlt0D_y0VLlveWGQ"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-youtube-play" aria-hidden="true" />
                  </a>
                </h3>
                <h3
                  className="mr-3"
                  style={{ color: "#7B8488", display: "inline" }}
                >
                  <a
                    href="https://www.instagram.com/backpackersopan/"
                    style={{ color: "#7B8488", cursor: "pointer" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </h3>
              </div>
            </div>
            <div className="row justify-content-center text-center mt-2">
              <h6
                className="email"
                style={{ color: "#7B8488", display: "inline" }}
              >
                baginda13srg@gmail.com
              </h6>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default Instagram;

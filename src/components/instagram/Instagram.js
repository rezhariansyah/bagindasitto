import React, { Fragment } from "react";

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
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-12 text-center mb-3">
                <h3
                  style={{ textShadow: "3px 3px 4px rgba(172,172,172,0.99)" }}
                >
                  Instagram
                </h3>
              </div>
            </div>
            <div className="row justify-content-center text-center align-items-center">
              <div className="col-6 col-md-4 left-img text-align-right">
                <a
                  href="https://www.instagram.com/p/Bs5guSJg7BB/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gambar1} className="instagram-img mt-1" alt="..." />
                </a>
              </div>
              <div className="col-6 col-md-4 right-img text-align-left">
                <a
                  href="https://www.instagram.com/p/Bud5K97B7YL/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gambar2} className="instagram-img mt-1" alt="..." />
                </a>
              </div>
              <div className="col-6 col-md-4 left-img text-align-right">
                <a
                  href="https://www.instagram.com/p/BlRfQPKlSYF/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gambar3} className="instagram-img mt-1" alt="..." />
                </a>
              </div>
              <div className="col-6 col-md-4 right-img text-align-left">
                <a
                  href="https://www.instagram.com/p/B6Dn3_tnGKQ/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gambar4} className="instagram-img mt-1" alt="..." />
                </a>
              </div>
              <div className="col-6 col-md-4 left-img text-align-right">
                <a
                  href="https://www.instagram.com/p/Bl8Dl-JAzeD/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gambar5} className="instagram-img mt-1" alt="..." />
                </a>
              </div>
              <div className="col-6 col-md-4 right-img text-align-left">
                <a
                  href="https://www.instagram.com/p/BlIYCxNgKGI/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gambar6} className="instagram-img mt-1" alt="..." />
                </a>
              </div>
              <div className="col-6 col-md-4 left-img text-align-right">
                <a
                  href="https://www.instagram.com/p/B5fTHJFnKbM/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gambar7} className="instagram-img mt-1" alt="..." />
                </a>
              </div>
              <div className="col-6 col-md-4 right-img text-align-left">
                <a
                  href="https://www.instagram.com/p/ByfW41innru/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gambar8} className="instagram-img mt-1" alt="..." />
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a
                  href="https://www.instagram.com/p/B10-fg4nIjb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gambar9} className="instagram-img mt-1" alt="..." />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Instagram;

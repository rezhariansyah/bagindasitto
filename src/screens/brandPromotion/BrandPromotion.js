import React, { Component, Fragment } from "react";
import VideoContent from "../../components/videoContent/Video1Content";
import Footer from "../../components/footer/Footer";
import wrangler from "../../assets/ourClient/Wrangler_logo_gray.jpg";
import trueWrangler from "../../assets/ourClient/tw-logo.jpg";

class BrandPromotion extends Component {
  render() {
    return (
      <Fragment>
        <div className="container" style={{minHeight:"800px"}}>
          <div className="row flex-wrap align-items-center justify-content-center mt-3 mb-5">
            <div
              className="col-lg-6 mt-5"
              className="embed-responsive embed-responsive-21by9"
            >
              <VideoContent videoId="sr8s0BUWwoo" />
            </div>
            <div className="col-lg-6 description-video">
              <p>
                Perjalanan mengesankan di Komodo National Park bersama Brand
                Wrangler Jeans Indonesia.
              </p>
              <p>
                <i className="author">
                  Featuring Asoka Remadja & Launrentius Edo
                </i>
              </p>
            </div>
          </div>
          <div
            className="row justify-content-center"
            style={{ marginTop: "80px" }}
          >
            <div className="col-4 text-center">
              <h4>
                <i>By</i>
              </h4>
            </div>
          </div>
          <div className="row justify-content-center text-center flex-wrap align-items-center mt-4">
            <div className="col-4 col-md-2">
              <img src={trueWrangler} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <img src={wrangler} alt="" className="client-collab" />
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default BrandPromotion;

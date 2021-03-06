import React, { Component, Fragment } from "react";
import "./YoutubeContent.css";
import Footer from "../../components/footer/Footer";
import ateam from "../../assets/ourClient/anjanitrip_PNG.jpg";
import anjani from "../../assets/ourClient/ateammanagement.jpg";
import sulsel from "../../assets/ourClient/sulsel.jpg";
import VideoContent from "../../components/videoContent/Video1Content";
import VideoYoutubeContent from "../../components/videoContent/VideoYoutubeConcent";

class YoutubeContent extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row flex-wrap align-items-center justify-content-center mb-3 web-youtube">
            <div
              className="col-lg-6 mt-5"
              className="embed-responsive embed-responsive-21by9"
            >
              <VideoYoutubeContent videoId="HnlHcn8wxb0" />
            </div>
            <div className="col-lg-6 description-video">
              <p>
                Kelana Karin kali ini membawa aku ke tanah Sulawesi Selatan,
                beruntung banget dikelana ini aku bertemu seseorang yang membawa
                ku jauh ke setiap ujung Sulawesi dari Toraja sampai Bira.
              </p>
              <p>
                <i className="author">Directed by Aco Tenriyagelli</i>
              </p>
            </div>
          </div>
          <hr />
          <div className="row flex-wrap align-items-center justify-content-center mt-3 mb-5">
            <div
              className="col-lg-6 mt-5"
              className="embed-responsive embed-responsive-21by9"
            >
              <VideoContent videoId="Y5jaieac_N4" />
            </div>
            <div className="col-lg-6 description-video">
              <p>
                Episode ini aku melakukan pelayaran dengan mengelilingi
                kepulauan di sekitar Labuan Bajo, mulai dari Pink Beach sampai
                Pulau Komodo. Sampai akhirnya aku bertemu seseorang yang bernama
                Ganggu yang sangat mengganggu perjalananku dan membawa kita ke
                Tana Humba, sebuah tempat yang begitu indah dan menarik
                budayanya.
              </p>
              <p>
                <i className="author">Directed by Aco Tenriyagelli</i>
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
              <img src={ateam} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <img src={sulsel} alt="" className="client-collab" />
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

export default YoutubeContent;

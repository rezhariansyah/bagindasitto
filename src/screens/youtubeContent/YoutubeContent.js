import React, { Component, Fragment } from "react";
import VideoContent from "../../components/videoContent/Video1Content";
import "./YoutubeContent.css";
import VideoContent2 from "../../components/videoContent/Video2Content";
import Footer from "../../components/footer/Footer";

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
              <VideoContent videoId="HnlHcn8wxb0" />
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
          <hr />
          <div className="row flex-wrap align-items-center justify-content-center mt-3 mb-5">
            <div
              className="col-lg-6 mt-5"
              className="embed-responsive embed-responsive-21by9"
            >
              <VideoContent2 videoId="Y5jaieac_N4" />
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
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default YoutubeContent;

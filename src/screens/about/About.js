import React, { Component, Fragment } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row mt-5 ">
            <div className="col-md-5 text-center">
              <img src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590229705/fotoutama_jdgtl9.jpg" alt="..." className="about-profile" />
            </div>
            <div className="col-md-6">
              <h5 className="mb-4">Baginda Sitto</h5>
              <p className="caption-about">
                Who is Sitto? He do things with passion. 3 things that make the
                he principle are innovation, consistency, and always smile. He
                is graduate from Hasanuddin University of Major Naval Achitect.
                Born in Papua, March 24, 1995. Then completed his studies in
                Sulawesi. And began to travel around Indonesia. <br/> <br />
                <i>That’s - Baginda Sitto Siregar, ST.</i>
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center web-collab">
              <div className="col-md-3">
                <div className="profile-card">
                  <div className="profile-img">
                    <img src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590245464/sampulphinisi_hymlks.jpg" alt="..." />
                  </div>
                  <div className="profile-content">
                    <ul className="social-link">
                      <button type="button" className="btn btn-outline-light">
                        PHINISI
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="profile-card">
                  <div className="profile-img">
                    <img src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590245352/sampulTravel_b5ddof.jpg" alt="..." />
                  </div>
                  <div className="profile-content">
                    <ul className="social-link">
                      <button type="button" className="btn btn-outline-light">
                        TRAVEL
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="profile-card">
                  <div className="profile-img">
                    <img src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590230609/sampulbrandpromotion_wgngoo.jpg" alt="..." />
                  </div>
                  <div className="profile-content">
                    <ul className="social-link">
                      <Link to="/collaboration">
                        <input
                          type="button"
                          className="btn btn-outline-light"
                          value="COLLABORATION"
                        />
                      </Link>
                    </ul>
                  </div>
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

export default About;

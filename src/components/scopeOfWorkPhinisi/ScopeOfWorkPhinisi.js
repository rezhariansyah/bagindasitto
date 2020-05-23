import React from "react";
import "./ScopeOfWorkPhinisi.css";
import papiton from "../../assets/ourClient/3.jpg";
import bulukumba from "../../assets/ourClient/Logo-Kabupaten-Bulukumba-Sulawesi-Selatan.jpg";
import anjanivoyage from "../../assets/ourClient/anjanivoyage_PNG.jpg";
import putrabahari from "../../assets/ourClient/putrabahari.PNG";
import vinca from "../../assets/ourClient/vinca.PNG";

const ScopeOfWorkPhinisi = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-12 text-center">
          <h5>WHAT WE OFFER</h5>
        </div>
      </div>
      <hr className="line-title" />
      <div className="text-center">
        <p>SCOPE OF WORK</p>
      </div>
      <div className="row justify-content-center text-center">
        <div className="col-md-6">
          <img
            src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590252775/DSC07823_ced9ui.jpg"
            className="img-phinisi"
            alt=""
          />
          <button
            type="button"
            className="btn btn-dark title-left-card"
            disabled
          >
            NAVAL <br /> ARCHITECTURE
          </button>
          <p className="mt-4">
            SHIP DESIGN OF NEW ALL TYPES AND SIZE <br /> MODIFICATION AND
            CONVENTION DESIGN <br />
            RE-DESIGN BOAT <br />
            EXTERIOR AND INTERIOR SHIP DESIGN <br />
            SHEEL EXPANSION <br />
            3D LAYOUT
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590252749/DSC09673_e5qctv.jpg"
            className="img-phinisi"
            alt=""
          />
          <button
            type="button"
            className="btn btn-dark title-right-card"
            disabled
          >
            SHIP ANALYSIS <br /> AND <br /> PRODUCTION
          </button>
          <p className="mt-4">
            INTACT AND DAMAGE STABILITY <br />
            SHIP STRUCTURES <br />
            MOTION AND MOORING ANALYSIS <br />
            PRODUCTION BOAT <br />
            SAFETY PLAN <br />
            PROJECT MANAGEMENT <br />
            QUALITY CONTROL
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <h5>My Client</h5>
        </div>
      </div>
      <div className="row justify-content-center text-center flex-wrap align-items-center mt-4">
        <div className="col-4 col-md-2">
          <img src={papiton} className="client-collab" alt="..." />
        </div>
        <div className="col-4 col-md-2">
          <img src={bulukumba} className="client-collab" alt="..." />
        </div>
        <div className="col-4 col-md-2">
          <img src={anjanivoyage} className="client-collab" alt="..." />
        </div>
        <div className="col-4 col-md-2">
          <img src={putrabahari} className="client-collab" alt="..." />
        </div>
        <div className="col-4 col-md-2">
          <img src={vinca} className="client-collab" alt="..." />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <h5>Past Project</h5>
        </div>
        <div className="col-md-12 text-center">
          <a
            href="https://www.sailwithpapiton.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#765947" }}
          >
            www.sailwithpapiton.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ScopeOfWorkPhinisi;

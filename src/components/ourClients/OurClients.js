import React from "react";
import "./OurClients.css";
import ateammanagement from "../../assets/ourClient/ateammanagement.png";
import anjanivoyage from "../../assets/ourClient/anjanivoyage_PNG.png";
import anjanitrip from "../../assets/ourClient/anjanitrip_PNG.png";
import et_cetera from "../../assets/ourClient/et_cetera.jpg";
import kabsulsel from "../../assets/ourClient/Logo-Kabupaten-Bulukumba-Sulawesi-Selatan.png";
import sulsel from "../../assets/ourClient/sulsel.png";
import twLogo from "../../assets/ourClient/tw-logo.png";
import Wrangler_logo_gray from "../../assets/ourClient/Wrangler_logo_gray.png";

const OurClients = () => {
  return (
    <div className="container mb-5" style={{ marginTop: "100px" }}>
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <h2 style={{ textShadow: "3px 3px 4px rgba(172,172,172,0.99)" }}>
            OUR CLIENTS
          </h2>
        </div>
      </div>
      <div className="row d-flex mt-3 flex-wrap align-items-center text-center">
        <div className="col-6 col-md-3 mt-4">
          <img src={ateammanagement} alt="..." className="logo-client" />
        </div>
        <div className="col-6 col-md-3 mt-4">
          <img src={anjanivoyage} alt="..." className="logo-client" />
        </div>
        <div className="col-6 col-md-3 mt-4">
          <img src={anjanitrip} alt="..." className="logo-client" />
        </div>
        <div className="col-6 col-md-3 mt-4">
          <img src={et_cetera} alt="..." className="logo-client" />
        </div>
        <div className="col-6 col-md-3 mt-4">
          <img src={sulsel} alt="..." className="logo-client" />
        </div>
        <div className="col-6 col-md-3 mt-4">
          <img src={kabsulsel} alt="..." className="logo-client" />
        </div>
        <div className="col-6 col-md-3 mt-4">
          <img src={twLogo} alt="..." className="logo-client" />
        </div>
        <div className="col-6 col-md-3 mt-4">
          <img src={Wrangler_logo_gray} alt="..." className="logo-client" />
        </div>
      </div>
    </div>
  );
};

export default OurClients;

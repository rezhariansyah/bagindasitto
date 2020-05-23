import React from "react";
import "./OurClients.css";
import ateammanagement from "../../assets/ourClient/ateammanagement.jpg";
import anjanivoyage from "../../assets/ourClient/anjanivoyage_PNG.jpg";
import anjanitrip from "../../assets/ourClient/anjanitrip_PNG.jpg";
import et_cetera from "../../assets/ourClient/et_cetera.jpg";
import kabsulsel from "../../assets/ourClient/Logo-Kabupaten-Bulukumba-Sulawesi-Selatan.jpg";
import sulsel from "../../assets/ourClient/sulsel.jpg";
import twLogo from "../../assets/ourClient/tw-logo.jpg";
import Wrangler_logo_gray from "../../assets/ourClient/Wrangler_logo_gray.jpg";
import papiton from "../../assets/ourClient/3.jpg";
import travass from "../../assets/ourClient/5.jpg";
import p from "../../assets/ourClient/8.jpg";
import vinca from "../../assets/ourClient/vinca.PNG";

const OurClients = () => {
  return (
    <div className="container mb-5" style={{ marginTop: "100px" }}>
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <h2 style={{ textShadow: "3px 3px 4px rgba(172,172,172,0.99)" }}>
            My Partnership
          </h2>
        </div>
      </div>
      <div className="row d-flex mt-3 flex-wrap align-items-center justify-content-center text-center">
        <div className="col-4 col-md-2 mt-4">
          <img src={ateammanagement} alt="..." className="logo-client" />
        </div>
        <div className="col-4 col-md-2 mt-4">
          <img src={twLogo} alt="..." className="logo-client" />
        </div>
        <div className="col-4 col-md-2 mt-4">
          <img src={papiton} alt="..." className="logo-client" />
        </div>
        <div className="col-4 col-md-2 mt-4">
          <img src={sulsel} alt="..." className="logo-client" />
        </div>
        <div className="col-4 col-md-2 mt-4">
          <img src={travass} alt="..." className="logo-client" />
        </div>
        <div className="col-4 col-md-2 mt-4">
          <img src={et_cetera} alt="..." className="logo-client" />
        </div>
        <div className="col-4 col-md-2 mt-4">
          <img src={anjanitrip} alt="..." className="logo-client" />
        </div>
        <div className="col-4 col-md-2 mt-4">
          <img src={p} alt="..." className="logo-client" />
        </div>
        <div className="col-4 col-md-2 mt-4">
          <img src={anjanivoyage} alt="..." className="logo-client" />
        </div>
        <div className="col-4 col-md-2 mt-4">
          <img src={kabsulsel} alt="..." className="logo-client" />
        </div>
        <div className="col-4 col-md-2 mt-4">
          <img src={Wrangler_logo_gray} alt="..." className="logo-client" />
        </div>
        <div className="col-4 col-md-2 mt-4">
          <img src={vinca} alt="..." className="logo-client" />
        </div>
      </div>
    </div>
  );
};

export default OurClients;

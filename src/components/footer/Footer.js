import React from "react";

const Footer = () => {
  return (
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
          <h6 className="email" style={{ color: "#7B8488", display: "inline" }}>
            baginda13srg@gmail.com
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;

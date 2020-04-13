import React, { Component } from "react";
import "./ComingSoon.css";
import "./Responsive.css";
import { Link } from "react-router-dom";

class ComingSoon extends Component {
  render() {
    return (
      <div className="main-area center-text">
        <div className="display-table">
          <div className="display-table-cell">
            <h1>
              <b>Comming Soon</b>
            </h1>
            <p className="desc font-white">
              Our website is currently undergoing scheduled maintenance. We
              Should be back shortly. Thank you for your patience.
            </p>
            <Link to="/">
              <a className="notify-btn" href="/">
                <b>Home</b>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ComingSoon;

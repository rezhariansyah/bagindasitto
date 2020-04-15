import React, { Fragment } from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid mobile">
        <div className="overlay" />
        <div className="inner">
          <p className="caption">
            "Hello, as a Bira based Architects, Boat Consultant, and Content
            Creator. Sitto and team has completed several boat design and
            construction project - Producing Eco Friendly Boat, Out of Box
            design, and Boat according to cruise safety standards. We're also
            your travelmate, <br/> let's go on an adventure"
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;

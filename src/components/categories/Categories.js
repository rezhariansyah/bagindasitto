import React from "react";
import { useHistory } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  var history = useHistory();

  var aboutnav = () => {
    history.push("/about");
    window.scrollTo(0, 0);
  };
  var travelnav = () => {
    history.push("/travel");
    window.scrollTo(0, 0);
  };
  var phinisinav = () => {
    history.push("/phinisi");
    window.scrollTo(0, 0);
  };
  var collaborationnav = () => {
    history.push("/collaboration");
    window.scrollTo(0, 0);
  };

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row justify-content-center mb-4">
        <h2 style={{ textShadow: "3px 3px 4px rgba(172,172,172,0.99)" }}>
          Categories
        </h2>
      </div>
      <div className="row justify-content-sm-center ">
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="card">
            <img src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590265128/about_bvb9jo.jpg" className="card-img-top" alt="..." />
            <div className="title">
              <input
                onClick={aboutnav}
                type="button"
                value="ABOUT"
                className="btn btn-outline-light"
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="card">
            <img src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590265310/travel_vrgeeu.jpg" className="card-img-top" alt="..." />
            <div className="title">
              <input
                onClick={travelnav}
                type="button"
                value="TRAVEL"
                className="btn btn-outline-light"
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="card">
            <img src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590265236/maps-min_ndgihd.png" className="card-img-top" alt="..." />
            <div className="title">
              <input
                onClick={phinisinav}
                type="button"
                value="PHINISI"
                className="btn btn-outline-light"
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="card">
            <img src="https://res.cloudinary.com/dewnmhir6/image/upload/v1590265362/tips-min_cxet94.jpg" className="card-img-top" alt="..." />
            <div className="title">
              <input
                onClick={collaborationnav}
                type="button"
                value="COLLABORATION"
                className="btn btn-outline-light"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

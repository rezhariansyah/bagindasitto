import React, { Component } from "react";
import BackToTop from "react-back-to-top-button";

class SchrollUp extends Component {
  render() {
    return (
      <BackToTop
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
        style={{ zIndex: 10 }}
      >
        <button type="button" className="btn btn-outline-dark">
          <i className="fa fa-chevron-up" aria-hidden="true" />
        </button>
        
      </BackToTop>
    );
  }
}

export default SchrollUp;

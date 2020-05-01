import React, { Component, Fragment } from "react";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import Banner1 from "../../components/banner1/Banner1";
import Instagram from "../../components/instagram/Instagram";
// import Galeries from "../../components/galleries/Galleries";
// import SimpleMap from "../../components/map/Map";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Categories />
        <Banner1 />
        <Instagram/>
        {/* <Galeries /> */}
        {/* <div style={{ height: '100vh', width: '100%' }}>
          <SimpleMap />
        </div> */}
      </Fragment>
    );
  }
}

export default Home;

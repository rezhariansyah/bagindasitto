import React, { Component, Fragment } from "react";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import Banner1 from "../../components/banner1/Banner1";
import Instagram from "../../components/instagram/Instagram";
import Footer from "../../components/footer/Footer";
import OurClients from "../../components/ourClients/OurClients";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Categories />
        <Banner1 />
        <OurClients />
        <Instagram />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;

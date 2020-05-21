import React, { Component, Fragment } from "react";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import Banner1 from "../../components/banner1/Banner1";
import Instagram from "../../components/instagram/Instagram";
import Footer from "../../components/footer/Footer";
import OurClients from "../../components/ourClients/OurClients";
import SchrollUp from "../../components/backToTop/BackToTop";
// import YoutubeContent from "../youtubeContent/YoutubeContent";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Categories />
        <SchrollUp />
        <OurClients />
        <Banner1 />
        <Instagram />
        <Footer />
        {/* <YoutubeContent videoId="HnlHcn8wxb0"/> */}
      </Fragment>
    );
  }
}

export default Home;

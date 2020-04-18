import React, { Component, Fragment } from 'react';
import Banner from '../../components/banner/Banner';
import Categories from '../../components/categories/Categories';
import LatestArticles from '../../components/latestArticles/LatestArticles';
import Banner1 from '../../components/banner1/Banner1';
import Galeries from '../../components/galleries/Galleries';
// import Footer from '../../components/footer/Footer';


class Home extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Categories />
                {/* <LatestArticles /> */}
                <Banner1 />
                <Galeries />
                {/* <Footer /> */}
            </Fragment>
        );
    }
}

export default Home;
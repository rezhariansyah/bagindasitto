import React, { Component, Fragment } from 'react';
import Banner from '../../components/banner/Banner';
import Categories from '../../components/categories/Categories';
import LatestArticles from '../../components/latestArticles/LatestArticles';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Categories />
                <LatestArticles />
            </Fragment>
        );
    }
}

export default Home;
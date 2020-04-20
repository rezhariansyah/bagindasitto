import React, { Component, Fragment } from 'react';
import Banner from '../../components/banner/Banner';
import Categories from '../../components/categories/Categories';
import Banner1 from '../../components/banner1/Banner1';
import Galeries from '../../components/galleries/Galleries';


class Home extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Categories />
                <Banner1 />
                <Galeries />
            </Fragment>
        );
    }
}

export default Home;
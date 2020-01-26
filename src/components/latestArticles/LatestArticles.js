import React from 'react';
import comingSoon from '../../assets/banners/icon/comingsoon.png';
import './LatestArticles.css';

const LatestArticles = () => {
    return (
        <div className="container">
            <div className="row justify-content-center mb-4 mt-5">
                <h2>LATEST ARTICLES</h2>
            </div>
            <div className="row justify-content-center mx-auto">
                <div className="col-md-12 text-center">
                    <img className="icon" src={comingSoon} alt=""/>
                </div>
                <div className="col-md-12 text-center">
                    <p style={{marginTop:"15px"}}>New start is <span style={{fontWeight:"bolder"}}>coming</span></p>
                </div>
                <div className="col-md-5 text-center mobileTitle">
                    <p>My website is under construction. but we are ready to go! I am preparing something extraordinary and interesting for you.</p>
                </div>
            </div>
        </div>
    );
};

export default LatestArticles;
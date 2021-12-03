import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import advbanner from '../../../assets/img/about/blog/1110x350/hbanner-2.jpg';

class Restaurentadv extends Component {
    render() {
        return (
            <div className="restaurent-ad section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ad-img p-relative">
                                <img src={advbanner} className="img-fluid full-width" alt="" />
                                <div className="overlay">
                                    <div className="content-box transform-center">
                                        <p className="text-custom-white">Quickmunch</p>
                                        <h3 className="text-custom-white mb-1">More than 3000 restaurents</h3>
                                        <h5 className="text-custom-white">Book a table easly at the best price</h5>
                                        <Link to="/restaurant" className="btn-first white-btn">View All</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Restaurentadv;
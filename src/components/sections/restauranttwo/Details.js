import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import restaurentlogo from '../../../assets/img/logo-4.jpg';

class Details extends Component {
    render() {
        return (
            <section className="restaurent-details  u-line">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading padding-tb-10">
                                <h3 className="text-light-black title fw-700 no-margin">Great Burger</h3>
                                <p className="text-light-black sub-title no-margin">4508 Fort Hamilton Pkwy <span><Link to="/checkout" className="text-success">Change locations</Link></span>
                                </p>
                                <div className="head-rating">
                                    <div className="rating"> <span className="fs-16 text-yellow">
                                        <i className="fas fa-star" />
                                    </span>
                                        <span className="fs-16 text-yellow">
                                            <i className="fas fa-star" />
                                        </span>
                                        <span className="fs-16 text-yellow">
                                            <i className="fas fa-star" />
                                        </span>
                                        <span className="fs-16 text-yellow">
                                            <i className="fas fa-star" />
                                        </span>
                                        <span className="fs-16 text-dark-white">
                                            <i className="fas fa-star" />
                                        </span>
                                        <span className="text-light-black fs-12 rate-data">58 rating</span>
                                    </div>
                                    <div className="product-review">
                                        <div className="restaurent-details-mob">
                                            <Link to="#"> <span className="text-light-black"><i className="fas fa-info-circle" /></span>
                                                <span className="text-dark-white">info</span>
                                            </Link>
                                        </div>
                                        <div className="restaurent-details-mob">
                                            <Link to="#"> <span className="text-light-black"><i className="fas fa-info-circle" /></span>
                                                <span className="text-dark-white">info</span>
                                            </Link>
                                        </div>
                                        <div className="restaurent-details-mob">
                                            <Link to="#"> <span className="text-light-black"><i className="fas fa-info-circle" /></span>
                                                <span className="text-dark-white">info</span>
                                            </Link>
                                        </div>
                                        <div className="restaurent-details-mob">
                                            <Link to="#"> <span className="text-light-black"><i className="fas fa-info-circle" /></span>
                                                <span className="text-dark-white">info</span>
                                            </Link>
                                        </div>
                                        <h6 className="text-light-black no-margin">91<span className="fs-14">% Food was good</span></h6>
                                        <h6 className="text-light-black no-margin">91<span className="fs-14">% Food was good</span></h6>
                                        <h6 className="text-light-black no-margin">91<span className="fs-14">% Food was good</span></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="restaurent-logo">
                                <img src={restaurentlogo} className="img-fluid" alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Details;
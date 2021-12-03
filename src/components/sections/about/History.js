import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import aboutimg1 from '../../../assets/img/about/blog/255x200/about-section-1.jpg';
import aboutimg2 from '../../../assets/img/about/blog/255x200/about-section-2.jpg';
import aboutimg3 from '../../../assets/img/about/blog/255x200/about-section-3.jpg';

class History extends Component {
    render() {
        return (
            <section className="aboutus section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="history-title mb-md-40">
                                <h2 className="text-light-black">A History Has Written For Quickmunch Explore <span className="text-light-green">more Our Story</span></h2>
                                <p className="text-light-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <p className="text-light-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                                <Link className="btn-second btn-submit" to="#">Our History</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="histry-img mb-xs-20">
                                        <img src={aboutimg3} className="img-fluid full-width" alt="Histry" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="histry-img mb-xl-20">
                                        <img src={aboutimg1} className="img-fluid full-width" alt="Histry" />
                                    </div>
                                    <div className="histry-img">
                                        <img src={aboutimg2} className="img-fluid full-width" alt="Histry" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default History;
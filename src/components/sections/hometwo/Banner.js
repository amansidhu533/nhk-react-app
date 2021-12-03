import React, { Component } from 'react';

import banner from '../../../assets/img/banner/banner-3.jpg';

class Banner extends Component {
    render() {
        return (
            <section className="banner-1 p-relative">
                <img src={banner} className="img-fluid full-width" alt="" />
                <div className="transform-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content-wrapper bg-white padding-20">
                                    <div className="content-box padding-tb-10">
                                        <h2 className="text-light-black fw-700">Find New York City restaurants near you and order online for free.</h2>
                                        <label className="text-light-black fw-700">Find a location near you</label>
                                        <div className="input-group row">
                                            <div className="input-group2 col-xl-8">
                                                <input type="search" className="form-control form-control-submit" placeholder="Enter street address or zip code" defaultValue="1246 57th St, Brooklyn, NY, 11219" />
                                                <div className="input-group-prepend">
                                                    <button className="input-group-text text-light-green"><i className="fab fa-telegram-plane" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="input-group-append col-xl-4">
                                                <button className="btn-second btn-submit full-width" type="button">Find food</button>
                                            </div>
                                        </div>
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

export default Banner;
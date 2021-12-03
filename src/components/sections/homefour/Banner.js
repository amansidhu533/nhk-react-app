import React, { Component } from 'react';

import banner from '../../../assets/img/banner/banner-4.jpg';

class Banner extends Component {
    render() {
        return (
            <section className="banner-1 banner-2 p-relative ">
                <img src={banner} className="img-fluid full-width" alt="" />
                <div className="transform-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 align-self-center">
                                <div className="right-side-content">
                                    <h1 className="text-custom-white fw-600">Increase takeout sales by 50%</h1>
                                    <h3 className="text-custom-white fw-400">with the largest delivery platform in the U.S. and Canada</h3>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="content-wrapper bg-white padding-20">
                                    <div className="content-box padding-tb-10 text-center">
                                        <h3 className="text-light-black fw-700">Get started with Quickmunch today!</h3>
                                        <form>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input type="text" name="#" className="form-control form-control-submit" placeholder="restaurent Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name="#" className="form-control form-control-submit" placeholder="restaurent Address" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" name="#" className="form-control form-control-submit" placeholder="Email I'D" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name="#" className="form-control form-control-submit" placeholder="Mobile Number" />
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn-second btn-submit full-width">Get Started</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import banner from '../../../assets/img/banner/banner-1.jpg';
import logo from '../../../assets/img/logo-2.jpg';
import burger from '../../../assets/img/banner/burger.png';
import smalllogo from '../../../assets/img/M.png';
import facebook from '../../../assets/img/facebook-logo.svg';
import google from '../../../assets/img/google-logo.png';

class Content extends Component {
    render() {
        return (
            <div className="inner-wrapper">
                <div className="container-fluid no-padding">
                    <div className="row no-gutters overflow-auto">
                        <div className="col-md-6">
                            <div className="main-banner">
                                <img src={banner} className="img-fluid full-width main-img" alt="banner" />
                                <div className="overlay-2 main-padding">
                                    <img src={logo} className="img-fluid" alt="logo" />
                                </div>
                                <img src={burger} className="footer-img" alt="footer-img" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section-2 user-page main-padding">
                                <div className="login-sec">
                                    <div className="login-box">
                                        <form>
                                            <h4 className="text-light-black fw-600">Sign in with your Quickmunch account</h4>
                                            <div className="row">
                                                <div className="col-12">
                                                    <p className="text-light-black">Have a corporate username? <Link to="/add-restaurant">Click here</Link>
                                                    </p>
                                                    <div className="form-group">
                                                        <label className="text-light-white fs-14">Email</label>
                                                        <input type="email" name="#" className="form-control form-control-submit" placeholder="Email I'd" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="text-light-white fs-14">Password</label>
                                                        <input type="password" id="password-field" name="#" className="form-control form-control-submit" defaultValue="password" placeholder="Password" required />
                                                        <div data-name="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
                                                    </div>
                                                    <div className="form-group checkbox-reset">
                                                        <label className="custom-checkbox mb-0">
                                                            <input type="checkbox" name="#" /> <span className="checkmark" /> Keep me signed in</label> <Link to="#">Reset password</Link>
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn-second btn-submit full-width">
                                                            <img src={smalllogo} alt="logo" />Sign in</button>
                                                    </div>
                                                    <div className="form-group text-center"> <span>or</span>
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn-second btn-facebook full-width">
                                                            <img src={facebook} alt="logo" />Continue with Facebook</button>
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn-second btn-google full-width">
                                                            <img src={google} alt="logo" />Continue with Google</button>
                                                    </div>
                                                    <div className="form-group text-center mb-0"> <Link to="/register">Create your account</Link>
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
            </div>
        );
    }
}

export default Content;
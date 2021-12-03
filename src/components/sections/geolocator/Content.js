import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from "react-bootstrap";

import banner from '../../../assets/img/banner/banner-2.jpg';
import logo from '../../../assets/img/logo-2.jpg';
import burger from '../../../assets/img/banner/burger.png';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalshow: true,
        };
        this.modalClose = this.modalClose.bind(this);
    }
    // Modal
    modalClose() {
        this.setState({ modalshow: false });
    }
    render() {
        return (
            <Fragment>
                <Modal show={this.state.modalshow} id="offer" onHide={this.modalClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header className="no-padding">
                        <div className="offer-content">
                            <h2 className="text-custom-white fw-700">Get $12 off <small className=" fw-700">your order*</small></h2>
                            <p className="text-custom-white">As an added treat, enjoy <strong>free delivery</strong> from <br />select restaurants automatically applied at checkout</p>
                        </div>
                        <button type="button" className="close" onClick={this.modalClose}>×</button>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="text-light-white fs-14">Email</label>
                                        <input type="email" name="#" className="form-control form-control-submit" placeholder="Email I'd" />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-light-white fs-14">ZIP Code</label>
                                        <input type="number" name="#" className="form-control form-control-submit" placeholder={10421} />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn-second btn-submit full-width">Save $12 on your first order</button>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="btn-second btn-default full-width text-light-green fw-700" onClick={this.modalClose}>Dismiss</button>
                                    </div>
                                    <div className="text-center"> <span className="text-light-black fs-12">*Valid on first order only, for one-time use, subject to Quickmunch’s verification. Additional terms may apply. By signing up, you agree to receive marketing and promotional emails and communications form Quickmunch</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
                <div className="inner-wrapper">
                    <div className="container-fluid no-padding">
                        <div className="row no-gutters">
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
                                <div className="section-2 main-page main-padding">
                                    <div className="top-nav">
                                        <h5><Link to="/home-v2" className="text-light-green fw-700">Explore</Link></h5>
                                        <h5><Link to="/login" className="text-light-green fw-700">Sign in</Link></h5>
                                    </div>
                                    <div className="login-box">
                                        <div className="col-12">
                                            <h1 className="text-light-black fw-700">Quickmunch food delivery every time</h1>
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
                </div>
            </Fragment>
        );
    }
}

export default Content;
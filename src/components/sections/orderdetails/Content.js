import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import Countdown from 'react-countdown';
import checkoutdata from '../../../data/checkoutdata.json';

import banner from '../../../assets/img/details/banner.jpg';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <Fragment><div className="time-box"> <span id="mb-hours">{hours}</span></div><div className="time-box"> <span id="mb-minutes">{minutes}</span></div><div className="time-box"> <span id="mb-seconds">{seconds}</span></div></Fragment>;
    }
};

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
                <section className="checkout-page section-padding bg-light-theme">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="tracking-sec">
                                    <div className="tracking-details padding-20 p-relative">
                                        <h5 className="text-light-black fw-600">Great Burger</h5>
                                        <span className="text-light-white">Estimated Delivery time</span>
                                        <h2 className="text-light-black fw-700 no-margin">9:00pm-9:10pm</h2>
                                        <div id="add-listing-tab" className="step-app">
                                            <ul className="step-steps">
                                                <li className="done">
                                                    <Link to="#"> <span className="number" />
                                                        <span className="step-name">Order sent<br />8:38pm</span>
                                                    </Link>
                                                </li>
                                                <li className="active">
                                                    <Link to="#"> <span className="number" />
                                                        <span className="step-name">In the works</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#"> <span className="number" />
                                                        <span className="step-name">Out of delivery</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#"> <span className="number" />
                                                        <span className="step-name">Delivered</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <button type="button" className="fullpageview text-light-black fw-600">Full Page View</button>
                                        </div>
                                    </div>
                                    <div className="tracking-map">
                                        <iframe id="pickupmap" title="map" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                                    </div>
                                </div>
                                {/* recipt */}
                                <div className="recipt-sec padding-20">
                                    <div className="recipt-name title u-line full-width mb-xl-20">
                                        <div className="recipt-name-box">
                                            <h5 className="text-light-black fw-600 mb-2">Great Burger</h5>
                                            <p className="text-light-white ">Estimated Delivery time</p>
                                        </div>
                                        <div className="countdown-box">
                                            <Countdown
                                                date={Date.now() + 31622400000}
                                                renderer={renderer}
                                            />
                                        </div>
                                    </div>
                                    <div className="u-line mb-xl-20">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="recipt-name full-width padding-tb-10 pt-0">
                                                    <h5 className="text-light-black fw-600">Delivery (ASAP) to:</h5>
                                                    <span className="text-light-white">Jhon Deo</span>
                                                    <span className="text-light-white">Home</span>
                                                    <span className="text-light-white">314 79th St</span>
                                                    <span className="text-light-white">Rite Aid, Brooklyn, NY, 11209</span>
                                                    <p className="text-light-white">(347) 123456789</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="recipt-name full-width padding-tb-10 pt-0">
                                                    <h5 className="text-light-black fw-600">Delivery instructions</h5>
                                                    <p className="text-light-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="ad-banner padding-tb-10 h-100">
                                                    <img src={banner} className="img-fluid full-width" alt="banner-adv" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="u-line mb-xl-20">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="text-light-black fw-600 title">Your Order <span><Link to="#" className="fs-12">Print recipt</Link></span></h5>
                                                <p className="title text-light-white">Nov 15, 2015 8:38pm <span className="text-light-black">Order #123456789012345</span>
                                                </p>
                                            </div>
                                            <div className="col-lg-12">
                                                {checkoutdata.map((item, i) => (
                                                    <div key={i} className="checkout-product">
                                                        <div className="img-name-value">
                                                            <div className="product-img">
                                                                <Link to="#">
                                                                    <img src={item.img} alt="#" />
                                                                </Link>
                                                            </div>
                                                            <div className="product-value"> <span className="text-light-white">{item.qty}</span>
                                                            </div>
                                                            <div className="product-name"> <span><Link to="#" className="text-light-white">{item.title}</Link></span>
                                                            </div>
                                                        </div>
                                                        <div className="price"> <span className="text-light-white">${item.price * item.qty}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="payment-method mb-md-40">
                                                <h5 className="text-light-black fw-600">Payment Method</h5>
                                                <div className="method-type"> <i className="far fa-credit-card text-dark-white" />
                                                    <span className="text-light-white">Credit Card</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="price-table u-line">
                                                <div className="item"> <span className="text-light-white">Item subtotal:</span>
                                                    <span className="text-light-white">$30.5</span>
                                                </div>
                                                <div className="item"> <span className="text-light-white">Delivery fee:</span>
                                                    <span className="text-light-white">$30.5</span>
                                                </div>
                                                <div className="item"> <span className="text-light-white">Tax and fees:</span>
                                                    <span className="text-light-white">$30.5</span>
                                                </div>
                                                <div className="item"> <span className="text-light-white">Driver tip:</span>
                                                    <span className="text-light-white">$30.5</span>
                                                </div>
                                            </div>
                                            <div className="total-price padding-tb-10">
                                                <h5 className="title text-light-black fw-700">Total: <span>$33.36</span></h5>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex"> <Link to="#" className="btn-first white-btn fw-600 help-btn">Need Help?</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
            </Fragment>
        );
    }
}

export default Content;
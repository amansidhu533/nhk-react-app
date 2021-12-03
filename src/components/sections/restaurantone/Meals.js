import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StickyBox from "react-sticky-box";
import Offerform from '../../layouts/Offerform';
import Testimonial from '../../layouts/Testimonial';
import Video from '../../layouts/Video';
import Foodlist from './Foodlist';

class Meals extends Component {
    render() {
        return (
            <section className="section-padding restaurent-meals bg-light-theme">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3">
                            <StickyBox class="stickysidebar" offsetTop={0} offsetBottom={20}>
                                <Testimonial />
                                <Offerform />
                            </StickyBox>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <Foodlist />
                        </div>
                        <div className="col-xl-3 col-lg-3">
                            <StickyBox class="stickysidebar" offsetTop={0} offsetBottom={20}>
                                <div className="sidebar">
                                    <Video />
                                    <div className="cart-detail-box">
                                        <div className="card">
                                            <div className="card-header padding-15 fw-700">Your Order</div>
                                            <div className="card-body no-padding" id="scrollstyle-4">
                                                <div className="cat-product-box">
                                                    <div className="cat-product">
                                                        <div className="cat-name">
                                                            <Link to="#">
                                                                <p className="text-light-green fw-700"><span className="text-dark-white">1</span> Chilli Chicken Pizza</p> <span className="text-light-white fw-700">small, chilli chicken</span>
                                                            </Link>
                                                        </div>
                                                        <div className="delete-btn">
                                                            <Link to="#" className="text-dark-white"> <i className="far fa-trash-alt" />
                                                            </Link>
                                                        </div>
                                                        <div className="price"> <Link to="#" className="text-dark-white fw-500">
                                                            $2.25
                      </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cat-product-box">
                                                    <div className="cat-product">
                                                        <div className="cat-name">
                                                            <Link to="#">
                                                                <p className="text-light-green fw-700"><span className="text-dark-white">1</span> Chilli Chicken Pizza</p> <span className="text-light-white fw-700">small, chilli chicken</span>
                                                            </Link>
                                                        </div>
                                                        <div className="delete-btn">
                                                            <Link to="#" className="text-dark-white"> <i className="far fa-trash-alt" />
                                                            </Link>
                                                        </div>
                                                        <div className="price"> <Link to="#" className="text-dark-white fw-500">
                                                            $2.25
                      </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cat-product-box">
                                                    <div className="cat-product">
                                                        <div className="cat-name">
                                                            <Link to="#">
                                                                <p className="text-light-green fw-700"><span className="text-dark-white">1</span> Chilli Chicken Pizza</p> <span className="text-light-white fw-700">small, chilli chicken</span>
                                                            </Link>
                                                        </div>
                                                        <div className="delete-btn">
                                                            <Link to="#" className="text-dark-white"> <i className="far fa-trash-alt" />
                                                            </Link>
                                                        </div>
                                                        <div className="price"> <Link to="#" className="text-dark-white fw-500">
                                                            $2.25
                      </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cat-product-box">
                                                    <div className="cat-product">
                                                        <div className="cat-name">
                                                            <Link to="#">
                                                                <p className="text-light-green fw-700"><span className="text-dark-white">1</span> Chilli Chicken Pizza</p> <span className="text-light-white fw-700">small, chilli chicken</span>
                                                            </Link>
                                                        </div>
                                                        <div className="delete-btn">
                                                            <Link to="#" className="text-dark-white"> <i className="far fa-trash-alt" />
                                                            </Link>
                                                        </div>
                                                        <div className="price"> <Link to="#" className="text-dark-white fw-500">
                                                            $2.25
                      </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-total">
                                                    <div className="total-price border-0"> <span className="text-dark-white fw-700">Items subtotal:</span>
                                                        <span className="text-dark-white fw-700">$9.00</span>
                                                    </div>
                                                    <div className="empty-bag padding-15 fw-700"> <Link to="#">Empty bag</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer padding-15"> <Link to="/checkout " className="btn-first green-btn text-custom-white full-width fw-500">Proceed to Checkout</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </StickyBox>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Meals;
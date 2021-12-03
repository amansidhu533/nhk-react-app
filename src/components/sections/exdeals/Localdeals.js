import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { processRatingStars } from '../../../helper/helper';
import product from "../../../data/product.json";

class Localdeals extends Component {
    render() {
        return (
            <section className="local-deals section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title">More local deals</h3>
                            </div>
                        </div>
                        {product.slice(0, 6).map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="product-box mb-xl-20">
                                    <div className="product-box-2">
                                        <div className="product-img">
                                            <Link to="/restaurant">
                                                <img src={item.img} className="img-fluid" alt="product-img" />
                                            </Link>
                                        </div>
                                        <div className="product-caption">
                                            <div className="title-box">
                                                <h6 className="product-title"><Link to="/restaurant" className="text-light-black">{item.title}</Link></h6>
                                            </div>
                                            <p className="text-light-white">
                                                {item.categories.map((category, i) => (
                                                    <span key={i}>{category.name}</span>
                                                ))}
                                            </p>
                                            <div className="product-details">
                                                <div className="price-time"> <span className="text-light-black time">{item.time} min</span>
                                                    <span className="text-light-white price">${item.price} min</span>
                                                </div>
                                                <div className="rating"> <span>
                                                    {processRatingStars(item.rating)}
                                                </span>
                                                    <span className="text-light-white text-right">{item.totalRating} ratings</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-footer-2">
                                        <div className="discount"> <span className="text-success fs-12">${item.discountprice} off</span>
                                        </div>
                                        <div className="discount-coupon"> <span className="text-light-white fs-12">First order only</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-2"> <Link to="/restaurant" className="btn-first white-btn text-light-green fw-600">View More</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Localdeals;
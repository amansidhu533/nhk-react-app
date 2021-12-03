import React, { Component } from 'react';
import review from '../../../data/restaurantreview.json';
import { restaurantRatingStars } from '../../../helper/helper';

import reviewfooter from '../../../assets/img/review-footer.png';

class Review extends Component {
    render() {
        return (
            <section className="section-padding restaurent-review smoothscroll" id="review">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title">Reviews for Great Burger</h3>
                            </div>
                            <div className="restaurent-rating mb-xl-20">
                                <div className="star"> <span className="text-yellow fs-16">
                                    <i className="fas fa-star" />
                                </span>
                                    <span className="text-yellow fs-16">
                                        <i className="fas fa-star" />
                                    </span>
                                    <span className="text-yellow fs-16">
                                        <i className="fas fa-star" />
                                    </span>
                                    <span className="text-dark-white fs-16">
                                        <i className="fas fa-star" />
                                    </span>
                                    <span className="text-dark-white fs-16">
                                        <i className="fas fa-star" />
                                    </span>
                                </div> <span className="fs-12 text-light-black">58 Ratings</span>
                            </div>
                            <p className="text-light-black mb-xl-20">Here's what people are saying:</p>
                            <ul>
                                <li>
                                    <h6 className="text-light-black mb-1">73%</h6>
                                    <span className="text-light-black fs-12 fw-400">Food was good</span>
                                </li>
                                <li>
                                    <h6 className="text-light-black mb-1">85%</h6>
                                    <span className="text-light-black fs-12 fw-400">Delivery was on time</span>
                                </li>
                                <li>
                                    <h6 className="text-light-black mb-1">68%</h6>
                                    <span className="text-light-black fs-12 fw-400">Order was accurate</span>
                                </li>
                            </ul>
                            <div className="u-line" />
                        </div>
                        <div className="col-md-12">
                            {review.map((item, i) => (
                                <div key={i} className="review-box">
                                    <div className="review-user">
                                        <div className="review-user-img">
                                            <img src={item.userimg} className="rounded-circle" alt="#" />
                                            <div className="reviewer-name">
                                                <p className="text-light-black fw-600">{item.username} <small className="text-light-white fw-500">{item.userlocation}</small>
                                                </p> <i className="fas fa-trophy text-black" /><span className="text-light-black">{item.userpost}</span>
                                            </div>
                                        </div>
                                        <div className="review-date">
                                            <span className="text-light-white">{item.commentdate}</span>
                                        </div>
                                    </div>
                                    <div className="ratings">
                                        {restaurantRatingStars(item.rating)}
                                    </div>
                                    <p className="text-light-black">{item.comment}</p> <span className="text-light-white fs-12 food-order">Kathy ordered:</span>
                                    <ul className="food">
                                        <li>
                                            <button className="add-pro bg-gradient-red">Coffee <span className="close">+</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="add-pro bg-dark">Pizza <span className="close">+</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="add-pro bg-gradient-green">Noodles <span className="close">+</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="add-pro bg-gradient-orange">Burger <span className="close">+</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="col-12">
                            <div className="review-img">
                                <img src={reviewfooter} className="img-fluid" alt="#" />
                                <div className="review-text">
                                    <h2 className="text-light-white mb-2 fw-600">Be one of the first to review</h2>
                                    <p className="text-light-white">Order now and write a review to give others the inside scoop.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Review;
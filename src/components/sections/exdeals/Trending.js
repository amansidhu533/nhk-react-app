import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { processRatingStars } from '../../../helper/helper';
import product from "../../../data/product.json";

// install Swiper components
SwiperCore.use([Navigation]);

class Trending extends Component {
    render() {
        const settings = {
            slidesPerView: 1,
            spaceBetween: 15,
            loop: false,
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                }
            }
        }
        return (
            <section className="trending section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title">Trending near you</h3>
                                <p className="text-light-black">Explore deals at the most popular spots</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <Swiper className="trending-slider swiper-container" {...settings} navigation>
                                {product.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="product-box">
                                            <div className="product-img">
                                                <Link to="/restaurant">
                                                    <img src={item.img} className="img-fluid full-width" alt="product-img" />
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
                                                    <div className="rating">
                                                        <span>
                                                            {processRatingStars(item.rating)}
                                                        </span>
                                                        <span className="text-light-white text-right">{item.totalRating} ratings</span>
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
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Trending;
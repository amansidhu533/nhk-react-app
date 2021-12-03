import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import partnerlist from '../../../data/partner.json';

// install Swiper components
SwiperCore.use([Navigation]);

class Partners extends Component {
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
                    slidesPerView: 3,
                    spaceBetween: 15,
                }
            }
        }
        return (
            <section className="featured-partners section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title">Featured partners</h3>
                                <p className="text-light-black">Get exclusive deals and free food</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <Swiper className="featured-partners-slider swiper-container" {...settings} navigation>
                                {partnerlist.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="featured-product">
                                            <div className="featured-img">
                                                <Link to="/restaurant">
                                                    <img src={item.img} className="img-fluid full-width" alt="#" />
                                                </Link>
                                                <div className="overlay-2 padding-10"> <span className="deal-tag">Only on Quickmunch</span>
                                                </div>
                                            </div>
                                            <div className="featured-product-details">
                                                <div className="pro-logo">
                                                    <img src={item.logo} className="img-fluid" alt="#" />
                                                </div>
                                                <div className="pro-title">
                                                    <h6 className="mb-1"><Link to="/restaurant" className="text-light-black fw-600">{item.title}</Link></h6>
                                                    <p className="text-light-white fs-12 mb-1">
                                                        {item.categories.map((text, i) => (
                                                            <span key={i}>
                                                                {text.name}
                                                            </span>
                                                        ))}
                                                    </p>
                                                    <span className="text-orange">{item.status}</span>
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

export default Partners;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import testimonialpost from '../../data/restaurantreview.json';
import { restaurantRatingStars } from '../../helper/helper';

// install Swiper components
SwiperCore.use([Navigation]);

class Testimonial extends Component {
    render() {
        const settings = {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: false,
        }
        return (
            <Swiper className="advertisement-slider swiper-container h-auto mb-xl-20" {...settings} navigation>
                {testimonialpost.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="testimonial-wrapper">
                            <div className="testimonial-box">
                                <div className="testimonial-img p-relative">
                                    <Link to="/restaurant">
                                        <img src={item.img} className="img-fluid full-width" alt="" />
                                    </Link>
                                    <div className="overlay">
                                        <div className="brand-logo">
                                            <img src={item.logo} className="img-fluid" alt="" />
                                        </div>
                                        <div className="add-fav text-light-white"><img src="assets/img/svg/heart-1.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-caption padding-15">
                                    <p className="text-light-white text-uppercase no-margin fs-12">{item.tag}</p>
                                    <h5 className="fw-600"><Link to="/restaurant" className="text-light-black">{item.restaurantname}</Link></h5>
                                    <div className="testimonial-user-box">
                                        <img src={item.userimg} className="rounded-circle" alt="" />
                                        <div className="testimonial-user-name">
                                            <p className="text-light-black fw-600">{item.username}</p> <i className="fas fa-trophy text-black" /><span className="text-light-black">{item.userpost}</span>
                                        </div>
                                    </div>
                                    <div className="ratings">
                                        {restaurantRatingStars(item.rating)}
                                    </div>
                                    <p className="text-light-black">{item.comment.slice(0,30)}...</p>
                                    <p className="text-light-white fw-100"><strong className="text-light-black fw-700">Local delivery: </strong> From ${item.price} ({item.distance})</p>
                                    <Link to="/checkout" className="btn-second btn-submit">Order Now</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
}

export default Testimonial;
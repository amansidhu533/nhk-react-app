import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import img1 from '../../../assets/img/about/blog/1920x700/banner-1.jpg';
import img2 from '../../../assets/img/about/blog/1920x700/banner-2.jpg';
import img3 from '../../../assets/img/about/blog/1920x700/banner-3.jpg';

// install Swiper components
SwiperCore.use([Navigation]);

const bannerpost = [
    { img: img1, postition: 'justify-content-start', colpostition: '', title: 'Increase takeout sales by 50%', text: 'with the largest delivery platform in the U.S. and Canada', btntext: 'Learn More.' },
    { img: img2, postition: 'justify-content-center', colpostition: 'text-center', title: 'Increase takeout sales by 50%', text: 'with the largest delivery platform in the U.S. and Canada', btntext: 'Learn More.' },
    { img: img3, postition: 'justify-content-end', colpostition: 'text-right', title: 'Increase takeout sales by 50%', text: 'with the largest delivery platform in the U.S. and Canada', btntext: 'Learn More.' },
];

class Banner extends Component {
    render() {
        const settings = {
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            speed: 1000,
            grabCursor: true,
            watchSlidesProgress: true,
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true
        }
        return (
            <Swiper tag="section" className="about-us-slider swiper-container p-relative" navigation {...settings}>
                {bannerpost.map((item, i) => (
                    <SwiperSlide key={i} className="swiper-slide slide-item">
                        <img src={item.img} className="img-fluid full-width" alt="" />
                        <div className="transform-center">
                            <div className="container">
                                <div className={"row " + item.postition + ""}>
                                    <div className="col-lg-8 align-self-center">
                                        <div className={"right-side-content " + item.colpostition + ""}>
                                            <h1 className="text-custom-white fw-600">{item.title}</h1>
                                            <h3 className="text-custom-white fw-400">{item.text}</h3>
                                            <Link to="/restaurant" className="btn-second btn-submit">{item.btntext}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overlay overlay-bg" />
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
}

export default Banner;
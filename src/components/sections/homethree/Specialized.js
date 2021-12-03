import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import img1 from '../../../assets/img/restaurants/604x240/shop-5.jpg';
import img2 from '../../../assets/img/restaurants/604x240/shop-6.jpg';
import img3 from '../../../assets/img/restaurants/604x240/shop-7.jpg';
import img4 from '../../../assets/img/restaurants/604x240/shop-8.jpg';

// install Swiper components
SwiperCore.use([Navigation]);

const deliverbox = [
    {
        img: img1,
        title: 'Quickmunch® (Fillmore)',
        foodtype: [
            {
                name: 'American',
            },
            {
                name: 'Fast Food',
            },
            {
                name: 'Burger',
            },
        ],
        description: [
            {
                name: '20-30 Min',
            },
            {
                name: 4.2,
            },
            {
                name: '2.99 Delivery Fee',
            },
        ],
    },
    {
        img: img2,
        title: 'Quickmunch® (Fillmore)',
        foodtype: [
            {
                name: 'American',
            },
            {
                name: 'Fast Food',
            },
            {
                name: 'Burger',
            },
        ],
        description: [
            {
                name: '20-30 Min',
            },
            {
                name: 4.2,
            },
            {
                name: '2.99 Delivery Fee',
            },
        ],
    },
    {
        img: img3,
        title: 'Quickmunch® (Fillmore)',
        foodtype: [
            {
                name: 'American',
            },
            {
                name: 'Fast Food',
            },
            {
                name: 'Burger',
            },
        ],
        description: [
            {
                name: '20-30 Min',
            },
            {
                name: 4.2,
            },
            {
                name: '2.99 Delivery Fee',
            },
        ],
    },
    {
        img: img4,
        title: 'Quickmunch® (Fillmore)',
        foodtype: [
            {
                name: 'American',
            },
            {
                name: 'Fast Food',
            },
            {
                name: 'Burger',
            },
        ],
        description: [
            {
                name: '20-30 Min',
            },
            {
                name: 4.2,
            },
            {
                name: '2.99 Delivery Fee',
            },
        ],
    },
];
class Specialized extends Component {
    render() {
        const settings = {
            slidesPerView: 1,
            spaceBetween: 15,
            loop: false,
            breakpoints: {
                576: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
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
        };
        return (
            <section className="section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h6 className="text-light-green sub-title">Feel of Taste</h6>
                                <h3 className="text-light-black header-title title">Specialized Food</h3>
                            </div>
                        </div>
                        <div className="col-12">
                            <Swiper className="kosher-delivery-slider swiper-container" {...settings} navigation>
                                {deliverbox.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="product-box-3">
                                            <div className="product-img">
                                                <Link to="#">
                                                    <img src={item.img} className="img-fluid full-width" alt="#" />
                                                </Link>
                                            </div>
                                            <div className="product-caption">
                                                <div className="padding-tb-10">
                                                    <h5 className="mb-1"><Link to="#" className="text-light-black">{item.title}</Link></h5>
                                                    <ul className="food-type">
                                                        <li className="text-light-white">$</li>
                                                        {item.foodtype.map((foodtype, i) => (
                                                            <li className="text-light-white" key={i}>{foodtype.name}</li>
                                                        ))}
                                                    </ul>
                                                    <ul className="food-description">
                                                        {item.description.map((description, i) => (
                                                            <li className="text-light-black" key={i}>{description.name}</li>
                                                        ))}
                                                    </ul>
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

export default Specialized;
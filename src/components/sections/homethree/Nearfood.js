import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import img1 from '../../../assets/img/restaurants/220x220/nearme-1.jpg';
import img2 from '../../../assets/img/restaurants/220x220/nearme-2.jpg';
import img3 from '../../../assets/img/restaurants/220x220/nearme-3.jpg';
import img4 from '../../../assets/img/restaurants/220x220/nearme-4.jpg';
import img5 from '../../../assets/img/restaurants/220x220/nearme-5.jpg';
import img6 from '../../../assets/img/restaurants/220x220/nearme-6.jpg';
import img7 from '../../../assets/img/restaurants/220x220/nearme-7.jpg';
import img8 from '../../../assets/img/restaurants/220x220/nearme-8.jpg';

// install Swiper components
SwiperCore.use([Navigation]);

const foodslider = [
    { img: img1, title: 'Chicken Special Pizza' },
    { img: img2, title: 'Hakka Noodles' },
    { img: img3, title: 'Vegan Burger' },
    { img: img4, title: 'Sticky Date Cake' },
    { img: img5, title: 'Thai Dumpling Soup' },
    { img: img6, title: 'American Chop Suey' },
    { img: img7, title: 'Italian Sausage Pasta' },
    { img: img8, title: 'Spaghetti' },
    { img: img2, title: 'Mexican Street Tacos' },
];

class Nearfood extends Component {
    render() {
        const settings = {
            slidesPerView: 2,
            spaceBetween: 15,
            loop: false,
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1400: {
                    slidesPerView: 8,
                    spaceBetween: 15,
                }
            }
        };
        return (
            <section className="browse-cat section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title">Food Near Me <span className="fs-14"><Link to="/restaurant">View All</Link></span></h3>
                            </div>
                        </div>
                        <div className="col-12">
                            <Swiper className="food-near-me swiper-container" {...settings} navigation>
                                {foodslider.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <Link to="/restaurant" className="categories">
                                            <div className="icon icon2 text-custom-white bg-light-green ">
                                                <img src={item.img} className="rounded-circle" alt="" />
                                            </div>
                                            <span className="text-light-black cat-name">{item.title}</span>
                                        </Link>
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

export default Nearfood;
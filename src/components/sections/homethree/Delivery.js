import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import restaurentlist from '../../../data/restaurantlist.json'


// install Swiper components
SwiperCore.use([Navigation]);

class Delivery extends Component {
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
                                <h3 className="text-light-black header-title title">Kosher Delivery</h3>
                            </div>
                        </div>
                        <div className="col-12">
                            <Swiper className="kosher-delivery-slider swiper-container" {...settings} navigation>
                                {restaurentlist.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="product-box-3">
                                            <div className="product-img">
                                                <Link to="#">
                                                    <img src={item.img} className="img-fluid full-width" alt="#" />
                                                </Link>
                                            </div>
                                            <div className="product-caption">
                                                <div className="padding-tb-10">
                                                    <h5 className="mb-1"><Link to="#" className="text-light-black">{item.title}® ({item.specialization})</Link></h5>
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

export default Delivery;
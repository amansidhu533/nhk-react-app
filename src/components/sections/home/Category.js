import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import categories from '../../../data/category.json';

// install Swiper components
SwiperCore.use([Navigation]);

class Category extends Component {
    render() {
        const settings = {
            slidesPerView: 2,
            spaceBetween: 15,
            loop: false,
            breakpoints: {
                576: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                992: {
                    slidesPerView: 6,
                    spaceBetween: 40,
                },
                1200: {
                    slidesPerView: 8,
                    spaceBetween: 15,
                },
            }
        }
        return (
            <section className="browse-cat u-line section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title">Browse by cuisine <span className="fs-14"><Link to="/restaurant">See all restaurant</Link></span></h3>
                            </div>
                        </div>
                        <div className="col-12">
                            <Swiper className="category-slider swiper-container" {...settings} navigation>
                                {categories.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <Link to="/restaurant" className="categories">
                                            <div className="icon text-custom-white bg-light-green ">
                                                <img src={item.img} className="rounded-circle" alt="" />
                                            </div> <span className="text-light-black cat-name">{item.title} </span>
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

export default Category;
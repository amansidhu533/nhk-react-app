import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import productbox from '../../../data/product.json';
import { processRatingStars, fetchFlavorIcon } from '../../../helper/helper';
import Sidebar from './Sidebar';

// install Swiper components
SwiperCore.use([Navigation]);

class Content extends Component {
    render() {
        const settings = {
            slidesPerView: 2,
            spaceBetween: 15,
            loop: false,
            breakpoints: {
                576: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 15,
                },
                1400: {
                    slidesPerView: 8,
                    spaceBetween: 15,
                },
                1800: {
                    slidesPerView: 10,
                    spaceBetween: 15,
                },
            }
        };
        const setting = {
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
            <div className="most-popular section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <aside className="col-lg-3 mb-md-40">
                            <Sidebar/>
                        </aside>
                        <div className="col-lg-9 browse-cat border-0">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-header-left">
                                        <h3 className="text-light-black header-title title-2">Most popular near you <small><Link to="#" className="text-dark-white fw-600">29 restaurant</Link></small></h3>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <Swiper className="popular-item-slider swiper-container" {...settings} navigation>
                                        {productbox.map((item, i) => (
                                            <SwiperSlide key={i}>
                                                <Link to="/restaurant" className="categories">
                                                    <div className="icon text-custom-white bg-light-green ">
                                                        <img src={item.img} className="rounded-circle" alt="categories" />
                                                    </div> <span className="text-light-black cat-name">{item.title}</span>
                                                </Link>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <div className="sort-tag-filter padding-15">
                                        <div className="restaurent-tags"> <span className="tags">open now <span className="close">x</span></span> <span className="tags">new <span className="close">x</span></span>
                                        </div>
                                        <div className="sorting"> <span className="text-dark-white fs-16 fw-600">Sort: </span>
                                            <select>
                                                <option>Default</option>
                                                <option>Price</option>
                                                <option>Rating</option>
                                                <option>Distance</option>
                                            </select>
                                        </div>
                                    </div>
                                    {productbox.slice(0,3).map((item, i) => (
                                        <div key={i} className="product-list-view">
                                            <div className="product-list-info">
                                                <div className="product-list-img">
                                                    <Link to="/restaurant">
                                                        <img src={item.img} className="img-fluid" alt="#" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="product-right-col">
                                                <div className="product-list-details">
                                                    <div className="product-list-title">
                                                        <div className="product-info">
                                                            <h6><Link to="/restaurant" className="text-light-black fw-600">{item.title}</Link></h6>
                                                            <p className="text-light-white fs-12">{item.categories.map((category, i) => (
                                                                <span key={i}>{category.name}</span>
                                                            ))}</p>
                                                        </div>
                                                    </div>
                                                    <div className="product-detail-right-box">
                                                        <div className="product-list-rating text-center">
                                                            <div className="ratings">
                                                                {processRatingStars(item.rating)}
                                                            </div>
                                                            <div className="rating-text">
                                                                <p className="text-light-white fs-12">{item.totalRating} ratings</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-list-tags">
                                                            {
                                                                item.discount > 0 || item.discount !== '' ? <span className="text-custom-white rectangle-tag bg-gradient-red"> {item.discount}% </span> : ''
                                                            }
                                                            {
                                                                item.discount > 0 || item.discount !== '' ? <Fragment /> : ''
                                                            }
                                                            {
                                                                item.trending === true ? <span className="rectangle-tag bg-gradient-green text-custom-white">Trending</span> : ''
                                                            }
                                                        </div>
                                                        <div className="product-price-icon"> <span className="text-success fs-16">$</span>
                                                            <span className="text-success fs-16">$</span>
                                                            <span className="text-success fs-16">$</span>
                                                            <span className="text-success fs-16">$</span>
                                                            <span className="text-success fs-16">$</span>
                                                        </div>
                                                        <div className="product-list-label">
                                                            {
                                                                item.label === true ? <span className="rectangle-tag bg-gradient-red text-custom-white">Label</span> : ''
                                                            }
                                                            {
                                                                item.combo === true ? <span className="rectangle-tag bg-dark text-custom-white">Combo</span> : ''
                                                            }
                                                        </div>
                                                        <div className="product-list-price">
                                                            <div className="price">
                                                                <h6 className="text-light-black no-margin">${item.price}</h6>
                                                                <span className="text-light-white">Minimum</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-list-bottom">
                                                    <div className="product-list-type"> <span className="text-light-white new">New</span>
                                                        {item.flavors.map((flavor, i) => (
                                                            <span key={i} className="text-custom-white square-tag">
                                                                <img src={fetchFlavorIcon(flavor)} alt={flavor} />
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="mob-tags-label">
                                                        {
                                                            item.discount > 0 || item.discount !== '' ? <span className="text-custom-white rectangle-tag bg-gradient-red"> {item.discount}% </span> : ''
                                                        }
                                                        {
                                                            item.discount > 0 || item.discount !== '' ? <Fragment /> : ''
                                                        }
                                                        {
                                                            item.trending === true ? <span className="rectangle-tag bg-gradient-green text-custom-white">Trending</span> : ''
                                                        }
                                                        {
                                                            item.label === true ? <span className="rectangle-tag bg-gradient-red text-custom-white">Label</span> : ''
                                                        }
                                                        {
                                                            item.combo === true ? <span className="rectangle-tag bg-dark text-custom-white">Combo</span> : ''
                                                        }
                                                    </div>
                                                    <div className="product-list-time"> <span className="circle-tag">
                                                        <img src="assets/img/svg/heart-1.svg" alt="tag" />
                                                    </span>
                                                        <ul>
                                                            <li className="text-light-white">1.18 mi</li>
                                                            <li className="text-light-white">{item.time} mins</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-12">
                                    <div className="section-header-left">
                                        <h3 className="text-light-black header-title title">Offers near you</h3>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <Swiper className="near-offer-slider swiper-container  mb-xl-20" {...setting} navigation>
                                        {productbox.map((item, i) => (
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
                                <div className="col-12">
                                {productbox.slice(0,6).map((item, i) => (
                                        <div key={i} className="product-list-view">
                                            <div className="product-list-info">
                                                <div className="product-list-img">
                                                    <Link to="/restaurant">
                                                        <img src={item.img} className="img-fluid" alt="#" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="product-right-col">
                                                <div className="product-list-details">
                                                    <div className="product-list-title">
                                                        <div className="product-info">
                                                            <h6><Link to="/restaurant" className="text-light-black fw-600">{item.title}</Link></h6>
                                                            <p className="text-light-white fs-12">{item.categories.map((category, i) => (
                                                                <span key={i}>{category.name}</span>
                                                            ))}</p>
                                                        </div>
                                                    </div>
                                                    <div className="product-detail-right-box">
                                                        <div className="product-list-rating text-center">
                                                            <div className="ratings">
                                                                {processRatingStars(item.rating)}
                                                            </div>
                                                            <div className="rating-text">
                                                                <p className="text-light-white fs-12">{item.totalRating} ratings</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-list-tags">
                                                            {
                                                                item.discount > 0 || item.discount !== '' ? <span className="text-custom-white rectangle-tag bg-gradient-red"> {item.discount}% </span> : ''
                                                            }
                                                            {
                                                                item.discount > 0 || item.discount !== '' ? <Fragment /> : ''
                                                            }
                                                            {
                                                                item.trending === true ? <span className="rectangle-tag bg-gradient-green text-custom-white">Trending</span> : ''
                                                            }
                                                        </div>
                                                        <div className="product-price-icon"> <span className="text-success fs-16">$</span>
                                                            <span className="text-success fs-16">$</span>
                                                            <span className="text-success fs-16">$</span>
                                                            <span className="text-success fs-16">$</span>
                                                            <span className="text-success fs-16">$</span>
                                                        </div>
                                                        <div className="product-list-label">
                                                            {
                                                                item.label === true ? <span className="rectangle-tag bg-gradient-red text-custom-white">Label</span> : ''
                                                            }
                                                            {
                                                                item.combo === true ? <span className="rectangle-tag bg-dark text-custom-white">Combo</span> : ''
                                                            }
                                                        </div>
                                                        <div className="product-list-price">
                                                            <div className="price">
                                                                <h6 className="text-light-black no-margin">${item.price}</h6>
                                                                <span className="text-light-white">Minimum</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-list-bottom">
                                                    <div className="product-list-type"> <span className="text-light-white new">New</span>
                                                        {item.flavors.map((flavor, i) => (
                                                            <span key={i} className="text-custom-white square-tag">
                                                                <img src={fetchFlavorIcon(flavor)} alt={flavor} />
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="mob-tags-label">
                                                        {
                                                            item.discount > 0 || item.discount !== '' ? <span className="text-custom-white rectangle-tag bg-gradient-red"> {item.discount}% </span> : ''
                                                        }
                                                        {
                                                            item.discount > 0 || item.discount !== '' ? <Fragment /> : ''
                                                        }
                                                        {
                                                            item.trending === true ? <span className="rectangle-tag bg-gradient-green text-custom-white">Trending</span> : ''
                                                        }
                                                        {
                                                            item.label === true ? <span className="rectangle-tag bg-gradient-red text-custom-white">Label</span> : ''
                                                        }
                                                        {
                                                            item.combo === true ? <span className="rectangle-tag bg-dark text-custom-white">Combo</span> : ''
                                                        }
                                                    </div>
                                                    <div className="product-list-time"> <span className="circle-tag">
                                                        <img src="assets/img/svg/heart-1.svg" alt="tag" />
                                                    </span>
                                                        <ul>
                                                            <li className="text-light-white">1.18 mi</li>
                                                            <li className="text-light-white">{item.time} mins</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="custom-pagination">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <Link className="page-link" to="#" aria-label="Previous"> <span aria-hidden="true">«</span>
                                                        <span className="sr-only">Previous</span>
                                                    </Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link>
                                                </li>
                                                <li className="page-item active"><Link className="page-link" to="#">2</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#" aria-label="Next"> <span aria-hidden="true">»</span>
                                                        <span className="sr-only">Next</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
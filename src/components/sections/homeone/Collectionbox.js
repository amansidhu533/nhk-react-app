import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { calculateRating, processRatingStars, fetchFlavorIcon } from '../../../helper/helper';
import product from "../../../data/product.json";

// Extra
import largeimg1 from '../../../assets/img/restaurants/255x587/Banner-10.jpg';
// Top collection
import tpcl1 from '../../../assets/img/restaurants/540x300/collection-1.jpg';
import tpcl2 from '../../../assets/img/restaurants/540x300/collection-2.jpg';
// Top collection
const topcollection = [
    { img: tpcl1, cat: 'Top rated' },
    { img: tpcl2, cat: 'Top rated' },
];

class Collectionbox extends Component {
    render() {
        return (
            <section className="ex-collection section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title">Explore our collections</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {topcollection.map((item, i) => (
                            <div key={i} className="col-md-6">
                                <div className="ex-collection-box mb-xl-20">
                                    <img src={item.img} className="img-fluid full-width" alt="" />
                                    <div className="category-type overlay padding-15"> <Link to="/restaurant" className="category-btn">{item.cat}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="large-product-box mb-xl-20 p-relative">
                                <img src={largeimg1} className="img-fluid full-width" alt="" />
                                <div className="category-type overlay padding-15">
                                    <button className="category-btn">Most popular near you</button> 
                                    <Link to="/restaurant" className="btn-first white-btn text-light-black fw-600 full-width">See all</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="row">
                                {product.map((item, i) => (
                                    <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="product-box mb-xl-20">
                                            <div className="product-img">
                                                <Link to="/restaurant">
                                                    <img src={item.img} className="img-fluid full-width" alt="product-img" />
                                                </Link>
                                                <div className="overlay">
                                                    <div className="product-tags padding-10">
                                                        <span className="circle-tag">
                                                            <img src="assets/img/svg/heart-1.svg" alt="tag" />
                                                        </span>
                                                        {
                                                            item.trending === true ? <span className="type-tag bg-gradient-green text-custom-white">Trending</span> : ''
                                                        }
                                                        {
                                                            item.discount > 0 || item.discount !== '' ? <div className="custom-tag"> <span className="text-custom-white rectangle-tag bg-gradient-red"> {item.discount}% </span> </div> : ''
                                                        }
                                                        {
                                                            item.discount > 0 || item.discount !== '' ? <Fragment /> : ''
                                                        }

                                                    </div> 
                                                </div>
                                            </div>
                                            <div className="product-caption">
                                                <div className="title-box">
                                                    <h6 className="product-title"><Link to="/restaurant" className="text-light-black "> {item.title}</Link></h6>
                                                    <div className="tags">
                                                        <span className={"text-custom-white rectangle-tag " + calculateRating(item.rating) + ""}>
                                                            {item.rating}
                                                        </span>
                                                    </div>
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
                                                <div className="product-footer">
                                                    {item.flavors.map((flavor, i) => (
                                                        <span key={i} className="text-custom-white square-tag">
                                                            <img src={fetchFlavorIcon(flavor)} alt={flavor} />
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Collectionbox;
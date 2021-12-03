import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import recentblog from '../../data/recentblog.json';
import tagpost from '../../data/tag.json';
import blogcategory from '../../data/blogcategory.json';
import product from '../../data/product.json';
import { calculateRating, processRatingStars, fetchFlavorIcon } from '../../helper/helper';

class Blogsidebar extends Component {
    render() {
        return (
            <Fragment>
                <div className="main-box padding-20 side-blog mb-xl-20">
                    <h4 className="text-light-black">Popular Post</h4>
                    {recentblog.slice(0.4).map((item, i) => (
                        <article key={i} className="side-post pb-xl-20 mb-xl-20 u-line">
                            <div className="thumb-img">
                                <Link to="/blog-details">
                                    <img src={item.img} alt="thumb" />
                                </Link>
                            </div>
                            <div className="content-wrap">
                                <div className="entry-meta-content">
                                    <h5 className="entry-title">
                                        <Link to="/blog-details" className="text-light-black">{item.title}</Link>
                                    </h5>
                                    <div className="entry-tye"> <span className="text-light-green fw-600">{item.postdate}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="main-box padding-20 blog-tags mb-xl-20">
                    <h4 className="text-light-black">Tags</h4>
                    {tagpost.map((item, i) => (
                        <Link to="/blog-details" key={i}>#{item.tag}</Link>
                    ))}
                </div>
                <div className="main-box padding-20 trending-blog-cat mb-xl-20">
                    <h4 className="text-light-black">Categories</h4>
                    <ul>
                        {blogcategory.slice(0, 7).map((item, i) => (
                            <li key={i} className="pb-xl-20 u-line mb-xl-20">
                                <Link to="/blog-details" className="text-light-black fw-600">
                                    {item.title}
                                    <span className="text-light-white fw-400">({item.count})</span></Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="main-box padding-20">
                    {product.slice(0,2).map((item, i) => (
                        <div key={i} className="product-box mb-xl-20">
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
                    ))}
                </div>
            </Fragment>
        );
    }
}

export default Blogsidebar;
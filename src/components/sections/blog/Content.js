import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blogsidebar from '../../layouts/Blogsidebar';
import Findfood from '../../layouts/Findfood';
import blogpost from '../../../data/blogpost.json';
import Testimonial from '../../layouts/Testimonial';

import largeimg1 from '../../../assets/img/blog/446x1025/ad-1.jpg';

class Content extends Component {
    render() {
        return (
            <section className="our-articles bg-light-theme section-padding pt-0">
                <div className="blog-page-banner" />
                <div className="container-fluid">
                    <div className="row">
                        <aside className="col-lg-3">
                            <div className="side-bar section-padding pb-0 mb-md-40">
                                <Blogsidebar />
                            </div>
                        </aside>
                        <div className="col-lg-6 blog-inner clearfix">
                            <div className="main-box padding-20 full-width">
                                <div className="breadcrumb-wrpr">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/" className="text-light-black">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                                    </ul>
                                </div>
                                <div className="row">
                                    {blogpost.map((item, i) => (
                                        <div key={i} className="col-xl-6 col-lg-12 col-sm-6">
                                            <article className="blog-services-wrapper main-box mb-xl-20">
                                                <div className="post-img">
                                                    <Link to="/blog-details">
                                                        <img src={item.img} className="img-fluid full-width" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="post-meta">
                                                    <div className="author-img">
                                                        <img src={item.authorimg} className="rounded-circle" alt="" />
                                                    </div>
                                                    <div className="author-meta">
                                                        <h6 className="no-margin"><Link to="#" className="text-light-black">{item.authorname}</Link></h6>
                                                        <p className="no-margin text-light-white"><Link to="#" className="text-light-white">Admin</Link> | {item.postdate}</p>
                                                    </div>
                                                </div>
                                                <div className="post-content padding-20">
                                                    <h5><Link to="/blog-details" className="text-light-black">{item.title}</Link></h5>
                                                    <p>{item.text}</p>
                                                    <div className="blog-link-wrap"> <Link to="/blog-details" className="btn-first white-btn">Learn More</Link>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <aside className="col-lg-3">
                            <div className="side-bar section-padding pb-0">
                                <Testimonial/>
                                <div className="large-product-box mb-xl-20">
                                    <img src={largeimg1} className="img-fluid full-width" alt="" />
                                    <div className="category-type overlay padding-15">
                                        <button className="category-btn">Most popular near you</button> <Link to="/restaurant" className="btn-first white-btn text-light-black fw-600 full-width">See all</Link>
                                    </div>
                                </div>
                                <Findfood/>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogpost from '../../../data/recentblog.json';

import blogimg from '../../../assets/img/about/blog/740x442/blog-1.jpg';
import adbanner from "../../../assets/img/about/blog/1110x350/hbanner-1.jpg";

class Blogpost extends Component {
    render() {
        return (
            <section className="section-padding our-blog restaurent-ad">
                <div className="container">
                    <div className="section-header-style-2">
                        <h6 className="text-light-green sub-title">Our Blog</h6>
                        <h3 className="text-light-black header-title">Latest News</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="blog-box mb-xl-20">
                                {/* article 1 */}
                                <article className="post">
                                    <div className="blog-img p-relative">
                                        <Link to="/blog-details">
                                            <img src={blogimg} alt="blog-img" />
                                        </Link>
                                        <div className="overlay padding-20">
                                            <div className="blog-meta">
                                                <h4 className="text-custom-white mb-2 fw-600">New locations where you can now get your MunchBox® delivered</h4>
                                                <Link to="/blog-details" className="text-custom-white fw-700 fs-18">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                {/* article 1 */}
                                <div className="side-blog">
                                    <div className="blog-list padding-tb-10">
                                        {/* article 1 */}
                                        {blogpost.slice(0, 3).map((item, i) => (
                                            <article key={i} className="side-post padding-20 u-line">
                                                <div className="content-wrap">
                                                    <div className="entry-meta-content">
                                                        <div className="entry-tye">
                                                            <span className="text-light-green fw-600">{item.postdate}</span>
                                                        </div>
                                                    </div>
                                                    <h6 className="entry-title no-margin">
                                                        <Link to="/blog-details" className="text-light-black">{item.title}</Link>
                                                    </h6>
                                                </div>
                                                <div className="thumb-img">
                                                    <Link to="/blog-details">
                                                        <img src={item.img} alt="" />
                                                    </Link>
                                                </div>
                                            </article>
                                        ))}
                                        {/* article 1 */}
                                    </div>
                                </div>
                            </div>
                            <div className="ad-img p-relative">
                                <img src={adbanner} className="img-fluid full-width" alt="#" />
                                <div className="overlay">
                                    <div className="content-box transform-center">
                                        <p className="text-custom-white">Quickmunch</p>
                                        <h3 className="text-custom-white mb-1">More than 3000 restaurants</h3>
                                        <h5 className="text-custom-white">Book a table easly at the best price</h5>
                                        <Link to="/restaurant" className="btn-first white-btn">View All</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blogpost;
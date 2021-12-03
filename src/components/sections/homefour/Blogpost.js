import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogpost from '../../../data/recentblog.json';

import blogimg from '../../../assets/img/about/blog/740x442/blog-2.jpg';

class Blogpost extends Component {
    render() {
        return (
            <section className="section-padding our-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="blog-box">
                                {/* article 1 */}
                                <article className="post">
                                    <div className="blog-img p-relative">
                                        <Link to="blog-details">
                                            <img src={blogimg} alt="" />
                                        </Link>
                                        <div className="overlay padding-20">
                                            <div className="blog-meta">
                                                <h4 className="text-custom-white mb-2 fw-600">New locations where you can now get your MunchBox® delivered</h4>
                                                <Link to="blog-details" className="text-custom-white fw-700 fs-18">Read More</Link>
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
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blogpost;
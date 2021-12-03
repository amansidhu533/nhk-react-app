import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import StickyBox from "react-sticky-box";
import Blogsidebar from '../../layouts/Blogsidebar';
import Findfood from '../../layouts/Findfood';
import Testimonial from '../../layouts/Testimonial';
import blogreview from '../../../data/blogreviews.json';
import { restaurantRatingStars } from '../../../helper/helper';

import largeimg1 from '../../../assets/img/blog/446x1025/ad-1.jpg';
import blogthumb from '../../../assets/img/blog-details/822x337/image-1.jpg';

class Content extends Component {
    render() {
        return (
            <section className="our-articles bg-light-theme section-padding pt-0">
                <div className="blog-page-banner" />
                <div className="container-fluid">
                    <div className="row">
                        <aside className="col-lg-3">
                            <StickyBox className="sidebar2" offsetTop={0} offsetBottom={20}>
                                <div className="side-bar section-padding pb-0 mb-md-40">
                                    <Blogsidebar />
                                </div>
                            </StickyBox>
                        </aside>
                        <div className="col-lg-6 blog-inner clearfix">
                            <div className="main-box padding-20 full-width">
                                <div className="breadcrumb-wrpr">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/" className="text-light-black">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item"><Link to="/blog" className="text-light-black">Blog</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Blog Details</li>
                                    </ul>
                                </div>
                                <div className="post-wrapper mb-xl-20">
                                    <img src={blogthumb} className="img-fluid full-width" alt="" />
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="blog-meta mb-xl-20">
                                            <h2 className="blog-title text-light-black">Best chinese restaurants in Brooklyn.</h2>
                                            <h6 className="text-light-white fs-14">Posted on 25 January, 2022</h6>
                                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                                            to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        </div>
                                        <div className="blog-meta mb-xl-20">
                                            <h5 className="blog-title text-light-black">Why do we choose it?</h5>
                                            <p className="text-light-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                            as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                  ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                        </div>
                                        <div className="blog-meta mb-xl-20">
                                            <h5 className="blog-title text-light-black">Where does it come from?</h5>
                                            <p className="text-light-white mb-xl-20">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                            College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
                                            Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
                  the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                            <p className="text-light-white">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original
                  form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                        </div>
                                        <div className="blog-meta mb-xl-20">
                                            <h5 className="blog-title text-light-black">Where can I get that food?</h5>
                                            <p className="text-light-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
                                            to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                        </div>
                                        <div className="blog-meta mb-xl-20">
                                            <h5 className="blog-title text-light-black">Why do we order from there?</h5>
                                            <p className="text-light-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                            as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                  ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                        </div>
                                        <blockquote>
                                            <p>"Chinese is the popular dish, Lorem Ipsum is not simply random text. It has roots in a piece of classical chinese."</p>
                                        </blockquote>
                                        <div className="comment-box">
                                            <div className="section-header-left">
                                                <h3 className="text-light-black header-title">Comments</h3>
                                            </div>
                                            {blogreview.map((item, i) => (
                                                <Fragment key={i}>
                                                    <div className="review-box">
                                                        <div className="review-user">
                                                            <div className="review-user-img">
                                                                <img src={item.userimg} className="rounded-circle" alt="#" />
                                                                <div className="reviewer-name">
                                                                    <p className="text-light-black fw-600">{item.username} <small className="text-light-white fw-500">{item.location}</small>
                                                                    </p> <i className="fas fa-trophy text-black" /><span className="text-light-black">{item.userpost}</span>
                                                                </div>
                                                            </div>
                                                            <div className="review-date"> <span className="text-light-white">{item.commentdate}</span>
                                                            </div>
                                                        </div>
                                                        <div className="ratings">
                                                            {restaurantRatingStars(item.rating)}
                                                        </div>
                                                        <p className="text-light-black">{item.comment}</p>
                                                    </div>
                                                    {item.children.map((review, i) => (
                                                        <div key={i} className="review-box comment-reply">
                                                            <div className="review-user">
                                                                <div className="review-user-img">
                                                                    <img src={review.userimg} className="rounded-circle" alt="#" />
                                                                    <div className="reviewer-name">
                                                                        <p className="text-light-black fw-600">{review.username} <small className="text-light-white fw-500">{review.location}</small>
                                                                        </p> <i className="fas fa-trophy text-black" /><span className="text-light-black">{review.userpost}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="review-date"> <span className="text-light-white">{review.commentdate}</span>
                                                                </div>
                                                            </div>
                                                            <div className="ratings">
                                                                {restaurantRatingStars(item.rating)}
                                                            </div>
                                                            <p className="text-light-black">{review.comment}</p>
                                                        </div>
                                                    ))}
                                                </Fragment>
                                            ))}
                                        </div>
                                        <div className="comment-form">
                                            <div className="section-header-left">
                                                <h3 className="text-light-black header-title">Leave a Reply</h3>
                                            </div>
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="text-light-black fw-600">Full Name</label>
                                                            <input type="text" name="#" className="form-control form-control-submit" placeholder="Full Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="text-light-black fw-600">Email Address</label>
                                                            <input type="email" name="#" className="form-control form-control-submit" placeholder="Email Address" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="text-light-black fw-600">Your Comment</label>
                                                            <textarea className="form-control form-control-submit" name="#" rows={6} placeholder="Your Comment" defaultValue={""} />
                                                        </div>
                                                        <button type="submit" className="btn-second btn-submit full-width">Send</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside className="col-lg-3">
                            <StickyBox className="sidebar3" offsetTop={0} offsetBottom={20}>
                                <div className="side-bar section-padding pb-0">
                                    <Testimonial />
                                    <div className="large-product-box mb-xl-20">
                                        <img src={largeimg1} className="img-fluid full-width" alt="" />
                                        <div className="category-type overlay padding-15">
                                            <button className="category-btn">Most popular near you</button> <Link to="/restaurant" className="btn-first white-btn text-light-black fw-600 full-width">See all</Link>
                                        </div>
                                    </div>
                                    <Findfood />
                                </div>
                            </StickyBox>
                        </aside>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;
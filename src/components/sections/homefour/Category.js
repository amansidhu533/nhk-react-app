import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import categories from '../../../data/category.json';

class Category extends Component {
    render() {
        return (
            <section className="browse-cat browse-cat-2 u-line section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title">Browse by cuisine <span className="fs-14"><Link to="/restaurant">See all restaurent</Link></span></h3>
                            </div>
                        </div>
                        {categories.slice(0,6).map((item, i) => (
                            <div key={i} className="col-lg-2 col-sm-4 col-6">
                                <Link to="#" className="categories mb-md-20">
                                    <div className="icon text-custom-white bg-light-green ">
                                        <img src={item.img} className="img-fluid full-width" alt="categories" />
                                        <div className="overlay">
                                            <div className="product-addbtn"> <span className="add-product"><i className="fas fa-plus" /></span>
                                            </div>
                                        </div>
                                    </div> <span className="text-light-black cat-name">{item.title}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Category;
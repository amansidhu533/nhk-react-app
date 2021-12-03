import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import collection from '../../assets/img/nav-1.jpg';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navmethod: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    // Navigation
    toggleNav() {
        this.setState({
            navmethod: !this.state.navmethod
        });
    }
    render() {
        return (
            <div className="catring parent-megamenu">
                <Link to="#" className={classNames({ "active": this.state.navmethod })} onClick={this.toggleNav}> 
                <span>Pages <i className="fas fa-caret-down" /></span>
                    <i className="fas fa-bars" />
                </Link>
                <div className={classNames("megamenu", { "show": this.state.navmethod })} onClick={this.toggleNav}>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-5">
                                    <div className="ex-collection-box h-100">
                                        <Link to="#">
                                            <img src={collection} className="img-fluid full-width h-100" alt="" />
                                        </Link>
                                        <div className="category-type overlay padding-15"> <Link to="/restaurant" className="category-btn">Top rated</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="menu-style">
                                                <div className="menu-title">
                                                    <h6 className="cat-name"><Link to="#" className="text-light-black">Home Pages</Link></h6>
                                                </div>
                                                <ul>
                                                    <li><Link to="/" className="text-light-white fw-500">Landing Page</Link>
                                                    </li>
                                                    <li><Link to="/home-v1" className="text-light-white fw-500">Home Page 1</Link>
                                                    </li>
                                                    <li><Link to="/home-v2" className="text-light-white fw-500">Home Page 2</Link>
                                                    </li>
                                                    <li><Link to="/home-v3" className="text-light-white fw-500">Home Page 3</Link>
                                                    </li>
                                                    <li><Link to="/home-v4" className="text-light-white fw-500">Home Page 4</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="menu-style">
                                                <div className="menu-title">
                                                    <h6 className="cat-name"><Link to="#" className="text-light-black">Inner Pages</Link></h6>
                                                </div>
                                                <ul>
                                                    <li><Link to="/blog" className="text-light-white fw-500">Blog Grid View</Link>
                                                    </li>
                                                    <li><Link to="/blog-v2" className="text-light-white fw-500">Blog Grid View 2</Link>
                                                    </li>
                                                    <li><Link to="/blog-details" className="text-light-white fw-500">Blog Details</Link>
                                                    </li>
                                                    <li><Link to="/ex-deals" className="text-light-white fw-500">Ex Deals</Link>
                                                    </li>
                                                    <li><Link to="/about" className="text-light-white fw-500">About Us</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="menu-style">
                                                <div className="menu-title">
                                                    <h6 className="cat-name"><Link to="#" className="text-light-black">Related Pages</Link></h6>
                                                </div>
                                                <ul>
                                                    <li><Link to="/restaurant" className="text-light-white fw-500">Restaurant</Link>
                                                    </li>
                                                    <li><Link to="/restaurant-v1" className="text-light-white fw-500">Restaurant 1</Link>
                                                    </li>
                                                    <li><Link to="/restaurant-v2" className="text-light-white fw-500">Restaurant 2</Link>
                                                    </li>
                                                    <li><Link to="/add-restaurant" className="text-light-white fw-500">Add Restaurant</Link>
                                                    </li>
                                                    <li><Link to="/list-view" className="text-light-white fw-500">List View</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="menu-style">
                                                <div className="menu-title">
                                                    <h6 className="cat-name"><Link to="#" className="text-light-black">Additional Pages</Link></h6>
                                                </div>
                                                <ul>
                                                    <li><Link to="/login" className="text-light-white fw-500">Login/Sign-up</Link>
                                                    </li>
                                                    <li><Link to="/checkout" className="text-light-white fw-500">Checkout</Link>
                                                    </li>
                                                    <li><Link to="/order-details" className="text-light-white fw-500">Order Details</Link>
                                                    </li>
                                                    <li><Link to="/geo-locator" className="text-light-white fw-500">Geo Locator</Link>
                                                    </li>
                                                    <li><Link to="/contact" className="text-light-white fw-500">Contact Us</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
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

export default Menu;
import React, { Fragment } from 'react';
import Menu from './Menu';
import classNames from 'classnames';
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import HeaderComponent from '../../helper/Navigationhelper';

import logo from '../../assets/img/logo.png';
import userimg from '../../assets/img/user-1.png';
import shopimg from '../../assets/img/shop-1.png';

class Header extends HeaderComponent {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <header className="full-width">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 mainNavCol">
                                    {/* logo */}
                                    <div className="logo mainNavCol">
                                        <Link to="/">
                                            <img src={logo} className="img-fluid" alt="" />
                                        </Link>
                                    </div>
                                    {/* logo */}
                                    <div className="main-search mainNavCol">
                                        <form className="main-search search-form full-width">
                                            <div className="row">
                                                {/* location picker */}
                                                <div className="col-lg-6 col-md-5">
                                                    <Link to="#" className={classNames("delivery-add p-relative", { "open": this.state.locationmethod })} onClick={this.toggleLoc}>
                                                        <span className="icon"><i className="fas fa-map-marker-alt" /></span>
                                                        <span className="address">Brooklyn, NY</span>
                                                    </Link>
                                                    <div className={classNames("location-picker", { "open": this.state.locationmethod })} onClick={this.toggleLoc}>
                                                        <input type="text" className="form-control" placeholder="Enter a new address" />
                                                    </div>
                                                </div>
                                                {/* location picker */}
                                                {/* search */}
                                                <div className="col-lg-6 col-md-7">
                                                    <div className="search-box padding-10">
                                                        <input type="text" className="form-control" placeholder="Pizza, Burger, Chinese" />
                                                    </div>
                                                </div>
                                                {/* search */}
                                            </div>
                                        </form>
                                    </div>
                                    <div className="right-side fw-700 mainNavCol">
                                        <div className="gem-points">
                                            <Link to="#"> <i className="fas fa-concierge-bell" />
                                                <span>Order Now</span>
                                            </Link>
                                        </div>
                                        <Menu />
                                        {/* mobile search */}
                                        <div className="mobile-search">
                                            <Link to="#" onClick={this.searchShow}> <i className="fas fa-search" />
                                            </Link>
                                        </div>
                                        {/* mobile search */}
                                        {/* user account */}
                                        <div className="user-details p-relative">
                                            <Link to="#" className={classNames("text-light-white fw-500", { "active": this.state.usermethod })} onClick={this.toggleUser}>
                                                <img src={userimg} className="rounded-circle" alt="" /> <span>Hi, Kate</span>
                                            </Link>
                                            <div className={classNames("user-dropdown", { "show": this.state.usermethod })} onClick={this.toggleUser}>
                                                <ul>
                                                    <li>
                                                        <Link to="/order-details">
                                                            <div className="icon"><i className="flaticon-rewind" />
                                                            </div> <span className="details">Past Orders</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/order-details">
                                                            <div className="icon"><i className="flaticon-takeaway" />
                                                            </div> <span className="details">Upcoming Orders</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <div className="icon"><i className="flaticon-breadbox" />
                                                            </div> <span className="details">Saved</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <div className="icon"><i className="flaticon-gift" />
                                                            </div> <span className="details">Gift cards</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <div className="icon"><i className="flaticon-refer" />
                                                            </div> <span className="details">Refer a friend</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <div className="icon"><i className="flaticon-diamond" />
                                                            </div> <span className="details">Perks</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <div className="icon"><i className="flaticon-user" />
                                                            </div> <span className="details">Account</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <div className="icon"><i className="flaticon-board-games-with-roles" />
                                                            </div> <span className="details">Help</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="user-footer"> <span className="text-light-black">Not Jhon?</span> <Link to="#">Sign Out</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* mobile search */}
                                        {/* user notification */}
                                        <div className="cart-btn notification-btn">
                                            <Link to="#" className="text-light-green fw-700"> <i className="fas fa-bell" />
                                                <span className="user-alert-notification" />
                                            </Link>
                                            <div className="notification-dropdown">
                                                <div className="product-detail">
                                                    <Link to="#">
                                                        <div className="img-box">
                                                            <img src={shopimg} className="rounded" alt="" />
                                                        </div>
                                                        <div className="product-about">
                                                            <p className="text-light-black">Lil Johnny’s</p>
                                                            <p className="text-light-white">Spicy Maxican Grill</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="rating-box">
                                                    <p className="text-light-black">How was your last order ?.</p> <span className="text-dark-white"><i className="fas fa-star" /></span>
                                                    <span className="text-dark-white"><i className="fas fa-star" /></span>
                                                    <span className="text-dark-white"><i className="fas fa-star" /></span>
                                                    <span className="text-dark-white"><i className="fas fa-star" /></span>
                                                    <span className="text-dark-white"><i className="fas fa-star" /></span>
                                                    <cite className="text-light-white">Ordered 2 days ago</cite>
                                                </div>
                                            </div>
                                        </div>
                                        {/* user notification */}
                                        {/* user cart */}
                                        <div className="cart-btn cart-dropdown">
                                            <Link to="#" className={classNames("text-light-green fw-700", { "active": this.state.cartmethod })} onClick={this.toggleCart}>
                                                <i className="fas fa-shopping-bag" />
                                                <span className="user-alert-cart">3</span>
                                            </Link>
                                            <div className={classNames("cart-detail-box", { "show": this.state.cartmethod })} onClick={this.toggleCart}>
                                                <div className="card">
                                                    <div className="card-header padding-15">Your Order</div>
                                                    <div className="card-body no-padding">
                                                        <div className="cat-product-box">
                                                            <div className="cat-product">
                                                                <div className="cat-name">
                                                                    <Link to="#">
                                                                        <p className="text-light-green"><span className="text-dark-white">1</span> Chilli Chicken</p> <span className="text-light-white">small, chilli chicken</span>
                                                                    </Link>
                                                                </div>
                                                                <div className="delete-btn">
                                                                    <Link to="#" className="text-dark-white"> <i className="far fa-trash-alt" />
                                                                    </Link>
                                                                </div>
                                                                <div className="price"> <Link to="#" className="text-dark-white fw-500">
                                                                    $2.25
                            </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cat-product-box">
                                                            <div className="cat-product">
                                                                <div className="cat-name">
                                                                    <Link to="#">
                                                                        <p className="text-light-green"><span className="text-dark-white">1</span> loaded cheese</p> <span className="text-light-white">small, chilli chicken</span>
                                                                    </Link>
                                                                </div>
                                                                <div className="delete-btn">
                                                                    <Link to="#" className="text-dark-white"> <i className="far fa-trash-alt" />
                                                                    </Link>
                                                                </div>
                                                                <div className="price"> <Link to="#" className="text-dark-white fw-500">
                                                                    $2.25
                            </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cat-product-box">
                                                            <div className="cat-product">
                                                                <div className="cat-name">
                                                                    <Link to="#">
                                                                        <p className="text-light-green"><span className="text-dark-white">1</span> Tortia Chicken</p> <span className="text-light-white">small, chilli chicken</span>
                                                                    </Link>
                                                                </div>
                                                                <div className="delete-btn">
                                                                    <Link to="#" className="text-dark-white"> <i className="far fa-trash-alt" />
                                                                    </Link>
                                                                </div>
                                                                <div className="price"> <Link to="#" className="text-dark-white fw-500">
                                                                    $2.25
                            </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item-total">
                                                            <div className="total-price border-0"> <span className="text-dark-white fw-700">Items subtotal:</span>
                                                                <span className="text-dark-white fw-700">$9.99</span>
                                                            </div>
                                                            <div className="empty-bag padding-15"> <Link to="#">Empty bag</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer padding-15"> <Link to="/checkout" className="btn-first green-btn text-custom-white full-width fw-500">Proceed to Checkout</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* user cart */}
                                    </div>
                                </div>
                                <div className="col-sm-12 mobile-search">
                                    <div className="mobile-address">
                                        <Link to="#" className="delivery-add" onClick={this.locationShow}> <span className="address">Brooklyn, NY</span>
                                        </Link>
                                    </div>
                                    <div className="sorting-addressbox"> <span className="full-address text-light-green">Brooklyn, NY 10041</span>
                                        <div className="btns">
                                            <div className="filter-btn">
                                                <button type="button"><i className="fas fa-sliders-h text-light-green fs-18" />
                                                </button> <span className="text-light-green">Sort</span>
                                            </div>
                                            <div className="filter-btn">
                                                <button type="button"><i className="fas fa-filter text-light-green fs-18" />
                                                </button> <span className="text-light-green">Filter</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="main-sec" />
                <Modal show={this.state.searchshow}  id="search-box" onHide={this.searchClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header>
                        <button type="button" className="close" onClick={this.searchClose}>×</button>
                        <div className="search-box p-relative full-width">
                            <input type="text" className="form-control" placeholder="Pizza, Burger, Chinese" />
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.locationshow}  id="address-box" onHide={this.locationClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header>
                        <button type="button" className="close" onClick={this.locationClose}>×</button>
                        <h4 className="modal-title fw-700">Change Address</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="location-picker">
                            <input type="text" className="form-control" placeholder="Enter a new address" />
                        </div>

                    </Modal.Body>
                </Modal>
            </Fragment>
        );
    }
}

export default Header;
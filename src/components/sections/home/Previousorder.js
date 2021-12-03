import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/restaurants/255x104/order-1.jpg';
import img2 from '../../../assets/img/restaurants/255x104/order-2.jpg';
import img3 from '../../../assets/img/restaurants/255x104/order-3.jpg';
import img4 from '../../../assets/img/restaurants/255x104/order-4.jpg';

const orderbox = [
    { img: img1, title: 'Chilli Chicken Pizza', text: 'Big Bites, Brooklyn', action: 'Track Order' },
    { img: img2, title: 'Hakka Noodles', text: 'Flavor Town, Brooklyn', action: 'Track Order' },
    { img: img3, title: 'Vegan Burger', text: 'Great Burger, Brooklyn', action: 'Track Order' },
    { img: img4, title: 'Sticky Date Cake', text: 'Smile N’ Delight, Brooklyn', action: 'Track Order' },
];

class Previousorder extends Component {
    render() {
        return (
            <section className="recent-order section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title">Your previous orders <span className="fs-14"><Link to="/order-details">See all past orders</Link></span></h3>
                            </div>
                        </div>
                        {orderbox.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="product-box mb-md-20">
                                    <div className="product-img">
                                        <Link to="/restaurant">
                                            <img src={item.img} className="img-fluid full-width" alt="" />
                                        </Link>
                                    </div>
                                    <div className="product-caption">
                                        <h6 className="product-title"><Link to="/restaurant" className="text-light-black "> {item.title}</Link></h6>
                                        <p className="text-light-white">{item.text}</p>
                                        <div className="product-btn">
                                            <Link to="/order-details" className="btn-first white-btn full-width text-light-green fw-600">{item.action}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Previousorder;
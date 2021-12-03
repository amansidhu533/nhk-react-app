import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Address extends Component {
    render() {
        return (
            <div className="restaurent-address u-line">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="address-details">
                                <div className="address">
                                    <div className="delivery-address"> <Link to="/order-details" className="text-light-black">Delivery, ASAP (45–55m)</Link>
                                        <div className="delivery-type"> <span className="text-success fs-12 fw-500">No minimun</span><span className="text-light-white">, Free Delivery</span>
                                        </div>
                                    </div>
                                    <div className="change-address"> <Link to="/checkout" className="fw-500">Change</Link>
                                    </div>
                                </div>
                                <p className="text-light-white no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Address;
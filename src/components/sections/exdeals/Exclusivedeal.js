import React, { Component } from 'react';

import dealsbanner from '../../../assets/img/deals/banner-1.jpg';

class Exclusivedeal extends Component {
    render() {
        return (
            <section className="section-padding exclusive-deals">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 align-self-center">
                            <div className="title">
                                <div className="deals-heading">
                                    <h2 className="text-light-black fw-700">Discover exclusive deals with Perks</h2>
                                    <p className="text-light-black">Quickmunch deals, coupons, promos, and more</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="deals-image">
                                <img src={dealsbanner} className="img-fluid full-width" alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Exclusivedeal;
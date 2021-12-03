import React, { Component } from 'react';

import mainimg from '../../assets/img/blog/446x501/ff-1.jpg';
import logo from '../../assets/img/logo-2.jpg';
import burger from '../../assets/img/banner/burger.png';

class Findfood extends Component {
    render() {
        return (
            <div className="inner-wrapper main-box">
                <div className="main-banner p-relative">
                    <img src={mainimg} className="img-fluid full-width main-img" alt="" />
                    <div className="overlay-2 main-padding">
                        <img src={logo} className="img-fluid" alt="" />
                    </div>
                    <img src={burger} className="footer-img" alt="" />
                </div>
                <div className="section-2 main-page main-padding">
                    <div className="login-box">
                        <h3 className="text-light-black fw-700">Quickmunch food delivery every time</h3>
                        <div className="input-group row">
                            <div className="input-group2 col-xl-8">
                                <input type="search" className="form-control form-control-submit" placeholder="Enter street address or zip code" defaultValue="1246 57th St, Brooklyn, NY, 11219" />
                                <div className="input-group-prepend">
                                    <button className="input-group-text text-light-green"><i className="fab fa-telegram-plane" />
                                    </button>
                                </div>
                            </div>
                            <div className="input-group-append col-xl-4">
                                <button className="btn-second btn-submit full-width" type="button">Find food</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Findfood;
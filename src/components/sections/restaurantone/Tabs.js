import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Tabs extends Component {
    render() {
        return (
            <div className="restaurent-tabs u-line">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="restaurent-menu scrollnav">
                                <ul className="nav nav-pills">
                                    <li className="nav-item"> 
                                    <AnchorLink className="nav-link text-light-white fw-700" href="#menu">Menu</AnchorLink>
                                    </li>
                                    <li className="nav-item"> 
                                    <AnchorLink className="nav-link text-light-white fw-700" href="#about">About</AnchorLink>
                                    </li>
                                    <li className="nav-item"> 
                                    <AnchorLink className="nav-link text-light-white fw-700" href="#review">Reviews</AnchorLink>
                                    </li>
                                    <li className="nav-item"> 
                                    <AnchorLink className="nav-link text-light-white fw-700" href="#mapgallery">Map &amp; Gallery</AnchorLink>
                                    </li>
                                </ul>
                                <div className="add-wishlist">
                                    <img src="assets/img/svg/heart-1.svg" alt="tag" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tabs;
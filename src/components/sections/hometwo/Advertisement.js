import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import advbanner from '../../../assets/img/restaurants/1110x100/vbanner-2.jpg';
import tag from '../../../assets/img/tag.jpg';

class Advertisement extends Component {
    render() {
        return (
            <div className="container">
                {/* advertisement banner*/}
                <div className="row">
                    <div className="col-12">
                        <div id="banner-adv2" className="banner-adv2">
                            <img src={advbanner} className="img-fluid full-width" alt="" /> <span className="text">Unlimited Free Delivery with. <img src={tag} alt="" /> <Link to="/restaurant" className="btn-second btn-submit">Try 30 Days FREE</Link></span>
                            <span className="close-banner" />
                        </div>
                    </div>
                </div>
                {/* advertisement banner*/}
            </div>
        );
    }
}

export default Advertisement;
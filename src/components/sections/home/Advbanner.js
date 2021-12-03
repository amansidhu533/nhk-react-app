import React, { Component } from 'react';

class Advbanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closeBanner: false
        }
        this.toggleBanner = this.toggleBanner.bind(this);
    }
    toggleBanner() {
        this.setState({
            closeBanner: !this.state.closeBanner
        })
    }
    render() {
        return (
            <div className={this.state.closeBanner === true ? 'banner-adv-bg d-none' : 'banner-adv-bg'}>
                <div id="banner-adv" className="banner-adv">
                    <div className="flex-adv">
                        <a rel={"external"} href="https://themeforest.net/item/costic-restaurant-dashboard-react-template/28350834">
                            <i className="fas fa-gift" />
                            <span className="text">Get FREE CRM Dashboard with Quickmunch.</span>
                        </a>
                        <a rel={"external"} href="https://themeforest.net/item/costic-restaurant-dashboard-react-template/28350834" className="btn-second btn-submit">View Dashboard here</a>
                    </div>
                    <span className="close-banner" onClick={this.toggleBanner} />
                </div>
            </div>
        );
    }
}

export default Advbanner;
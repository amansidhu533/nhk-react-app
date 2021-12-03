import React, { Component, Fragment } from 'react';
import About from './About';
import Address from './Address';
import Details from './Details';
import Mapgallery from './Mapgallery';
import Meals from './Meals';
import Offer from './Offer';
import Review from './Review';
import Tabs from './Tabs';
import Top from './Top';

class Content extends Component { 
    render() {
        return (
            <Fragment>
                <Top/>
                <Details/>
                <Tabs/>
                <Address/>
                <Meals/>
                <About/>
                <Mapgallery/>
                <Review/>
                <Offer/>
            </Fragment>
        );
    }
}

export default Content;
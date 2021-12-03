import React, { Component, Fragment } from 'react';
import Address from './Address';
import Details from './Details';
import Meals from './Meals';
import Offer from './Offer';
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
                
                <Offer/>
            </Fragment>
        );
    }
}

export default Content;
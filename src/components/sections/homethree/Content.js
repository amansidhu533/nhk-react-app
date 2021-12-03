import React, { Component, Fragment } from 'react';
import Chefspecial from './Chefspecial';
import Collectionbox from './Collectionbox';
import Delivery from './Delivery';
import Nearfood from './Nearfood';
import Specialized from './Specialized';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Delivery/>
                <Collectionbox/>
                <Specialized/>
                <Chefspecial/>
                <Nearfood/>
            </Fragment>
        );
    }
}

export default Content;
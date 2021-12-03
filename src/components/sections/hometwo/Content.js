import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Category from '../home/Category';
import Previousorder from '../home/Previousorder';
import Advertisement from './Advertisement';
import Collectionbox from './Collectionbox';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <Category/>
                <Previousorder/>
                <Advertisement/>
                <Collectionbox/>
            </Fragment>
        );
    }
}

export default Content;
import React, { Component, Fragment } from 'react';
import Advbanner from './Advbanner';
import Banner from './Banner';
import Category from './Category';
import Collectionbox from './Collectionbox';
import Previousorder from './Previousorder';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <Category/>
                <Previousorder/>
                <Collectionbox/>
                <Advbanner/>
            </Fragment>
        );
    }
}

export default Content;
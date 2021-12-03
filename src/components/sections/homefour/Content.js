import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Blogpost from './Blogpost';
import Category from './Category';
import Collectionbox from './Collectionbox';
import Restaurent from './Restaurent';
import Restaurentadv from './Restaurentadv';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <Category/>
                <Collectionbox/>
                <Blogpost/>
                <Restaurentadv/>
                <Collectionbox/>
                <Restaurent/>
            </Fragment>
        );
    }
}

export default Content;
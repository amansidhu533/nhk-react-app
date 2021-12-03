import React, { Component, Fragment } from 'react';
import Exclusivedeal from './Exclusivedeal';
import Freshdeals from './Freshdeals';
import Localdeals from './Localdeals';
import Partners from './Partners';
import Trending from './Trending';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Exclusivedeal/>
                <Partners/>
                <Trending/>
                <Freshdeals/>
                <Localdeals/>
            </Fragment>
        );
    }
}

export default Content;
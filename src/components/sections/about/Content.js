import React, { Component, Fragment } from 'react';
import Testimonial from '../../layouts/Fulltestimonial';
import Banner from './Banner';
import Blogpost from './Blogpost';
import History from './History';
import Process from './Process';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <History/>
                <Process/>
                <Blogpost/>
                <Testimonial/>
            </Fragment>
        );
    }
}

export default Content;
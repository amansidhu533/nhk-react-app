import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footertwo';
import Content from '../sections/blogtwo/Content';

class Blogtwo extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Quickmunch | Blog Grid</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Blogtwo;
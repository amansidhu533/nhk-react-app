import React, { Component, Fragment } from 'react';
import Mapgallery from './Mapgallery';
import Review from './Review';
import About from './About';
import { Accordion, NavLink } from 'react-bootstrap';

class Tabs extends Component {
    render() {
        return (
            <Fragment>
                <Accordion>
                    <div className="restaurent-tabs u-line">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="restaurent-menu scrollnav">
                                        <ul className="nav nav-pills">
                                            <li className="nav-item">
                                                <Accordion.Toggle as={NavLink} variant="link" eventKey="0" className="nav-link text-light-white fw-700">
                                                Menu
                                                </Accordion.Toggle>
                                            </li>
                                            <li className="nav-item">
                                                <Accordion.Toggle as={NavLink} variant="link" eventKey="1" className="nav-link text-light-white fw-700">
                                                    About
                                                </Accordion.Toggle>
                                            </li>
                                            <li className="nav-item">
                                                <Accordion.Toggle as={NavLink} variant="link" eventKey="2" className="nav-link text-light-white fw-700">
                                                    Reviews
                                                </Accordion.Toggle>
                                            </li>
                                            <li className="nav-item">
                                                <Accordion.Toggle as={NavLink} variant="link" eventKey="3" className="nav-link text-light-white fw-700">
                                                    Map &amp; Gallery
                                                </Accordion.Toggle>
                                            </li>
                                        </ul>
                                        <div className="add-wishlist">
                                            <img src="assets/img/svg/heart-1.svg" alt="tag" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Accordion.Collapse eventKey="0">
                        <Fragment></Fragment>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="1">
                        <About />
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="2">
                        <Review />
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="3">
                        <Mapgallery />
                    </Accordion.Collapse>
                </Accordion>
            </Fragment>
        );
    }
}

export default Tabs;
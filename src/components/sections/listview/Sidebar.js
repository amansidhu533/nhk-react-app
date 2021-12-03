import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, NavLink, Tab, Nav } from 'react-bootstrap';
import Testimonial from '../../layouts/Testimonial';
import Deliverytime from './Deliverytime';
import Distance from './Distance';

class Sidebar extends Component {
    render() {
        return (
            <Fragment>
                <div className="filter-sidebar mb-5">
                    <h4 className="text-light-black fw-600 title-2">Filters<small className="fs-12"><Link to="#" className="text-light-black fw-500">Clear all</Link></small></h4>
                    <div className="sidebar-tab">
                        <Tab.Container defaultActiveKey="restaurent">
                            <Nav variant="pills" className="nav nav-pills mb-xl-20">
                                <Nav.Item>
                                    <Nav.Link eventKey="restaurent">Restaurants</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="caterings">Caterings</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="restaurent">
                                    <Tab.Container defaultActiveKey="deliveryrestaurent">
                                        <div className="siderbar-innertab">
                                            <Nav variant="pills" className="nav nav-pills mb-xl-20">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="deliveryrestaurent">Delivery</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="pickuprestaurent">Pickup</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="deliveryrestaurent">
                                                <p className="text-light-black delivery-type p-relative">Delivery my food <Link to="#">Today, ASAP</Link>
                                                </p>
                                                <div className="filters">
                                                <Accordion defaultActiveKey="0">
                                                    <div className="card">
                                                        <div className="card-header">
                                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="0" className="p-0 card-link text-light-black fw-700 fs-16">
                                                        Feature
                                                        </Accordion.Toggle> 
                                                        </div>
                                                        <Accordion.Collapse eventKey="0" className="show">
                                                            <div className="card-body">
                                                                <form>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" name="#" /> <span className="checkmark" /> New <span className="text-light-white">(3)</span>
                                                                    </label>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" name="#" /> <span className="checkmark" /> Order Tracking <span className="text-light-white">(6)</span>
                                                                    </label>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" name="#" /> <span className="checkmark" /> Open Now [6:05am] <span className="text-light-white">(10)</span>
                                                                    </label>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" name="#" /> <span className="checkmark" /> Free Delivery <span className="text-light-white">(6)</span>
                                                                    </label>
                                                                </form>
                                                            </div>
                                                        </Accordion.Collapse>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header">
                                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="1" className="p-0 card-link text-light-black fw-700 fs-16">
                                                        Rating
                                                        </Accordion.Toggle> 
                                                        </div>
                                                        <Accordion.Collapse eventKey="1" className="show">
                                                            <div className="card-body">
                                                                <div className="rating">
                                                                    <button className="text-yellow"><i className="fas fa-star" />
                                                                    </button>
                                                                    <button className="text-yellow"><i className="fas fa-star" />
                                                                    </button>
                                                                    <button className="text-yellow"><i className="fas fa-star" />
                                                                    </button>
                                                                    <button className="text-yellow"><i className="fas fa-star" />
                                                                    </button>
                                                                    <button className="text-yellow"><i className="fas fa-star" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Accordion.Collapse>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header"> 
                                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="2" className="p-0 card-link text-light-black fw-700 fs-16">
                                                        Price
                                                        </Accordion.Toggle> 
                                                        </div>
                                                        <Accordion.Collapse eventKey="2" className="show">
                                                            <div className="card-body">
                                                                <div className="rating">
                                                                    <button className="text-success">$</button>
                                                                    <button className="text-success">$$</button>
                                                                    <button className="text-success">$$$</button>
                                                                    <button className="text-success">$$$$</button>
                                                                    <button className="text-success">$$$$$</button>
                                                                </div>
                                                            </div>
                                                        </Accordion.Collapse>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header">
                                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="3" className="p-0 card-link text-light-black fw-700 fs-16">
                                                        Delivery time
                                                        </Accordion.Toggle>
                                                        </div>
                                                        <Accordion.Collapse eventKey="3" className="show">
                                                            <div className="card-body">
                                                                <div className="delivery-slider">
                                                                    <Deliverytime/>
                                                                </div>
                                                            </div>
                                                        </Accordion.Collapse>
                                                    </div>
                                                </Accordion>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="pickuprestaurent">
                                                <p className="text-light-black delivery-type p-relative">Pick my food <Link to="#">Today, ASAP</Link>
                                                </p>
                                                <div className="filters">
                                                <Accordion defaultActiveKey="4">
                                                    <div className="card">
                                                        <div className="card-header">
                                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="4" className="p-0 card-link text-light-black fw-700 fs-16">
                                                        Feature
                                                        </Accordion.Toggle>
                                                        </div>
                                                        <Accordion.Collapse eventKey="4" className="show">
                                                            <div className="card-body">
                                                                <form>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" name="#" /> <span className="checkmark" /> Coupons <span className="text-light-white">(1)</span>
                                                                    </label>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" name="#" /> <span className="checkmark" /> New <span className="text-light-white">(26)</span>
                                                                    </label>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" name="#" /> <span className="checkmark" /> Open Now [7:08am] <span className="text-light-white">(236)</span>
                                                                    </label>
                                                                </form>
                                                            </div>
                                                        </Accordion.Collapse>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header"> 
                                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="5" className="p-0 card-link text-light-black fw-700 fs-16">
                                                        Rating
                                                        </Accordion.Toggle>
                                                        </div>
                                                        <Accordion.Collapse eventKey="5" className="show">
                                                            <div className="card-body">
                                                                <div className="rating">
                                                                    <button className="text-yellow"><i className="fas fa-star" />
                                                                    </button>
                                                                    <button className="text-yellow"><i className="fas fa-star" />
                                                                    </button>
                                                                    <button className="text-yellow"><i className="fas fa-star" />
                                                                    </button>
                                                                    <button className="text-yellow"><i className="fas fa-star" />
                                                                    </button>
                                                                    <button className="text-yellow"><i className="fas fa-star" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Accordion.Collapse>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header"> 
                                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="6" className="p-0 card-link text-light-black fw-700 fs-16">
                                                        Price
                                                        </Accordion.Toggle>
                                                        </div>
                                                        <Accordion.Collapse eventKey="6" className="show">
                                                            <div className="card-body">
                                                                <div className="rating">
                                                                    <button className="text-success">$</button>
                                                                    <button className="text-success">$$</button>
                                                                    <button className="text-success">$$$</button>
                                                                    <button className="text-success">$$$$</button>
                                                                    <button className="text-success">$$$$$</button>
                                                                </div>
                                                            </div>
                                                        </Accordion.Collapse>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header"> 
                                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="7" className="p-0 card-link text-light-black fw-700 fs-16">
                                                        Distance
                                                        </Accordion.Toggle>
                                                        </div>
                                                        <Accordion.Collapse eventKey="7" className="show">
                                                            <div className="card-body">
                                                                <div className="delivery-slider">
                                                                    <Distance/>
                                                                </div>
                                                            </div>
                                                        </Accordion.Collapse>
                                                    </div>
                                                </Accordion>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="caterings">
                                    <Tab.Container defaultActiveKey="deliverycaterings">
                                        <div className="siderbar-innertab">
                                            <Nav variant="pills" className="nav nav-pills mb-xl-20">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="deliverycaterings">Delivery</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="pickupcaterings" disabled>Pickup</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="deliverycaterings">
                                                <p className="text-light-black delivery-type p-relative">Delivery my food <Link to="#">Today, ASAP</Link>
                                                </p>
                                                <div className="filters">
                                                <Accordion defaultActiveKey="8">
                                                    <div className="card">
                                                        <div className="card-header"> 
                                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="8" className="p-0 card-link text-light-black fw-700 fs-16">
                                                        Delivery time
                                                        </Accordion.Toggle>
                                                        </div>
                                                        <Accordion.Collapse eventKey="8" className="show">
                                                            <div className="card-body">
                                                                <form>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" name="#" /> <span className="checkmark" /> Coupons <span className="text-light-white">(2)</span>
                                                                    </label>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" name="#" /> <span className="checkmark" /> New <span className="text-light-white">(3)</span>
                                                                    </label>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" name="#" /> <span className="checkmark" /> Order Tracking <span className="text-light-white">(6)</span>
                                                                    </label>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" name="#" /> <span className="checkmark" /> Open Now [6:05am] <span className="text-light-white">(10)</span>
                                                                    </label>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" name="#" /> <span className="checkmark" /> Free Delivery <span className="text-light-white">(6)</span>
                                                                    </label>
                                                                </form>
                                                            </div>
                                                        </Accordion.Collapse>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header"> 
                                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="9" className="p-0 card-link text-light-black fw-700 fs-16">
                                                        Rating
                                                        </Accordion.Toggle>
                                                        </div>
                                                        <Accordion.Collapse eventKey="9" className="show">
                                                            <div className="card-body">
                                                                <div className="rating">
                                                                    <button className="text-yellow"><i className="fas fa-star" />
                                                                    </button>
                                                                    <button className="text-yellow"><i className="fas fa-star" />
                                                                    </button>
                                                                    <button className="text-yellow"><i className="fas fa-star" />
                                                                    </button>
                                                                    <button className="text-yellow"><i className="fas fa-star" />
                                                                    </button>
                                                                    <button className="text-yellow"><i className="fas fa-star" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Accordion.Collapse>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header"> 
                                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="10" className="p-0 card-link text-light-black fw-700 fs-16">
                                                        Price
                                                        </Accordion.Toggle>
                                                        </div>
                                                        <Accordion.Collapse eventKey="10" className="show">
                                                            <div className="card-body">
                                                                <div className="rating">
                                                                    <button className="text-success">$</button>
                                                                    <button className="text-success">$$</button>
                                                                    <button className="text-success">$$$</button>
                                                                    <button className="text-success">$$$$</button>
                                                                    <button className="text-success">$$$$$</button>
                                                                </div>
                                                            </div>
                                                        </Accordion.Collapse>
                                                    </div>
                                                </Accordion>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
                <Testimonial />
            </Fragment>
        );
    }
}

export default Sidebar;
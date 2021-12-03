import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';

class About extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            open: false,
        }
    };
    render() {
        const { open } = this.state;
        return (
            <section className="section-padding restaurent-about smoothscroll" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="text-light-black fw-700 title">Great Burger Menu Info</h3>
                            <p className="text-light-green no-margin">American, Breakfast, Coffee and Tea, Fast Food, Hamburgers</p>
                            <p className="text-light-white no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> <span className="text-success fs-16">$</span>
                            <span className="text-success fs-16">$</span>
                            <span className="text-success fs-16">$</span>
                            <span className="text-dark-white fs-16">$</span>
                            <span className="text-dark-white fs-16">$</span>
                            <ul className="about-restaurent">
                                <li> <i className="fas fa-map-marker-alt" />
                                    <span>
                                        <Link to="#" className="text-light-white">
                                            314 79th St<br />
                Rite Aid, Brooklyn, NY, 11209
              </Link>
                                    </span>
                                </li>
                                <li> <i className="fas fa-phone-alt" />
                                    <span><Link to="tel:" className="text-light-white">(347) 123456789</Link></span>
                                </li>
                                <li> <i className="far fa-envelope" />
                                    <span><Link to="mailto:" className="text-light-white">demo@domain.com</Link></span>
                                </li>
                            </ul>
                            <ul className="social-media pt-2">
                                <li> <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                </li>
                                <li> <Link to="#"><i className="fab fa-twitter" /></Link>
                                </li>
                                <li> <Link to="#"><i className="fab fa-instagram" /></Link>
                                </li>
                                <li> <Link to="#"><i className="fab fa-pinterest-p" /></Link>
                                </li>
                                <li> <Link to="#"><i className="fab fa-youtube" /></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="restaurent-schdule">
                                <div className="card">
                                    <div className="card-header text-light-white fw-700 fs-16">Hours</div>
                                    <div className="card-body">
                                        <div className="schedule-box">
                                            <div className="day text-light-black">Monday</div>
                                            <div className="time text-light-black">Delivery: 7:00am - 10:59pm</div>
                                        </div>
                                        <Collapse in={this.state.open}>
                                            <div>
                                                <div className="schedule-box">
                                                    <div className="day text-light-black">Tuesday</div>
                                                    <div className="time text-light-black">Delivery: 7:00am - 10:00pm</div>
                                                </div>
                                                <div className="schedule-box">
                                                    <div className="day text-light-black">Wednesday</div>
                                                    <div className="time text-light-black">Delivery: 7:00am - 10:00pm</div>
                                                </div>
                                                <div className="schedule-box">
                                                    <div className="day text-light-black">Thursday</div>
                                                    <div className="time text-light-black">Delivery: 7:00am - 10:00pm</div>
                                                </div>
                                                <div className="schedule-box">
                                                    <div className="day text-light-black">Friday</div>
                                                    <div className="time text-light-black">Delivery: 7:00am - 10:00pm</div>
                                                </div>
                                                <div className="schedule-box">
                                                    <div className="day text-light-black">Saturday</div>
                                                    <div className="time text-light-black">Delivery: 7:00am - 10:00pm</div>
                                                </div>
                                                <div className="schedule-box">
                                                    <div className="day text-light-black">Sunday</div>
                                                    <div className="time text-light-black">Delivery: 7:00am - 10:00pm</div>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </div>
                                    <div className="card-footer">
                                        <Link className="fw-500 collapsed" to="#" onClick={() => this.setState({ open: !open })}
                                            aria-controls="user-profile"
                                            aria-expanded={open}>See the full schedule</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
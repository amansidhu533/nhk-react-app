import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Instagram from "./Instagram";

import playstore from "../../assets/img/playstore.jpg";
import appstore from "../../assets/img/appstore.jpg";
import card from "../../assets/img/card-front.jpg";
import visa from "../../assets/img/visa.jpg";
import amex from "../../assets/img/amex-card-front.png";
import mastercard from "../../assets/img/mastercard.png";

const iconlist = [
  { icon: "credit-card-1", title: "100% Payment Secured" },
  { icon: "wallet-1", title: "Support lots of Payments" },
  { icon: "help", title: "24 hours / 7 days Support" },
  { icon: "truck", title: "Free Delivery with $50" },
  { icon: "guarantee", title: "Best Price Guaranteed" },
  { icon: "app-file-symbol", title: "Mobile Apps Ready" },
];

class Footertwo extends Component {
  render() {
    return (
      <Fragment>
        <div className="footer-top section-padding">
          <div className="container-fluid">
            <div className="row">
              {iconlist.map((item, i) => (
                <div key={i} className="col-md-2 col-sm-4 col-6 mb-sm-20">
                  <div className="icon-box">
                    {" "}
                    <span className="text-light-green">
                      <i className={"flaticon-" + item.icon + ""} />
                    </span>
                    <span className="text-custom-black">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer className="section-padding bg-light-theme pt-0 u-line">
          <Instagram />
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-contact">
                  <h6 className="text-light-black">Need Help</h6>
                  <ul>
                    <li className="fw-600">
                      <span className="text-light-white">Call Us</span>{" "}
                      <Link to="tel:" className="text-light-black">
                        +(347) 123 456 789
                      </Link>
                    </li>
                    <li className="fw-600">
                      <span className="text-light-white">Email Us</span>{" "}
                      <Link to="mailto:" className="text-light-black">
                        demo@domain.com
                      </Link>
                    </li>
                    <li className="fw-600">
                      <span className="text-light-white">Join our twitter</span>{" "}
                      <Link to="#" className="text-light-black">
                        @quickmunch
                      </Link>
                    </li>
                    <li className="fw-600">
                      <span className="text-light-white">
                        Join our instagram
                      </span>{" "}
                      <Link to="#" className="text-light-black">
                        @quickmunch
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                  <h6 className="text-light-black">Get to Know Us</h6>
                  <ul>
                    <li>
                      <Link to="#" className="text-light-white fw-600">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-light-white fw-600">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-light-white fw-600">
                        Socialize
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-light-white fw-600">
                        NHK
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-light-white fw-600">
                        Perks
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                  <h6 className="text-light-black">Let Us Help You</h6>
                  <ul>
                    <li>
                      <Link to="#" className="text-light-white fw-600">
                        Account Details
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-light-white fw-600">
                        Order History
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-light-white fw-600">
                        Find restaurent
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-light-white fw-600">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-light-white fw-600">
                        Track order
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                  <h6 className="text-light-black">Doing Business</h6>
                  <ul>
                    <li>
                      <Link to="#" className="text-light-white fw-600">
                        Suggest an Idea
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-light-white fw-600">
                        Be a Partner restaurent
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-light-white fw-600">
                        Create an Account
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-light-white fw-600">
                        Help
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                  <h6 className="text-light-black">Download Apps</h6>
                  <div className="appimg">
                    <Link to="#">
                      <img src={playstore} className="img-fluid" alt="" />
                    </Link>
                  </div>
                  <div className="appimg">
                    <Link to="#">
                      <img src={appstore} className="img-fluid" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-contact">
                  <h6 className="text-light-black">Newsletter</h6>
                  <form className="subscribe_form">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control form-control-submit"
                        name="email"
                        placeholder="Enter your email"
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-second btn-submit"
                          type="button"
                        >
                          <i className="fas fa-paper-plane" />
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-12">
                <div className="ft-social-media">
                  <h6 className="text-center text-custom-white">Follow us</h6>
                  <ul>
                    <li>
                      {" "}
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="#">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="#">
                        <i className="fab fa-youtube" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="payment-logo mb-md-20">
                  {" "}
                  <span className="text-light-white fs-14 mr-3">
                    We are accept
                  </span>
                  <div className="payemt-icon">
                    <img src={card} alt="" />
                    <img src={visa} alt="" />
                    <img src={amex} alt="" />
                    <img src={mastercard} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center medewithlove align-self-center">
                <Link
                  to="http://www.slidesigma.com"
                  className="text-light-black"
                >
                  Made with Real <i className="fas fa-heart" /> Metropolitanhost
                </Link>
              </div>
              <div className="col-lg-4">
                <div className="copyright-text">
                  {" "}
                  <span className="text-light-black">
                    ©{" "}
                    <Link to="#" className="text-light-white">
                      Metropolitanhost
                    </Link>{" "}
                    - 2022 | All Right Reserved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footertwo;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { processRatingStars, fetchFlavorIcon } from "../../../helper/helper";
import product from "../../../data/product.json";
import { Collapse } from "react-bootstrap";

import promobanner from "../../../assets/img/banner.jpg";

class Foodlist extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: true,
      open2: true,
    };
  }
  render() {
    const { open } = this.state;
    const { open2 } = this.state;
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="promocodeimg mb-xl-20 p-relative">
            <img
              src={promobanner}
              className="img-fluid full-width"
              alt="promocode"
            />
            <div className="promocode-text">
              <div className="promocode-text-content">
                <h5 className="text-custom-white mb-2 fw-600">
                  Get $10 off your first order!
                </h5>
                <p className="text-custom-white no-margin">
                  Spend $15 or more and get $10 off your first delivery order.
                </p>
              </div>
              <div className="promocode-btn">
                {" "}
                <Link to="#">Get Deal</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 restaurent-meal-head mb-md-40">
          <div className="card">
            <div className="card-header">
              <div className="section-header-left">
                <h3 className="text-light-black header-title">
                  <Link
                    className="card-link text-light-black no-margin"
                    to="#"
                    onClick={() => this.setState({ open: !open })}
                    aria-controls="user-profile"
                    aria-expanded={open}
                  >
                    Most Popular
                  </Link>
                </h3>
              </div>
            </div>
            <Collapse in={this.state.open}>
              <div>
                <div className="card-body no-padding">
                  <div className="row">
                    {product.map((item, i) => (
                      <div key={i} className="col-lg-12">
                        <div className="restaurent-product-list">
                          <div className="restaurent-product-detail">
                            <div className="restaurent-product-left">
                              <div className="restaurent-product-title-box">
                                <div className="restaurent-product-box">
                                  <div className="restaurent-product-title">
                                    <h6 className="mb-2">
                                      <Link
                                        to="#"
                                        className="text-light-black fw-600"
                                      >
                                        {item.title}
                                      </Link>
                                    </h6>
                                    <p className="text-light-white">
                                      {item.calories} Cal.
                                    </p>
                                  </div>
                                  <div className="restaurent-product-label">
                                    {item.label === true ? (
                                      <span className="rectangle-tag bg-gradient-red text-custom-white">
                                        Label
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                    {item.combo === true ? (
                                      <span className="rectangle-tag bg-dark text-custom-white">
                                        Combo
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                                <div className="restaurent-product-rating">
                                  <div className="ratings">
                                    {processRatingStars(item.rating)}
                                  </div>
                                  <div className="rating-text">
                                    <p className="text-light-white fs-12 title">
                                      {item.totalRating} ratings
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="restaurent-product-caption-box">
                                {" "}
                                <span className="text-light-white">
                                  {item.text}
                                </span>
                              </div>
                              <div className="restaurent-tags-price">
                                <div className="restaurent-tags">
                                  {item.flavors.map((flavor, i) => (
                                    <span
                                      key={i}
                                      className="text-custom-white square-tag"
                                    >
                                      <img
                                        src={fetchFlavorIcon(flavor)}
                                        alt={flavor}
                                      />
                                    </span>
                                  ))}
                                </div>{" "}
                                <span className="circle-tag">
                                  <img
                                    src="assets/img/svg/heart.svg"
                                    alt="tag"
                                  />
                                </span>
                                <div className="restaurent-product-price">
                                  <h6 className="text-success fw-600 no-margin">
                                    ${item.price}+
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div className="restaurent-product-img">
                              <img
                                src={item.img}
                                className="img-fluid"
                                alt="#"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="section-header-left">
                <h3 className="text-light-black header-title">
                  <Link
                    className="card-link text-light-black no-margin"
                    to="#"
                    onClick={() => this.setState({ open2: !open2 })}
                    aria-controls="loan-progress"
                    aria-expanded={open2}
                  >
                    Combo Meals
                  </Link>
                </h3>
              </div>
            </div>
            <Collapse in={this.state.open2}>
              <div>
                <div className="card-body">
                  <div className="row">
                    {product.map((item, i) => (
                      <div key={i} className="col-lg-12">
                        <div className="restaurent-product-list">
                          <div className="restaurent-product-detail">
                            <div className="restaurent-product-left">
                              <div className="restaurent-product-title-box">
                                <div className="restaurent-product-box">
                                  <div className="restaurent-product-title">
                                    <h6 className="mb-2">
                                      <Link
                                        to="#"
                                        className="text-light-black fw-600"
                                      >
                                        {item.title}
                                      </Link>
                                    </h6>
                                    <p className="text-light-white">
                                      {item.calories} Cal.
                                    </p>
                                  </div>
                                  <div className="restaurent-product-label">
                                    {item.label === true ? (
                                      <span className="rectangle-tag bg-gradient-red text-custom-white">
                                        Label
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                    {item.combo === true ? (
                                      <span className="rectangle-tag bg-dark text-custom-white">
                                        Combo
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                                <div className="restaurent-product-rating">
                                  <div className="ratings">
                                    {processRatingStars(item.rating)}
                                  </div>
                                  <div className="rating-text">
                                    <p className="text-light-white fs-12 title">
                                      {item.totalRating} ratings
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="restaurent-product-caption-box">
                                {" "}
                                <span className="text-light-white">
                                  {item.text}
                                </span>
                              </div>
                              <div className="restaurent-tags-price">
                                <div className="restaurent-tags">
                                  {item.flavors.map((flavor, i) => (
                                    <span
                                      key={i}
                                      className="text-custom-white square-tag"
                                    >
                                      <img
                                        src={fetchFlavorIcon(flavor)}
                                        alt={flavor}
                                      />
                                    </span>
                                  ))}
                                </div>{" "}
                                <span className="circle-tag">
                                  <img
                                    src="assets/img/svg/heart.svg"
                                    alt="tag"
                                  />
                                </span>
                                <div className="restaurent-product-price">
                                  <h6 className="text-success fw-600 no-margin">
                                    ${item.price}+
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div className="restaurent-product-img">
                              <img
                                src={item.img}
                                className="img-fluid"
                                alt="#"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}

export default Foodlist;

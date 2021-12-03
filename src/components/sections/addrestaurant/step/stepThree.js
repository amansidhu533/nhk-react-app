import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, NavLink, Tab, Nav } from 'react-bootstrap';

import paypal from '../../../../assets/img/pay-pal.png';

function stepThree(props) {
  return (
    <div className="payment-sec">
      <div className="section-header-left">
        <h3 className="text-light-black header-title">Payment information</h3>
      </div>
      <div className="row">
        <div className="col-12">
          <div id="accordion">
            <Accordion>
              <div className="card">
                <div className="card-header">
                  <Accordion.Toggle as={NavLink} variant="link" eventKey="0" className="p-0 card-link fw-500 fs-14">
                    Pay with a Gift Card
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="0">
                  <div className="card-body no-padding payment-option-tab">
                    <div className="form-group">
                      <div className="credit-card gift-card p-relative">
                        <input type="text" name="#" className="form-control-submit fs-16" defaultValue="AC2B76" />
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              <div className="card">
                <div className="card-header">
                  <Accordion.Toggle as={NavLink} variant="link" eventKey="1" className="p-0 card-link fw-500 fs-14">
                    Add a promo code
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="1">
                  <div className="card-body no-padding payment-option-tab">
                    <div className="form-group">
                      <div className="credit-card promocode p-relative input-group">
                        <input type="text" name="#" className="form-control-submit fs-16" placeholder="AC2B76" />
                        <button type="submit" className="btn-second btn-submit ml-1">Apply</button>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
            </Accordion>
            <div className="payment-option-tab">
              <Tab.Container defaultActiveKey="tab-1">
                <Nav variant="pills" className="nav nav-tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="tab-1" className="fw-600">Saved credit card</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-2" className="fw-600">New credit card</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-3" className="fw-600">Cash</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-4" className="fw-600">PayPal<sup>TM</sup></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-5" className="fw-600">Amex Express Checkout</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="tab-1">
                    <div className="form-group">
                      <div className="credit-card p-relative">
                        <input type="text" name="#" className="form-control form-control-submit" defaultValue="VISA....1877,exp 12/21" />
                      </div>
                    </div>
                    <div className="section-header-left">
                      <h3 className="text-light-black header-title">Donate the change</h3>
                    </div>
                    <div className="form-group">
                      <label className="custom-checkbox">
                        <input type="checkbox" name="#" /> <span className="checkmark" />
                        Donate $0.77 to No kid Hungry. By checking this box you agree to the Donate the Change <Link to="#">Terms of use</Link>  <span className="ml-2"><Link to="#">Learn More</Link></span>
                      </label>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn-first green-btn text-custom-white full-width fw-500">Place Your Order</button>
                    </div>
                    <p className="text-center text-light-black no-margin">By placing your order, you agree to Quickmunch's <Link to="#">terms of use</Link> and <Link to="#">privacy agreement</Link>
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab-2">
                    <div className="row">
                      <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="form-group">
                          <label className="text-light-white fw-700">Card Number</label>
                          <div className="credit-card card-front p-relative">
                            <input type="text" name="#" className="form-control form-control-submit" placeholder="1234 5678 9101 1234" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-6 col-md-2 col-sm-6">
                        <div className="form-group">
                          <label className="text-light-white fw-700">Expires on</label>
                          <input type="text" name="#" className="form-control form-control-submit" placeholder="12/21" />
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6">
                        <div className="form-group">
                          <label className="text-light-white fw-700">Security Code</label>
                          <div className="credit-card card-back p-relative">
                            <input type="text" name="#" className="form-control form-control-submit" placeholder={123} />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6">
                        <div className="form-group">
                          <label className="text-light-white fw-700">ZIP Code</label>
                          <input type="text" name="#" className="form-control form-control-submit" placeholder={123456} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="custom-checkbox">
                            <input type="checkbox" name="#" /> <span className="checkmark" />
                            Save Credit card</label>
                        </div>
                      </div>
                    </div>
                    <div className="section-header-left">
                      <h3 className="text-light-black header-title">Donate the change</h3>
                    </div>
                    <div className="form-group">
                      <label className="custom-checkbox">
                        <input type="checkbox" name="#" /> <span className="checkmark" />
                        Donate $0.77 to No kid Hungry. By checking this box you agree to the Donate the Change <Link to="#">Terms of use</Link>  <span className="ml-2"><Link to="#">Learn More</Link></span>
                      </label>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn-first green-btn text-custom-white full-width fw-500">Place Your Order</button>
                    </div>
                    <p className="text-center text-light-black no-margin">By placing your order, you agree to Quickmunch's <Link to="#">terms of use</Link> and <Link to="#">privacy agreement</Link>
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab-3">
                    <p className="text-light-black">Have the cash ready when you receive your order.</p>
                    <div className="section-header-left">
                      <h3 className="text-light-black header-title">Donate the change</h3>
                    </div>
                    <div className="form-group">
                      <label className="custom-checkbox">
                        <input type="checkbox" name="#" /> <span className="checkmark" />
                        Apologies, but you can't donate with the selected payment type</label>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn-first green-btn text-custom-white full-width fw-500">Place Your Order</button>
                    </div>
                    <p className="text-center text-light-black no-margin">By placing your order, you agree to Quickmunch's <Link to="#">terms of use</Link> and <Link to="#">privacy agreement</Link>
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab-4">
                    <p className="text-light-black">Please review your order and make any necessary changes before checking out with PayPal.</p>
                    <div className="section-header-left">
                      <h3 className="text-light-black header-title">Donate the change</h3>
                    </div>
                    <div className="form-group">
                      <label className="custom-checkbox">
                        <input type="checkbox" name="#" /> <span className="checkmark" />
                        Donate $0.77 to No kid Hungry. By checking this box you agree to the Donate the Change <Link to="#">Terms of use</Link>  <span className="ml-2"><Link to="#">Learn More</Link></span>
                      </label>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn-first paypal-btn text-custom-white full-width fw-500">Checkout with
                        <img src={paypal} alt="" />
                      </button>
                    </div>
                    <p className="text-center text-light-black no-margin">By placing your order, you agree to Quickmunch's <Link to="#">terms of use</Link> and <Link to="#">privacy agreement</Link>
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab-5">
                    <Accordion>
                      <div className="card">
                        <div className="card-header">

                          <Accordion.Toggle as={NavLink} variant="link" eventKey="2" className="p-0 card-link fw-500 fs-14">
                            Saved Card
                          </Accordion.Toggle>
                        </div>
                        <Accordion.Collapse eventKey="2">
                          <div className="card-body no-padding payment-option-tab">
                            <div className="form-group">
                              <div className="credit-card amex-card-front p-relative">
                                <input type="text" name="#" className="form-control form-control-submit" defaultValue="VISA....1877,exp 12/21" />
                              </div>
                            </div>
                          </div>
                        </Accordion.Collapse>

                      </div>
                      <div className="card">
                        <div className="card-header">
                          <Accordion.Toggle as={NavLink} variant="link" eventKey="3" className="p-0 card-link fw-500 fs-14">
                            Add New Card
                          </Accordion.Toggle>
                        </div>
                        <Accordion.Collapse eventKey="3">
                          <div className="card-body no-padding payment-option-tab">
                            <div className="row">
                              <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                <div className="form-group">
                                  <label className="text-light-white fw-700">Card Number</label>
                                  <div className="credit-card amex-card-front p-relative">
                                    <input type="text" name="#" className="form-control form-control-submit" placeholder="1234 5678 9101 1234" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-2 col-lg-6 col-md-2 col-sm-6">
                                <div className="form-group">
                                  <label className="text-light-white fw-700">Expires on</label>
                                  <input type="text" name="#" className="form-control form-control-submit" placeholder="12/21" />
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6">
                                <div className="form-group">
                                  <label className="text-light-white fw-700">Security Code</label>
                                  <div className="credit-card amex-card-back p-relative">
                                    <input type="text" name="#" className="form-control form-control-submit" placeholder={123} />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6">
                                <div className="form-group">
                                  <label className="text-light-white fw-700">ZIP Code</label>
                                  <input type="text" name="#" className="form-control form-control-submit" placeholder={123456} />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <label className="custom-checkbox">
                                    <input type="checkbox" name="#" /> <span className="checkmark" />
                                    Save Credit card</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Collapse>
                      </div>
                    </Accordion>
                    <div className="section-header-left">
                      <h3 className="text-light-black header-title">Donate the change</h3>
                    </div>
                    <div className="form-group">
                      <label className="custom-checkbox">
                        <input type="checkbox" name="#" /> <span className="checkmark" />
                        Donate $0.77 to No kid Hungry. By checking this box you agree to the Donate the Change <Link to="#">Terms of use</Link>  <span className="ml-2"><Link to="#">Learn More</Link></span>
                      </label>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn-first green-btn text-custom-white full-width fw-500">Place Your Order</button>
                    </div>
                    <p className="text-center text-light-black no-margin">By placing your order, you agree to Quickmunch's <Link to="#">terms of use</Link> and <Link to="#">privacy agreement</Link>
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default stepThree;

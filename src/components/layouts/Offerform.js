import React, { Component } from "react";

class Offerform extends Component {
  render() {
    return (
      <div className="card sidebar-card">
        <div className="card-header no-padding">
          <div className="offer-content">
            <h2 className="text-custom-white fw-700">
              Get $12 off <small className=" fw-700">your order*</small>
            </h2>
            <p className="text-custom-white">
              As an added treat, enjoy <strong>free delivery</strong> from
              <br />
              select restaurants automatically applied at checkout
            </p>
          </div>
        </div>
        <div className="card-body padding-15">
          <form>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label className="text-light-white fs-14">Email</label>
                  <input
                    type="email"
                    name="#"
                    className="form-control form-control-submit"
                    placeholder="Email I'd"
                  />
                </div>
                <div className="form-group">
                  <label className="text-light-white fs-14">ZIP Code</label>
                  <input
                    type="number"
                    name="#"
                    className="form-control form-control-submit"
                    placeholder={10421}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn-second btn-submit full-width"
                  >
                    Save $12 on your first order
                  </button>
                </div>
                <div className="text-center">
                  {" "}
                  <span className="text-light-black fs-12">
                    *Valid on first order only, for one-time use, subject to
                    NHK’s verification. Additional terms may apply. By signing
                    up, you agree to receive marketing and promotional emails
                    and communications form NHK
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Offerform;

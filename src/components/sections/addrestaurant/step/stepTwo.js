import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../../assets/img/package/package-1.jpg';
import img2 from '../../../../assets/img/package/package-2.jpg';

function stepTwo(props) {
  return (
    <div className="package-sec">
      <div className="row">
        <div className="col-lg-6">
          <div className="package-box main-box">
            <div className="package-img">
              <Link to="#">
                <img src={img1} className="img-fluid full-width" alt="package" />
              </Link>
            </div>
            <div className="package-caption padding-20 bg-black">
              <div className="package-item-first">
                <div className="pack-type fs-18 text-custom-white">Silver Package</div>
                <div className="pack-type fs-18 text-light-green">$ 18</div>
              </div>
              <ul>
                <li className="text-custom-white"><span>10 days</span>
                </li>
                <li className="text-custom-white"><span>1 dip free (with every meal)</span>
                </li>
                <li className="text-custom-white"><span>1 Soft drinks</span>
                </li>
                <li className="text-custom-white"><span>Unlimited order</span>
                </li>
                <li className="text-custom-white"><span>Free delivery</span>
                </li>
              </ul>
              <div className="package-btn"> <Link to="#" className="btn-second btn-submit full-width">Choose Plan</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="package-box main-box">
            <div className="package-img">
              <Link to="#">
                <img src={img2} className="img-fluid full-width" alt="package" />
              </Link>
            </div>
            <div className="package-caption padding-20 bg-black">
              <div className="package-item-first">
                <div className="pack-type fs-18 text-custom-white">Gold Package</div>
                <div className="pack-type fs-18 text-light-green">$ 35</div>
              </div>
              <ul>
                <li className="text-custom-white"><span>20 days</span>
                </li>
                <li className="text-custom-white"><span>2 dip free (with every meal)</span>
                </li>
                <li className="text-custom-white"><span>3 Soft drinks</span>
                </li>
                <li className="text-custom-white"><span>Unlimited order</span>
                </li>
                <li className="text-custom-white"><span>Free delivery</span>
                </li>
              </ul>
              <div className="package-btn"> <Link to="#" className="btn-second btn-submit full-width">Choose Plan</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default stepTwo;

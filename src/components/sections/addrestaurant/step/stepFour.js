import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { calculateRating, processRatingStars, fetchFlavorIcon } from '../../../../helper/helper';
import product from "../../../../data/product.json";

function stepFour(props) {
  return (
    <div className="thankmsg-sec">
      <div className="msg-wrapper text-center">
        <div className="wrapper-1">
          <h1 className="text-success mb-2">Thank You</h1>
          <h3 className="text-dark-white">You have successfully created your restaurant, to add more details, go to your email inbox for login details</h3>
        </div>
        <div className="row text-left">
          {product.slice(0,2).map((item, i) => (
            <div key={i} className="col-lg-6">
              <div className="product-box mb-xl-20">
                <div className="product-img">
                  <Link to="/restaurant">
                    <img src={item.img} className="img-fluid full-width" alt="product-img" />
                  </Link>
                  <div className="overlay">
                    <div className="product-tags padding-10">
                      <span className="circle-tag">
                        <img src="assets/img/svg/heart-1.svg" alt="tag" />
                      </span>
                      {
                        item.trending === true ? <span className="type-tag bg-gradient-green text-custom-white">Trending</span> : ''
                      }
                      {
                        item.discount > 0 || item.discount !== '' ? <div className="custom-tag"> <span className="text-custom-white rectangle-tag bg-gradient-red"> {item.discount}% </span> </div> : ''
                      }
                      {
                        item.discount > 0 || item.discount !== '' ? <Fragment /> : ''
                      }

                    </div>
                  </div>
                </div>
                <div className="product-caption">
                  <div className="title-box">
                    <h6 className="product-title"><Link to="/restaurant" className="text-light-black "> {item.title}</Link></h6>
                    <div className="tags">
                      <span className={"text-custom-white rectangle-tag " + calculateRating(item.rating) + ""}>
                        {item.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-light-white">
                    {item.categories.map((category, i) => (
                      <span key={i}>{category.name}</span>
                    ))}

                  </p>
                  <div className="product-details">
                    <div className="price-time"> <span className="text-light-black time">{item.time} min</span>
                      <span className="text-light-white price">${item.price} min</span>
                    </div>
                    <div className="rating">
                      <span>
                        {processRatingStars(item.rating)}
                      </span>
                      <span className="text-light-white text-right">{item.totalRating} ratings</span>
                    </div>
                  </div>
                  <div className="product-footer">
                    {item.flavors.map((flavor, i) => (
                      <span key={i} className="text-custom-white square-tag">
                        <img src={fetchFlavorIcon(flavor)} alt={flavor} />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        <p className="text-light-black">For cancellation or more information Please Contact Us</p>
        <ul className="contact-details">
          <li> <i className="fas fa-phone-alt text-light-black" />
            <span><Link to="tel:" className="text-light-black">(347) 123456789</Link></span>
          </li>
          <li> <i className="fas fa-fax text-light-black" />
            <span><Link to="tel:" className="text-light-black">(347) 123456789</Link></span>
          </li>
          <li> <i className="far fa-envelope text-light-black" />
            <span><Link to="mailto:" className="text-light-black">demo@domain.com</Link></span>
          </li>
        </ul>
        <button className="btn-first white-btn">Preview</button>
      </div>
    </div>
  );
}

export default stepFour;
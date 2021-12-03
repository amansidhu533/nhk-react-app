import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';

class Video extends Component {
    componentDidMount() {
        function popup() {
            $('.videoIframe').magnificPopup({
                type: 'iframe'
            });
        }
        popup();
    }
    render() {
        return (
            <div className="video-box mb-xl-20">
                <div className="video_wrapper video_wrapper_full js-videoWrapper">
                    <a href="https://www.youtube.com/embed/AdZrEIo6UYU" className="videoIframe js-videoIframe">
                        <div className="videoPoster js-videoPoster">
                            <div className="video-inner">
                                <i className="far fa-play-circle" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="discount-box main-box padding-tb-10">
                    <div className="discount-price padding-10">
                        <div className="left-side">
                            <h6 className="text-light-black fw-600 no-margin">Watch Now and get 50% discount</h6>
                            <p className="text-light-white no-margin">The hung-over foody (2022)</p>
                        </div>
                        <div className="right-side justify-content-end">
                            <div className="dis-text">
                                <span className="badge bg-light-green text-custom-white fw-400">Discount</span>
                                <h4 className="text-light-black no-margin">50%</h4>
                            </div>
                            <Link to="restaurent.html">
                                <img src="assets/img/logo-3.jpg" className="img-fluid" alt="logo" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;
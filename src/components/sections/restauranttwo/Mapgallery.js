import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';
import gallery from '../../../data/restaurantgallery.json';

class Mapgallery extends Component {
    componentDidMount() {
        function popup() {
            $('.image-popup').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }
        popup();
    }
    render() {
        return (
            <div className="map-gallery-sec section-padding bg-light-theme smoothscroll" id="mapgallery">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="main-box">
                                <div className="row">
                                    <div className="col-md-6 map-pr-0">
                                        <iframe id="locmap" title="map" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                                    </div>
                                    <div className="col-md-6 map-pl-0">
                                        <div className="gallery-box padding-10">
                                            <ul className="gallery-img">
                                                {gallery.map((item, i) => (
                                                    <li key={i}>
                                                        <Link className="image-popup" to={item.img} title="Image title">
                                                            <img src={item.img} className="img-fluid full-width" alt="jpg" />
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mapgallery;
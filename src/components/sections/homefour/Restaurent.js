import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import restaurentlist from '../../../data/restaurantlist.json'

class Restaurent extends Component {
    render() {
        return (
            <section className="section-padding">
                <div className="container-fluid">
                    <div className="row">
                        {restaurentlist.slice(0,3).map((item, i) => (
                            <div className="col-xl-4 col-md-6" key={i}>
                                <div className="product-box-3 mb-xl-20">
                                    <div className="product-img">
                                        <Link to="#">
                                            <img src={item.img} className="img-fluid full-width" alt="#" />
                                        </Link>
                                    </div>
                                    <div className="product-caption">
                                        <div className="padding-tb-10">
                                            <h5 className="mb-1"><Link to="#" className="text-light-black">{item.title}® ({item.specialization})</Link></h5>
                                            <ul className="food-type">
                                                <li className="text-light-white">$</li>
                                                {item.foodtype.map((foodtype, i) => (
                                                    <li className="text-light-white" key={i}>{foodtype.name}</li>
                                                ))}
                                            </ul>
                                            <ul className="food-description">
                                                {item.description.map((description, i) => (
                                                    <li className="text-light-black" key={i}>{description.name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Restaurent;
import React, { Component } from 'react';


import icon1 from '../../../assets/img/001-search.png';
import icon2 from '../../../assets/img/004-shopping-bag.png';
import icon3 from '../../../assets/img/002-stopwatch.png';
import icon4 from '../../../assets/img/003-placeholder.png';

const processblock = [
    {
        id: 1,
        icon: icon1,
        title: 'Search',
        extclass: 'arrow-1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.',
    },
    {
        id: 2,
        icon: icon2,
        title: 'Select',
        extclass: 'arrow-2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.',
    },
    {
        id: 3,
        icon: icon3,
        title: 'Order',
        extclass: 'arrow-1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.',
    },
    {
        id: 4,
        icon: icon4,
        title: 'Enjoy',
        extclass: '',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.',
    },
]

class Process extends Component {
    render() {
        return (
            <section className="section-padding how-it-works bg-light-theme">
                <div className="container">
                    <div className="section-header-style-2">
                        <h6 className="text-light-green sub-title">Our Process</h6>
                        <h3 className="text-light-black header-title">How Does It Work</h3>
                    </div>
                    <div className="row">
                        {processblock.map((item, i) => (
                            <div key={i} className="col-lg-3 col-sm-6">
                                <div className={"how-it-works-box " + item.extclass + ""}>
                                    <div className="how-it-works-box-inner">
                                        <span className="icon-box">
                                            <img src={item.icon} alt="icon" />
                                            <span className="number-box">0{item.id}</span>
                                        </span>
                                        <h6>{item.title}</h6>
                                        <p>{item.text}</p>
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

export default Process;
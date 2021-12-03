import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import img1 from '../../../assets/img/sidebanner-1.jpg';
import img2 from '../../../assets/img/sidebanner-2.jpg';
import img3 from '../../../assets/img/sidebanner-3.jpg';

// install Swiper components
SwiperCore.use([Navigation]);

const advpost = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img2 },
]
class Advertisement extends Component {
    render() {
        return (
            <Swiper className="advertisement-slider swiper-container h-auto">
                {advpost.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="large-product-box p-relative pb-0">
                            <img src={item.img} className="img-fluid full-width" alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
}

export default Advertisement;
import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import img1 from "../../assets/img/about/72x72/user-1.png";

// install Swiper components
SwiperCore.use([Navigation]);

const testimonial = [
  {
    img: img1,
    name: "Janadhon doe",
    post: "Co-founder",
    comment:
      "I like NHK and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisist amet, sed do eiusm.",
  },
  {
    img: img1,
    name: "Janadhon doe",
    post: "Co-founder",
    comment:
      "I like NHK and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisist amet, sed do eiusm.",
  },
];

class Fulltestimonial extends Component {
  render() {
    const settings = {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      speed: 1000,
      grabCursor: true,
      watchSlidesProgress: true,
      mousewheelControl: true,
      keyboardControl: true,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
    };
    return (
      <section className="feedback-area-two section-padding">
        <div className="container">
          <div className="section-header-style-2">
            <h6 className="text-light-green sub-title">Testimonials</h6>
            <h3 className="text-custom-white header-title">
              People Say About Us!
            </h3>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Swiper
                className="feedback-slider p-relative swiper-container"
                {...settings}
                navigation
              >
                {testimonial.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="feedback-item-two">
                      <img src={item.img} alt="feedback" />
                      <p className="text-custom-white fs-16">{item.comment}</p>
                      <h4 className="text-custom-white fw-600 no-margin">
                        {item.name}
                      </h4>
                      <span className="text-custom-white fw-600">
                        {item.post}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Fulltestimonial;

import React from "react";
import "./HeroSlider.css";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import p1 from "../../assets/display02.jpeg";
import p2 from "../../assets/Display03.png";
import p3 from "../../assets/display01.jpeg";

const HeroSlider = () => {
  return (
    <div className="hero-slider">

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="slide">
            <div className="slide-text">
              <h1>Premium Kumkum</h1>
              <p>High quality pooja powder</p>
              <button>Explore Now</button>
            </div>
            <img src={p1} alt="product1" />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="slide">
            <div className="slide-text">
              <h1>Pure Haldi Powder</h1>
              <p>Natural turmeric for rituals</p>
              <button>Explore Now</button>
            </div>
            <img src={p2} alt="product2" />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="slide">
            <div className="slide-text">
              <h1>Chandan Powder</h1>
              <p>Premium sandalwood powder</p>
              <button>Explore Now</button>
            </div>
            <img src={p3} alt="product3" />
          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  );
};

export default HeroSlider;
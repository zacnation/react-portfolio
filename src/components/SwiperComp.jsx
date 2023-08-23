import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function SwiperComp(props) {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="SwiperComp">
        <SwiperSlide>
          <img
            src="mindmissiongrayscale.png"
            alt=""
            style={{ width: '750px' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/yelpcamp.png" alt="" style={{ width: '750px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/lightsout.png" alt="" style={{ width: '750px' }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

SwiperComp.propTypes = {
  darkMode: PropTypes.bool,
};

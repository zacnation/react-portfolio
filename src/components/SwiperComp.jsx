import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function SwiperComp(props) {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="SwiperComp">
        <SwiperSlide>
          <Slide
            img={'mindmissiongrayscale.png'}
            title={'Mind Mission'}
            description={
              'Mind Mission is a mindfulness training game... lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
            techs={['ruby', 'rails', 'javascript', 'stimulus']}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={'yelpcamp.png'}
            title={'YelpCamp'}
            description={
              'YelpCamp is... lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
            techs={[
              'html5',
              'css3',
              'javascript',
              'mongodb',
              'express',
              'nodejs',
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={'lightsout.png'}
            title={'Lights Out'}
            description={
              'Lights Out is... lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
            techs={['html5', 'css3', 'javascript', 'react']}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

SwiperComp.propTypes = {
  darkMode: PropTypes.bool,
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  techs: PropTypes.arrayOf(PropTypes.string),
};

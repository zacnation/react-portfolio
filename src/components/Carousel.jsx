import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
  const swiperOptions = {
    loop: true,
  };
  return (
    <div className="pb-10 md:pb-12 lg:pb-20">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="Carousel"
        {...swiperOptions}
      >
        <SwiperSlide>
          <Slide
            img={'yelpcampgray.png'}
            title={'YelpCamp'}
            description={
              'YelpCamp is... lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
            techs={[
              'html5',
              'css3',
              'bootstrap',
              'javascript',
              'mongodb',
              'express',
              'nodejs',
            ]}
            link="https://zacnation-yelpcamp.cyclic.app/"
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
            link="https://www.mind-mission.me/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={'mindmissiongray.png'}
            title={'Mind Mission'}
            description={
              'Mind Mission is a mindfulness training game... lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
            techs={['ruby', 'rails', 'javascript', 'stimulus']}
            link="https://www.mind-mission.me/"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

Carousel.propTypes = {
  darkMode: PropTypes.bool,
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  techs: PropTypes.arrayOf(PropTypes.string),
};

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
              'YelpCamp is a fullstack web application that allows users to create and review campgrounds. It is built with Node.js, Express, MongoDB, and Bootstrap. Authentication is implemented using Passport.js. Users can create, edit, and delete campgrounds and comments. They can also upload campground photos. The app is deployed on Heroku. YelpCamp is a project from the Udemy course - The Web Developer Bootcamp by Colt Steele. I added some features to the app, such as the ability to upload campground photos, edit and delete comments, and delete campgrounds. I also added a landing page and a 404 page. I used Bootstrap to style the app. I deployed the app on Heroku. I used MongoDB Atlas to host the database. I used Cloudinary to host the images. I used SendGrid to send emails. I used Mapbox to display the map on the campground show page. I used Heroku Scheduler to schedule a job to delete campgrounds and comments that are older than 24 hours. I used Git for version control.'
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
            img={'portfolio.png'}
            title={'Portfolio'}
            description={
              'Lights Out is... lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
            techs={['html5', 'css3', 'tailwindcss', 'react']}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={'mindmissiongray.png'}
            title={'Mind Mission'}
            description={
              'Mind Mission is a mindfulness training game for 9 to 11-year-olds. It is designed to help children learn how to manage their emotions and develop various coping mechanisms through the challenges they solve.'
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

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

export default function Slide(props) {
  return (
    <div>
      <img src={props.img} alt="" style={{ width: '400px' }} />
      <h2 className="text-xl font-bold py-2 md:py-3">{props.title}</h2>
      <p>{props.description}</p>
      <div
        className={`flex items-center justify-center space-x-2 ${
          props.darkMode ? 'text-white' : 'text-black'
        }`}
      >
        {props.techs.map((item, index) => {
          return item === 'stimulus' ? (
            <img
              src={
                props.darkMode
                  ? '../../dist/stimulus-svgrepo-com.svg'
                  : 'https://www.svgrepo.com/show/354392/stimulus.svg'
              }
              alt=""
              className="w-6 h-6 inline"
              key={index}
            />
          ) : (
            <i
              className={`text-2xl devicon-${item}-${
                item === 'express' ? 'original' : 'plain'
              }`}
              key={index}
            ></i>
          );
        })}
      </div>
    </div>
  );
}

Slide.propTypes = {
  darkMode: PropTypes.bool,
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  techs: PropTypes.arrayOf(PropTypes.string),
};

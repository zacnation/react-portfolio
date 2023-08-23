import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

export default function Slide(props) {
  return (
    <div className="px-12 md:p-0 md:flex md:align-center md:justify-center">
      <div>
        <img src={props.img} alt="" style={{ width: '400px' }} />
      </div>
      <div className="md:ml-9">
        <h2 className="text-xl font-bold pt-2 md:pt-0">{props.title}</h2>
        <div
          className={`flex items-center justify-center space-x-2 md:flex md:justify-start md:py-3 ${
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
        <p className="md:w-96">{props.description}</p>
        <a href={props.link}>
          Live URL: <strong>{props.title}</strong>
        </a>
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
  link: PropTypes.string,
};

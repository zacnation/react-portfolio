import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Slide(props) {
  return (
    <>
      <img src={props.img} alt="" className="md:hidden" />
      <div className="px-12 md:p-0 md:flex md:align-center md:justify-center">
        <div>
          <img
            src={props.img}
            alt=""
            style={{ width: '400px' }}
            className="max-md:hidden"
          />
        </div>
        <div className="md:ml-9">
          {/* {props.title === 'Portfolio' ? (
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-bold md:pt-0">Portfolio</h2>
              <p
                className={`px-2 py-1 rounded ${
                  props.darkMode
                    ? 'bg-light text-black'
                    : 'bg-dark-I text-white'
                }`}
              >
                {props.badge}
              </p>
            </div>
          ) : ( */}
          <div className="flex items-center max-md:justify-center space-x-2 pt-2">
            <a
              href={props.link}
              rel="noreferrer"
              target={'_blank'}
              className={`text-xl font-bold md:pt-0 ${
                props.link && 'hover:underline underline-offset-2'
              }`}
            >
              {props.title}{' '}
            </a>
            {props.link && (
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="w-6 ml-2"
              />
            )}
            {props.badge && (
              <p
                className={`px-2 py-1 rounded ${
                  props.darkMode
                    ? 'bg-light text-black'
                    : 'bg-dark-I text-white'
                }`}
              >
                {props.badge}
              </p>
            )}
          </div>
          {/* )} */}

          <div className="flex items-center justify-center space-x-2 md:flex md:justify-start md:py-3 max-md:py-4">
            {props.techs.map((item, index) => {
              return item === 'stimulus' ? (
                <img
                  src="stimulus.png"
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
          <p className="md:w-96 overflow-y-auto max-sm:h-80 h-44 border rounded p-2">
            {props.email && (
              <>
                <strong>{props.email}</strong>
                <br />
                <strong>{props.password}</strong>
                <br />
              </>
            )}
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
}

Slide.propTypes = {
  darkMode: PropTypes.bool,
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  techs: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  badge: PropTypes.string,
};

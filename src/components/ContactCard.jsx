import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactCard(props) {
  return (
    <>
      {props.id === 'email' ? (
        <div
          onClick={() =>
            navigator.clipboard.writeText('zac.nation.work@icloud.com')
          }
          className={`transition-all duration-150 flex items-center justify-center border rounded w-40 h-14 hover:cursor-pointer  ${
            props.darkMode
              ? 'bg-dark-I text-white border-white hover:bg-gray-200 hover:text-black'
              : 'bg-white text-black border-gray-400 hover:bg-dark-I hover:text-white hover:border-dark-I'
          }`}
        >
          <FontAwesomeIcon icon={props.icon} className="w-7 h-7 pr-2" />{' '}
          <p className="text-lg">{props.title}</p>{' '}
          <img
            src={props.darkMode ? 'link-inverted.svg' : 'link.svg'}
            className="w-7 pl-1 animate-pulse"
            alt=""
          />
        </div>
      ) : (
        <a
          href={`https://${props.url}`}
          target="_blank"
          rel="noreferrer"
          className={`transition-all duration-150 flex items-center justify-center border rounded w-40 h-14 hover:cursor-pointer  ${
            props.darkMode
              ? 'bg-dark-I text-white border-white hover:bg-gray-200 hover:text-black'
              : 'bg-white text-black border-gray-400 hover:bg-dark-I hover:text-white hover:border-dark-I'
          }`}
        >
          <FontAwesomeIcon icon={props.icon} className="w-7 h-7 pr-2" />{' '}
          <p className="text-lg">{props.title}</p>
        </a>
      )}{' '}
    </>
  );
}

ContactCard.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string,
};

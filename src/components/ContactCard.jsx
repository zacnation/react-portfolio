import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactCard(props) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText('zac.nation.work@outlook.com');
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <>
      {props.title === 'Email' ? (
        <div
          onClick={handleCopyClick}
          className={`transition-all duration-150 flex items-center justify-center border rounded w-40 h-14 hover:cursor-pointer  ${
            props.darkMode
              ? 'bg-dark-I text-white border-gray-400 hover:border-white'
              : 'bg-white text-black border-gray-400 hover:border-dark-I'
          }`}
        >
          {copied ? (
            <p className="text-lg">Copied!</p>
          ) : (
            <>
              <FontAwesomeIcon icon={props.icon} className="w-7 h-7 pr-2" />
              <p className="text-lg">{copied ? 'Copied!' : 'Email'}</p>
              <img
                src={props.darkMode ? 'link-inverted.svg' : 'link.svg'}
                className="w-7 pl-1 animate-pulse"
                alt=""
              />
            </>
          )}
        </div>
      ) : (
        <a
          href={`https://${props.url}`}
          target="_blank"
          rel="noreferrer"
          className={`transition-all duration-150 flex items-center justify-center border rounded w-40 h-14 hover:cursor-pointer  ${
            props.darkMode
              ? 'bg-dark-I text-white border-gray-400 hover:border-white'
              : 'bg-white text-black border-gray-400 hover:border-dark-I'
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
  url: PropTypes.string,
};

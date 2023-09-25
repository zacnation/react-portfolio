import React, { useState } from 'react'; // Import useState
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../ContactCard.css';

export default function ContactCard(props) {
  const [copied, setCopied] = useState(false); // Initialize a state variable

  const handleCopyClick = () => {
    navigator.clipboard.writeText('zac.nation.work@outlook.com');

    setCopied(true); // Set copied to true when the div is clicked

    setTimeout(() => {
      setCopied(false); // Reset copied to false after 2 seconds
    }, 1500);
  };

  const handleOpenMailApp = () => {
    const email = 'zac.nation.work@icloud.com';
    const subject = 'Hello there!';

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}`;
  };

  return (
    <>
      {props.title === 'Email' ? (
        <>
          <div
            onClick={handleCopyClick}
            onDoubleClick={handleOpenMailApp}
            className={`email transition-all duration-150 flex items-center justify-center border rounded w-40 h-14 hover:cursor-pointer  ${
              props.darkMode
                ? 'bg-dark-I text-white border-gray-400 hover:border-white'
                : 'bg-white text-black border-gray-400 hover:border-dark-I'
            }`}
            data-tooltip={'Single click to copy, double click to open mail app'}
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
          {/* <p className="text-sm">
            Clipboard - single click
            <br />
            Mail app - double click
          </p> */}
        </>
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

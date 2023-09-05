import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactCard(props) {
  // const fillColor = props.darkMode ? '#fff' : '#000';

  // const lightModeSVG = (
  //   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
  //     <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
  //   </svg>
  // );
  // const darkModeSVG = (
  //   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
  //     <path
  //       style={{ fill: fillColor }}
  //       d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
  //     />
  //   </svg>
  //   {props.darkMode ? darkModeSVG : lightModeSVG}
  // );

  return (
    <div
      className={`transition-all duration-300 ${
        props.darkMode ? 'bg-dark-I text-white' : 'bg-white text-black'
      }`}
    >
      <div className="flex items-center justify-center border rounded w-32 h-12">
        <FontAwesomeIcon
          icon={props.icon}
          className="w-6 h-6 pr-2 hover:text-slate-600"
        />{' '}
        <p>{props.title}</p>
      </div>
    </div>
  );
}

ContactCard.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

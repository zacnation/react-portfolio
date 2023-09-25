import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJediOrder, faSith } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`transition-all duration-300 flex justify-center items-center pt-3 pb-8 xl:px-60 2xl:px-96 ${
        darkMode ? 'bg-very-dark text-white' : 'bg-light text-black'
      }`}
    >
      <FontAwesomeIcon icon={faJediOrder} className="w-6 h-6" />
      <FontAwesomeIcon
        icon={faHeart}
        className="heart-icon hover:text-pink-600 w-6 h-6 mx-24 lg:mx-96"
      />
      <FontAwesomeIcon icon={faSith} className="w-6 h-6" />
    </footer>
  );
}

Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

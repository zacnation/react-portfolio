import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJediOrder, faSith } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Footer(props) {
  return (
    <footer
      className={`transition-all duration-300 flex justify-center items-center pt-3 pb-8 xl:px-60 2xl:px-96 ${
        props.darkMode ? 'bg-very-dark text-white' : 'bg-light text-black'
      }`}
    >
      {/* <div>
        <a href="https://github.com/zacnation" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="w-6 h-6 pr-2 hover:text-slate-600"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/zacnation/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-6 h-6 hover:text-slate-600"
          />
        </a>
      </div>
      <p className="text-lg">
        Made with{' '}
        <FontAwesomeIcon
          icon={faHeart}
          className="heart-icon hover:text-pink-600"
        />{' '}
        (and <i className="devicon-vscode-plain"></i>)
      </p> */}

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

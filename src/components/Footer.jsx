import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGalacticRepublic,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer(props) {
  return (
    <footer
      className={`flex justify-around py-8 ${
        props.darkMode ? "bg-dark-I text-white" : "bg-light"
      }`}
    >
      <div>
        <a href="https://github.com/zacnation" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="w-6 h-6 pr-2" />
        </a>
        <a
          href="https://www.linkedin.com/in/zacnation/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
        </a>
      </div>
      <p className="text-lg">
        Made with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> (and{" "}
        <i className="devicon-vscode-plain"></i>)
      </p>
      <FontAwesomeIcon icon={faGalacticRepublic} className="w-6 h-6" />
    </footer>
  );
}

Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

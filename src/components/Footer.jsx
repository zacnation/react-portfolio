import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGalacticRepublic,
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer(props) {
  return (
    <footer className={props.darkMode ? "dark" : ""}>
      <div className="icons">
        <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
        <FontAwesomeIcon icon={faGithub} className="github-icon" />
      </div>
      <p>
        Made with <FontAwesomeIcon icon={faHeart} /> (and{" "}
        <FontAwesomeIcon icon={faReact} className="react-icon" />)
      </p>
      <FontAwesomeIcon
        icon={faGalacticRepublic}
        className="galactic-republic-icon"
      />
    </footer>
  );
}

Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

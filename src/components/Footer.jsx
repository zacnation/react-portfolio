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
    <footer className={props.darkMode ? "dark" : ""}>
      <div className="icons">
        <a href="https://github.com/zacnation" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/zacnation/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="github-icon" />
        </a>
      </div>
      <p>
        Made with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> (and{" "}
        <i className="devicon-vscode-plain"></i>)
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
};

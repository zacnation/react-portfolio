import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {
  return (
    <footer className={props.darkMode ? "dark" : ""}>
      <h1>Footer</h1>
      <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
      <FontAwesomeIcon icon={faGithub} className="github-icon" />
    </footer>
  );
}

Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

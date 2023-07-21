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
      className={`flex justify-around xl:justify-between pt-3 pb-8 xl:px-60 2xl:px-96 ${
        props.darkMode ? "bg-very-dark text-white" : "bg-light text-black"
      }`}
    >
      <div>
        <a href="https://github.com/zacnation" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="w-6 h-6 pr-2 hover:text-slate-600 transition-all duration-300"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/zacnation/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-6 h-6 hover:text-slate-600 transition-all duration-300"
          />
        </a>
      </div>
      <p className="text-lg">
        Made with{" "}
        <FontAwesomeIcon
          icon={faHeart}
          className="heart-icon hover:text-pink-600 transition-all duration-300"
        />{" "}
        (and <i className="devicon-vscode-plain"></i>)
      </p>
      <FontAwesomeIcon icon={faGalacticRepublic} className="w-6 h-6" />
    </footer>
  );
}

Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

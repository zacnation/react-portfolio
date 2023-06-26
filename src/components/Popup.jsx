import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Popup(props) {
  return props.buttonPopup ? (
    <div id="popup" className={props.darkMode ? "dark" : ""}>
      <div className="popup-inner">
        <h2>Courses:</h2>
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={props.toggleClose}
        />
      </div>
    </div>
  ) : (
    ""
  );
}

Popup.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.bool.isRequired,
  toggleClose: PropTypes.bool.isRequired,
  buttonPopup: PropTypes.bool.isRequired,
};

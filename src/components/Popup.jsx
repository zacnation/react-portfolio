import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Popup(props) {
  return props.buttonPopup ? (
    <div
      className={`z-9 fixed inset-3 bg-gray-100 flex justify-center items-center ${
        props.darkMode ? "dark" : ""
      }`}
    >
      <div className="relative pl-4 pr-8 bg-teal-100 text-justify">
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute top-3 right-3 cursor-pointer"
          onClick={props.toggleClose}
        />
        <h1>Popup: {props.title}</h1>
      </div>
    </div>
  ) : null;
}

Popup.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleClose: PropTypes.func.isRequired,
  buttonPopup: PropTypes.bool.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  techs: PropTypes.arrayOf(PropTypes.string),
};

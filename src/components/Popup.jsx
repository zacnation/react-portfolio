import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Popup(props) {
  return props.popup ? (
    <div
      className={`z-9 fixed inset-3 bg-gray-100 flex justify-center items-center ${
        props.darkMode ? "dark" : ""
      }`}
    >
      <div className="relative pl-4 pr-8 bg-teal-100 text-justify">
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute top-3 right-3 cursor-pointer"
          onClick={props.togglePopup}
        />
        <img src={props.imgSrc} alt="" className="w-40" />
        <h1>Popup: {props.title}</h1>
        <p>Description: {props.description}</p>
        <p>Techs: {props.techs}</p>
      </div>
    </div>
  ) : null;
}

Popup.propTypes = {
  darkMode: PropTypes.bool,
  togglePopup: PropTypes.func,
  popup: PropTypes.bool,
  description: PropTypes.string,
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  techs: PropTypes.arrayOf(PropTypes.string),
};

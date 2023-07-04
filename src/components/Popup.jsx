import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Popup(props) {
  // console.log(props.description);
  return props.buttonPopup ? (
    <div
      className={`z-9 fixed inset-3 bg-gray-100 flex justify-center items-center ${
        props.darkMode ? "dark" : ""
      }`}
    >
      <div className="relative pl-4 pr-8 bg-teal-100 text-justify">
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute top-3 right-3"
          onClick={props.toggleClose}
        />
        <h1>Popup: {props.title}</h1>
        <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus eros ac turpis accumsan, at interdum metus congue. Nam vulputate tellus eros, vel rutrum sem mollis nec. Integer porttitor magna sem. Donec ultrices, ipsum sed sollicitudin tincidunt, nisi erat fermentum augue, sit amet blandit urna sem eu urna. Integer ac felis elit. Vivamus eget orci quis lectus accumsan placerat. Cras suscipit ante finibus lacus dapibus ullamcorper. Sed tempus tincidunt felis. Nam orci nisi, aliquet in sodales ac, porttitor eget ante. Integer congue enim in urna sagittis consectetur: ${props.description}`}</p>
      </div>
    </div>
  ) : (
    ""
  );
}

Popup.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  toggleClose: PropTypes.func.isRequired,
  buttonPopup: PropTypes.bool.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  techs: PropTypes.arrayOf(PropTypes.string),
};

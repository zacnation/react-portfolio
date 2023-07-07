import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Popup(props) {
  return props.popup ? (
    <div
      className={`z-9 bg-gray-100 bg-opacity-80 w-full h-full fixed inset-3 flex justify-center items-center ${
        props.darkMode ? "bg-dark-I text-white" : "bg-light"
      }`}
    >
      <div className="relative pl-4 pr-8 text-justify bg-white shadow-xl rounded-lg mr-6 py-5 w-full md:max-w-2xl lg:max-w-3xl">
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute top-3 right-3 cursor-pointer"
          onClick={props.togglePopup}
        />
        {/* <img src={props.innerImg} alt="" className="w-full px-20" /> */}
        <div
          className="mx-auto mb-3 w-full h-48 md:h-96 bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(../../public/${props.innerImg})`,
          }}
        ></div>

        <h1 className="font-bold uppercase">{props.title}</h1>
        <p>{props.description}</p>
        <div
          className={`flex items-center justify-center space-x-2 ${
            props.darkMode ? "text-white" : "text-black"
          }`}
        >
          {props.techs.map((item, index) => {
            return item === "stimulus" ? (
              <img
                src={
                  props.darkMode
                    ? "../../dist/stimulus-svgrepo-com.svg"
                    : "https://www.svgrepo.com/show/354392/stimulus.svg"
                }
                alt=""
                className="w-6 h-6 inline"
                key={index}
              />
            ) : (
              <i
                className={`text-2xl devicon-${item}-${
                  item === "express" ? "original" : "plain"
                }`}
                key={index}
              ></i>
            );
          })}
        </div>
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
  innerImg: PropTypes.string,
  techs: PropTypes.arrayOf(PropTypes.string),
};

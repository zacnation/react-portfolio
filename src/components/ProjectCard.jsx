import PropTypes from "prop-types";
import Popup from "./Popup";

export default function ProjectCard(props) {
  return (
    <div className="z-0">
      <div className="flex justify-center items-center z-0">
        <img
          src={props.imgSrc}
          alt=""
          className="w-96 cursor-pointer mb-5"
          onClick={props.togglePopup}
        />
        <Popup
          popup={props.popup}
          togglePopup={props.togglePopup}
          imgSrc={props.imgSrc}
          title={props.title}
          description={props.description}
          techs={props.techs}
        />
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  darkMode: PropTypes.bool,
  togglePopup: PropTypes.func,
  popup: PropTypes.bool,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  techs: PropTypes.array,
};

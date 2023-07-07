import PropTypes from "prop-types";
import Popup from "./Popup";

export default function ProjectCard(props) {
  return (
    <div className="">
      <img
        src={props.outerImg}
        alt=""
        className="w-full cursor-pointer mb-5"
        onClick={props.togglePopup}
      />
      <Popup
        popup={props.popup}
        togglePopup={props.togglePopup}
        outerImg={props.outerImg}
        innerImg={props.innerImg}
        title={props.title}
        description={props.description}
        techs={props.techs}
      />
    </div>
  );
}

ProjectCard.propTypes = {
  darkMode: PropTypes.bool,
  togglePopup: PropTypes.func,
  popup: PropTypes.bool,
  outerImg: PropTypes.string,
  innerImg: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  techs: PropTypes.array,
};

import PropTypes from "prop-types";
import Popup from "./Popup";

export default function ProjectCard(props) {
  return (
    <div className={`flex justify-center`}>
      <img
        src={props.imgSrc}
        alt=""
        className="w-full cursor-pointer mb-5 rounded-md hover:scale-95 transition-transform md:w-80 lg:w-96"
        onClick={props.togglePopup}
      />
      <Popup
        popup={props.popup}
        togglePopup={props.togglePopup}
        imgSrc={props.imgSrc}
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
  imgSrc: PropTypes.string,
  innerImg: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  techs: PropTypes.array,
};

import { useState } from "react";
import PropTypes from "prop-types";
import Popup from "./Popup";

export default function Projects(props) {
  const [buttonPopup, setButtonPopup] = useState(false);

  const togglePopup = () => {
    setButtonPopup(!buttonPopup);
  };

  return (
    <section
      id="projects"
      className={`py-14 px-3 md:px-10 xl:px-60 2xl:px-96 ${
        props.darkMode ? "bg-dark-I text-white" : "bg-light"
      }`}
    >
      <h2 className="font-bold">Projects</h2>
      <div className="font-bold text-center py-28 md:py-40 lg:py-60 z-0">
        <div className="flex justify-center items-center z-0">
          <img
            src="../../public/mindmission.png"
            alt=""
            onClick={togglePopup}
          />
          <Popup
            title="Hello"
            buttonPopup={buttonPopup}
            toggleClose={togglePopup}
            darkMode={props.darkMode}
          />
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleClose: PropTypes.func.isRequired,
};

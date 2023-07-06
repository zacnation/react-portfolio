import { useState } from "react";
import PropTypes from "prop-types";

import Popup from "./Popup";

export default function Projects(props) {
  const [popup, setpopup] = useState(false);

  const togglePopup = () => {
    setpopup(!popup);
  };

  return (
    <section
      id="projects"
      className={`pt-10 pb-1 px-3 md:px-10 xl:px-60 2xl:px-96 ${
        props.darkMode ? "bg-dark-I text-white" : "bg-light"
      }`}
    >
      <h2 className="text-2xl font-bold pb-6 md:pb-9">Projects</h2>
      <div className="font-bold text-center pb-10 z-0">
        <div className="flex justify-center items-center z-0">
          <img
            src="../../public/mindmission.png"
            alt=""
            onClick={togglePopup}
          />
          <Popup
            popup={popup}
            togglePopup={togglePopup}
            darkMode={props.darkMode}
          />
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  togglePopup: PropTypes.func.isRequired,
};

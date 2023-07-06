import { useState } from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

export default function Projects(props) {
  const [popups, setPopups] = useState({});

  const togglePopup = (cardId) => {
    setPopups((prevState) => ({
      ...prevState,
      [cardId]: !prevState[cardId],
    }));
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
          <ProjectCard
            cardId="lewagon"
            imgSrc="../../public/lewagon-logo-black.svg"
            title={"LE WAGON"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quasi laudantium autem aliquid eumque ut! Atque, id eum, officia quia vero repellat illum modi dolorum placeat hic veniam eum magnam."
            }
            techs={["express", "ruby", "rails", "javascript", "stimulus"]}
            popup={popups["lewagon"]}
            togglePopup={() => togglePopup("lewagon")}
            darkMode={props.darkMode}
          />
          <ProjectCard
            cardId="mindmission"
            imgSrc="../../public/mindmission.png"
            title={"MIND MISSION"}
            description={
              "A mindfulness training game - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quasi laudantium autem aliquid eumque ut! Atque, id eum, officia quia vero repellat illum modi dolorum placeat hic veniam eum magnam."
            }
            techs={["ruby", "rails", "javascript", "stimulus"]}
            popup={popups["mindmission"]}
            togglePopup={() => togglePopup("mindmission")}
            darkMode={props.darkMode}
          />
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  darkMode: PropTypes.bool,
};

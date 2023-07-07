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
      <div className="flex justify-center items-center flex-wrap">
        <ProjectCard
          cardId="mindmission"
          imgSrc="../../public/mindmissiongrayscale.png"
          innerImg="mindmission.gif"
          title={"mind mission"}
          description={
            "A mindfulness training game - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quasi laudantium autem aliquid eumque ut! Atque, id eum, officia quia vero repellat illum modi dolorum placeat hic veniam eum magnam."
          }
          techs={["ruby", "rails", "javascript", "stimulus"]}
          popup={popups["mindmission"]}
          togglePopup={() => togglePopup("mindmission")}
          darkMode={props.darkMode}
        />
        <ProjectCard
          cardId="yelpcamp"
          imgSrc="../../public/yelpcamp.png"
          innerImg="../../public/yelpcamp.png"
          title={"yelpcamp"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quasi laudantium autem aliquid eumque ut! Atque, id eum, officia quia vero repellat illum modi dolorum placeat hic veniam eum magnam."
          }
          techs={[
            "html5",
            "css3",
            "javascript",
            "mongodb",
            "express",
            "nodejs",
          ]}
          popup={popups["yelpcamp"]}
          togglePopup={() => togglePopup("yelpcamp")}
          darkMode={props.darkMode}
        />
        <ProjectCard
          cardId="lightsout"
          imgSrc="../../public/lightsout.png"
          innerImg="../../public/lightsout.png"
          title={"lights out"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quasi laudantium autem aliquid eumque ut! Atque, id eum, officia quia vero repellat illum modi dolorum placeat hic veniam eum magnam."
          }
          techs={["html5", "css3", "javascript", "react"]}
          popup={popups["lightsout"]}
          togglePopup={() => togglePopup("lightsout")}
          darkMode={props.darkMode}
        />
      </div>
    </section>
  );
}

Projects.propTypes = {
  darkMode: PropTypes.bool,
};

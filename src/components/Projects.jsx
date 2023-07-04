import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

export default function Projects(props) {
  return (
    <section
      id="projects"
      className={`py-14 px-3 md:px-10 xl:px-60 2xl:px-96 ${
        props.darkMode ? "bg-dark-I text-white" : "bg-light"
      }`}
    >
      <h2 className="font-bold">Projects</h2>
      <div className="font-bold text-center py-28 md:py-40 lg:py-60 z-0">
        <ProjectCard
          toggleClose={props.toggleClose}
          darkMode={props.darkMode}
          imgSrc={"../../public/mindmission.png"}
          title="MIND MISSION"
          description="A Rails prototype of Mind Mission, a mindfulness training game for 9 to 11-year-olds. Sed sagittis felis turpis, vitae accumsan nibh lacinia in. Nulla nec tellus at sapien fringilla consequat. Cras ac ultrices neque. Suspendisse vehicula pretium maximus. Phasellus lorem risus, semper nec mauris et, luctus convallis nisi. Integer vel leo at erat dictum pharetra. Suspendisse efficitur lacus odio, nec porta massa mollis sit amet."
          techs={["ruby", "rails", "javascript", "stimulus"]}
        />
        <ProjectCard
          toggleClose={props.toggleClose}
          imgSrc={"../../public/lightsout.png"}
          darkMode={props.darkMode}
          title="LIGHTS OUT"
          description="Llorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui augue, gravida ut nisl ut, consectetur sollicitudin felis. Duis ac ex id turpis molestie accumsan. Curabitur a auctor neque. Suspendisse laoreet, lacus sit amet vehicula tristique, eros mauris lacinia arcu, vitae vehicula nunc risus quis libero. Cras et quam mauris."
          techs={["html5", "css3", "tailwindcss", "javascript", "react"]}
        />
        <ProjectCard
          toggleClose={props.toggleClose}
          imgSrc={"../../public/zacnation.png"}
          darkMode={props.darkMode}
          title="PORTFOLIO"
          description="Lllorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui augue, gravida ut nisl ut, consectetur sollicitudin felis. Duis ac ex id turpis molestie accumsan. Curabitur a auctor neque. Suspendisse laoreet, lacus sit amet vehicula tristique, eros mauris lacinia arcu, vitae vehicula nunc risus quis libero. Cras et quam mauris."
          techs={["html5", "css3", "tailwindcss", "react"]}
        />
      </div>
    </section>
  );
}

Projects.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleClose: PropTypes.bool,
};

import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import ProjectCardInverted from "./ProjectCardInverted";

export default function About(props) {
  return (
    <section
      id="projects"
      className={`pt-10 pb-1 px-3 md:px-10 xl:px-60 2xl:px-96 ${
        props.darkMode ? "bg-dark-I text-white" : "bg-light"
      }`}
    >
      <h2 className="text-2xl font-bold pb-6 md:pb-9">Projects</h2>
      <div className="font-bold text-center">
        <ProjectCard
          darkMode={props.darkMode}
          title="MIND MISSION"
          description="A Rails prototype of Mind Mission, a mindfulness training game for 9 to 11-year-olds. Sed sagittis felis turpis, vitae accumsan nibh lacinia in. Nulla nec tellus at sapien fringilla consequat. Cras ac ultrices neque. Suspendisse vehicula pretium maximus. Phasellus lorem risus, semper nec mauris et, luctus convallis nisi. Integer vel leo at erat dictum pharetra. Suspendisse efficitur lacus odio, nec porta massa mollis sit amet."
          techs={["ruby", "rails", "javascript", "stimulus"]}
        />
        <ProjectCard
          darkMode={props.darkMode}
          title="PORTFOLIO"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui augue, gravida ut nisl ut, consectetur sollicitudin felis. Duis ac ex id turpis molestie accumsan. Curabitur a auctor neque. Suspendisse laoreet, lacus sit amet vehicula tristique, eros mauris lacinia arcu, vitae vehicula nunc risus quis libero. Cras et quam mauris."
          techs={["html5", "tailwindcss", "javascript", "react"]}
        />
        <ProjectCard
          darkMode={props.darkMode}
          title="AIRBNB"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui augue, gravida ut nisl ut, consectetur sollicitudin felis. Duis ac ex id turpis molestie accumsan. Curabitur a auctor neque. Suspendisse laoreet, lacus sit amet vehicula tristique, eros mauris lacinia arcu, vitae vehicula nunc risus quis libero. Cras et quam mauris."
          techs={["html5", "css3", "bootstrap", "javascript", "ruby", "rails"]}
        />
        <ProjectCard
          darkMode={props.darkMode}
          title="YELPCAMP"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui augue, gravida ut nisl ut, consectetur sollicitudin felis. Duis ac ex id turpis molestie accumsan. Curabitur a auctor neque. Suspendisse laoreet, lacus sit amet vehicula tristique, eros mauris lacinia arcu, vitae vehicula nunc risus quis libero. Cras et quam mauris."
          techs={[
            "html5",
            "css3",
            "bootstrap",
            "javascript",
            "mongodb",
            "express",
            "nodejs",
          ]}
        />
      </div>
    </section>
  );
}

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

import PropTypes from "prop-types";

export default function About(props) {
  return (
    <section
      id="projects"
      className={`py-14 px-3 md:px-10 xl:px-60 2xl:px-96 ${
        props.darkMode ? "bg-dark-I text-white" : "bg-light"
      }`}
    >
      <h2 className="text-2xl font-bold">Projects</h2>
      <h2 className="text-2xl font-bold text-center py-28 md:py-40 lg:py-60">
        More coming soon 👨‍💻
      </h2>
    </section>
  );
}

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

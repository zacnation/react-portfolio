import PropTypes from "prop-types";
export default function About(props) {
  return (
    <section id="projects" className={props.darkMode ? "dark" : ""}>
      <h2>Projects</h2>
    </section>
  );
}

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

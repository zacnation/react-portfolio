import PropTypes from 'prop-types';
import Carousel from './Carousel';

export default function Projects(props) {
  return (
    <section
      id="projects"
      className={`transition-all duration-300 pt-10 md:pt-20 md:pb-5 px-3 md:px-10 xl:px-60 2xl:px-96 ${
        props.darkMode ? 'bg-dark-I text-white' : 'bg-light text-black'
      }`}
    >
      <h2 className="text-center text-2xl font-bold pb-6 md:pb-9 lg:text-3xl">
        Projects
      </h2>
      <Carousel />
    </section>
  );
}

Projects.propTypes = {
  darkMode: PropTypes.bool,
};

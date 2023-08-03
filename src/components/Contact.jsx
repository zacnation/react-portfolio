import PropTypes from 'prop-types';

export default function Resources(props) {
  return (
    <div
      className={`pt-8 px-3 md:px-10 xl:px-60 2xl:px-96 ${
        props.darkMode ? 'bg-dark-I text-white' : 'bg-white'
      }`}
    ></div>
  );
}

Resources.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

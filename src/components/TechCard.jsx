import PropTypes from 'prop-types';

export default function TechCard(props) {
  return (
    <div className="flex py-4 items-center">
      <i className={`text-4xl pr-2 md:pr-3 ${props.icon}`}></i>
      <p>{props.description}</p>
    </div>
  );
}

TechCard.propTypes = {
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

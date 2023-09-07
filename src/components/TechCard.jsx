import PropTypes from 'prop-types';

export default function TechCard(props) {
  return (
    <div className="flex py-4 items-center max-lg:flex-col max-lg:border max-lg:rounded-md max-lg:mb-3 max-lg:px-2">
      <i className={`text-4xl max-lg:pb-3 lg:pr-2 ${props.icon}`}></i>
      <p>{props.description}</p>
    </div>
  );
}

TechCard.propTypes = {
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

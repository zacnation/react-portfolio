import PropTypes from "prop-types";

export default function TechCard(props) {
  return (
    <div className="tech-card">
      <i className={props.icon}></i>
      <p>{props.description}</p>
    </div>
  );
}

TechCard.propTypes = {
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

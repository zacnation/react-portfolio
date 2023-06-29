import PropTypes from "prop-types";

export default function ResourceCard(props) {
  return (
    <div className="flex py-4 px-1">
      <img src={props.imageSrc} className={`w-10 pr-2 md:pr-4 md:w-12`}></img>
      <ul className="md:w-24">
        {props.listItems.map((item, index) => {
          return (
            <li className="text-xs" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ResourceCard.propTypes = {
  // darkMode: PropTypes.bool.isRequired,
  imageSrc: PropTypes.string.isRequired,
  // altText: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

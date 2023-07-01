import PropTypes from "prop-types";

export default function ProjectCard(props) {
  return (
    <div className="md:flex mb-20 py-5 px-1 bg-slate-100 rounded-md">
      <h2 className="text-3xl pb-4 md:pb-0">{props.title}</h2>
      <div className="flex flex-col">
        <p className="text-justify">{props.description}</p>
        <div className="flex items-center space-x-2 justify-center">
          {props.techs.map((item, index) => {
            return item === "Stimulus" ? (
              <img
                src="https://www.svgrepo.com/show/354392/stimulus.svg"
                alt=""
                className="w-6 h-6"
              />
            ) : (
              <i
                className={`text-2xl devicon-${item.toLowerCase()}-${
                  item === "Express" ? "original" : "plain"
                }`}
                key={index}
              ></i>
            );
          })}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  techs: PropTypes.array,
};

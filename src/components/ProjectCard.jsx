import PropTypes from "prop-types";

export default function ProjectCard(props) {
  return (
    <div
      className={`flex flex-col md:flex-row mb-20 py-5 px-1 rounded-md shadow-lg ${
        props.darkMode
          ? "bg-dark-II text-white shadow-very-dark"
          : "bg-white shadow-gray-100"
      }`}
    >
      <div className="md:flex">
        <div>
          <h2 className="text-3xl pb-4 md:pb-0">{props.title}</h2>
          <div
            className={`flex items-center justify-center space-x-2 hidden md:flex ${
              props.darkMode ? "text-white" : "text-black"
            }`}
          >
            {props.techs.map((item, index) => {
              return item === "stimulus" ? (
                <img
                  src={
                    props.darkMode
                      ? "../../dist/stimulus-svgrepo-com.svg"
                      : "https://www.svgrepo.com/show/354392/stimulus.svg"
                  }
                  alt=""
                  className="w-6 h-6 inline"
                />
              ) : (
                <i
                  className={`text-2xl devicon-${item}-${
                    item === "express" ? "original" : "plain"
                  }`}
                  key={index}
                ></i>
              );
            })}
          </div>
        </div>
        <p className="text-justify px-5 font-thin">{props.description}</p>
        <div
          className={`flex items-center justify-center space-x-2 md:hidden ${
            props.darkMode ? "text-white" : "text-black"
          }`}
        >
          {props.techs.map((item, index) => {
            return item === "stimulus" ? (
              <img
                src={
                  props.darkMode
                    ? "../../dist/stimulus-svgrepo-com.svg"
                    : "https://www.svgrepo.com/show/354392/stimulus.svg"
                }
                alt=""
                className="w-6 h-6"
              />
            ) : (
              <i
                className={`text-2xl devicon-${item}-${
                  item === "express" ? "original" : "plain"
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

// src={
//   props.darkMode
//     ? "lewagon-logo-white.svg"
//     : "lewagon-logo-black.svg"
// }

ProjectCard.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  techs: PropTypes.array,
};

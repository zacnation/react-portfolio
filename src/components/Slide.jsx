import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Slide(props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <img src={props.img} alt="" className="lg:hidden md:px-40" />
      <div className="px-12 md:p-0 md:flex md:align-center md:justify-center">
        <div>
          <img
            src={props.img}
            alt=""
            style={{ width: "550px" }}
            className="max-lg:hidden"
          />
        </div>
        <div className="md:ml-9">
          <div className="flex items-center max-md:justify-center space-x-2 pt-2">
            <a
              href={props.link}
              rel="noreferrer"
              target={"_blank"}
              className={`text-xl font-bold md:pt-0 ${
                props.link && "hover:underline underline-offset-2"
              }`}
            >
              {props.title}{" "}
            </a>
            {props.link && (
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="w-6 ml-2"
              />
            )}
            {props.badge && (
              <p
                className={`px-2 py-1 rounded max-md:text-xs max-md:px-1 ${
                  props.darkMode
                    ? "bg-light text-black"
                    : "bg-dark-I text-white"
                }`}
              >
                {props.badge}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center space-x-2 md:flex md:justify-start md:py-3 max-md:py-4">
            {props.techs.map((item, index) => {
              return item === "stimulus" ? (
                <img
                  src="stimulus.png"
                  alt=""
                  className="w-6 h-6 inline"
                  key={index}
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
          <div className="flex flex-col">
            <p className="w-full md:w-96 overflow-y-auto h-min max-h-60 border rounded py-2 px-4">
              <>
                {props.email && (
                  <>
                    <strong>{props.email}</strong>
                    <br />
                    <strong>{props.password}</strong>
                    <br />
                  </>
                )}
                {showMore
                  ? props.description + " "
                  : props.description.slice(0, 100) + "... "}
              </>

              {/* {props.description} */}
            </p>
            <button
              className="font-bold pt-2"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Slide.propTypes = {
  darkMode: PropTypes.bool,
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  techs: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  badge: PropTypes.string,
};

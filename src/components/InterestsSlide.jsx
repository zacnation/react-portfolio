import PropTypes from "prop-types";

export default function Slide(props) {
  return (
    <>
      <div className="px-12 space-x-10 md:p-0 md:flex md:items-center md:justify-center">
        <div>
          <h2
            className={`text-3xl font-bold text-center md:pt-0 lg:pb-1 ${
              props.link && "hover:underline underline-offset-2"
            }`}
          >
            {props.title}
          </h2>
          <div className="md:ml-9">
            <p className="w-full md:w-96 overflow-y-auto max-sm:h-80 h-min max-h-60 border rounded py-2 px-4">
              {props.description}
            </p>
          </div>
        </div>
        <img
          src={props.img}
          alt=""
          style={{ width: "30%", height: "30%" }}
          className="max-lg:hidden pt-6"
        />
      </div>
      <img src={props.img} alt="" className="lg:hidden md:px-40" />
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

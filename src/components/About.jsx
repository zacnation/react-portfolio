import PropTypes from "prop-types";
export default function About(props) {
  return (
    <section
      className={`${props.darkMode ? "bg-dark-II text-white" : "bg-white"}`}
    >
      <div className="py-14 px-6">
        <h2 className="text-2xl font-bold">About me</h2>
        <div className="row">
          <img
            src={
              props.darkMode
                ? "lewagon-logo-white.svg"
                : "lewagon-logo-black.svg"
            }
            alt=""
            className="md:hidden w-40 py-6"
          />
          <p>
            I&apos;m a graduate of Le Wagon, a 9-week full-time intensive web
            development bootcamp based in London. During the bootcamp I worked
            with a variety of front-end and back-end technologies. Prior to the
            bootcamp, I spent over a year self-learning how to code, and I am
            passionate about continuing to develop my skills in this area.
          </p>
          <img
            src={
              props.darkMode
                ? "lewagon-logo-white.svg"
                : "lewagon-logo-black.svg"
            }
            alt=""
            className="hidden md:block"
          />
        </div>
        <div className="row">
          <img
            src={
              props.darkMode ? "udemy-logo-white.svg" : "udemy-logo-black.svg"
            }
            alt=""
            className="hidden md:block"
          />
          <img
            src={
              props.darkMode ? "udemy-logo-white.svg" : "udemy-logo-black.svg"
            }
            alt=""
            className="md:hidden w-32 pt-6"
          />
          <p>
            Before joining Le Wagon, my self-study involved a lot of Codecademy
            and Udemy courses. A list of my completed courses can be found{" "}
            <span className="courses-here" onClick={props.toggleClose}>
              here
            </span>
            .
          </p>
        </div>
        {/* <div className="row">
          <p>
            I&apos;m a graduate of Le Wagon, a 9-week full-time intensive web
            development bootcamp based in London. During the bootcamp I worked
            with a variety of front-end and back-end technologies. Prior to the
            bootcamp, I spent over a year self-learning how to code, and I am
            passionate about continuing to develop my skills in this area.
          </p>
          <img
            src={
              props.darkMode
                ? "../../public/lewagon-logo-inverted.svg"
                : "../../public/lewagon-logo.svg"
            }
            alt=""
            className="lewagon-logo"
          />
        </div> */}
      </div>
    </section>
  );
}

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleClose: PropTypes.bool,
};

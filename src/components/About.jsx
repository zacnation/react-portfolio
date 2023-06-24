import PropTypes from "prop-types";
export default function About(props) {
  return (
    <section id="about" className={props.darkMode ? "dark" : ""}>
      <div className="rows">
        <h2>About me</h2>
        <div className="row">
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
                ? "../../dist/lewagon-logo-inverted.svg"
                : "../../dist/lewagon-logo.svg"
            }
            alt=""
            className="lewagon-logo"
          />
        </div>
        <div className="row">
          <img
            src={
              props.darkMode
                ? "../../dist/udemy-logo-inverted.svg"
                : "../../dist/udemy-logo.svg"
            }
            alt=""
            className="udemy-logo"
          />
          <p>
            Before joining Le Wagon, my self-study involved a lot of Codecademy
            and Udemy courses. I completed A list of my completed courses can be
            found here.
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
};

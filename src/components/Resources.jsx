import PropTypes from "prop-types";

export default function Resources(props) {
  return (
    <section id="resources" className={props.darkMode ? "dark" : ""}>
      <h2>Amazing resources I&apos;m incredibly grateful for</h2>
      <div className="icons">
        <img
          src={
            props.darkMode
              ? "../../public/lewagon-icon-inverted.svg"
              : "../../public/lewagon-icon.svg"
          }
          alt=""
          className="lewagon-icon"
        />
        {/* <p className="break">|</p> */}
        <img
          src={
            props.darkMode
              ? "../../public/scrimba-dark-f.svg"
              : "../../public/scrimba-icon.svg"
          }
          alt=""
          className="scrimba-icon"
        />
        <img
          src={
            props.darkMode
              ? "../../public/udemy-icon-inverted.svg"
              : "../../public/udemy-icon.svg"
          }
          alt=""
          className="udemy-icon"
        />
        <img
          src={
            props.darkMode
              ? "../../public/codecademy-icon-inverted.svg"
              : "../../public/codecademy-icon.svg"
          }
          alt=""
          className="codecademy-icon"
        />
        <img
          src={
            props.darkMode
              ? "../../public/youtube-dark-f.svg"
              : "../../public/youtube-icon.svg"
          }
          alt=""
          className="youtube-icon"
        />
      </div>
    </section>
  );
}

Resources.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

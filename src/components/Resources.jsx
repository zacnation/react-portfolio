import PropTypes from "prop-types";

export default function Resources(props) {
  return (
    <section id="resources" className={props.darkMode ? "dark" : ""}>
      <h2>Resources I&apos;m incredibly grateful for</h2>
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
        <ul>
          <li>The entire team 🥂</li>
        </ul>
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
        <ul>
          <li>The free catalogue</li>
          <li>The podcast!</li>
        </ul>
        {/* <p className="break">|</p> */}
        <img
          src={
            props.darkMode
              ? "../../public/udemy-icon-inverted.svg"
              : "../../public/udemy-icon.svg"
          }
          alt=""
          className="udemy-icon"
        />
        <ul>
          <li>Angela Yu</li>
          <li>Colt Steele</li>
        </ul>
        {/* <p className="break">|</p> */}
        <img
          src={
            props.darkMode
              ? "../../public/codecademy-icon-inverted.svg"
              : "../../public/codecademy-icon.svg"
          }
          alt=""
          className="codecademy-icon"
        />
        <ul>
          <li>Full-Stack career path</li>
        </ul>
        {/* <p className="break">|</p> */}
        <img
          src={
            props.darkMode
              ? "../../public/youtube-dark-f.svg"
              : "../../public/youtube-icon.svg"
          }
          alt=""
          className="youtube-icon"
        />
        <ul>
          <li>danascript</li>
          <li>Tiff In Tech</li>
          <li>Tina Huang</li>
          <li>FreeCodeCamp</li>
        </ul>
      </div>
    </section>
  );
}

Resources.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

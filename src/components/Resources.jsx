import PropTypes from "prop-types";

export default function Resources(props) {
  return (
    <section id="resources" className={props.darkMode ? "dark" : ""}>
      <h2>Resources I&apos;m incredibly grateful for</h2>
      <div className="icons">
        <img
          src={
            props.darkMode ? "lewagon-icon-inverted.svg" : "lewagon-icon.svg"
          }
          alt=""
          className="lewagon-icon"
        />
        <ul>
          <li>The entire team 🥂</li>
        </ul>
        {/* <p className="break">|</p> */}
        <img
          src={props.darkMode ? "scrimba-dark-f.svg" : "scrimba-icon.svg"}
          alt=""
          className="scrimba-icon"
        />
        <ul>
          <li>The free catalogue</li>
          <li>The podcast!</li>
        </ul>
        {/* <p className="break">|</p> */}
        <img
          src={props.darkMode ? "udemy-icon-inverted.svg" : "udemy-icon.svg"}
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
              ? "codecademy-icon-inverted.svg"
              : "codecademy-icon.svg"
          }
          alt=""
          className="codecademy-icon"
        />
        <ul>
          <li>Full-Stack career path</li>
        </ul>
        {/* <p className="break">|</p> */}
        <img
          src={props.darkMode ? "youtube-dark-f.svg" : "youtube-icon.svg"}
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

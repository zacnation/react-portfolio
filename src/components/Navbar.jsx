import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <h3 className="logo">Zac Nation</h3>
      <div className="two">
        <div className="toggler">
          <p className="toggler--light">Light</p>
          <div className="toggler--slider" onClick={props.toggleDarkMode}>
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>{" "}
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a className="abouttt" href="#about">
              About
            </a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.bool.isRequired,
};

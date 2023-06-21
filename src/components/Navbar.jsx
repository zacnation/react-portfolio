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
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
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

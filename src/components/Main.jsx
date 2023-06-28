import PropTypes from "prop-types";

export default function Main(props) {
  return (
    <main className={`${props.darkMode ? "bg-dark text-white" : "bg-light"}`}>
      <div className="container">
        <div className="content">
          <h1>Hi, I&apos;m Zac.</h1>
          <p className="bio">A Full-Stack Developer based in London.</p>
          <div className="tech-stack">
            <div className="mern">
              <p>Tech Stack |</p>
              <i className="devicon-mongodb-plain"></i>
              <i className="devicon-express-original"></i>
              <i className="devicon-react-original"></i>
              <i className="devicon-nodejs-plain"></i>
            </div>
            <div className="not-mern">
              <i className="devicon-html5-plain"></i>
              <i className="devicon-css3-plain"></i>
              <i className="devicon-bootstrap-plain"></i>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-typescript-plain"></i>
              <i className="devicon-ruby-plain"></i>
              <i className="devicon-rails-plain"></i>
              <i className="devicon-postgresql-plain"></i>
              <i className="devicon-jest-plain"></i>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

Main.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

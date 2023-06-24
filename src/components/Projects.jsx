import PropTypes from "prop-types";
export default function About(props) {
  return (
    <section id="projects" className={props.darkMode ? "dark" : ""}>
      <h2>Projects</h2>
      <h2 className="coming-soon">More coming soon 👨‍💻</h2>
      <h2>What&apos;s next?</h2>
      <div className="chrome">
        <i className="devicon-chrome-plain"></i>
        <p>I&apos;d love to continue building Chrome extensions</p>
      </div>
      <div className="firebase">
        <i className="devicon-firebase-plain"></i>
      </div>
      <div className="nextjs">
        <i className="devicon-nextjs-original"></i>
      </div>
      <div className="pi">
        <i className="devicon-raspberrypi-line"></i>
        <i className="devicon-arduino-plain"></i>
      </div>
      <div className="rust">
        <i className="devicon-rust-plain"></i>
      </div>
      <div className="swift">
        <i className="devicon-swift-plain"></i>
        <i className="devicon-xcode-plain"></i>
      </div>
      <div className="threejs">
        <i className="devicon-threejs-original"></i>
      </div>
      <div className="unity">
        <i className="devicon-unity-original"></i>
      </div>
    </section>
  );
}

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

import PropTypes from "prop-types";

export default function Main(props) {
  console.log(props.darkMode);
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1>Hi, I&apos;m Zac</h1>
      <p>
        A Full-Stack Web Developer specialising in the MERN stack, based in
        London
      </p>
      <div className="tech-stack">
        <div className="mern">
          <p>Tech stack |</p>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="mongodb"
            width="40"
            height="40"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
            alt="express"
            width="40"
            height="40"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width="40"
            height="40"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
            width="40"
            height="40"
          />
        </div>
        <div className="else">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width="40"
            height="40"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            width="40"
            height="40"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
            alt="bootstrap"
            width="40"
            height="40"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="40"
            height="40"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="typescript"
            width="40"
            height="40"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg"
            alt="ruby"
            width="40"
            height="40"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg"
            alt="rails"
            width="40"
            height="40"
          />
          <img
            src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
            alt="jest"
            width="40"
            height="40"
          />
        </div>

        {/* <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="html5"
          width="40"
          height="40"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="css3"
          width="40"
          height="40"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
          alt="bootstrap"
          width="40"
          height="40"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width="40"
          height="40"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
          alt="typescript"
          width="40"
          height="40"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          alt="react"
          width="40"
          height="40"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg"
          alt="ruby"
          width="40"
          height="40"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg"
          alt="rails"
          width="40"
          height="40"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
          alt="nodejs"
          width="40"
          height="40"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
          alt="express"
          width="40"
          height="40"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
          alt="mongodb"
          width="40"
          height="40"
        />
        <img
          src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
          alt="jest"
          width="40"
          height="40"
        /> */}
      </div>
    </main>
  );
}

Main.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

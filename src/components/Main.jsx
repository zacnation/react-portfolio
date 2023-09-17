import PropTypes from 'prop-types';

export default function Main(props) {
  return (
    <main
      id="main"
      className={`transition-all duration-300 pb-20 pt-20 md:pt-40 md:w-screen h-screen ${
        props.darkMode ? 'bg-dark-I text-white' : 'bg-light text-black'
      }`}
    >
      <div className="pt-32">
        <h1 className="text-4xl font-bold text-center md:text-6xl lg:text-7xl xl:text-8xl xl:tracking-tighter">
          Hi, I&apos;m Zac.
        </h1>
        <p className="hidden text-sm md:block md:text-lg text-center mt-3 xl:text-xl">
          A Full-Stack Web Developer based in London.
        </p>
        <p className="text-sm md:hidden text-center mt-3">
          A Full-Stack Web Developer
        </p>
        <p className="text-sm md:hidden text-center mt-3">based in London.</p>

        <div className="flex flex-col text-center">
          <div className="mern text-5xl space-x-3 my-3">
            <i className="devicon-mongodb-plain"></i>
            <i className="devicon-express-original"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-nodejs-plain"></i>
          </div>
          <div className="not-mern text-3xl max-[350px]:text-2xl space-x-4">
            <i className="devicon-html5-plain"></i>
            <i className="devicon-css3-plain"></i>
            <i className="devicon-tailwindcss-plain"></i>
            <i className="devicon-bootstrap-plain"></i>
            <i className="devicon-javascript-plain"></i>
            {/* <i className="devicon-typescript-plain"></i> */}
            <i className="devicon-ruby-plain"></i>
            <i className="devicon-rails-plain"></i>
            <i className="devicon-git-plain"></i>
            {/* <i className="devicon-postgresql-plain"></i> */}
            {/* <i className="devicon-jest-plain"></i> */}
          </div>
        </div>
      </div>
    </main>
  );
}

Main.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

import PropTypes from 'prop-types';

export default function About(props) {
  const lewagonLogo = props.darkMode
    ? 'lewagon-logo-inverted.svg'
    : 'lewagon-logo.svg';
  const udemyLogo = props.darkMode
    ? 'udemy-logo-inverted.svg'
    : 'udemy-logo.svg';

  return (
    <section
      id="about"
      className={`md:px-10 xl:px-60 2xl:px-96 ${
        props.darkMode ? 'bg-dark-II text-white' : 'bg-white text-black'
      }`}
    >
      <div className="py-14 px-3 md:px-0">
        <h2 className="text-2xl font-bold md:pb-3">About me</h2>
        <p>
          After over a year of self study, I attended and graduated from Le
          Wagon London, a 9-week full-time intensive coding bootcamp teaching a
          variety of front-end and back-end technologies. I am passionate about
          continuing to develop my skills in this area.
        </p>
        <br />
        <p>
          Since then I have been learning and working with the MERN stack by
          following{' '}
          <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">
            Colt Steele&apos;s Web Development course
          </a>{' '}
          and building his large final project &apos;YelpCamp&apos;. I have also
          been working on a few of my own projects, including this portfolio
          website.
        </p>
        <h2 className="text-2xl pt-6 font-bold md:pb-3">My experience</h2>
        <div className="row">
          <img src={lewagonLogo} alt="" className="xl:hidden w-40 py-6" />
          <div className="flex">
            <p className="text-justify">
              I&apos;m a graduate of Le Wagon, a 9-week full-time intensive web
              development bootcamp based in London. During the bootcamp, I
              worked with HTML, CSS, Bootstrap, Ruby, JavaScript ES6, SQL, git,
              GitHub, Heroku, and Ruby on Rails. During the bootcamp I helped
              design, implement, and ship to production both a clone of Airbnb
              and a Rails prototype of “Mind Mission”, a mindfulness training
              game for 9 to 11-year-olds.
            </p>
            <img
              src={lewagonLogo}
              alt=""
              className="hidden xl:block 2xl:block w-60 pl-5"
            />
          </div>
        </div>

        <img src={udemyLogo} alt="" className="xl:hidden w-32 py-6" />
        <p className="md:hidden text-justify">
          Before joining Le Wagon, my self-study comprised of Codecademy and
          Udemy courses.
        </p>

        <div className="flex items-center py-8">
          <img
            src={udemyLogo}
            alt=""
            className="hidden xl:block 2xl:block w-48 pr-5"
          />
          <p className="hidden md:block text-justify">
            Before joining Le Wagon, my self-study comprised of Codecademy and
            Udemy courses.
          </p>
        </div>

        <h2 className="text-2xl font-bold md:pb-3">Interests and Hobbies</h2>
        <p>Reading and BSL</p>
      </div>
    </section>
  );
}

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

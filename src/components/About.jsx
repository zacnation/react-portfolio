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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          explicabo nobis nesciunt sequi sit nulla, nihil atque exercitationem
          at deserunt aliquid aliquam laudantium sint eius nam optio illum
          repellat eum?
        </p>
        <h2 className="text-2xl pt-6 font-bold md:pb-3">My experience</h2>
        <div className="row">
          <img src={lewagonLogo} alt="" className="xl:hidden w-40 py-6" />
          <div className="flex">
            <p className="text-justify">
              I&apos;m a graduate of Le Wagon, a 9-week full-time intensive web
              development bootcamp based in London. During the bootcamp, I
              worked with a variety of front-end and back-end technologies.
              Prior to the bootcamp, I spent over a year self-learning how to
              code, and I am passionate about continuing to develop my skills in
              this area.
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
          Before joining Le Wagon, my self-study involved a lot of Codecademy
          and Udemy courses. A list of my completed courses can be found here.
        </p>

        <div className="flex items-center py-8">
          <img
            src={udemyLogo}
            alt=""
            className="hidden xl:block 2xl:block w-48 pr-5"
          />
          <p className="hidden md:block text-justify">
            Before joining Le Wagon, my self-study involved a lot of Codecademy
            and Udemy courses. A list of my completed courses can be found here.
          </p>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

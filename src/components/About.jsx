import PropTypes from 'prop-types';
import Modal from './Modal';
import AboutModal from './AboutModal';

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
      className={`transition-all duration-300 md:px-10 xl:px-60 2xl:px-96 lg:pt-16 lg:pb-20 ${
        props.darkMode ? 'bg-dark-II text-white' : 'bg-white text-black'
      }`}
    >
      <div className="py-14 lg:py-0 px-3 md:px-0">
        <h2 className="text-3xl font-bold pb-3 text-center">About me</h2>
        <p className="text-justify">
          Two years ago I started learning to code in my spare time, and I
          quickly realised that Full-Stack Web Development was the area that
          interested me most. For the last year I&apos;ve been learning to code
          full time, and I&apos;m now looking for a role as a Junior Web
          Developer. I&apos;m an outgoing, enthusiastic team player who is
          passionate about creating accessible, user-friendly websites and
          applications. I&apos;m a quick learner, and I&apos;m excited to
          continue learning and developing both my technical and soft skills in
          this area.
        </p>
        <h2 className="text-3xl pt-6 font-bold md:pb-3 text-center">
          My experience
        </h2>
        <div className="row">
          <img
            src={lewagonLogo}
            alt=""
            className="xl:hidden w-40 py-6 mx-auto"
          />
          <div className="flex">
            <p className="text-justify">
              I&apos;m a graduate of{' '}
              <a
                href="https://www.lewagon.com/london"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                Le Wagon
              </a>
              , a 9-week full-time intensive web development bootcamp based in
              London. During the bootcamp, I worked with HTML, CSS, Bootstrap,
              Ruby, JavaScript ES6, SQL, git, GitHub, Heroku, and Ruby on Rails.
              During the bootcamp I helped design, implement, and ship to
              production both a clone of Airbnb and a Rails prototype of “Mind
              Mission”, a mindfulness training game for 9 to 11-year-olds.
            </p>
            <img
              src={lewagonLogo}
              alt=""
              className="hidden xl:block 2xl:block w-60 pl-5"
            />
          </div>
        </div>

        <div className="xl:flex xl:items-center lg:pb-8 lg:pt-0">
          <img
            src={udemyLogo}
            alt=""
            className="w-32 pt-6 pb-4 lg:pb-3 xl:w-48 xl:pr-5 mx-auto"
          />
          <p className="text-justify xl:pt-6">
            Before joining Le Wagon, my self-study consisted of Codecademy and
            Udemy courses. Most recently I completed{' '}
            <a
              href="https://www.udemy.com/course/the-web-developer-bootcamp/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              Colt Steele&apos;s web development course
            </a>
            . A full list of my completed courses can be found{' '}
            <AboutModal
              title={'here'}
              innerTitle={'Certificates'}
              darkMode={props.darkMode}
              onOpen={props.openModal}
              onClose={props.closeModal}
            />
            .
          </p>
        </div>

        <h2 className="text-2xl font-bold py-4 md:pb-6 lg:pt-0 text-center lg:text-3xl">
          Interests and Hobbies
        </h2>
        <div className="text-center">
          <Modal
            title={'Reading'}
            description={
              "Reading is a passion of mine, and my book collection spans a wide range of genres and topics. From personal development works like 'How to Win Friends and Influence People', 'Atomic Habits', and 'Deep Work' to timeless classics like '1984', 'The Trial', and 'The Master and Margarita', I find inspiration in the diverse perspectives that literature offers. These books have not only fueled my creativity and problem-solving skills but have also enriched my understanding of human behavior and interaction."
            }
            darkMode={props.darkMode}
            iconSrc={`${props.darkMode ? 'books-inverted.svg' : 'books.svg'}`}
            urlSrc={
              'https://www.goodreads.com/review/list/169529187-zac?shelf=read'
            }
            imgSrc={`${props.darkMode ? 'books-inverted.png' : 'books.png'}`}
            linkText={'My previously read'}
            onOpen={props.openModal}
            onClose={props.closeModal}
          />
          <Modal
            title={'BSL'}
            description={
              "British Sign Language (BSL): Learning BSL isn't just a personal interest; it's my way of embracing two critical aspects of web development: accessibility and diversity, equity, and inclusion (DEI). BSL is part of the bigger picture of making the digital world more inclusive for those who rely on sign language. This experience has given me valuable insights into the challenges faced by individuals with disabilities, inspiring me to design websites and applications that cater to their needs. It's also a reminder that diversity includes linguistic diversity, which I'm passionate about promoting in the tech industry."
            }
            darkMode={props.darkMode}
            iconSrc={`${
              props.darkMode
                ? 'sign-language-inverted.svg'
                : 'sign-language.svg'
            }`}
            onOpen={props.openModal}
            onClose={props.closeModal}
          />
          <Modal
            title={'Tech skills'}
            description={
              'Gaining skills such as being able to work with the terminal, using git and GitHub, and deploying with Netlify / Cyclic has been great. Next, I want to learn more about the cloud and AWS, as well as how to work with Docker and Kubernetes, work with a Raspberry Pi for IoT projects, and continue to learn more about areas such as cybersecurity and data structures and algorithms. I feel even having a foundational understanding of these areas will help me become a better developer.'
            }
            darkMode={props.darkMode}
            iconSrc={`${
              props.darkMode ? 'raspberry-pi-inverted.svg' : 'raspberry-pi.svg'
            }`}
            onOpen={props.openModal}
            onClose={props.closeModal}
          />
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};

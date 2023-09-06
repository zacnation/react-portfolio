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
        <h2 className="text-2xl font-bold pb-3">About me</h2>
        {/* <p>
          After over a year of self study, I attended and graduated from Le
          Wagon London, a 9-week full-time intensive coding bootcamp teaching a
          variety of front-end and back-end technologies. I am passionate about
          continuing to develop my skills in this area.
        </p> */}
        <p>
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
        <br />
        {/* <p>
          Since then I have been learning and working with the MERN stack by
          following{' '}
          <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">
            Colt Steele&apos;s Web Development course
          </a>{' '}
          and building his large final project &apos;YelpCamp&apos;. I have also
          been working on a few of my own projects, including this portfolio
          website.
        </p> */}
        <h2 className="text-2xl pt-6 font-bold md:pb-3">My experience</h2>
        <div className="row">
          <img src={lewagonLogo} alt="" className="xl:hidden w-40 py-6" />
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
            className="w-32 pt-6 pb-4 lg:pb-3 xl:w-48 xl:pr-5"
          />
          <p className="text-justify xl:pt-6">
            Before joining Le Wagon, my self-study comprised of Codecademy and
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
            />
            .
          </p>
        </div>

        <h2 className="text-2xl font-bold py-4 md:pb-6 lg:pt-0">
          Interests and Hobbies
        </h2>
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
        />
        <Modal
          title={'BSL'}
          description={
            "British Sign Language (BSL): Learning BSL isn't just a personal interest; it's my way of embracing two critical aspects of web development: accessibility and diversity, equity, and inclusion (DEI). BSL is part of the bigger picture of making the digital world more inclusive for those who rely on sign language. This experience has given me valuable insights into the challenges faced by individuals with disabilities, inspiring me to design websites and applications that cater to their needs. It's also a reminder that diversity includes linguistic diversity, which I'm passionate about promoting in the tech industry."
          }
          darkMode={props.darkMode}
          iconSrc={`${
            props.darkMode ? 'sign-language-inverted.svg' : 'sign-language.svg'
          }`}
        />
        <Modal
          title={'Technical skills'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium vitae turpis in sodales. Etiam ac leo ut metus viverra iaculis. Donec vitae orci urna. Quisque sed nibh a arcu vulputate eleifend non ut ipsum. Curabitur convallis nisl vel arcu placerat, id sagittis velit posuere. Nulla facilisi. Nam luctus tempus massa, ut vulputate risus ultricies sed. Aliquam tempus quis enim ac ultrices. Morbi nec lorem suscipit, viverra libero sed, hendrerit nunc. Aliquam erat volutpat. Ut consectetur ut libero ac luctus. Ut pellentesque est vel magna tempus, nec dictum leo venenatis. Sed at nibh venenatis, malesuada sapien nec, elementum leo. In accumsan lectus neque, at sollicitudin odio aliquam nec. In eu sollicitudin libero. Morbi iaculis augue at nibh ultricies, eget ullamcorper est vulputate. Suspendisse a mi faucibus, scelerisque est sit amet, elementum velit. Mauris id ligula ac eros ornare accumsan. Vivamus fermentum elementum arcu ac egestas. Nullam pulvinar justo at ante facilisis rutrum.'
          }
          darkMode={props.darkMode}
          iconSrc={`${
            props.darkMode ? 'raspberry-pi-inverted.svg' : 'raspberry-pi.svg'
          }`}
        />
      </div>
    </section>
  );
}

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

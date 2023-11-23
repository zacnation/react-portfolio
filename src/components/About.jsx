import AboutModal from "./AboutModal";
import Download from "./Download";

export default function About(props) {
  const lewagonLogo = props.darkMode
    ? "lewagon-logo-inverted.svg"
    : "lewagon-logo.svg";
  const udemyLogo = props.darkMode
    ? "udemy-logo-inverted.svg"
    : "udemy-logo.svg";

  return (
    <section
      id="about"
      className={`transition-all duration-300 md:px-32 xl:px-60 2xl:px-96 lg:pt-16 lg:pb-20 ${
        props.darkMode ? "bg-dark-II text-white" : "bg-white text-black"
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
              I&apos;m a graduate of{" "}
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
            Udemy courses. Most recently I completed{" "}
            <a
              href="https://www.udemy.com/course/the-web-developer-bootcamp/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              Colt Steele&apos;s web development course
            </a>
            . A full list of my completed courses can be found{" "}
            <AboutModal
              title={"here"}
              innerTitle={"Certificates"}
              darkMode={props.darkMode}
              onOpen={props.openModal}
              onClose={props.closeModal}
            />
            .
          </p>
        </div>

        <div className="text-center mb-6">
          <Download darkMode={props.darkMode} />
        </div>
      </div>
    </section>
  );
}

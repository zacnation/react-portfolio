import PropTypes from "prop-types";
import TechCard from "./TechCard";

export default function About(props) {
  return (
    <section
      id="projects"
      className={`py-14 px-3 md:px-10 ${
        props.darkMode ? "bg-dark-I text-white" : "bg-light"
      }`}
    >
      <h2 className="text-2xl font-bold">Projects</h2>
      <h2 className="text-2xl font-bold text-center py-14">
        More coming soon 👨‍💻
      </h2>
      <h2 className="text-2xl font-bold pb-2">What&apos;s next?</h2>
      <div className="what-next">
        <TechCard
          icon="devicon-chrome-plain"
          description="Continuing to build Chrome extensions excites me!"
        />
        <TechCard
          icon="devicon-firebase-plain"
          description="Firebase was an amazing platform to work with. I'm eager to delve deeper into its capabilities and learn more."
        />
        <TechCard
          icon="devicon-nextjs-original"
          description="Exploring a more opinionated framework like Next.js for my future projects sounds intriguing."
        />
        <TechCard
          icon="devicon-raspberrypi-line"
          description="I have my eye on a variety of cool Raspberry Pi projects, including automating smart home technology and much more!"
        />
        <TechCard
          icon="devicon-rust-plain"
          description="I'm eager to dive into low-level programming and gain a profound understanding of the underlying technology. Rust seems like the perfect first step into the world of low-level languages."
        />
        <TechCard
          icon="devicon-threejs-original"
          description="The possibilities with Three.js are awe-inspiring. I'm committed to enhancing my skills in this area."
        />
        <TechCard
          icon="devicon-unity-original"
          description="I'm genuinely passionate about 2D game development and excited to devote time to mastering this skill."
        />
      </div>
    </section>
  );
}

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

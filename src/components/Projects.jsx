import Carousel from "./Carousel";

export default function Projects({ darkMode }) {
  return (
    <section
      id="projects"
      className={`transition-all duration-300 pt-10 md:pt-20 md:pb-5 xl:px-20 ${
        darkMode ? "bg-dark-I text-white" : "bg-light text-black"
      }`}
    >
      <h2 className="text-center text-2xl font-bold pb-6 md:pb-9 lg:text-3xl">
        Projects
      </h2>
      <Carousel darkMode={darkMode} />
    </section>
  );
}

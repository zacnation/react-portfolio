import PropTypes from "prop-types";
import ResourceCard from "./ResourceCard";

export default function Resources(props) {
  return (
    <section
      className={`py-16 ${
        props.darkMode ? "bg-dark-II text-white" : "bg-white"
      }`}
    >
      <h2 className="md:hidden text-2xl font-bold pb-5">Resources</h2>
      <h2 className="hidden md:block text-2xl font-bold">
        Resources I&apos;m incredibly grateful for
      </h2>

      <div className="grid grid-cols-2">
        <div className="flex items-center">
          <ResourceCard
            imageSrc={
              props.darkMode ? "lewagon-icon-inverted.svg" : "lewagon-icon.svg"
            }
            listItems={["The entire team 🥂"]}
          />
        </div>

        <div className="grid col-span-2">
          <div className="flex items-center">
            <ResourceCard
              imageSrc={
                props.darkMode ? "scrimba-dark-f.svg" : "scrimba-icon.svg"
              }
              listItems={["The Scrimba podcast", "The free catalogue"]}
            />
          </div>
        </div>

        <div className="flex items-center">
          <ResourceCard
            imageSrc={
              props.darkMode ? "udemy-icon-inverted.svg" : "udemy-icon.svg"
            }
            listItems={["Angela Yu", "Colt Steele"]}
          />
        </div>

        <div className="flex items-center">
          <ResourceCard
            imageSrc={
              props.darkMode
                ? "codecademy-icon-inverted.svg"
                : "codecademy-icon.svg"
            }
            listItems={["Full-Stack career path"]}
          />
        </div>

        <div className="grid col-span-3">
          <ResourceCard
            imageSrc={
              props.darkMode ? "youtube-dark-f.svg" : "youtube-icon.svg"
            }
            listItems={[
              "danascript",
              "Tiff In Tech",
              "Tina Huang",
              "FreeCodeCamp",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

Resources.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

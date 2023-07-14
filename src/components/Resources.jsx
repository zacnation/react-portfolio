import PropTypes from "prop-types";
import ResourceCard from "./ResourceCard";

export default function Resources(props) {
  return (
    <section
      className={`pt-8 px-3 md:px-10 xl:px-60 2xl:px-96 ${
        props.darkMode ? "bg-very-dark text-white" : "bg-light"
      }`}
    >
      <h2 className="lg:hidden text-2xl font-bold pb-5">Resources</h2>
      <h2 className="hidden lg:block text-md font-bold">
        Resources I&apos;m incredibly grateful for
      </h2>

      <div className="md:hidden flex justify-center space-x-6">
        <ResourceCard
          imageSrc={
            props.darkMode ? "lewagon-icon-inverted.svg" : "lewagon-icon.svg"
          }
          listItems={[]}
        />

        <ResourceCard
          imageSrc={props.darkMode ? "scrimba-dark-f.svg" : "scrimba-icon.svg"}
          listItems={[]}
        />

        <ResourceCard
          imageSrc={
            props.darkMode ? "udemy-icon-inverted.svg" : "udemy-icon.svg"
          }
          listItems={[]}
        />

        <ResourceCard
          imageSrc={
            props.darkMode
              ? "codecademy-icon-inverted.svg"
              : "codecademy-icon.svg"
          }
          listItems={[]}
        />

        <ResourceCard
          imageSrc={props.darkMode ? "youtube-dark-f.svg" : "youtube-icon.svg"}
          listItems={[]}
        />
      </div>

      <div className="hidden md:flex justify-center">
        <div className="flex items-center">
          <ResourceCard
            imageSrc={
              props.darkMode ? "lewagon-icon-inverted.svg" : "lewagon-icon.svg"
            }
            listItems={["Batch #1123 🥂"]}
          />
        </div>

        <div className="flex items-center">
          <ResourceCard
            imageSrc={
              props.darkMode ? "scrimba-dark-f.svg" : "scrimba-icon.svg"
            }
            listItems={["The Scrimba podcast", "and free catalogue"]}
          />
        </div>

        <div className="flex items-center">
          <ResourceCard
            imageSrc={
              props.darkMode ? "udemy-icon-inverted.svg" : "udemy-icon.svg"
            }
            listItems={["Angela Yu &", "Colt Steele"]}
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

        <div className="flex items-center">
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

import ResourceCard from "./ResourceCard";

export default function Resources({ darkMode }) {
  return (
    <section
      className={`transition-all duration-300 pt-8 px-3 md:px-10 xl:px-60 2xl:px-96 ${
        darkMode ? "bg-very-dark text-white" : "bg-light text-black"
      }`}
    >
      <h2 className="flex justify-center text-2xl font-bold pb-5">Resources</h2>

      <div className="lg:hidden flex justify-center space-x-6">
        <ResourceCard
          imageSrc={darkMode ? "lewagon-icon-inverted.svg" : "lewagon-icon.svg"}
          listItems={[]}
        />

        <ResourceCard
          imageSrc={darkMode ? "scrimba-dark-f.svg" : "scrimba-icon.svg"}
          listItems={[]}
        />

        <ResourceCard
          imageSrc={darkMode ? "udemy-icon-inverted.svg" : "udemy-icon.svg"}
          listItems={[]}
        />

        <ResourceCard
          imageSrc={
            darkMode ? "codecademy-icon-inverted.svg" : "codecademy-icon.svg"
          }
          listItems={[]}
        />

        <ResourceCard
          imageSrc={darkMode ? "youtube-dark-f.svg" : "youtube-icon.svg"}
          listItems={[]}
        />
      </div>

      <div className="hidden lg:flex justify-center">
        <div className="flex items-center">
          <ResourceCard
            imageSrc={
              darkMode ? "lewagon-icon-inverted.svg" : "lewagon-icon.svg"
            }
            listItems={["Batch #1123 🥂"]}
          />
        </div>

        <div className="flex items-center">
          <ResourceCard
            imageSrc={darkMode ? "scrimba-dark-f.svg" : "scrimba-icon.svg"}
            listItems={["Scrimba podcast", "& free catalogue"]}
          />
        </div>

        <div className="flex items-center">
          <ResourceCard
            imageSrc={darkMode ? "udemy-icon-inverted.svg" : "udemy-icon.svg"}
            listItems={["Angela Yu &", "Colt Steele"]}
          />
        </div>

        <div className="flex items-center">
          <ResourceCard
            imageSrc={
              darkMode ? "codecademy-icon-inverted.svg" : "codecademy-icon.svg"
            }
            listItems={["Full-Stack", "career path"]}
          />
        </div>

        <div className="flex items-center">
          <ResourceCard
            imageSrc={darkMode ? "youtube-dark-f.svg" : "youtube-icon.svg"}
            listItems={["danascript", "Tiff In Tech", "Tina Huang"]}
          />
        </div>
      </div>
    </section>
  );
}

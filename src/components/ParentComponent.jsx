import { useState } from "react";
import PropTypes from "prop-types";
import About from "./About";
import Projects from "./Projects";
import Interests from "./Interests";

export default function ParentComponent({ darkMode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <About
        darkMode={darkMode}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Interests darkMode={darkMode} />
      {isModalOpen ? "" : <Projects darkMode={darkMode} />}
    </div>
  );
}

ParentComponent.propTypes = {
  darkMode: PropTypes.bool,
};

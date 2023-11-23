import { useState } from "react";
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
      <About darkMode={darkMode} />
      <Interests
        darkMode={darkMode}
        openModal={openModal}
        closeModal={closeModal}
      />
      {isModalOpen ? "" : <Projects darkMode={darkMode} />}
    </div>
  );
}

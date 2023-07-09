import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import WhatNext from "./components/WhatNext";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resources from "./components/Resources";
import Popup from "./components/Popup";
import "tailwindcss/tailwind.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [popup, setpopup] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  function togglePopup() {
    setpopup((prevState) => !prevState);
  }

  function toggleHamburger() {
    setHamburger((prevState) => !prevState);
  }

  return (
    <div>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        hamburger={hamburger}
        toggleHamburger={toggleHamburger}
      />
      <Popup darkMode={darkMode} popup={popup} togglePopup={togglePopup} />
      <Main darkMode={darkMode} />
      <About darkMode={darkMode} togglePopup={togglePopup} />
      <Projects darkMode={darkMode} togglePopup={togglePopup} />
      <WhatNext darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Resources darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

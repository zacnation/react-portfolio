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
import { useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [popup, setpopup] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function handleDarkModeChange(e) {
      setDarkMode(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    }

    darkModeQuery.addEventListener("change", handleDarkModeChange);
    setDarkMode(darkModeQuery.matches);
    document.documentElement.classList.toggle("dark", darkModeQuery.matches);

    return () => {
      darkModeQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

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

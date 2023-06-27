import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Resources from "./components/Resources";
import Popup from "./components/Popup";
import "tailwindcss/tailwind.css";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [buttonPopup, setButtonPopup] = React.useState(false);
  const [hamburger, setHamburger] = React.useState();

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  function toggleClose() {
    setButtonPopup((prevState) => !prevState);
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
      <Popup
        darkMode={darkMode}
        buttonPopup={buttonPopup}
        toggleClose={toggleClose}
      />
      <Main darkMode={darkMode} />
      <About darkMode={darkMode} toggleClose={toggleClose} />
      <Projects darkMode={darkMode} />
      <Resources darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

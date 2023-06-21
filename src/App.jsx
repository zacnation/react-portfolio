import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
    </div>
  );
}

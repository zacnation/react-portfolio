import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import WhatNext from "./components/WhatNext";
import Contact from "./components/Contact";
import Resources from "./components/Resources";
import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import ParentComponent from "./components/ParentComponent";
import Interests from "./components/Interests";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
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
      <Main darkMode={darkMode} />
      <ParentComponent darkMode={darkMode} />
      {/* <Interests darkMode={darkMode} /> */}
      <WhatNext darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Resources darkMode={darkMode} />
    </div>
  );
}

import ToggleSwitch from "./ToggleSwitch";

export default function Navbar(props) {
  return (
    <nav
      className={`transition-all duration-300 fixed w-full shadow-md z-10 ${
        props.darkMode
          ? "bg-very-dark text-white"
          : "bg-white shadow-gray-100 text-black"
      }`}
    >
      <div className="max-w-full mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="flex justify-between">
          <a href="#main" className="text-2xl py-8 px-3 font-bold">
            Zac Nation
          </a>
          <div className="flex items-center space-x-4">
            <div className="pt-1.5">
              <ToggleSwitch
                darkMode={props.darkMode}
                toggleDarkMode={props.toggleDarkMode}
                checked={props.darkMode}
                onChange={props.toggleDarkMode}
              />
            </div>

            <div className="hidden md:flex items-center space-x-3 font-bold">
              <a href="#main" className="py-8 px-3">
                Home
              </a>
              <a href="#about" className="py-8 px-3">
                About
              </a>
              <a href="#projects" className="py-8 px-3">
                Projects
              </a>
              <a href="#contact" className="py-8 px-3">
                Contact
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={props.toggleHamburger}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`md:hidden font-bold ${props.hamburger ? "" : "hidden"}`}>
        <a href="#main" className="block px-2 py-4 text-sm hover:bg-gray-700">
          Home
        </a>
        <a href="#about" className="block px-2 py-4 text-sm hover:bg-gray-700">
          About
        </a>
        <a
          href="#projects"
          className="block px-2 py-4 text-sm hover:bg-gray-700"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block px-2 py-4 text-sm hover:bg-gray-700"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

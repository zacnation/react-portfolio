import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`bg-white shadow-md shadow-gray-100 ${
        props.darkMode ? "dark" : ""
      }`}
    >
      <div className="max-w-full mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="flex justify-between">
          {/* logo */}
          <div className="logo py-8 px-3 font-bold">Zac Nation</div>

          <div className="flex space-x-4">
            {/* primary nav */}
            <div className="hidden md:flex items-center">
              <button
                className="bg-teal-400 px-2 py-1 rounded hover:bg-pink-400 transition duration-100"
                onClick={props.toggleDarkMode}
              >
                light/dark
              </button>
            </div>

            {/* secondary nav */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="#home" className="py-8 px-3">
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

            {/* mobile button */}
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

      {/* mobile menu */}
      <div className={`md:hidden ${props.hamburger ? "" : "hidden"}`}>
        <a href="#" className="block px-2 py-4 text-sm hover:bg-gray-700">
          Home
        </a>
        <a href="#" className="block px-2 py-4 text-sm hover:bg-gray-700">
          About
        </a>
        <a href="#" className="block px-2 py-4 text-sm hover:bg-gray-700">
          Projects
        </a>
        <a href="#" className="block px-2 py-4 text-sm hover:bg-gray-700">
          Contact
        </a>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.bool.isRequired,
  hamburger: PropTypes.bool.isRequired,
  toggleHamburger: PropTypes.bool.isRequired,
};

// =============
// Me
// =============

// import PropTypes from "prop-types";
// export default function Navbar(props) {
//   return (
//     <nav
//       className={`flex items-center justify-between ${
//         props.darkMode ? "dark" : ""
//       }`}
//     >
//       <h3 className="logo">Zac Nation</h3>
//       <div className="nav-elements">
//         <div className="toggler">
//           <div className="toggler--slider" onClick={props.toggleDarkMode}>
//             <div className="toggler--slider--circle"></div>
//           </div>
//         </div>
// <ul>
//   <li>
//     <a href="#home">Home</a>
//   </li>
//   <li>
//     <a href="#about">About</a>
//   </li>
//   <li>
//     <a href="#projects">Projects</a>
//   </li>
//   <li>
//     <a href="#contact">Contact</a>
//   </li>
// </ul>
//       </div>
//     </nav>
//   );
// }

// Navbar.propTypes = {
//   darkMode: PropTypes.bool.isRequired,
//   toggleDarkMode: PropTypes.bool.isRequired,
// };

//

//

//

// =============

// CHATGPT

// =============

// import PropTypes from "prop-types";

// export default function Navbar(props) {
//   return (
//     <nav
//       className={`flex items-center justify-between p-4 ${
//         props.darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//       }`}
//     >
//       <h3 className="text-xl font-bold">Zac Nation</h3>
//       <div className="flex items-center">
//         <div
//           className={`relative w-12 h-6 rounded-full bg-gray-400 ${
//             props.darkMode ? "bg-blue-600" : "bg-gray-300"
//           }`}
//           onClick={props.toggleDarkMode}
//         >
//           <div
//             className={`absolute w-4 h-4 rounded-full bg-white ${
//               props.darkMode ? "left-6" : "left-1"
//             }`}
//           ></div>
//         </div>
//       </div>
//       <ul className="hidden sm:flex">
//         <li>
//           <a
//             href="#home"
//             className="px-2 py-1 text-gray-800 hover:text-gray-600"
//           >
//             Home
//           </a>
//         </li>
//         <li>
//           <a
//             href="#about"
//             className="px-2 py-1 text-gray-800 hover:text-gray-600"
//           >
//             About
//           </a>
//         </li>
//         <li>
//           <a
//             href="#projects"
//             className="px-2 py-1 text-gray-800 hover:text-gray-600"
//           >
//             Projects
//           </a>
//         </li>
//         <li>
//           <a
//             href="#contact"
//             className="px-2 py-1 text-gray-800 hover:text-gray-600"
//           >
//             Contact
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// Navbar.propTypes = {
//   darkMode: PropTypes.bool.isRequired,
//   toggleDarkMode: PropTypes.func.isRequired,
// };

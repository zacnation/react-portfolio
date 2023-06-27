import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <nav
      className={`flex items-center justify-between ${
        props.darkMode ? "dark" : ""
      }`}
    >
      <h3 className="logo">Zac Nation</h3>
      <div className="nav-elements">
        <div className="toggler">
          <div className="toggler--slider" onClick={props.toggleDarkMode}>
            <div className="toggler--slider--circle"></div>
          </div>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.bool.isRequired,
};

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

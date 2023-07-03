import PropTypes from "prop-types";

// export default function ProjectCard(props) {
//   return (
//     <div
//       className={`flex flex-col md:flex-row mb-20 py-5 px-1 rounded-md shadow-lg items-center ${
//         props.darkMode
//           ? "bg-dark-II text-white shadow-very-dark"
//           : "bg-white shadow-gray-100"
//       }`}
//     >
//       <h2 className="text-3xl pb-4 md:pb-0">{props.title}</h2>
//       <p className="text-justify px-5 font-thin">{props.description}</p>
//       <div
//         className={`flex items-center space-x-2 justify-center ${
//           props.darkMode ? "text-white" : "text-black"
//         }`}
//       >
//         {props.techs.map((item, index) => {
//           return item === "Stimulus" ? (
//             <img
//               src={
//                 props.darkMode
//                   ? "../../dist/stimulus-svgrepo-com.svg"
//                   : "https://www.svgrepo.com/show/354392/stimulus.svg"
//               }
//               alt=""
//               className="w-6 h-6"
//             />
//           ) : (
//             <i
//               className={`text-2xl devicon-${item.toLowerCase()}-${
//                 item === "Express" ? "original" : "plain"
//               }`}
//               key={index}
//             ></i>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

export default function ProjectCard(props) {
  return (
    <div
      className="flex items-center bg-cover bg-center h-44 filter grayscale hover:filter-none cursor-pointer mb-5"
      style={{
        backgroundImage: `url(${props.imgSrc})`,
      }}
    >
      <h1 className="text-white text-4xl mx-auto">{props.title}</h1>
    </div>
  );
}

ProjectCard.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  techs: PropTypes.array,
};

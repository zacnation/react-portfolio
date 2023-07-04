// import PropTypes from "prop-types";
// import Popup from "./Popup";

// // export default function ProjectCard(props) {
// //   return (
// //     <div
// //       className={`flex flex-col md:flex-row mb-20 py-5 px-1 rounded-md shadow-lg items-center ${
// //         props.darkMode
// //           ? "bg-dark-II text-white shadow-very-dark"
// //           : "bg-white shadow-gray-100"
// //       }`}
// //     >
// //       <h2 className="text-3xl pb-4 md:pb-0">{props.title}</h2>
// //       <p className="text-justify px-5 font-thin">{props.description}</p>
// //       <div
// //         className={`flex items-center space-x-2 justify-center ${
// //           props.darkMode ? "text-white" : "text-black"
// //         }`}
// //       >
// //         {props.techs.map((item, index) => {
// //           return item === "Stimulus" ? (
// //             <img
// //               src={
// //                 props.darkMode
// //                   ? "../../dist/stimulus-svgrepo-com.svg"
// //                   : "https://www.svgrepo.com/show/354392/stimulus.svg"
// //               }
// //               alt=""
// //               className="w-6 h-6"
// //             />
// //           ) : (
// //             <i
// //               className={`text-2xl devicon-${item.toLowerCase()}-${
// //                 item === "Express" ? "original" : "plain"
// //               }`}
// //               key={index}
// //             ></i>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// export default function ProjectCard(props) {
//   console.log(props);
//   return (
//     <div className="z-0">
//       <div className="flex justify-center items-center z-0">
//         <img
//           src={props.imgSrc}
//           alt=""
//           className="w-96 cursor-pointer mb-5"
//           onClick={props.toggleClose}
//         />
//         <Popup
//           toggleClose={props.toggleClose}
//           imgSrc={props.imgSrc}
//           title={props.title}
//           description={props.description}
//           techs={props.techs}
//         />
//       </div>
//     </div>
//   );
// }

// ProjectCard.propTypes = {
//   darkMode: PropTypes.bool.isRequired,
//   toggleClose: PropTypes.func.isRequired,
//   imgSrc: PropTypes.string,
//   title: PropTypes.string,
//   description: PropTypes.string,
//   techs: PropTypes.array,
// };

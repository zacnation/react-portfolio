// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";

// export default function Popup(props) {
//   return props.buttonPopup ? (
//     <div
//       className={`z-9 pb-12 fixed inset-3 inset-y-32 bg-gray-100 flex justify-center items-center  ${
//         props.darkMode ? "dark" : ""
//       }`}
//     >
//       <div className="relative pl-4 pr-8 text-justify mt-16">
//         <FontAwesomeIcon
//           icon={faTimes}
//           className="absolute top-3 right-3 cursor-pointer"
//           onClick={props.toggleClose}
//         />
//         <img src="../../public/mindmission.png" alt="" />
//         <h1>MIND MISSION</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo
//           perspiciatis ex earum a mollitia id quaerat. Lorem ipsum dolor sit
//           amet consectetur adipisicing elit. Velit magni maxime unde asperiores
//           temporibus maiores placeat laudantium! Rem corrupti a neque voluptatem
//           magnam, libero voluptate quasi ipsa ipsam sequi iusto.
//         </p>
//         {/*  */}
//         <div
//           className={`flex items-center space-x-2 justify-center ${
//             props.darkMode ? "text-white" : "text-black"
//           }`}
//         >
//           {["ruby", "rails", "javascript", "stimulus"].map((item, index) => {
//             return item === "stimulus" ? (
//               <img
//                 src={
//                   props.darkMode
//                     ? "../../dist/stimulus-svgrepo-com.svg"
//                     : "https://www.svgrepo.com/show/354392/stimulus.svg"
//                 }
//                 alt=""
//                 className="w-6 h-6"
//               />
//             ) : (
//               <i
//                 className={`text-2xl devicon-${item.toLowerCase()}-${
//                   item === "Express" ? "original" : "plain"
//                 }`}
//                 key={index}
//               ></i>
//             );
//           })}
//         </div>
//         {/*  */}
//       </div>
//     </div>
//   ) : null;
// }

// Popup.propTypes = {
//   darkMode: PropTypes.bool.isRequired,
//   toggleClose: PropTypes.func.isRequired,
//   buttonPopup: PropTypes.bool.isRequired,
//   description: PropTypes.string,
//   title: PropTypes.string,
//   imgSrc: PropTypes.string,
//   techs: PropTypes.arrayOf(PropTypes.string),
// };

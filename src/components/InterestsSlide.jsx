import PropTypes from "prop-types";
import InterestsModal from "./InterestsModal";

export default function Slide(props) {
  return (
    <>
      <div className="px-12 space-x-10 md:p-0 md:flex md:items-center md:justify-center">
        <div>
          <h2
            className={`text-3xl font-bold text-center md:pt-0 lg:pb-1 ${
              props.link && "hover:underline underline-offset-2"
            }`}
          >
            {props.title}
          </h2>
          <div className="md:ml-9">
            {/* <p className="w-full md:w-96 overflow-y-auto max-sm:h-80 h-min max-h-60 border rounded py-2 px-4">
              {props.description}
            </p> */}
            <InterestsModal
              title={"Reading is a passion of mine, and my book collection..."}
              description={
                "Reading is a passion of mine, and my book collection spans a wide range of genres and topics. From personal development works like 'How to Win Friends and Influence People', 'Atomic Habits', and 'Deep Work' to timeless classics like '1984', 'The Trial', and 'The Master and Margarita', I find inspiration in the diverse perspectives that literature offers. These books have not only fueled my creativity and problem-solving skills but have also enriched my understanding of human behavior and interaction."
              }
              darkMode={props.darkMode}
              urlSrc={
                "https://www.goodreads.com/review/list/169529187-zac?shelf=read"
              }
              linkText={"My previously read"}
              onOpen={props.openModal}
              onClose={props.closeModal}
            />
          </div>
        </div>
        <img
          src={props.img}
          alt=""
          style={{ width: "30%", height: "30%" }}
          className="max-lg:hidden pt-6"
        />
      </div>
      <img src={props.img} alt="" className="lg:hidden md:px-40" />
    </>
  );
}

Slide.propTypes = {
  darkMode: PropTypes.bool,
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // techs: PropTypes.arrayOf(PropTypes.string),
  // link: PropTypes.string,
  // email: PropTypes.string,
  // password: PropTypes.string,
  // badge: PropTypes.string,
};

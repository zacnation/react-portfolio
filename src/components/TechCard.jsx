export default function TechCard(props) {
  return (
    <div className="flex py-4 items-center flex-col mb-3 px-2 max-lg:border max-lg:rounded-md">
      <div className="flex items-center space-x-3 font-bold text-xl">
        {props.icon === "godot" ? (
          <img
            src={`${props.darkMode ? "godot-inverted.svg" : "godot.svg"}`}
            alt=""
            className="w-10"
          />
        ) : (
          <i className={`text-4xl ${props.icon}`}></i>
        )}
        <p className="max-lg:hidden">{props.title}</p>
      </div>
      <p className="pt-3 text-center lg:text-justify lg:px-20">
        {props.description}
      </p>
    </div>
  );
}

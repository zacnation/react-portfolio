export default function ResourceCard(props) {
  return (
    <div className="flex flex-col items-center justify-center py-4 px-1 text-center">
      <img src={props.imageSrc} className={`w-8 pb-3 md:w-8`}></img>
      <ul className="md:w-24 lg:w-40">
        {props.listItems.map((item, index) => {
          return (
            <li className="text-xs lg:text-sm" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function ResourceCard(props) {
  return (
    <div className="flex items-center justify-center py-4 px-1 text-center">
      <img src={props.imageSrc} className={`w-8`}></img>
      <ul>
        {props.listItems.map((item, index) => {
          return (
            <li className="text-xs lg:text-sm  md:ml-2 md:mr-6" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

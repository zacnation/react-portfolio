import { useState } from "react";

export default function InterestsSlide(props) {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <h2 className={`text-2xl font-bold text-center md:pt-0 lg:pb-1`}>
        {props.title}
      </h2>
      <img src={props.img} alt="" className="lg:hidden pt-8 md:px-40 pb-4" />
      <div className="px-12 space-x-10 md:p-0 md:flex md:items-center md:justify-center">
        <div>
          {/* <h2
            className={`text-3xl font-bold text-center max-lg:hidden md:pt-0 lg:pb-1`}
          >
            {props.title}
          </h2> */}
          <div className="flex flex-col justify-top md:ml-9">
            <p className="w-full md:w-96 overflow-y-auto h-min max-h-60 border rounded py-2 px-4">
              {showMore
                ? props.description + " "
                : props.description.slice(0, 150) + "... "}
            </p>
            <button
              className="font-bold pt-2"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
        <img
          src={props.img}
          alt=""
          style={{ width: "20%" }}
          className="max-lg:hidden py-8"
        />
      </div>
    </>
  );
}

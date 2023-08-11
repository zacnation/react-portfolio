import PropTypes from "prop-types";
import TechCard from "./TechCard";

export default function WhatNext(props) {
  return (
    <div
      className={`py-12 pl-2 pr-1 md:px-10 xl:px-60 2xl:px-96 ${
        props.darkMode ? "bg-dark-II text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-bold pb-2">What&apos;s next?</h2>
      <TechCard
        icon="devicon-chrome-plain"
        description="Ut ipsum mauris, mollis id ullamcorper tincidunt, luctus non lorem. Etiam sit amet efficitur ante, ut sagittis massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ac ligula purus."
      />
      <TechCard
        icon="devicon-firebase-plain"
        description="Suspendisse placerat, ligula sed consectetur maximus, purus risus euismod ipsum, volutpat dictum mi urna at nisi. Proin sed ultricies neque."
      />
      <TechCard
        icon="devicon-nextjs-original"
        description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque tempus mollis neque a elementum. Suspendisse rutrum eros tellus, at condimentum ex imperdiet sit amet. Maecenas varius eleifend orci eu rhoncus."
      />
      <TechCard
        icon="devicon-raspberrypi-line"
        description="Proin purus ligula, vulputate et erat quis, rhoncus congue risus. Aenean nisi sem, rhoncus in ex vel, semper efficitur enim. Nulla efficitur ex nec condimentum maximus. Nullam mattis odio vitae pharetra eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam sagittis velit eu luctus tincidunt."
      />
      <TechCard
        icon="devicon-rust-plain"
        description="Suspendisse fermentum quam quis mi ultricies aliquet. Aenean mattis, lorem at feugiat vehicula, felis magna maximus turpis, vel finibus."
      />
      <TechCard
        icon="devicon-threejs-original"
        description="Fusce venenatis orci elit, id maximus diam dictum sit amet. Phasellus pharetra, ipsum et mollis dignissim, odio felis sodales purus, non efficitur mauris turpis vel orci."
      />
      <TechCard
        icon="devicon-unity-original"
        description="Vestibulum eu arcu eget nulla ornare gravida. Integer auctor dui et augue gravida cursus. Sed vel volutpat nibh. Aenean auctor dapibus efficitur. Phasellus nec pretium sem. Curabitur sagittis sagittis convallis."
      />
    </div>
  );
}

WhatNext.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

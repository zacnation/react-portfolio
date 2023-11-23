import TechCard from "./TechCard";

export default function WhatNext({ darkMode }) {
  return (
    <div
      className={`transition-all duration-300 py-12 pl-2 pr-2 md:px-10 xl:px-60 2xl:px-96 ${
        darkMode ? "bg-dark-II text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-bold pb-2 text-center max-lg:pb-6 lg:text-3xl">
        What&apos;s next?
      </h2>
      <TechCard
        icon="devicon-nextjs-original"
        title="Next.js"
        description="Next.js is a React framework that I'd like to learn more about. I've been looking at building a blog with it, as well as a portfolio website. I think it would be interesting to see how a more opinionated approach to React development compares to the more flexible approach I've been using."
      />
      <TechCard
        icon="devicon-python-plain"
        title="Python 3"
        description="I've got some experience with Python, but I'd like to learn more about it. I'd like to learn more about Python's data science and machine learning capabilities, as well as its web development capabilities. I'd also like to learn more about Python's use in automation."
      />
      <TechCard
        icon="devicon-rust-plain"
        title="Rust"
        description="Rust interests me as I think it's a great language for learning about memory management and low-level programming. I'd like to learn more about it and build some projects with it."
      />
      <TechCard
        icon="devicon-raspberrypi-line"
        title="Raspberry Pi"
        description="I'd love to get into Raspberry Pi development. I've been looking at building a home automation system using a Raspberry Pi, as well as a a retro gaming console, and a Pi-Hole - a network-wide ad blocker."
      />
      <TechCard
        icon="devicon-unrealengine-original"
        title="2D game development"
        description="I'd like to study 2D game development more as a way to branch out to other areas of software development. I've always been interested in game development, but I've never had the time to learn it. I've been looking at Godot and Unreal Engine as possible options."
        darkMode={darkMode}
      />
    </div>
  );
}

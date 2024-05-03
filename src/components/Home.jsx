import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#232f0a]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-2xl sm:text-5xl font-bold text-[#ccd6f6]">
          HARSHA TAMMANA
        </h1>
        <h2 className="text-2xl sm:text-5xl font-bold text-[#8892b0]">
          Seasoned Java Full Stack Developer | AWS Specialist | Expert in
          Microservices Architecture & Agile Methodologies
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Experienced Java Developer with over 2 years of expertise in designing
          and developing web-based and enterprise applications across diverse
          domains. Proficient in employing Agile methodologies such as Scrum,
          XP, and Kanban, along with Waterfall model for software development
          life cycle (SDLC).
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            {" "}
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <Link to="work" smooth={true} duration={500}>
                  <HiArrowNarrowRight className="ml-3 " />
                </Link>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#232f0a] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a
              href="https://www.w3schools.com/html/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            </a>

            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a
              href="https://www.w3schools.com/w3css/defaulT.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            </a>
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a
              href="https://www.w3schools.com/js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            </a>
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a
              href="https://www.w3schools.com/react/default.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            </a>
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a
              href="https://www.w3schools.com/git/default.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            </a>
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a
              href="https://www.w3schools.com/nodejs/default.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            </a>
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a
              href="https://www.mongodb.com/lp/cloud/atlas/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general_prosp-brand_gic-null_amers-us_ps-all_desktop_eng_lead&utm_term=mongo%20database&utm_medium=cpc_paid_search&utm_ad=p&utm_ad_campaign_id=1718986498&adgroup=66929789906&cq_cmp=1718986498&gad_source=1&gclid=CjwKCAjwxLKxBhA7EiwAXO0R0BNdmB0_EquQqDsbmXaBNnrkbVtKUQFqlXmId0sULj-YAhmzxo157hoCgvIQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            </a>
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a
              href="https://www.geeksforgeeks.org/tailwind-css/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            </a>
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a
              href="https://firebase.google.com/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
            </a>
            <p className="my-4">FIREBASE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

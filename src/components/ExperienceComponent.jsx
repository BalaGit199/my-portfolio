import React from "react";
import blogin from "../asserts/images/blog-portfolio.jpg";
import html from "../asserts/images/html5.png";
import css from "../asserts/images/logo-css.png";
import javascript from "../asserts/images/javascript-logo.jpg";
import react from "../asserts/images/react-logo.png";
import mango from "../asserts/images/mangodb-logo.png";
import node from "../asserts/images/node-logo.png";
import angular from "../asserts/images/angular-icon.png";
import java from "../asserts/images/java-logo.png";
import tailwindcss from '../asserts/images/tailwindcss-logo.png'

const ExperienceComponent = () => {
  const experience = [
    {
      id: 1,
      text: "html",
      img: html,
      style: "shadow-orange-600",
    },
    {
      id: 2,
      text: "css",
      img: css,
      style: "shadow-blue-500",
    },
    {
      id: 3,
      text: "javascript",
      img: javascript,
      style: "shadow-yellow-600",
    },
    {
      id: 4,
      text: "react",
      img: react,
      style: "shadow-blue-600",
    },
    {
      id: 5,
      text: "node",
      img: node,
      style: "shadow-green-500",
    },
    {
      id: 6,
      text: "mango-db",
      img: mango,
      style: "shadow-green-800",
    },
    {
      id: 7,
      text: "angular",
      img: angular,
      style: "shadow-red-500",
    },
    {
      id: 8,
      text: "java",
      img: java,
      style: "shadow-yellow-800",
    },
    {
        id: 9,
        text: "tailwind css",
        img: tailwindcss,
        style: "shadow-sky-600",
      },
  ];
  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-t from-black to-gray-800 py-[5rem]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="w-100 text-center underline font-bold lg:text-4xl text-3xl py-2">
            Experience
          </p>
          <p className="lg:text-2xl text-xl text-center py-2">
            There are the technologes I've work with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:p-0">
          {experience.map((exp) => (
            <div className={`flex flex-col cursor-pointer justify-center items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${exp.style}`} key={exp.id}>
              <img src={exp.img} alt="" className="w-20 mx-auto" />
              <p className="mt-4 capitalize">{exp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;

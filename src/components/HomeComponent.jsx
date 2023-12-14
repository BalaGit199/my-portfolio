import React from "react";
import ProfileImage from "../asserts/images/portfolio-icon.jpg";
import { Link } from "react-scroll";
import Resume from "../asserts/pdf/BalajiResume-2024.pdf";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TypeAnimation } from 'react-type-animation';
const HomeComponent = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 py-[4rem]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full w-full px-4 md:flex-row">
        <div className="text-white h-[50%] flex flex-col justify-center h-full gap-3">
          <h2 className="text-3xl lg:text-5xl font-bold">
            <h1>Hello,</h1>
            <TypeAnimation
              sequence={[
                "I'm Balaji.",
                1000, 
                "I'm Frontend Developer.",
                1000,
                "I'm Web Developer.",
                1000,
              ]}
              wrapper="span"
              speed={20}
              cursor={false}
              style={{display: "inline-block",zIndex:2 }}
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
            labore recusandae enim sit corporis atque, qui ex est, minima
            suscipit! Iure doloribus consequuntur non.
          </p>
          <div>
            <a
              className="text-white w-fit px-6 py-3 my-2 flex cursor-pointer items-center 
            gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl"
              href={Resume}
              target="_blank"
              download={true}
            >
              Resume
              <BsFillPersonLinesFill />
            </a>
          </div>
        </div>

        <div className="h-auto">
          <img
            src={ProfileImage}
            alt="Profile Image"
            className="mx-auto p-5 lg:w-2/3 lg:p-0 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;

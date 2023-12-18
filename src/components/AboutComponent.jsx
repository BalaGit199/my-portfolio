import React from "react";
import { GoDotFill } from "react-icons/go";


const AboutComponent = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white lg:py-[5rem]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center w-[96%] lg:h-[80%] h-full">
        <div className="w-full py-8">
          <p className="text-center lg:text-4xl text-3xl font-bold underline ">
            About
          </p>
        </div>

        <p className="container mx-auto text-left px-4 lg:px-0">
          Front End Developer with one year of experience working with
          HTML/CSS,JavaScript,React to deliver exceptional customer experiences.
          Adept at contributing to a highly collaboration work
          environment,finding solutions,and determining customer satisfaction.
        </p>

        <br />
        <div className="container mx-auto text-left px-4 lg:px-0">
          <h1 className="text-left lg:text-4xl text-3xl font-bold underline">Front End Developer</h1>
          <span className="flex lg:flex-row gap-2 capitalize text-xl py-5 flex-col" ><span>madras security private limited </span><span className="text-[.8rem] text-gray-400">(november 2022 - augest 2023)</span></span>
          <div>
            
          </div>
          <div className="px-5 py-2">
             <div className="flex lg:items-center gap-2 text-[1.2rem] p-2 w-100">
                <span className="pt-1"><GoDotFill/></span>
                <p className="container mx-auto text-left w-100">Migrated a multi-page user experience into a single page app,improving customer engagement.</p>
             </div>
             <div className="flex lg:items-center gap-2 text-[1.2rem] p-2 w-100">
                <span className="pt-1"><GoDotFill /></span>
                <p className="container mx-auto text-left w-100">Architected product tours with React for a new feature that improved customer adoption.</p>
             </div>
             <div className="flex gap-2 text-[1.2rem] p-2 w-100">
                <span className="pt-1"><GoDotFill/></span>
                <p className="container mx-auto text-left w-100">Maintained,developed and designed the public website for all 5 states on a weekly basis with TeamSite.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;

import React from "react";
import admin from "../asserts/images/admin-panel-portfolio.jpg";
import blog from "../asserts/images/blog-portfolio.jpg";
import goshop from "../asserts/images/gro-shop.png";
import kanbamboard from "../asserts/images/kanbamboard-portfolio.jpg";
import salon from "../asserts/images/salon-portfolio.png";

const PortfolioComponent = () => {
  const portfolio = [
    {
      id: 1,
      src: blog,
    },
    {
      id: 2,
      src: admin,
    },
    {
      id: 3,
      src: goshop,
    },
    {
      id: 4,
      src: salon,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b z-20 from-black to-gray-800 w-full text-white py-[4rem]
    "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="lg:text-4xl text-3xl text-center font-bold underline py-2">
            Portfolio
          </p>
          <p className="lg:text-2xl text-xl text-center py-2">
            Chechout some of my work right here!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 md:px-4 sm:px-2">
          {portfolio.map((port) => (
            <div
              className="flex flex-col relative shadow-md shadow-gray-600 rounded-lg h-[300px]"
              key={port.id}
            >
              <div className="group relative h-[75%] bg-white">
                
                <img 
                  src={port.src}
                  alt="blog"
                  className="rounded-md h-full w-full cursor-pointer object-fill duration-200 group-hover:scale-105 bg-gradient-to-b from-black to-gray-700"
                />
                <div
                  style={{ bottom: "0px" }}
                  className="group-hover:hidden absolute w-[100%] h-[100%] cursor-pointer b-0 py-4 shadow-inner duration-200 z-30 bg-gradient-to-b from-transparent to-black border-0"
                >
                  <h1 className="flex w-[100%] h-[100%] items-end justify-center capitalize text-[1rem] font-semibold">
                    admin
                  </h1>
                </div>
              </div>

              <div className="flex items-center h-auto justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;

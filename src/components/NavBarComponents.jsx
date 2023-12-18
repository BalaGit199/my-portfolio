import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'


const NavBarComponents = () => {
  const [nav, setNav] = useState(false);
  const navLinks = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
        id: 5,
        link: "contact",
      },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white px-6 bg-black sticky top-0 z-50">
      <div>
        <h1 className="text-3xl font-bold">Portfolio</h1>
      </div>
      {!nav ? (
        <button
          className="ml-auto lg:hidden text-3xl cursor-pointer"
          onClick={() => setNav(!nav)}
        >
          <FaBars />
        </button>
      ) : (
        <button
          className="ml-auto text-4xl cursor-pointer z-30"
          onClick={() => setNav(!nav)}
        >
          <FaTimes />
        </button>
      )}

      <ul className="flex hidden lg:flex">
        {navLinks.map((links) => (
          <li
            className="px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-150"
            key={links.id}
          >
            <Link to={links.link} smooth duration={400}>{links.link}</Link>
          </li>
        ))}
      </ul>
       {
        nav && <ul style={{zIndex:10 }} className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
        {
            navLinks.map((link) => (
                <li className="px-4 text-3xl text-gray-400 cursor-pointer capitalize py-6 " key={link.id}>
                <Link to={link.link} smooth duration={800} onClick={() => setNav(!nav)}>{link.link}</Link>
                </li>
            ))
        }
     </ul>
       }
    </div>
  );
};

export default NavBarComponents;

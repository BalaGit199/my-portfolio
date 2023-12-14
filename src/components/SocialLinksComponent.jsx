import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'


const SocialLinksComponent = () => {

   const socialLinks = [
        {
            id:1,
            icon:FaLinkedin,
            text:'LinkedIn',
            link:''
        },
        {
            id:2,
            icon:FaGithub,
            text:'Github',
            link:''
        },
        {
            id:3,
            icon:HiOutlineMail,
            text:'Gmail',
            link:''
        }
    ]
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
         {
            socialLinks.map((social)=> (
                <li className="group flex items-center justify-between cursor-pointer px-4 w-40 ml-[-100px] h-12
                hover:ml-[-5px] hover:rounded-md duration-300 bg-gray-600
                " key={social.id}>
                  <a href={social.link} className="flex justify-between items-center group-hover:text-blue-500 w-full text-white text-xl ">
                    {social.text}
                    <social.icon size={30}/>
                  </a>
                  
                </li>
            ))
        }
      </ul>
    </div>
  );
};

export default SocialLinksComponent;

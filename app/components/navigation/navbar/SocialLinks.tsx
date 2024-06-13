import React from "react";

import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { ImLab } from "react-icons/im";

const SocialLinks = () => {
  return (
    <div className="flex mx-2">
      <a
        href="#"
        className="mx-2 w-10 h-10 flex relative overflow-hidden items-center justify-center rounded-full bg-white shadow-md bg-opacity-0 shadow-gray-200 group transition-all duration-500"
      >
        <SiGmail className="text-red-500 relative z-10 transition-all duration-300 group-hover:text-white" />
        <div className="absolute top-full left-0 w-full h-full rounded-full bg-red-500 z-0 transition-all duration-500 group-hover:top-0"></div>
      </a>
      <a
        href="https://github.com/parampatil/digitaltwin"
        className="mx-2 w-10 h-10 flex relative overflow-hidden items-center justify-center rounded-full bg-white shadow-md bg-opacity-0 shadow-gray-200 group transition-all duration-500"
      >
        <FaGithub className="text-white-900 relative z-10 transition-all duration-300 group-hover:text-white" />
        <div className="absolute top-full left-0 w-full h-full rounded-full bg-gray-900 z-0 transition-all duration-500 group-hover:top-0"></div>
      </a>
      <a
        href="https://www.buildingamind.com/"
        className="mx-2 w-10 h-10 flex relative overflow-hidden items-center justify-center rounded-full bg-white shadow-md bg-opacity-0 shadow-gray-200 group transition-all duration-500"
      >
        <ImLab className="text-blue-500 relative z-10 transition-all duration-300 group-hover:text-white" />
        <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
      </a>
    </div>
  );
};

export default SocialLinks;

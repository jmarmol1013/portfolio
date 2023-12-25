import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";

export const ScrollDown = () => {
  return (
    <Link
      activeClass="active"
      to={"about"}
      spy={true}
      smooth={true}
      duration={500}
    >
      <div className="hover:text-title absolute inset-x-0 bottom-0 mb-6 flex items-center justify-center text-gray-400 hover:cursor-pointer">
        <FaArrowDown size={16} />
        <span className="text-md pl-2">Scroll down</span>
      </div>
    </Link>
  );
};

import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const SocialNetworks = () => {
  return (
    <div className="flex">
      <Link href={"https://www.linkedin.com/in/juan-camilo-marmolejo/"} target="_blank">
        <div className="hover:bg-title hover:border-title rounded-lg border-2 px-4 py-2 hover:cursor-pointer">
          <FaLinkedin size={24} />
        </div>
      </Link>
      <Link href={"https://github.com/jmarmol1013"} target="_blank">
        <div className="hover:bg-title hover:border-title ml-5 rounded-lg border-2 px-4 py-2 hover:cursor-pointer">
          <FaGithub size={24} />
        </div>
      </Link>
    </div>
  );
};

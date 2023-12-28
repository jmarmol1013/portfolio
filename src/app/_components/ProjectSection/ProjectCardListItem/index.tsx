import React from "react";
import { Project } from "../Projects";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import Link from "next/link";
import { useTheme } from "next-themes";

interface ProjectCardListItempProps {
  project: Project;
}

export const ProjectCardListItem: React.FC<ProjectCardListItempProps> = ({
  project,
}) => {
  const { theme } = useTheme();
  return (
    <div className="w[80%] mx-10 mt-10 flex-row rounded-t-md text-left transition-all duration-300 ease-out hover:scale-110 hover:cursor-pointer md:w-[40%] lg:w-[20%]">
      <Image
        src={project.logo}
        width="400"
        height="1000"
        alt={project.title}
        className="rounded-t-lg object-cover"
      />
      <h3 className="text-title py-4 text-2xl">{project.title}</h3>
      <p>{project.description}</p>
      <div className="mt-2 flex flex-row items-center justify-end">
        {project.githubLink ? (
          <Link href={project.githubLink} target="_blank">
            <div
              className={`${
                theme == "light"
                  ? `border-gray-300 hover:bg-gray-300`
                  : `border-gray-500 hover:bg-gray-500`
              } mr-2 flex flex-row items-center rounded-lg border-2 px-4 py-2 hover:cursor-pointer`}
            >
              <FaGithub size={24} />
            </div>
          </Link>
        ) : null}
        {project.link ? (
          <Link href={project.link} target="_blank">
            <div
              className={`${
                theme == "light"
                  ? `border-gray-300 hover:bg-gray-300`
                  : `border-gray-500 hover:bg-gray-500`
              } ml-2 flex flex-row items-center rounded-lg border-2 px-4 py-2 hover:cursor-pointer`}
            >
              <IoIosLink size={24} />
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

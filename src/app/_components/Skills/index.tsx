import React from "react";
import { FaReact } from "react-icons/fa";
import { SkillsInfo, SkillsList } from "../SkillsList/indesx";
import { MdScience, MdSpeed } from "react-icons/md";

export const Skills = () => {
  const skills: SkillsInfo = [
    {
      Icon: FaReact,
      title: "Full stack Developer",
      description:
        "Specializing in building web applications using leading technologies such as React and Angular on the frontend, and Tailwind on the CSS, and Node.js, Spring Boot and Django on the backend, and SQL and NoSQL databases.",
    },
    {
      Icon: MdScience,
      title: "Machine Learning Engineer",
      description:
        "I leverage expertise in data cleaning, feature engineering, and diverse ML algorithms using Python and its libraries such as Scikit-learn, NumPy, and Pandas. Committed to optimizing models for meaningful insights.",
    },
    {
      Icon: MdSpeed,
      title: "Quality Assurance Developer",
      description:
        "I conduct thorough unit testing with frameworks like Jest and PyUnit, ensuring code integrity. My proficiency extends to automation testing using Playwright and Selenium frameworks, optimizing software quality through test automation.",
    },
  ];

  return (
    <div className="mb-2 mt-10 flex flex-col justify-center">
      <h2 className="text-title text-center text-4xl lg:text-5xl">My skills.</h2>
      <div className="mt-5 flex flex-col items-center justify-center lg:flex-row">
        <SkillsList skills={skills} />
      </div>
    </div>
  );
};

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
        "I build web applications using leading technologies such as React and Next.js on the frontend, Tailwind on the CSS, Node.js, Spring Boot, ASP. NET, Django on the backend, and SQL and NoSQL databases.",
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
    <div className="mt-10 flex flex-col justify-center">
      <h2 className="text-center text-4xl text-title lg:text-5xl">
        My skills.
      </h2>
      <div className="mt-5 flex flex-col items-center justify-center lg:flex-row">
        <SkillsList skills={skills} />
      </div>
    </div>
  );
};

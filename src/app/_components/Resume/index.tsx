import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { ResumeItems, ResumeList } from "../ResumeList";
import { MdOutlineWork } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";

export const Resume: React.FC<void> = () => {
  const resumeItems: ResumeItems = [
    {
      title: "I&IT Technology Analyst/ Developer (CO-OP)",
      subtitle: "Ministry Public and Business Service Delivery",
      description:
        "I am leading the creation of end-to-end automation tests for a project using the Playwright framework with TypeScript, ensuring comprehensive test coverage and robust software quality.",
      date: "Sep 2023 - Present",
      type: "work",
      Icon: MdOutlineWork,
    },
    {
      title: "Database Team Member",
      subtitle: "DEFEND",
      description:
        "I played a pivotal role in migrating the MySQL databases to Django models, architecting and implementing database schemas.",
      date: "Sep 2023 - Dec 2023",
      type: "work",
      Icon: MdOutlineWork,
    },
    {
      title: "Data Analyst (CO-OP)",
      subtitle: "1Tel Communication",
      description:
        "I spearheaded the cleansing and migration of data to Zoho CRM, simultaneously contributing to the development and optimization of the CRM platform.",
      date: "Jan 2023 - Apr 2023",
      type: "work",
      Icon: MdOutlineWork,
    },
    {
      title: "College Advanced Diploma",
      subtitle: "Centennial College",
      description:
        "As a Software Engineering Technology student, I am actively engaging in comprehensive learning experiences to build a solid foundation in software development.",
      date: "Jan 2022 - Dec 2024",
      type: "study",
      Icon: RiGraduationCapFill,
    },
  ];

  return (
    <div className="mt-10 flex flex-col justify-center" id="resume">
      <h2 className="text-title text-center text-4xl lg:text-5xl">Resume.</h2>
      <div className="flex justify-center">
        <div className="mt-5">
          <ResumeList resumeItems={resumeItems} />
        </div>
      </div>
    </div>
  );
};

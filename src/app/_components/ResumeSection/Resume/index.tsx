import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { ResumeItems, ResumeList } from "../ResumeList";
import { MdOutlineWork } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";

export const Resume: React.FC<{}> = () => {
  const resumeItems: ResumeItems = [
    {
      title: "Frontend Developer (CO-OP)",
      subtitle: "Ministry Public and Business Service Delivery",
      description:
        "Developing frontend components and pages using Next.js for efficient server-side rendering and seamless client-side navigation, enhancing overall user experience.",
      date: "Sep 2023 - Present",
      type: "work",
      Icon: MdOutlineWork,
    },
    {
      title: "Backend Developer",
      subtitle: "DEFEND",
      description:
        "Developed and implemented backend functionality using Django framework. Utilized Django ORM for seamless interaction with the database, enhancing development efficiency and maintainability.",
      date: "Sep 2023 - Dec 2023",
      type: "work",
      Icon: MdOutlineWork,
    },
    {
      title: "Software Developer (CO-OP)",
      subtitle: "1Tel Communication",
      description:
        "Developed and implemented a customized CRM system using the Zoho platform, reducing manual data entry by 30% and increasing operational efficiency by 25%. ",
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

import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { ResumeItems, ResumeList } from "../ResumeList";
import { MdOutlineWork } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";

export const Resume: React.FC<{}> = () => {
  const resumeItems: ResumeItems = [
    {
      title: "Full Stack Developer (CO-OP)",
      subtitle: "Ministry Public and Business Service Delivery",
      description:
        "Developing scalable full-stack solutions for a high-traffic application with over 1M users, using Next.js, Tailwind CSS, Spring Boot, and ASP.NET. Optimized data flow with Redux and MSSQL Server, enhancing user experience, engagement, and system performance.",
      date: "Sep 2023 - Present",
      type: "work",
      Icon: MdOutlineWork,
    },
    {
      title: "Backend Developer",
      subtitle: "DEFEND",
      description:
        "Developed and optimized backend systems using Python with Django and MySQL, improving query performance by 20%. Enhanced data management accuracy with a comprehensive CDM and streamlined database interactions with Django ORM.",
      date: "Sep 2023 - Dec 2023",
      type: "work",
      Icon: MdOutlineWork,
    },
    {
      title: "Software Developer (CO-OP)",
      subtitle: "1Tel Communication",
      description:
        "Designed and implemented a custom CRM on Zoho, automating workflows to boost efficiency by 25%. Enhanced data quality by 20% with Python pipelines and ensured seamless system integration with third-party APIs like Wave.",
      date: "Jan 2023 - Apr 2023",
      type: "work",
      Icon: MdOutlineWork,
    },
    {
      title: "College Advanced Diploma",
      subtitle: "Centennial College",
      description:
        "As a graduate in Software Engineering Technology, I have built a strong foundation in software development through hands-on projects and practical experience, specializing in creating innovative, high-quality solutions.",
      date: "Jan 2022 - Dec 2024",
      type: "study",
      Icon: RiGraduationCapFill,
    },
  ];

  return (
    <div className="mt-10 flex flex-col justify-center" id="resume">
      <h2 className="text-center text-4xl text-title lg:text-5xl">Resume.</h2>
      <div className="flex justify-center">
        <div className="mt-5">
          <ResumeList resumeItems={resumeItems} />
        </div>
      </div>
    </div>
  );
};

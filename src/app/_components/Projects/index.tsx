import React, { useState } from "react";
import { ProjectsSelectorList } from "../ProjectsSelectorList";
import { StaticImageData } from "next/image";
import { ProjectCardList } from "../ProjectCardList";
import listifyLogo from "../../../../public/Projects/ListifyLogo.jpg";
import arboledaLogo from "../../../../public/Projects/ArboledaLogo.png";
import cdaLogo from "../../../../public/Projects/CDALogo.jpg";
import collegeNetworkLogo from "../../../../public/Projects/CollegeNetworkLogo.jpg";
import crmLogo from "../../../../public/Projects/crmLogo.jpg";
import imsLogo from "../../../../public/Projects/IMSLogo.jpg";

export type ProjectType =
  | "All"
  | "Web Development"
  | "Data Analysis"
  | "Software Requirements";
export type ProjectsTypes = ProjectType[];
export type Project = {
  logo: StaticImageData;
  title: string;
  description: string;
  type: ProjectType;
  githubLink?: string;
  link?: string;
};
export type Projects = Project[];

export const Projects: React.FC<{}> = () => {
  const [projectSelectedType, setProjectSelected] =
    useState<ProjectType>("All");
  const projectsTypes: ProjectsTypes = [
    "All",
    "Web Development",
    "Data Analysis",
    "Software Requirements",
  ];

  const projects: Projects = [
    {
      logo: listifyLogo,
      title: "Listify Web App",
      description:
        "This application revolves around Firebase authentication, enabling each user to create, read, edit, delete their own notes categorized by type and category. The application is developed using Next.js, Express.js, Node.js, MongoDB, and Tailwind CSS.",
      type: "Web Development",
      link: "https://to-do-list-client.vercel.app/LogIn",
      githubLink: "https://github.com/jmarmol1013/ToDoList-Client",
    },
    {
      logo: arboledaLogo,
      title: "Arboleda Web App",
      description:
        "Developed and designed a landing page for a lumber yard company based in Colombia. Ensured the landing page was optimized for performance, loading speed, and search engine visibility.The application is developed using Next.js and Tailwind CSS.",
      type: "Web Development",
      link: "https://abroledas-web-page-bfd5uzlqk-jmarmol1013.vercel.app/",
    },
    {
        logo: imsLogo,
        title: "IMS Project",
        description:
          "Team project to create an inventory management system of a shoe store. Developed an ERM diagram, created tables, function, sequences, procedures, triggers, cursors using Oracle, and work with JavaFX and Java for the front-end.",
        type: "Data Analysis",
        link: "https://docs.google.com/document/d/1Ln2q_TX83XRQMc6O8tRdvDZruTTzkcdS/edit",
        githubLink: "https://github.com/jmarmol1013/ShoeStoreInventory",
    },
    {
      logo: cdaLogo,
      title: "Cryptocurrencies Analysis",
      description:
        "The project involves utilizing Python to gather, clean, analyze, and visualize data on the top 10 cryptocurrencies from Coinmarket API, saving it as a CSV file, sending it via email, and creating a visually appealing Power BI dashboard for comprehensive insights.",
      type: "Data Analysis",
      githubLink: "https://github.com/jmarmol1013/CryptocurrenciesAnalysis",
    },
    {
        logo: crmLogo,
        title: "1Tel Comunnication CRM",
        description:
          "Developed a CRM solution for 1Tel communication. Leveraging Zoho software, I successfully implemented a robust system that allows for efficient data visualization, seamless data import and export capabilities, and streamlined automation processes.",
        type: "Data Analysis",
    },
    {
      logo: collegeNetworkLogo,
      title: "College Network Project",
      description:
        "Team project to created the documentation for the app called College Network. We worked together to gather and define the requirements, crafted use cases, and developed all necessary diagrams, including class diagrams and design patterns.",
      type: "Software Requirements",
      link: "https://docs.google.com/document/d/1TT_5gCEUzpm32Y4YNbVpJVm8hdhOcFuj/edit?rtpof=true",
    },
  ];

  return (
    <div className="my-10  flex flex-col justify-center" id="projects">
      <h2 className="text-title text-center text-4xl lg:text-5xl">Projects.</h2>
      <ProjectsSelectorList
        projectSelectedType={projectSelectedType}
        setProjectSelectedType={setProjectSelected}
        projectsType={projectsTypes}
      />
      <ProjectCardList
        projectSelected={projectSelectedType}
        projects={projects}
      />
    </div>
  );
};

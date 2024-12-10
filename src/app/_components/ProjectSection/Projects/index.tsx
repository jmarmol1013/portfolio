import React, { useState } from "react";
import { ProjectsSelectorList } from "../ProjectsSelectorList";
import { StaticImageData } from "next/image";
import { ProjectCardList } from "../ProjectCardList";
import listifyLogo from "@/public/Projects/ListifyLogo.png";
import mealMastermindLogo from "@/public/Projects/MealmastermindLogo.png";
import chatbotLogo from "@/public/Projects/ChatbotLogo.png";
import StockyLogo from "@/public/Projects/StockyLogo.png";
import predictLogo from "@/public/Projects/PredictLogo.png";

export type ProjectType = "All" | "Web Development" | "Data Analysis";
export type ProjectsTypes = ProjectType[];
export type Project = {
  logo: StaticImageData;
  title: string;
  description: string;
  type: ProjectType;
  githubLink?: string[];
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
  ];

  const projects: Projects = [
    {
      logo: predictLogo,
      title: "Bicycle Theft Model Prediction",
      description:
        "Developed a bicycle theft prediction model using Python, Scikit-learn, and Flask, analyzing data with Pandas and NumPy to uncover trends and theft hotspots. Deployed machine learning models (Logistic Regression, Decision Tree, Random Forest) achieving 97.9% accuracy, with visual insights in Power BI.",
      type: "Data Analysis",
      githubLink: ["https://github.com/jmarmol1013/BicycleTheftsToronto"],
    },
    {
      logo: chatbotLogo,
      title: "Patient Care Hub",
      description:
        "Developed an AI-powered medical chatbot using Next.js, Flask, OpenAI, and Pinecone, enabling realistic interactions with diverse patient profiles through prompt engineering and RAG. Integrated advanced OpenAI models like Whisper and TTS for dynamic context retrieval and immersive medical training.",
      type: "Data Analysis",
      githubLink: [
        "https://github.com/jmarmol1013/VirtualClinicChatBot",
        "https://github.com/Sweet217/HACKATON-VIMTECH",
      ],
    },
    {
      logo: StockyLogo,
      title: "Stockify",
      description:
        "Created Stockify, a stock management app using Next.js, ASP .NET, and DynamoDB, allowing users to view, analyze, and manage stock data. Integrated features for adding, updating, and deleting stock entries, deployed on AWS ECS for scalability and reliability.",
      type: "Web Development",
      githubLink: [
        "https://github.com/jmarmol1013/StockApp",
        "https://github.com/jmarmol1013/StockAppAPI",
      ],
    },
    {
      logo: mealMastermindLogo,
      title: "MealMastermind Web App",
      description:
        "Developed a full-stack web application using Next.js and Tailwind CSS, allowing users to register/login and access meal information suggested by a our custom algorithm for weekly meal preparation.",
      type: "Web Development",
      link: "https://meal-mastermind.vercel.app",
      githubLink: [
        "https://github.com/jmarmol1013/Meal-Mastermind",
        "https://github.com/jmarmol1013/Meal-Mastermind-AIModel",
      ],
    },
    {
      logo: listifyLogo,
      title: "Listify Web App",
      description:
        "This application revolves around Firebase authentication, enabling each user to create, read, edit, delete their own notes categorized by type and category. The application is developed using Next.js, Express.js, Node.js, MongoDB, and Tailwind CSS.",
      type: "Web Development",
      link: "https://to-do-list-client.vercel.app/LogIn",
      githubLink: ["https://github.com/jmarmol1013/ToDoList-Client"],
    },
  ];

  return (
    <div className="mb-5 mt-10 flex flex-col justify-center" id="projects">
      <h2 className="text-center text-4xl text-title lg:text-5xl">Projects.</h2>
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

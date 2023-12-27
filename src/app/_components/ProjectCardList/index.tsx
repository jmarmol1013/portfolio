import React from "react";
import { Project, ProjectType, Projects } from "../Projects";
import { ProjectCardListItem } from "../ProjectCardListItem";

interface ProjectCardListProps {
  projects: Projects;
  projectSelected: ProjectType;
}

export const ProjectCardList: React.FC<ProjectCardListProps> = ({
  projects,
  projectSelected,
}) => {
  return (
    <div className="mt-4 flex flex-wrap justify-center">
      {projects.map((project: Project, index) => {
        if (projectSelected == "All") {
          return <ProjectCardListItem key={index} project={project} />;
        }

        if (project.type == projectSelected) {
          return <ProjectCardListItem key={index} project={project} />;
        }
      })}
    </div>
  );
};

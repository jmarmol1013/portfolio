import React from "react";
import { ProjectType, ProjectsTypes } from "../Projects";
import { ProjectsSelectorListItem } from "../ProjectsSelectorListItem";

interface ProjectSelectorListProps {
  projectSelectedType: ProjectType;
  setProjectSelectedType: React.Dispatch<React.SetStateAction<ProjectType>>;
  projectsType: ProjectsTypes;
}

export const ProjectsSelectorList: React.FC<ProjectSelectorListProps> = ({
  projectSelectedType,
  setProjectSelectedType,
  projectsType,
}) => {
  return (
    <div className="mx-[15%] mt-5 w-[70%] flex-wrap items-center justify-center rounded-3xl text-center lg:flex lg:flex-nowrap">
      {projectsType.map((projectType: ProjectType, index) => {
        return (
          <ProjectsSelectorListItem
            key={index}
            projectSelectedType={projectSelectedType}
            setProjectSelectedType={setProjectSelectedType}
            projectType={projectType}
          />
        );
      })}
    </div>
  );
};

import React from "react";
import { ProjectType } from "../Projects";

interface ProjectSelectorListItemProps {
  projectSelectedType: ProjectType;
  setProjectSelectedType: React.Dispatch<React.SetStateAction<ProjectType>>;
  projectType: ProjectType;
}

export const ProjectsSelectorListItem: React.FC<
  ProjectSelectorListItemProps
> = ({ projectSelectedType, setProjectSelectedType, projectType }) => {
  return (
    <p
      className={`w-full py-3 hover:cursor-pointer lg:w-1/4 
                    ${
                      projectSelectedType == projectType
                        ? `bg-title rounded-full px-2`
                        : ``
                    }`}
      onClick={() => setProjectSelectedType(projectType)}
    >
      {projectType}
    </p>
  );
};

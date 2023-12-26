import React from "react";
import { IconType } from "react-icons";
import { SkillsListItem } from "../SkillsListItem";

export type Skill = {
  Icon: IconType;
  title: string;
  description: string;
};

export type SkillsInfo = Skill[];

interface SkillsListProps {
  skills: SkillsInfo;
}

export const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  return skills.map((skill, index) => {
    return <SkillsListItem key={index} skill={skill} />;
  });
};

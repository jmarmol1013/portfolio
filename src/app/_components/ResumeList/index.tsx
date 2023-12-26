import { ResumeItem, ResumeListItem } from "@/app/ResumeListItem";
import { useTheme } from "next-themes";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";

export type ResumeItems = ResumeItem[];

interface ResumeItemsProps {
  resumeItems: ResumeItems;
}

export const ResumeList: React.FC<ResumeItemsProps> = ({ resumeItems }) => {
  const { theme } = useTheme();

  return (
    <VerticalTimeline lineColor={theme == "light" ? "black" : "white"}>
      {resumeItems.map((resumeItem: ResumeItem, index) => {
        return <ResumeListItem key={index} resumeItem={resumeItem} />;
      })}
    </VerticalTimeline>
  );
};

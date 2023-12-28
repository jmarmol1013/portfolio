import { useTheme } from "next-themes";
import React from "react";
import { IconType } from "react-icons";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

export type ResumeItem = {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  Icon: IconType;
  type: "work" | "study";
};

interface ResumeItemsProps {
  resumeItem: ResumeItem;
}

export const ResumeListItem: React.FC<ResumeItemsProps> = ({ resumeItem }) => {
  const { theme } = useTheme();

  return (
    <VerticalTimelineElement
      visible={true}
      position={resumeItem.type == "work" ? "right" : "left"}
      className="vertical-timeline-element--work"
      contentStyle={{
        background: theme == "light" ? "white" : "rgba(3, 7, 18)",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #2793F2" }}
      date={resumeItem.date}
      iconStyle={{
        background: theme == "dark" ? "#0D0D0D" : "rgba(243,244,246)",
        color: theme == "dark" ? "#fff" : "#0D0D0D",
      }}
      dateClassName="text-title"
      icon={<resumeItem.Icon />}
    >
      <h3 className="text-title text-xl">{resumeItem.title}</h3>
      <h4 className="text-lg">{resumeItem.subtitle}</h4>
      <p className='text-gray-500'>{resumeItem.description}</p>
    </VerticalTimelineElement>
  );
};

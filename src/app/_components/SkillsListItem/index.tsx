import { useTheme } from "next-themes";
import React from "react";

export const SkillsListItem: React.FC<any> = ({ skill }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "light" ? "hover:bg-gray-300" : "hover:bg-gray-500"
      } mob:p-4 mt-3 w-[90%] rounded-lg px-4 py-2 transition-all duration-300 ease-out hover:scale-105 hover:cursor-pointer lg:mx-2 lg:w-[30%]`}
    >
      <div
        className={`${
          theme === "light" ? "bg-gray-100" : "bg-gray-700"
        } max-w-[20%] rounded-full  p-2 lg:max-w-[17%]`}
      >
        <skill.Icon size={54} />
      </div>
      <h3 className="mt-2 p-2 text-2xl font-bold">{skill.title}</h3>
      <p className="p-2">{skill.description}</p>
    </div>
  );
};

"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const changeTheme: () => void = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className="lg:mt-2 lg:order-3 items-center rounded-lg px-4 py-2 transition delay-150 ease-in-out hover:cursor-pointer hover:bg-gray-500">
      {theme == "light" ? (
        <MdLightMode size={24} onClick={changeTheme} />
      ) : (
        <MdDarkMode size={24} onClick={changeTheme} />
      )}
    </div>
  );
};

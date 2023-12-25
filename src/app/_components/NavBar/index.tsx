import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../Button";
import { NavBarList } from "../NavBarList";

export const NavBar = () => {
  const [isExpanded, setExpanded] = useState<Boolean>(false);

  const closeNav: () => void = () => {
    setExpanded(false);
  };

  const items = [
    {
      title: "Home",
      link: "home",
    },
    {
      title: "About Me",
      link: "about",
    },
    {
      title: "Resume",
      link: "resume",
    },
    {
      title: "Projects",
      link: "projects",
    },
    {
      title: "Blog",
      link: "blog",
    },
    {
      title: "Contact",
      link: "contacts",
    },
  ];

  return (
    <div
      id="home"
      className="flex w-full flex-wrap items-center justify-between px-8"
    >
      <div>
        <span className="text-lg lg:text-2xl">Juan Marmolejo.</span>
      </div>
      <div className="flex-1"></div>
      <div className="order-3 flex justify-end text-end lg:hidden">
        <button
          className="hover:border-fourth my-6 justify-end rounded border px-3 py-2"
          onClick={() => setExpanded(!isExpanded)}
        >
          <RxHamburgerMenu className="h-4" />
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block text-left` : `hidden text-right`
        } order-4 w-full flex-grow text-2xl lg:order-2 lg:my-6 lg:flex lg:w-auto lg:items-center`}
      >
        <NavBarList items={items} closeNav={closeNav} />
      </div>
      <Button />
    </div>
  );
};

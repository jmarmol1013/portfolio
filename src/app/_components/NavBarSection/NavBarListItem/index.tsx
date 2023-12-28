import { useTheme } from "next-themes";
import React from "react";
import { Link } from "react-scroll";

type Props = {
  item: {
    title: string;
    link: string;
  };
  closeNav: () => void;
};

export const NavBarListItem: React.FC<Props> = ({ item, closeNav }) => {
  const { theme } = useTheme();
  return (
    <Link
      activeClass="active"
      to={item.link}
      spy={true}
      smooth={true}
      duration={500}
      className={`${theme == "light" ? "hover:bg-gray-300" : "hover:bg-gray-500"} hover:text-fourth mr-4 block px-4 py-2 text-2xl transition delay-150 ease-in-out hover:cursor-pointer  lg:my-0 lg:inline-block lg:rounded-lg`}
      onClick={closeNav}
    >
      <span className="text-base">{item.title}</span>
    </Link>
  );
};

import React from "react";
import { Link } from "react-scroll";

type Props = {
  item: {
    title: string;
    link: string;
  };
  closeNav: () => void;
};

export const NavBarListItem = (props: Props) => {
  return (
    <Link
      activeClass="active"
      to={props.item.link}
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-fourth mr-4 block px-4 py-2 text-2xl transition delay-150 ease-in-out hover:cursor-pointer hover:bg-gray-500 lg:my-0 lg:inline-block lg:rounded-lg"
      onClick={props.closeNav}
    >
      <span className="text-base">{props.item.title}</span>
    </Link>
  );
};

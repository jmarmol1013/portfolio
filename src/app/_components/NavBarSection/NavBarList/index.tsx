import React from "react";
import { NavBarListItem } from "../NavBarListItem";

type Props = {
  items: {
    title: string;
    link: string;
  }[];
  closeNav: () => void;
};

export const NavBarList: React.FC<Props> = ({ items, closeNav }) => {
  return (
    <div className="ml-4 flex-row items-center justify-start lg:flex lg:flex-grow lg:justify-end">
      <div className="divide-y-2 lg:divide-y-0">
        {items
          ? items.map((item, index) => (
              <NavBarListItem
                key={index}
                item={item}
                closeNav={closeNav}
              />
            ))
          : null}
      </div>
    </div>
  );
};

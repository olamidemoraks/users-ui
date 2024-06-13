import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About us",
    url: "/about",
  },
  {
    title: "Restaurants",
    url: "/restaurants",
  },
  {
    title: "Popular Foods",
    url: "/foods",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];
const NavItem = () => {
  return (
    <div>
      {navItems.map((item) => (
        <NavLink item={item} />
      ))}
    </div>
  );
};

export default NavItem;

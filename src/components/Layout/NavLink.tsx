"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ item }: { item: { url: string; title: string } }) => {
  const pathname = usePathname();
  return (
    <Link
      key={item.url}
      href={item.url}
      className={`px-5 text-[18px] font-Poppins font-[500] ${
        item.url === pathname
          ? "text-pink-600 font-semibold"
          : "text-neutral-300"
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;

import React from "react";
import NavItem from "./NavItem";
import PofileDropDown from "./PofileDropDown";

const Header = () => {
  return (
    <header className="w-full bg-black flex items-center justify-between">
      <div className=" w-[90%]  h-[80px] m-auto flex items-center justify-between">
        <p className="font-bold text-lg">
          <span className=" text-neutral-300">Nutri</span>-
          <span className=" text-pink-600">Delivoo</span>
        </p>
        <NavItem />
        <PofileDropDown />
      </div>
    </header>
  );
};

export default Header;

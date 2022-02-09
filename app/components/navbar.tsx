import React, { useState } from "react";
import { Link } from "remix";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import NavItem from "./navitem";
import NavList from "./navlist";
import Logo from "./braincog";
import OrderButton from "./orderbutton";

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="md:flex justify-between max-w-7xl mx-auto items-center sticky top-0 border-b-2 border-[#ffd553]">
      <div className="flex items-center">
        {/* logo goes here */}
        <a href="/" className="flex items-center py-6 px-3">
          {" "}
          {/* flex-shrink-0 */}
          <Logo />
          <span className="text-xl font-black tracking-tighter text-[#FFD553]">
            R⋅T⋅W⋅G
          </span>
        </a>
        {showNav ? (
          <HiOutlineMenuAlt3
            onClick={() => setShowNav(!showNav)}
            // onBlur={hide}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer text-red"
          />
        ) : (
          <HiOutlineMenuAlt2
            onClick={() => setShowNav(!showNav)}
            // onBlur={hide}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer text-[#FFD553]"
          />
        )}
      </div>
      <div
        className={
          (showNav ? "left-0" : "-left-full") +
          " fixed md:static md:hidden md:space-x-7 items-center md:bg-transparent bottom-0 top-16 w-11/12 md:w-auto space-y-5 md:space-y-0 p-12 transition-left ease-in-out duration-300"
        }
      ></div>
      {/* navbar list goes here */}
      <NavList />
      <button className="m-2 p-3 bg-base3 text-base03 font-bold border rounded">
        HIRE ME
      </button>
    </nav>
  );
}

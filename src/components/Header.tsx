"use client"; 

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { LuCircleUser } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi"; 
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="max-w-[1440px] h-[132px] flex flex-col items-center bg-[#FFFFFF] px-10 lg:w-full mx-auto">
      <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto flex justify-between items-center">
        <IoSearchOutline className="text-xl lg:block hidden" />
        <h1 className="text-[#22202E] text-2xl font-normal">Avion</h1>
        <div className="flex text-xl gap-3">
          <IoCartOutline />
          <LuCircleUser />
          <button onClick={toggleMenu} className="lg:hidden">
            {/* Hamburger icon for smaller screens */}
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Navbar Links for Small Screens */}
      <nav className={`lg:flex ${isMenuOpen ? "flex" : "hidden"} flex-col lg:flex-row w-full gap-x-8 lg:w-auto justify-between items-center h-1/2 text-[#726E8D]`}>
        <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Plant pots</Link>
        <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Ceramics</Link>
        <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Tables</Link>
        <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Chairs</Link>
        <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Crockery</Link>
        <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Tableware</Link>
        <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Cutlery</Link>
      </nav>
    </header>
  );
};

export default Header;

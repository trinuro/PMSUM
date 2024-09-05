"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import { MenuList } from "@/data";
import DropdownMenu from "./DropdownMenu";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { usePathname } from 'next/navigation'; 
import { IconContext } from "react-icons";

const patternImagePathWhite = "/icon/header_dayak_motif.png";
const patternImagePathGrey = "/icon/header_dayak_motif_grey.png";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isHomePage, setIsHomePage] = useState(false);
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
      setIsHomePage(pathname === "/");

      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    
  }, [pathname]); 

  const toggleDropdown = (title: string) => {
    setActiveMenu((prev) => (prev === title ? null : title));
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ease-in-out transform ${
        isHomePage
          ? isScroll
            ? "bg-white/40 backdrop-blur-md text-black" 
            : "bg-transparent text-white" 
          : isScroll
          ? "bg-white/90 text-black shadow-inner-bottom" 
          : "bg-black text-white" 
      }`}
    >
      <nav
        className="w-full flexBetween border-b-2 shadow-sm h-12 sm:h-16 md:h-20 px-5 md:px-10 lg:px-10 xl:px-10 xl:pr-20"
        style={{
          backgroundImage: isHomePage
          ? (isScroll ? `url(${patternImagePathWhite})` : 'none')
          : (isScroll ? `url(${patternImagePathGrey})` : `url(${patternImagePathWhite})`),
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
        }}
      >
        {/* Logo PMSUM */}
        <div>
          <Link href="/">
            <Image
              src={
                isScroll ? "/icon/logoPMSUM_black.png" : "/icon/logoPMSUM_white.png"
              }
              alt="pmsum logo"
              width={280}
              height={70}
              className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[280px] hover:scale-105 transition duration-200"
            />
          </Link>
        </div>

        {/* Tablet and Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex space-x-4">
            {MenuList.map((menu) => (
              <li key={menu.title} className="relative">
                <div
                  className={`w-full py-2 flex items-center cursor-pointer transition duration-200 z-20 border-b-2 border-white active:bg-zinc-300/60 ${
                    isScroll?
                    "hover:bg-zinc-200/50 focus:bg-zinc-200/50":
                    "hover:bg-zinc-100/60 focus:bg-zinc-100/60"
                  }`}
                  onClick={() => toggleDropdown(menu.title)}
                >
                  <Link
                    href={menu.path}
                    className={`menuIcon bold-20 hover:text-[#ce1126] p-4 ${
                      isScroll ? "text-black" : "text-white"
                    }`}
                  >
                    {menu.title}
                  </Link>
                  {menu.dropdownMenu && (
                    <span className="ml-2">
                      {activeMenu === menu.title ? (
                        <IconContext.Provider value={{ color: isScroll ? "#000000" : "#ffffff", className: "menuIcon" }}>
                          <IoChevronUp />
                      </IconContext.Provider>
                      ) : (
                        <IconContext.Provider value={{ color: isScroll ? "#000000" : "#ffffff", className: "menuIcon" }}>
                          <IoChevronDown />
                        </IconContext.Provider>
                      )}
                    </span>
                  )}
                </div>
                {/* Dropdown Menu for Tablet and Desktop */}
                {menu.dropdownMenu && activeMenu === menu.title && (
                  <div className="absolute top-full left-0 w-full">
                    <DropdownMenu
                      items={menu.dropdownMenuItems || []}
                      isOpen={activeMenu === menu.title}
                      onItemClick={() => setActiveMenu(null)}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile - Icon menu */}
        <div className="md:hidden">
          <HamburgerMenu isScroll={isScroll}/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

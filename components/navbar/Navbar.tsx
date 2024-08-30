"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import { MenuList } from "@/data";
import DropdownMenu from "./DropdownMenu";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const patternImagePath = "/icon/header_dayak_motif.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setActiveMenu((prev) => (prev === title ? null : title));
  };

  return (
    <header className="">
      <nav
        className="sticky top-0 z-50 text-white flexBetween border-b-2 shadow-sm h-12 sm:h-16 md:h-20 lg:h-22 px-5 md:px-10 lg:px-10 xl:px-10 xl:pr-20"
        aria-label="Global"
        style={{
          backgroundColor: 'black',
          backgroundImage: `url(${patternImagePath})`,
          backgroundRepeat: 'repeat-x', // Repeats the pattern horizontally
          backgroundSize: 'auto 100%', // Scales the pattern to fit the height of the header
        }}
      >
        {/* Logo PMSUM */}
        <div>
          <Link href="/">
            <Image
              src="/icon/logoPMSUM_white.png"
              alt="pmsum logo"
              width={280}
              height={70}
              className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[280px]"
            />
          </Link>
        </div>

        {/* Tablet and Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex space-x-4">
            {MenuList.map((menu) => (
              <li key={menu.title} className="relative">
                <div
                  className="w-full py-2 flex items-center cursor-pointer transition duration-200 hover:bg-zinc-100/60 focus:bg-zinc-100/60 active:bg-zinc-300/60 border-b-2 border-white z-20"
                  onClick={() => toggleDropdown(menu.title)}
                >
                  <Link
                    href={menu.path}
                    className="bold-20 text-white p-4 hover:text-[#ce1126]"
                  >
                    {menu.title}
                  </Link>
                  {menu.dropdownMenu && (
                    <span className="ml-2">
                      {activeMenu === menu.title ? <IoChevronUp /> : <IoChevronDown />}
                    </span>
                  )}
                </div>
                {/* Dropdown Menu for Tablet and Desktop */}
                {menu.dropdownMenu && activeMenu === menu.title && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-lg z-30">
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
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

"use client";

import { useState } from "react";
import { IoMenu, IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { MenuList } from "@/data";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

const HamburgerMenu = ({ isScroll }: { isScroll: boolean }) => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setActiveMenu((prev) => (prev === title ? null : title));
  };

  const handleHamburgerClick = () => {
    if (open) {
      setActiveMenu(null); // Close all dropdowns when the menu is closed
    }
    setOpen(!open);
  };

  return (
    <div>
      {/* Toggle Hamburger Icon Toggle */}
      {!open ? (
        <div
          className="flex items-center justify-center cursor-pointer menuIcon"
          onClick={handleHamburgerClick}
        >
          <IconContext.Provider value={{ color: isScroll ? "#000000" : "#ffffff" }}>
            <IoMenu className="w-8 h-8" />
          </IconContext.Provider>
        </div>
      ) : (
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={handleHamburgerClick}
        >
          <IconContext.Provider value={{ color: isScroll ? "#000000" : "#ffffff", className: "menuIcon" }}>
            <IoClose className="w-8 h-8" />
          </IconContext.Provider>
        </div>
      )}

      {/* Dropdown Menu */}
      {open && (
        <div className="bg-white text-black absolute left-0 top-[48px] sm:top-[64px] md:top-[80px] w-full h-[calc(100vh-48px)] flex flex-col items-start justify-start px-8 py-4 z-10">
          {MenuList.map((item:any) => (
            <div key={item.title} className="w-full">
              <div
                className="w-full py-4 flex items-center justify-between cursor-pointer transition duration-200 hover:bg-zinc-100/60 focus:bg-zinc-100/60 active:bg-zinc-300/60 border-b-2 border-black"
                onClick={() => toggleDropdown(item.title)}
              >
                <Link
                  className="group transition duration-200 text-black bold-20 hover:text-[#ce1126] flex-grow text-left"
                  href={item.path}
                  type="button"
                  onClick={() => {
                    if (!item.dropdownMenu) setOpen(false);
                  }}
                >
                  {item.title}
                  
                </Link>
                {item.dropdownMenu && (
                  <span className="ml-2 text-right">
                    {activeMenu === item.title ?  <IoChevronUp/>: <IoChevronDown/>
                    }
                  </span>
                )}
              </div>
              {/* Render the DropdownMenu items when active */}
              {item.dropdownMenu && (
                <DropdownMenu
                  items={item.dropdownMenuItems || []}
                  isOpen={activeMenu === item.title}
                  onItemClick={() => setOpen(false)}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
// // "use client";

// // import { useState } from "react";
// // import { IoMenu, IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";
// // import { IconContext } from "react-icons";
// // import { MenuList } from "@/constants";
// // import Link from "next/link";

// // const HamburgerMenu = () => {
// //   const [isHovered, setIsHovered] = useState(false);
// //   const [open, setOpen] = useState(false);
// //   const [activeMenu, setActiveMenu] = useState<string | null>(null);

// //   const toggleDropdown = (title: string) => {
// //     setActiveMenu(activeMenu === title ? null : title);
// //   };

// //   const handleMenuClick = (title: string) => {
// //     if (activeMenu === title) {
// //       setActiveMenu(null);
// //     } else {
// //       setActiveMenu(title);
// //     }
// //   };

// //   const handleHamburgerClick = () => {
// //     if (open) {
// //       setActiveMenu(null); // Close all dropdowns when the menu is closed
// //     }
// //     setOpen(!open);
// //   };

// //   return (
// //     <div>
// //       {!open ? (
// //         <div
// //           className="flex items-center justify-center cursor-pointer"
// //           onMouseEnter={() => setIsHovered(true)}
// //           onMouseLeave={() => setIsHovered(false)}
// //           onClick={handleHamburgerClick}
// //         >
// //           <IconContext.Provider value={{ color: isHovered ? "#ce1126" : "#000000", className: "menuIcon" }}>
// //             <IoMenu className="w-8 h-8" />
// //           </IconContext.Provider>
// //         </div>
// //       ) : (
// //         <div
// //           className="flex items-center justify-center cursor-pointer"
// //           onMouseEnter={() => setIsHovered(true)}
// //           onMouseLeave={() => setIsHovered(false)}
// //           onClick={handleHamburgerClick}
// //         >
// //           <IconContext.Provider value={{ color: isHovered ? "#ce1126" : "#000000", className: "menuIcon" }}>
// //             <IoClose className="w-8 h-8" />
// //           </IconContext.Provider>
// //         </div>
// //       )}

// //       {open && (
// //         <div className="data-twe-dropdown-ref text-black absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
// //           {MenuList.map((item) => (
// //             <div key={item.title} className="data-twe-dropdown-ref flex flex-col items-center">
// //               <div
// //                 className="flex items-center cursor-pointer"
// //                 onClick={() => handleMenuClick(item.title)}
// //               >
// //                 <Link 
// //                     className="transition duration-200 text-black hover:text-[#ce1126] hover:ease-in-out" 
// //                     href={item.path} 
// //                     type="button" 
// //                     data-twe-dropdown-toggle-ref
// //                     data-dropdown-toggle="dropdown"
// //                     data-twe-ripple-init
// //                     onClick={() => setOpen(false)}>
// //                   {item.title}
// //                 </Link>
// //                 {item.dropdownMenu && (
// //                   <span className="ml-2">
// //                     {activeMenu === item.title ? <IoChevronUp /> : <IoChevronDown />}
// //                   </span>
// //                 )}
// //               </div>
// //               {item.dropdownMenu && activeMenu === item.title && (
// //                 <ul id="dropdown"
// //                     className="relative left-9 z-[1000] min-w-max float-right list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding shadow-lg data-[twe-dropdown-show]:block"
// //                     data-twe-dropdown-menu-ref>
// //                     {item.dropdownMenuItems?.map((dropdownItem) => (

// //                         <li>
// //                             <Link
// //                                 className="group flex items-center regular-16 text-[#999999] w-full bg-white px-4 py-2 hover:bg-zinc-100/60 focus:bg-zinc-100/60 active:bg-zinc-300/60"
// //                                 href={dropdownItem.path}
// //                                 key={dropdownItem.title}
// //                                 data-twe-dropdown-item-ref
// //                                 onClick={() => setOpen(false)}
// //                                 >
// //                                     <span className="flex h-11 w-11 items-center justify-center mr-3">
// //                                         {dropdownItem.icon}
// //                                     </span>
// //                                     <span className="flex-auto">
// //                                         {dropdownItem.title}
// //                                     </span>
// //                             </Link>
// //                         </li>
// //                     ))}
// //                 </ul>
                
// //         //         <div className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
// //         //   aria-labelledby="dropdownMenuButton1"
// //         //   data-twe-dropdown-menu-ref>
// //         //         // className="mt-2 flex flex-col gap-4 text-black bg-gray-100">
// //         //           {item.dropdownMenuItems?.map((dropdownItem) => (
// //         //             <Link
// //         //               href={dropdownItem.path}
// //         //               key={dropdownItem.title}
// //         //               onClick={() => setOpen(false)}
// //         //             >
// //         //               {dropdownItem.icon}
// //         //               {dropdownItem.title}
// //         //             </Link>
// //         //           ))}
// //         //         </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default HamburgerMenu;

// "use client";

// import { useState } from "react";
// import { IoMenu, IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";
// import { IconContext } from "react-icons";
// import { MenuList } from "@/constants";
// import Link from "next/link";
// import DropdownMenu from "./DropdownMenu";

// const HamburgerMenu = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);

//   const toggleDropdown = (title: string) => {
//     setActiveMenu(activeMenu === title ? null : title);
//   };

//   const handleMenuClick = (title: string) => {
//     if (activeMenu === title) {
//       setActiveMenu(null);
//     } else {
//       setActiveMenu(title);
//     }
//   };

//   const handleHamburgerClick = () => {
//     if (open) {
//       setActiveMenu(null); // Close all dropdowns when the menu is closed
//     }
//     setOpen(!open);
//   };

//   return (
//     <div>
//       {!open ? (
//         <div
//           className="flex items-center justify-center cursor-pointer"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           onClick={handleHamburgerClick}
//         >
//           <IconContext.Provider value={{ color: isHovered ? "#ce1126" : "#000000", className: "menuIcon" }}>
//             <IoMenu className="w-8 h-8" />
//           </IconContext.Provider>
//         </div>
//       ) : (
//         <div
//           className="flex items-center justify-center cursor-pointer"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           onClick={handleHamburgerClick}
//         >
//           <IconContext.Provider value={{ color: isHovered ? "#ce1126" : "#000000", className: "menuIcon" }}>
//             <IoClose className="w-8 h-8" />
//           </IconContext.Provider>
//         </div>
//       )}

//       {open && (
//         <div className="data-twe-dropdown-ref text-black absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
//           {MenuList.map((item) => (
//             <div key={item.title} className="data-twe-dropdown-ref flex flex-col items-center">
//               <div
//                 className="flex items-center cursor-pointer"
//                 onClick={() => handleMenuClick(item.title)}
//               >
//                 <Link 
//                     className="group transition duration-200 text-black hover:text-[#ce1126] hover:ease-in-out" 
//                     href={item.path} 
//                     type="button" 
//                     data-twe-dropdown-toggle-ref
//                     data-dropdown-toggle="dropdown"
//                     data-twe-ripple-init
//                     onClick={() => setOpen(false)}>
//                   {item.title}
//                 </Link>
//                 {item.dropdownMenu && (
//                   <span className="ml-10">
//                     {activeMenu === item.title ? <IoChevronUp/> : <IoChevronDown />}
//                   </span>
//                 )}
//               </div>

//               <DropdownMenu
//                 items={item.dropdownMenuItems || []}
//                 isOpen={activeMenu === item.title}
//                 onItemClick={() => setOpen(false)}
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HamburgerMenu;

// "use client";

// import { useState } from "react";
// import { IoMenu, IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";
// import { IconContext } from "react-icons";
// import { MenuList } from "@/constants";
// import Link from "next/link";
// import DropdownMenu from "./DropdownMenu";

// const HamburgerMenu = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);

//   const toggleDropdown = (title: string) => {
//     setActiveMenu((prev) => (prev === title ? null : title));
//   };

//   const handleHamburgerClick = () => {
//     if (open) {
//       setActiveMenu(null); // Close all dropdowns when the menu is closed
//     }
//     setOpen(!open);
//   };

//   return (
//     <div>
//       {/* Hamburger Icon Toggle */}
//       {!open ? (
//         <div
//           className="flex items-center justify-center cursor-pointer"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           onClick={handleHamburgerClick}
//         >
//           <IconContext.Provider value={{ color: isHovered ? "#ce1126" : "#000000", className: "menuIcon" }}>
//             <IoMenu className="w-8 h-8" />
//           </IconContext.Provider>
//         </div>
//       ) : (
//         <div
//           className="flex items-center justify-center cursor-pointer"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           onClick={handleHamburgerClick}
//         >
//           <IconContext.Provider value={{ color: isHovered ? "#ce1126" : "#000000", className: "menuIcon" }}>
//             <IoClose className="w-8 h-8" />
//           </IconContext.Provider>
//         </div>
//       )}

//       {/* Dropdown Menu */}
//       {open && (
//         <div className="data-twe-dropdown-ref text-black absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
//           {MenuList.map((item) => (
//             <div key={item.title} className="data-twe-dropdown-ref flex flex-col items-center">
//               <div
//                 className="flex items-center cursor-pointer"
//                 onClick={() => toggleDropdown(item.title)}
//               >
//                 <Link
//                   className="group transition duration-200 text-black hover:text-[#ce1126] hover:ease-in-out"
//                   href={item.path}
//                   type="button"
//                   data-twe-dropdown-toggle-ref
//                   data-dropdown-toggle="dropdown"
//                   data-twe-ripple-init
//                   onClick={() => {
//                     if (!item.dropdownMenu) setOpen(false);
//                   }}
//                 >
//                   {item.title}
//                 </Link>
//                 {item.dropdownMenu && (
//                   <span className="ml-2">
//                     {activeMenu === item.title ? <IoChevronUp /> : <IoChevronDown />}
//                   </span>
//                 )}
//               </div>

//               {/* Render the DropdownMenu when active */}
//               {item.dropdownMenu && (
//                 <DropdownMenu
//                   items={item.dropdownMenuItems || []}
//                   isOpen={activeMenu === item.title}
//                   onItemClick={() => setOpen(false)}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HamburgerMenu;

"use client";

import { useState } from "react";
import { IoMenu, IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { MenuList } from "@/data.tsx";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

const HamburgerMenu = () => {
  const [isHovered, setIsHovered] = useState(false);
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
      {/* Hamburger Icon Toggle */}
      {!open ? (
        <div
          className="flex items-center justify-center cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleHamburgerClick}
        >
          <IconContext.Provider value={{ color: isHovered ? "#ce1126" : "#ffffff", className: "menuIcon" }}>
            <IoMenu className="w-8 h-8" />
          </IconContext.Provider>
        </div>
      ) : (
        <div
          className="flex items-center justify-center cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleHamburgerClick}
        >
          <IconContext.Provider value={{ color: isHovered ? "#ce1126" : "#ffffff", className: "menuIcon" }}>
            <IoClose className="w-8 h-8" />
          </IconContext.Provider>
        </div>
      )}

      {/* Dropdown Menu */}
      {open && (
        <div className="bg-white text-black absolute left-0 top-[50px] sm:top-[70px] w-full h-[calc(100vh-6rem)] flex flex-col items-start justify-start px-8 py-4 z-10">
          {MenuList.map((item) => (
            <div key={item.title} className="w-full">
              <div
                className="w-full py-4 flex items-center justify-between cursor-pointer transition duration-200 hover:bg-zinc-100/60 focus:bg-zinc-100/60 active:bg-zinc-300/60 border-b-2 border-black z-20"
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
                    {activeMenu === item.title ? <IoChevronUp /> : <IoChevronDown />}
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

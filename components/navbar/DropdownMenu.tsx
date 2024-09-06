import Link from "next/link";
import React, { useState } from "react";

interface DropdownMenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

interface DropdownMenuProps {
  items: DropdownMenuItem[];
  isOpen: boolean;
  onItemClick: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, isOpen, onItemClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return isOpen ? (
    <ul
      id="dropdown"
      className="mr-10 relative left-9 z-50 min-w-max float-right list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding shadow-lg"
      data-twe-dropdown-menu-ref
    >
      {items.map((dropdownItem, index) => (
        <li key={dropdownItem.title}>
          <Link
            className="flex items-center regular-16 text-[#999999] w-full bg-white px-4 py-2 transition duration-200 hover:bg-zinc-100/60 focus:bg-zinc-100/60 active:bg-zinc-300/60 focus:text-[#ce1126] active:text-[#ce1126] hover:text-[#ce1126]"
            href={dropdownItem.path}
            data-twe-dropdown-item-ref
            onClick={onItemClick}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="flex h-11 w-11 items-center justify-center mr-3">
              {dropdownItem.icon && (
                React.cloneElement(dropdownItem.icon as React.ReactElement<any>, { isHovered: hoveredIndex === index })
              )}
            </span>
            <span className="flex-auto">{dropdownItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  ) : null;
};

export default DropdownMenu;
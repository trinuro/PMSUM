"use client";

import Image from 'next/image';

const IconFestivalKenyalang = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <Image
      src={isHovered ? '/icon/icon_festival_kenyalang_red.svg' : '/icon/icon_festival_kenyalang_grey.svg'}
      alt="Festival Kenyalang"
      width={100}
      height={100}
      className="transition-opacity duration-300 ease-in-out"
    />
  );
};

export default IconFestivalKenyalang;

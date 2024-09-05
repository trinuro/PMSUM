"use client";

import Image from 'next/image';

const IconDiskusiBelanjawan = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <Image
      src={isHovered ? '/icon/icon_diskusi_belanjawan_red.svg' : '/icon/icon_diskusi_belanjawan_grey.svg'}
      alt="Logo"
      width={100}
      height={100}
      className="transition-opacity duration-300 ease-in-out"
    />
  );
};

export default IconDiskusiBelanjawan;

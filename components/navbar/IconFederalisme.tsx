"use client";

import Image from 'next/image';

const IconFederalisme = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <Image
      src={isHovered ? '/icon/icon_federalisme_di_Malaysia_red.svg' : '/icon/icon_federalisme_di_Malaysia_grey.svg'}
      alt="Federalisme"
      width={40}
      height={40}
      className="transition-opacity duration-300 ease-in-out"
    />
  );
};

export default IconFederalisme;

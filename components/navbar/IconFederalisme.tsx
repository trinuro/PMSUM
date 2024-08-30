// "use client"

// import { useState } from 'react';
// import Image from 'next/image';

// const IconFederalisme = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="flex items-center justify-center cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Image
//         src={isHovered ? '/icon/icon_federalisme_di_Malaysia_red.svg' : '/icon/icon_federalisme_di_Malaysia_grey.svg'}
//         alt="Logo"
//         width={100} 
//         height={100}
//         className="transition-opacity duration-300 ease-in-out"
//       />
//     </div>
//   );
// };

// export default IconFederalisme;

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

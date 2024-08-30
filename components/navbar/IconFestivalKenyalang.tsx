// "use client"

// import { useState } from 'react';
// import Image from 'next/image';

// const IconFestivalKenyalang = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="flex items-center justify-center cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Image
//         src={isHovered ? '/icon/icon_festival_kenyalang_red.svg' : '/icon/icon_festival_kenyalang_grey.svg'}
//         alt="Logo"
//         width={100} 
//         height={100}
//         className="transition-opacity duration-300 ease-in-out"
//       />
//     </div>
//   );
// };

// export default IconFestivalKenyalang;

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

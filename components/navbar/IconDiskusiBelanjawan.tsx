// "use client"

// import { useState } from 'react';
// import Image from 'next/image';

// const IconDiskusiBelanjawan = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="flex items-center justify-center cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Image
//         src={isHovered ? '/icon/icon_diskusi_belanjawan_red.svg' : '/icon/icon_diskusi_belanjawan_grey.svg'}
//         alt="Logo"
//         width={100} 
//         height={100}
//         className="transition-opacity duration-300 ease-in-out"
//       />
//     </div>
//   );
// };

// export default IconDiskusiBelanjawan;

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

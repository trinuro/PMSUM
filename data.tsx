import IconDiskusiBelanjawan from '@/components/navbar/IconDiskusiBelanjawan';
import IconFederalisme from '@/components/navbar/IconFederalisme';
import IconFestivalKenyalang from '@/components/navbar/IconFestivalKenyalang';
import React from 'react';

// Navbar dropdown menu info
type Activity = {
    title: string;
    path:string;
    icon?: React.ReactNode;
  };

  type Activities = Activity[];
  
  export const ActivityList: Activities = [
    {
      title: "Diskusi Belanjawan Sarawak",
      path:"#",
      icon: <IconDiskusiBelanjawan />,
    },
    {
      title: "Festival Kenyalang",
      path:"#",
      icon: <IconFestivalKenyalang />,
    },
    {
      title: "Federalisme di Malaysia",
      path:"#",
      icon: <IconFederalisme />,
    }
  ];  
  
// Menu info
  type Menu = {
    title: string;
    path: string;
    dropdownMenu?:boolean;
    dropdownMenuItems?:Activities;
  }

  type Menus = Menu[];

  export const MenuList: Menus = [
    {
      title: "Home",
      path:"#",
    },
    {
      title: "Activity",
      path:"#",
      dropdownMenu:true,
      dropdownMenuItems: ActivityList,
    },
    {
      title: "Who We Are",
      path:"#",
    },
  ]

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
      path:"/activities/2024/dbs2024",
      icon: <IconDiskusiBelanjawan />,
    },
    {
      title: "Pesta Kenyalang",
      path:"/activities/2024/pestakenyalang2024",
      icon: <IconFestivalKenyalang />,
    },
    {
      title: "Federalisme di Malaysia",
      path:"/activities/2024/federalisme2024",
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
      path:"/",
    },
    {
      title: "Activity",
      path:"/activities",
      dropdownMenu:true,
      dropdownMenuItems: ActivityList,
    },
    {
      title: "Who We Are",
      path:"#",
    },
  ]

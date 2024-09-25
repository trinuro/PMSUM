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
      path:"/activities/details?code=act1",
      icon: <IconDiskusiBelanjawan isHovered={false}/>,
    },
    {
      title: "Pesta Kenyalang",
      path:"/activities/details?code=act2",
      icon: <IconFestivalKenyalang isHovered={false}/>,
    },
    {
      title: "Federalisme di Malaysia",
      path:"/activities/details?code=act3",
      icon: <IconFederalisme isHovered={false}/>,
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
      path:"/team",
    },
  ]
// ActivityHighlight
  type ActivityHighlight ={
    icon : React.ReactNode,
    name : string,
    highlighted_picture : string,
    date : string,
    main_page_link : string,
    description : string,
    colour : string,
    colour_hex : string,
};

type ActivityHighlights = ActivityHighlight[];

  export const ACTIVITY_HIGHLIGHTS : ActivityHighlights = [
    {
        icon : <IconDiskusiBelanjawan isHovered={false} />,
        name : 'Diskusi Belanjawan Sarawak',
        highlighted_picture : '/image/townhall_bersama_premier.jpg',
        date : '18 May 2024',
        main_page_link : '/activities/details?code=act1',
        description : 'Diskusi Belanjawan Sarawak was an event that was held in PAUM Clubhouse, Universitity Malaya. Many clubs and societies of Sarawak from different universities gathered to discuss the financial and status quo of the state. This event aimed to increase their awareness and understanding about the financial structure of Sarawak through discussion and talks among the representatives and invited VVIP from Sarawak.',
        colour : 'red-dark',
        colour_hex : '#CE1126',
     },
     {
      icon : <IconFestivalKenyalang isHovered={false}/>,
      name : 'Festival Kenyalang',
      highlighted_picture : '/image/Festival_Kenyalang_2024.jpg',
      date : '18 May 2024',
      main_page_link : '/activities/details?code=act2',
      description : 'Festival Kenyalang is an event that focuses on diversity and cultures in Sarawak. The event holds many competitions that encourage students to participate and learn more about the beauty of the state. Other than focusing on the different languages spoken among Sarawakians from different ethnicities, this event also promotes their many traditional clothes, art and performance including dances and more.',
      colour : 'yellow-dark',
      colour_hex : '#FFCA11',
   },
] 
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
      path:"/team",
    },
  ]

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
        icon : <IconDiskusiBelanjawan />,
        name : 'Diskusi Belanjawan Sarawak',
        highlighted_picture : '/image/townhall_bersama_premier.jpg',
        date : '18 May 2024',
        main_page_link : '/activities/2024/dbs2024',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin enim magna, maximus vel magna vitae, facilisis volutpat felis. Vivamus ornare libero auctor augue facilisis vulputate. Nulla ut aliquet velit, aliquam porta erat. Mauris egestas orci id neque imperdiet elementum. Donec porta nunc magna. Nunc quis felis in nibh auctor vestibulum id vitae mauris.',
        colour : 'red-dark',
        colour_hex : '#CE1126',
     },
     {
      icon : <IconFestivalKenyalang/>,
      name : 'Festival Kenyalang',
      highlighted_picture : '/image/townhall_bersama_premier.jpg',
      date : '18 May 2024',
      main_page_link : '/activities/2024/dbs2024',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin enim magna, maximus vel magna vitae, facilisis volutpat felis. Vivamus ornare libero auctor augue facilisis vulputate. Nulla ut aliquet velit, aliquam porta erat. Mauris egestas orci id neque imperdiet elementum. Donec porta nunc magna. Nunc quis felis in nibh auctor vestibulum id vitae mauris.',
      colour : 'yellow-dark',
      colour_hex : '#FFCA11',
   },
   {
    icon : <IconFederalisme />,
    name : 'Federalisme: Kesatuan Dalam Kepelbagaian',
    highlighted_picture : '/image/townhall_bersama_premier.jpg',
    date : '18 May 2024',
    main_page_link : '/activities/2024/dbs2024',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin enim magna, maximus vel magna vitae, facilisis volutpat felis. Vivamus ornare libero auctor augue facilisis vulputate. Nulla ut aliquet velit, aliquam porta erat. Mauris egestas orci id neque imperdiet elementum. Donec porta nunc magna. Nunc quis felis in nibh auctor vestibulum id vitae mauris.',
    colour : 'federalisme',
    colour_hex : '#F6786A',
 },
//    {
//     icon : '/icons/DUN2.png',
//     icon_alt_name : 'An icon of DUN',
//     name : 'Diskusi Belanjawan Sarawak',
//     highlighted_picture : '/image/townhall_bersama_premier.jpg',
//     date : '18 May 2024',
//     main_page_link : '/activities/2024/dbs2024',
//     description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin enim magna, maximus vel magna vitae, facilisis volutpat felis. Vivamus ornare libero auctor augue facilisis vulputate. Nulla ut aliquet velit, aliquam porta erat. Mauris egestas orci id neque imperdiet elementum. Donec porta nunc magna. Nunc quis felis in nibh auctor vestibulum id vitae mauris.',
//     colour : 'federalisme'
//  },
] 
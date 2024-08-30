type Department = {
    id: number;
    title: string;
    description: string;
    imgSrc?: string;
  };
  
  type Departments = Department[];
  
  export const departmentList: Departments = [
    {
      id: 1,
      title: "Academic and Intellectual",
      description: "Lorem ipsum dolor sit amet consectetur. Orci porttitor imperdiet enim odio amet.",
      imgSrc: "/image/team/Akademik&Intelektual.png",
    },
    {
      id: 2,
      title: "Funding, Welfare and External Relations",
      description: "Lorem ipsum dolor sit amet consectetur. Orci porttitor imperdiet enim odio amet.",
      imgSrc: "/image/team/Dana,Kebajikan&PerhubunganLuar.png",
    },
    {
      id: 3,
      title: "Media and Publicity",
      description: "Lorem ipsum dolor sit amet consectetur. Orci porttitor imperdiet enim odio amet.",
      imgSrc: "/image/team/Media&Publisiti.png",
    },
    {
      id: 4,
      title: "Sports and Recreation",
      description: "Lorem ipsum dolor sit amet consectetur. Orci porttitor imperdiet enim odio amet.",
      imgSrc: "/image/team/Sukan&Rekreasi.png",
    },
    {
      id: 5,
      title: "Arts and Culture",
      description: "Lorem ipsum dolor sit amet consectetur. Orci porttitor imperdiet enim odio amet.",
      imgSrc: "/image/team/Kesenian&Kebudayaan.png",
    },
  ];  

type BioAutography = {
  id: number;
  imgSrc: string;
  name: string;
  position: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  autobiography: string;
}

type BioAutographies = BioAutography[];

export const BioAutographyList: BioAutographies = [
  {
    id: 1,
    imgSrc: "/image/team/YDP_profile_pic_white.png",
    name: "Mohamed Hyypia bin Rosmaini",
    position: "President",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
    autobiography: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"
  },
  {
    id: 2,
    imgSrc: "/image/team/P.YDP_profile_pic_white.png",
    name: "Mike Aryan Usa",
    position: "Vice President",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
    autobiography: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"
  },
  {
    id: 3,
    imgSrc: "/image/team/T.P.YDP_profile_pic_white.png",
    name: "Praveen Kaur A/P Jit Singh",
    position: "Deputy Vice President",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
    autobiography: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"
  },
  {
    id: 4,
    imgSrc: "/image/team/SU_profile_pic_white.png",
    name: "Slavinna Ann Ak Johnny",
    position: "Secretary",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
    autobiography: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"
  },
  {
    id: 5,
    imgSrc: "/image/team/P.SU_profile_pic_white.png",
    name: "Nurul Elleyssa Wong",
    position: "Assistant Secretary",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
    autobiography: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"
  },
  {
    id: 6,
    imgSrc: "/image/team/Bendahari_profile_pic_white.png",
    name: "Erricson Petrus Ramping",
    position: "Treasurer",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
    autobiography: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"
  },
  {
    id: 7,
    imgSrc: "/image/team/P.Bendahari_profile_pic_white.png",
    name: "Nurul Qurratu' Aini",
    position: "Assistant Treasurer",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
    autobiography: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"
  }
]
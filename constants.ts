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
      description: "Organizes educational events, workshops, and discussions to enhance members’ knowledge and skills.",
      imgSrc: "/image/team/Akademik&Intelektual.png",
    },
    { 
      id: 2,
      title: "Sponsorship, Welfare and Relations",
      description: "Secures funding, manages partnerships, and ensures the well-being of club members and participants.",
      imgSrc: "/image/team/Dana,Kebajikan&PerhubunganLuar.png",
    },
    {
      id: 3,
      title: "Media and Publicity",
      description: "Handles the promotion of the club’s activities through social media, newsletters, and other communication channels.",
      imgSrc: "/image/team/Media&Publisiti.png",
    },
    {
      id: 4,
      title: "Sports and Recreation",
      description: "Plans and coordinates sports activities and recreational events to promote physical fitness and team spirit.",
      imgSrc: "/image/team/Sukan&Rekreasi.png",
    },
    {
      id: 5,
      title: "Art and Culture",
      description: "Organizes cultural events, art exhibitions, and performances to celebrate and showcase diverse artistic talents.",
      imgSrc: "/image/team/Kesenian&Kebudayaan.png",
    },
  ];  

type BioAutography = {
  id: number;
  imgSrc: string;
  name: string;
  position: string;
  facebook?: string;
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
    // facebook:"#",
    // twitter: "#",
    // instagram: "#",
    // linkedin: "#",
    autobiography: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"
  },
  {
    id: 2,
    imgSrc: "/image/team/P.YDP_profile_pic_white.png",
    name: "Mike Aryan Usa",
    position: "Vice President",
    // facebook:"#",
    instagram: "https://www.instagram.com/mmikeohmm?igsh=MXVrYm94NHB0b2V6eA%3D%3D&utm_source=qr",
    twitter: "https://x.com/mikearyan28/status/1635126129496563714?s=46&t=KK876OyBean8zVewoHDWYg",
    linkedin: "https://www.linkedin.com/in/mike-aryan-808b30232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    autobiography: "My name is Mike Aryan, and I am from Baram, Sarawak. Currently, I am a final-year student pursuing a degree in Arts History with a minor in Social Administration and Justice. Since my second year, I have been actively involved with Persatuan Mahasiswa Sarawak Universiti Malaya (PMSUM), where I now serve as Vice President. I am also a dedicated dancer for Tandak Sri Pegari, embracing and promoting my cultural heritage. My university experience includes participating in programs such as Kongres Mahasiswa and Parlimen Mahasiswa at University Malaya, as well as serving as a Pemudahcara Mahasiswa during UM WOW 2023/2024. In addition, I hold the role of Secretariat for the General Secretary of the University of Malaya Students' Union (UMSU), which has greatly contributed to my leadership and organizational development."
  },
  {
    id: 3,
    imgSrc: "/image/team/T.P.YDP_profile_pic_white.png",
    name: "Praveen Kaur A/P Jit Singh",
    position: "Deputy Vice President",
    // facebook:"#",
    instagram: "https://www.instagram.com/veennnnnn25___/?utm_source=ig_web_button_share_sheet",
    // twitter: "#",
    linkedin: "https://www.linkedin.com/in/praveen-kaur-a47714194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    autobiography: "I’m Praveen Kaur, a 24-year-old from Kuching, Sarawak, currently in my final year pursuing a degree in Early Childhood Education. I’ve been involved with PMSUM since 2021 during my first year, taking on roles such as AJK for the Academic and Intellectual Bureau and Head of Protocol for Festival Kenyalang in 2023. Right now, I’m the Deputy Vice President for PMSUM. Beyond campus, I’ve been actively involved in Lan Berambeh Anak Sarawak since 2022 and serve as an Exco of Multimedia for Sarawak Volunteers this year, contributing my skills in digital communication and outreach. I’m known for my happy-go-lucky attitude, always bringing positive energy to everything I do. With a passion for education and community service, I’m committed to making a meaningful impact through both my academic journey and extracurricular efforts. Ooooha!"
  },
  {
    id: 4,
    imgSrc: "/image/team/SU_profile_pic_white.png",
    name: "Slavinna Ann Ak Johnny",
    position: "Secretary",
    facebook:"https://www.facebook.com/ann.slavinna?mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/sla.vinna_?igsh=bGEzcWx4eXh3amsz",
    // twitter: "#",
    // linkedin: "#",
    autobiography: "I am Slavinna, people call me Vinna. I'm a 4th year student in Biotechnology. Been active in PMSUM since 2022 as both exco and participant. My friends know me as a cheerful, energetic and spontaneous person. I am someone who love joining projects for fun and experiences. Currently an active dancer of Tandak Sri Pegari, a traditional Sarawak dance group. My favourite project so far is Malam Bumi Kenyalang at USM as we represent UM for traditional dance."
  },
  {
    id: 5,
    imgSrc: "/image/team/P.SU_profile_pic_white.png",
    name: "Nurul Elleyssa Wong",
    position: "Assistant Secretary",
    // facebook:"#",
    // instagram: "#",
    // twitter: "#",
    // linkedin: "#",
    autobiography: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"
  },
  {
    id: 6,
    imgSrc: "/image/team/Bendahari_profile_pic_white.png",
    name: "Erricson Petrus Ramping",
    position: "Treasurer",
    // facebook:"#",
    // instagram: "#",
    // twitter: "#",
    // linkedin: "#",
    autobiography: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"
  },
  {
    id: 7,
    imgSrc: "/image/team/P.Bendahari_profile_pic_white.png",
    name: "Nurul Qurratu' Aini",
    position: "Assistant Treasurer",
    // facebook:"#",
    instagram: "https://www.instagram.com/ninoisreading?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    // twitter: "#",
    // linkedin: "#",
    autobiography: "Born and raised in Kuching, Sarawak, my dream is to own a secondhand bookstore in Kuching, with my mom's pastries, and a reading corner for the kids. Career wise, I wish to be a scholar, and a human activist, being the bridge between the minorities and the authorities. Being in PMSUM is one step toward everything that I want to achieve, and will forever be grateful for the experience I gained throughout my journey with PMSUM."
  }
]

export const OBJECTIVES = [
    {
      title: 'To Foster Unity and Friendship',
      elaboration: 'To cultivate a strong sense of unity, belonging, and mutual support among Sarawakian students through various social, cultural, and academic activities.',
    },
    {
      title: 'To Promote Sarawakian Culture',
      elaboration: 'To preserve and celebrate the unique cultural heritage of Sarawak by organizing events, exhibitions, and collaborations that showcase the state\'s traditions, customs, and languages. ',
    },
    {
        title: 'To Provide Student Support and Welfare',
        elaboration: 'To offer comprehensive support in areas such as academics, emotional well-being, and social integration, ensuring the holistic development and success of Sarawakian students at Universiti Malaya.',
    },
    {
      title: 'To Strengthen Ties with Sarawak',
      elaboration: 'To maintain strong connections with Sarawak’s state authorities, educational bodies, and local communities, creating networking and professional opportunities for students.',
    },
    {
      title: 'To Encourage Leadership and Personal Growth',
      elaboration: 'To nurture leadership skills and encourage personal development among members by providing platforms for active participation in events, leadership roles, and community service initiatives',
    },
]

export const OBJECTIVES_TEXT = 'Persatuan Mahasiswa Sarawak is an association of students from Sarawak in Universiti Malaya.'

export const LEARN_MORE_SECTION = [
    {
        name : 'Main Page',
        link : '/'
    },
    {
        name : 'Our Activities',
        link : '/activities'
    },
    {
        name : 'Current Team',
        link : '/team'
    },
    {
        name : 'Website Special Acknowledgements',
        link : '/acknowledgements'
    },
]
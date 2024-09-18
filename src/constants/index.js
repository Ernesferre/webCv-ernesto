import {
  javascript,
  typescript,
  html,
  css,
  next,
  reactjs,
  redux,
  tailwind,
  git,
  globant,
  coderhouse,
  sass,
  tiendaMusikal,
  laComanda,
  gestionProyecto,
  laCafeteria,
  aenimaViajes,
  countryMap,
  webDevelopment,
  FranciscoImanolSuarez,
  nicolasPasserino,
  melinaGarciaCebenko,
  nicolasSiandro,
  jaimeCruz,
  nicolasKaen
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: webDevelopment,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "React Tutor",
    icon: reactjs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "British Airways",
    industry: "Aviation",
    icon: globant,
    iconBg: "#E6DEDD",
    date: "January 2024 - Current",
    points: [
      "Developing user interfaces using Reactjs, Redux, GraphQL, Jest, and collaborating with the UX team to ensure adherence to Figma designs.",
      "Participating in daily meetings with the team to ensure project progress and efficient communication.",
      "Planning and executing project development using Jira.",
      "Utilizing Git and Github for version control and collaboration with other developers on the team.",
      "Participating in code reviews and retrospectives to improve project efficiency and code quality.",
      "Presenting code progress and product demos to clients, incorporating their feedback to improve product functionality.",
    ],
    techUsed: ["Next Js", "TypeScript", "Api Rest", "Context", "Jest", "React-Testing-Library"]

  },
  {
    title: "Front End Developer",
    company_name: "The Walt Disney Company",
    icon: globant,
    iconBg: "#E6DEDD",
    date: "December 2021 - January 2024",
    points: [
      "Building the UI of Content Platform Planning Tool for Disney Entertainment",
      "Developing our own customized component library in order not to rely on any external libraries that could impact the original design",
    ],
    techUsed: ["React Js", "TypeScript", "React Router", "Redux", "Axios", "AG-grid", "Jest", "React-Testing-Library"]
  },
  {
    title: "Web Developer",
    company_name: "Coderhouse",
    icon: coderhouse,
    iconBg: "#E6DEDD",
    date: "February 2021 - Dec 2021",
    points: [
    "Contributing to the company Coderhouse's in creating and maintaining new applications for local businesses"
    ],
    techUsed: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "React Tutor",
    company_name: "Coderhouse",
    icon: coderhouse,
    iconBg: "#E6DEDD",
    date: "February 2021 - May 2024",
    points: [
      "Providing support to both the teacher and the students during the classes.",
      "Monitoring of the student's development throughout the entire course.",
      "Correcting deliverable challenges and final project pre-deliveries.",
      'Presentating "After Class" where a review of fundamental topics of the course is carried out.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ernesto is a collaborative, inclusive, and flexible team player who is always looking to integrate everyone and make activities more enjoyable. He is a fast learner and adapts well to challenges, with an open and sociable attitude towards others. To improve, he could benefit from having more confidence in his ideas and problem-solving abilities. Overall, Ernesto is an attentive professional and valuable team member who will undoubtedly be an asset to any future team he joins.",
    name: "Nicolas Passerino",
    designation: "Technical Leader | Sr. Front-End Developer",
    company: "Globant",
    image: nicolasPasserino,
  },
  {
    testimonial:
      "Ernesto is an exceptional team member who consistently supports his colleagues, shares new ideas and perspectives, collaborates effectively, and accepts new challenges with a positive attitude. He is an essential asset to any project, demonstrating a strong commitment to personal and team growth, and setting himself apart as a standout professional.",
    name: "Melina Garcia Cebenko",
    designation: "Sr. Front End Developer",
    company: "Globant",
    image: melinaGarciaCebenko,
  },
  {
    testimonial:
      "Ernesto is a skilled developer with strong problem-solving abilities, excellent research skills, and a fast learning capacity. He is dedicated to finding workarounds and initiatives, and his ability to quickly grasp new concepts and technologies makes him a valuable asset to any development team. Ernesto consistently delivers high-quality work, contributes positively to team dynamics, and is an essential member of any development project.",
    name: "Francisco Imanol Suarez",
    designation: "Sr. Software Engineer",
    company: "Globant",
    image: FranciscoImanolSuarez,
  },
  {
    testimonial:
      "Ernesto added value to the project from the very beginning, helping with the initial configuration and guiding the team to have meetings that allow us to achieve objectives quickly. He communicates easily with his colleagues and external parties, and he is always willing to ask for help to avoid being stuck. He takes the initiative to develop without wasting time and is flexible enough to adapt to unforeseen changes. In these unprecedented times, he has kept himself informed about the team's progress, which demonstrates his commitment to his career. There is no doubt that he would add value to any project he joins.",
    name: "Nicolas Siandro",
    designation: "Senior Java Developer",
    company: "Globant",
    image: nicolasSiandro,
  },
  {
    testimonial:
      "Ernesto has shown excellent performance in every assigned task, including proactively seeking additional information to learn about the tech stack and leading trainings for new team members. He has outstanding commitment and compliance within the team, and his strong soft skills, including problem-solving, communication, and teamwork, have been essential to his success.",
    name: "Jaime Cruz",
    designation: "Software Engineer | Team Leader",
    company: "Globant",
    image: jaimeCruz,
  },
  {
    testimonial:
      "Ernesto has been a valuable member of the team, consistently focused on collaboration and delivering high-quality work that meets customer expectations. He is always eager to propose new ideas and ways of working, and actively researches new processes and technologies to help solve customer needs and meet project requirements. He is always striving to learn and grow in his career, while also being willing to share his knowledge with the team. His excellent performance throughout the project has been greatly appreciated and has helped to successfully achieve all project goals and meet customer needs.",
    name: "Nicolas Kaen",
    designation: "Senior Frontend Engineer",
    company: "Globant",
    image: nicolasKaen,
  },
];

const projects = [
  {
    id: 4,
    name: "Tienda Musikal",
    description:
      "My first React project completed at Coderhouse. Consists of an e-commerce platform for musical instruments, where users can select the item of their interest, go to its detail view, select the desired quantity, and add it to the cart to finally proceed to payment and complete the purchase process.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "yellow-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tiendaMusikal,
    web_page: "https://tienda-musikal1-ampq-eid24g5x1-ernesferres-projects.vercel.app/",
    source_code_link: "https://github.com/Ernesferre/tienda-ecommerce",
  },
  {
    id: 2,
    name: "La Comanda",
    description:
      "This project was also built with React, but this time I focused more on improving styles with CSS. It is a restaurant application called 'La Comanda' where users can order the desired food with the corresponding quantity.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "yellow-text-gradient",
      },
    ],
    image: laComanda,
    web_page: "https://la-comanda.netlify.app/",
    source_code_link: "https://github.com/Ernesferre/La-Comanda",
  },
  {
    id: 5,
    name: "Project management App",
    description:
      "A simple React App to manage project information. It consists of a table that contains general information about a project, where roles are assigned according to the registered task. The application is a CRUD that allows adding a new project, editing it, and deleting it.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "yellow-text-gradient",
      },
    ],
    image: gestionProyecto,
    web_page: "https://crud-project-app.netlify.app/",
    source_code_link: "https://github.com/Ernesferre/Admin-Projects--CRUD",
  },
  {
    id: 3,
    name: "La Cafeteria",
    description:
      "La Cafeteria was a personal project that served to strengthen and reinforce my styling skills using SASS.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "SASS",
        color: "yellow-text-gradient",
      },
    ],
    image: laCafeteria,
    web_page: "https://cafeterianueva.netlify.app/",
    source_code_link: "https://github.com/Ernesferre/Cafeteria",
  },
  {
    id: 6,
    name: "Aenima Viajes",
    description:
      "This is the homepage created for a tourism company called Aenima Viajes, and it is fully responsive. For this project, we used Chakra UI as the component library and for styling",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "yellow-text-gradient",
      },
    ],
    image: aenimaViajes,
    web_page: "https://aenima-viajes.netlify.app/",
    source_code_link: "https://github.com/Ernesferre/Aenima-Viajes",
  },
  {
    id: 1,
    name: "Country Finder",
    description:
      "This application will allow the user to search for information about a specific country and also view in real time where it is located on the world map. In terms of error handling, the proposed implementation makes the application intuitive, simple, and user-friendly. The implementation of the Select component helps prevent potential user data entry errors, as well as enabling and disabling the button when the data has already been entered",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "yellow-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
    ],
    image: countryMap,
    web_page: "https://country-map-seven.vercel.app/",
    source_code_link: "https://github.com/Ernesferre/Country-Map",
  },
  
  

];

export { services, technologies, experiences, testimonials, projects };

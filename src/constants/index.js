import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  globant,
  coderhouse,
  sass,
  // nuevaAdelina1,
  tiendaMusikal,
  laComanda,
  gestionProyecto,
  laCafeteria,
  // nuevaAdelina2,
  aenimaViajes,
  webDevelopment,
  agustinaPasqualis,
  sofiaGonzalez,
  hernanCase,
  carlosMedina,
  julioSalinas,
  lorenaSina,
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
  // {
  //   name: "Next JS",
  //   icon: next,
  // },
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
    name: "git",
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
      "Planning and executing project development using Jira, Azure DevOps.",
      "Utilizing Git and Github for version control and collaboration with other developers on the team.",
      "Participating in code reviews and retrospectives to improve project efficiency and code quality.",
      "Presenting code progress and product demos to clients, incorporating their feedback to improve product functionality.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Disney",
    icon: globant,
    iconBg: "#E6DEDD",
    date: "December 2021 - January 2024",
    points: [
      "Developing user interfaces using Reactjs, Redux, GraphQL, Jest, and collaborating with the UX team to ensure adherence to Figma designs.",
      "Participating in daily meetings with the team to ensure project progress and efficient communication.",
      "Planning and executing project development using Jira, Azure DevOps.",
      "Utilizing Git and Github for version control and collaboration with other developers on the team.",
      "Participating in code reviews and retrospectives to improve project efficiency and code quality.",
      "Presenting code progress and product demos to clients, incorporating their feedback to improve product functionality.",
    ],
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
    designation: "Ssr. Front End Developer",
    company: "Globant",
    image: "",
  },
  {
    testimonial:
      "Ernesto is an exceptional team member who consistently supports his colleagues, shares new ideas and perspectives, collaborates effectively, and accepts new challenges with a positive attitude. He is an essential asset to any project, demonstrating a strong commitment to personal and team growth, and setting himself apart as a standout professional.",
    name: "Sofia Gonzalez",
    designation: "Ssr. Front End Developer",
    company: "DEF Corp",
    image: sofiaGonzalez,
  },
  {
    testimonial:
      "Ernesto is a skilled developer with strong problem-solving abilities, excellent research skills, and a fast learning capacity. He is dedicated to finding workarounds and initiatives, and his ability to quickly grasp new concepts and technologies makes him a valuable asset to any development team. Ernesto consistently delivers high-quality work, contributes positively to team dynamics, and is an essential member of any development project.",
    name: "Julio Rozo",
    designation: "Sr. Software Engineer",
    company: "Globant",
    image: julioSalinas,
  },
  {
    testimonial:
      "Ernesto added value to the project from the very beginning, helping with the initial configuration and guiding the team to have meetings that allow us to achieve objectives quickly. He communicates easily with his colleagues and external parties, and he is always willing to ask for help to avoid being stuck. He takes the initiative to develop without wasting time and is flexible enough to adapt to unforeseen changes. In these unprecedented times, he has kept himself informed about the team's progress, which demonstrates his commitment to his career. There is no doubt that he would add value to any project he joins.",
    name: "Hernan Case",
    designation: "Sr. Software Engineer",
    company: "DEPT",
    image: hernanCase,
  },
  {
    testimonial:
      "Ernesto has shown excellent performance in every assigned task, including proactively seeking additional information to learn about the tech stack and leading trainings for new team members. He has outstanding commitment and compliance within the team, and his strong soft skills, including problem-solving, communication, and teamwork, have been essential to his success.",
    name: "Lorena Gonzalez",
    designation: "Sr. Project Manager",
    company: "Globant",
    image: lorenaSina,
  },
  {
    testimonial:
      "Ernesto has been a valuable member of the team, consistently focused on collaboration and delivering high-quality work that meets customer expectations. He is always eager to propose new ideas and ways of working, and actively researches new processes and technologies to help solve customer needs and meet project requirements. He is always striving to learn and grow in his career, while also being willing to share his knowledge with the team. His excellent performance throughout the project has been greatly appreciated and has helped to successfully achieve all project goals and meet customer needs.",
    name: "Carlos Medina Garcia",
    designation: "Ssr. Project Manager",
    company: "Globant",
    image: carlosMedina,
  },
];

const projects = [
  {
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
    ],
    image: tiendaMusikal,
    web_page: "https://tienda-musikal1-ampq-eid24g5x1-ernesferres-projects.vercel.app/",
    source_code_link: "https://github.com/Ernesferre/tienda-ecommerce",
  },
  {
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
    name: "La Comanda",
    description:
      "TBD",
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
    name: "La Cafeteria",
    description:
      "Empresa de seguros que consta de una planilla que recoge datos de usuarios validando el ingreso en cada campo",
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
    image: laCafeteria,
    web_page: "https://cafeterianueva.netlify.app/",
    source_code_link: "https://github.com/Ernesferre/Cafeteria",
  },
  {
    name: "Aenima Viajes",
    description:
      "Home Page de Empresa de Viajes que consta de ....",
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
    image: aenimaViajes,
    web_page: "https://aenima-viajes.netlify.app/",
    source_code_link: "https://github.com/Ernesferre/Aenima-Viajes",
  },

];

export { services, technologies, experiences, testimonials, projects };

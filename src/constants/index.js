import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  storylens,
  amazon,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Java",
    icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
  },
  {
    name: "Spring Boot",
    icon: "https://img.icons8.com/color/48/000000/spring-logo.png",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Qapita",
    icon: "https://cdn.prod.website-files.com/62c55a1f32fa1a75f3b25d15/62c65bb9e9b6ae9eca23eca8_Qapita-logo.svg",
    iconBg: "#FFFFFF",
    date: "Feb 2023  - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "KP Corporate ",
    icon: "https://www.esopdirect.com/wp-content/uploads/2023/02/logo.png",
    iconBg: "#E6DEDD",
    date: "Nov 2020 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and Spring Boot technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineering Inter",
    company_name: "Geeky Works",
    icon: "https://static.ambitionbox.com/alpha/company/photos/logos/geekyworks-it-solutions.jpg",
    iconBg: "#00B2A4",
    date: "Nov 2019 - June 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Covid Tracker",
    description:
      "Web-based platform that allows users to search and track worldwide covid cases. It provides real-time data and statistics to keep users informed and safe.",

    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://user-images.githubusercontent.com/41479583/92441240-7c0b6c80-f1cb-11ea-8e2c-6e51c2c542fe.png",
    source_code_link: "https://github.com/tusharchemate/Backend-Corona-Tracker",
  },
  {
    name: "Amazon App",
    description:
      "Web application that enables users to search for products and make purchases directly from their current location. The app provides seamless shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/tusharchemate/amazon-clone",
  },

  {
    name: "Storylens",
    description:
      "A platform for sharing and discovering ed. content using short stories. Users can create and share engaging stories, and interact through likes, comments, and sharing.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-query",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
      {
        name: "zod",
        color: "blue-text-gradient",
      },
    ],
    image: storylens,
    source_code_link: "https://github.com/tusharchemate/storylens",
  },
];

export { services, technologies, experiences, testimonials, projects };

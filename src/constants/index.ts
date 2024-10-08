import {
  afpa,
  anasen,
  anasenLogo,
  css,
  datacet,
  docker,
  git,
  html,
  ibm,
  javascript,
  minesweeper,
  nodejs,
  portfolio,
  reactjs,
  sql,
  starTrek,
  stoic,
  stoicApp,
  tailwind,
  threejs,
} from "../assets";

export const EMAIL = "gerhardt.philippe@gmail.com";

const blue_text_gradient =
  "bg-gradient-to-r from-[#2f80ed] to-[#56ccf2] inline-block text-transparent bg-clip-text";
const green_text_gradient =
  "bg-gradient-to-r from-[#11998e] to-[#38ef7d] inline-block text-transparent bg-clip-text";
const pink_text_gradient =
  "bg-gradient-to-r from-[#ec008c] to-[#fc6767] inline-block text-transparent bg-clip-text";

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
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
  },
  {
    name: "Google Cloud",
    icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
  },
  {
    name: "C++ tool",
    icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Docker",
    icon: docker,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySql",
    icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
  },
];

export type projectType = "web" | "python";
const list = [
  {
    id: "web",
    title: "Web Dev",
  },
  {
    id: "python",
    title: "Python",
  },
];

export const webProject = [
  {
    name: "Application web STOIC",
    description: "Excel pour le big data.",
    tags: [
      {
        name: "VueJS",
        color: blue_text_gradient,
      },
      {
        name: "Vuetify",
        color: green_text_gradient,
      },
      {
        name: "d3",
        color: pink_text_gradient,
      },
    ],
    image: stoicApp,
  },
  {
    name: "Application web Anasen",
    description:
      "Permettre de manipuler et d'analyser des données sans avoir besoin de posséder de compétences techniques poussées dans la data.",
    tags: [
      {
        name: "reactJS",
        color: blue_text_gradient,
      },
      {
        name: "MaterialUI",
        color: green_text_gradient,
      },
      {
        name: "cypress",
        color: pink_text_gradient,
      },
    ],
    image: anasen,
    source_link: "https://app.airsaas.io/fr/produit/anasen",
  },
  {
    name: "Portfolio React 3D",
    description:
      "Site web utilisant React avec des graphiques 3D et des animations pour donner vie à leur contenu.",
    tags: [
      {
        name: "TailwindCSS",
        color: blue_text_gradient,
      },
      {
        name: "ThreeJS",
        color: green_text_gradient,
      },
      {
        name: "3d_react",
        color: pink_text_gradient,
      },
    ],
    image: portfolio,
    source_link: "https://philgeronegit.github.io/",
    source_code_link: "https://github.com//3d-react-portfolio",
  },
  {
    name: "Star trek",
    description:
      "Un simple site web utilisant HTML, CSS et Bootstrap. Il s'agit d'une page web réactive dotée d'une interface conviviale.",
    tags: [
      {
        name: "html",
        color: blue_text_gradient,
      },
      {
        name: "bootstrap",
        color: green_text_gradient,
      },
      {
        name: "css",
        color: pink_text_gradient,
      },
    ],
    image: starTrek,
    source_link: "https://gerhardt.needemand.com/startrek/",
  },
];

export const pythonProject = [
  {
    name: "Démineur",
    description: "Projet de démineur utilisant pygame et le modèle MVC.",
    tags: [
      {
        name: "python",
        color: blue_text_gradient,
      },
      {
        name: "pygame",
        color: green_text_gradient,
      },
      {
        name: "MVC",
        color: pink_text_gradient,
      },
    ],
    image: minesweeper,
    source_link: "https://github.com/philgeronegit/minesweeper",
  },
  {
    name: "SQL : Projet de librairie",
    description:
      "Mini projet utilisant une DBMS. Système de gestion de livres utilisant SQL et le modèle MVC.",
    tags: [
      {
        name: "SQL",
        color: blue_text_gradient,
      },
      {
        name: "MVC",
        color: green_text_gradient,
      },
      {
        name: "mini-projet",
        color: pink_text_gradient,
      },
    ],
    image: sql,
  },
];

const experiences = [
  {
    title: "Développeur fullstack",
    company_name: "STOIC",
    icon: stoic,
    iconBg: "#E6DEDD",
    date: "2021 - 2024",
    points: [
      "Logiciel utilisé en interne (dog fooding) et en démo chez certains prospects.",
      "Méthodologies : daily scrum, intégration continue.",
      "Technologies : Vue, Vuetify, node.js, AWS.",
    ],
  },
  {
    title: "Développeur frontend",
    company_name: "Anasen",
    icon: anasenLogo,
    iconBg: "#E6DEDD",
    date: "2019 - 2021",
    points: [
      "Application web de manipulation et d'analyse des données sans avoir besoin de posséder de compétences techniques poussées dans la data.",
      "Moteur de prévisualisation codé en programmation fonctionnelle avec Ramda.",
      "Méthodologies : daily scrum, intégration continue, BDD.",
      "Technologies : React, MaterialUI, ramda, jest, cypress.",
    ],
  },
  {
    title: "Développeur desktop et web",
    company_name: "Datacet",
    icon: datacet,
    iconBg: "#E6DEDD",
    date: "1996 - 2019",
    points: [
      "Applications de surveillance et de ronde.",
      "Serveur OPC pour la remontée de systèmes incendie.",
      "Technologies : C#, C++, ASP.NET, node.js, React, SQL Server.",
    ],
  },
];

const educations = [
  {
    degree: "Concepteur développeur d'applications",
    branch: "IA",
    name: "IBM académie",
    year: "(2024 - 2025)",
    image: ibm,
  },
  {
    degree: "Analyste programmeur",
    branch: "Industrie",
    name: "AFPA",
    year: "(1996 - 1997)",
    image: afpa,
  },
];

export { blue_text_gradient, educations, experiences, list, technologies };

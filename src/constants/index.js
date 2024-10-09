import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  next,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  materialui,
  firebase,
  sass,
  postgresql,
  rubyrails,
  graphql,
  edumy,
  fintech,
  clarityHealth,
  cyber,
  ww,
  Xpert,
  Spark,
  Freelancer,
  postman
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Development',
    icon: frontend,
  },
  {
    title: 'Mob Application Development',
    icon: backend,
  },
  {
    title: 'Desktop Software Development',
    icon: ux,
  },
  {
    title: 'AI Model Training',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Next.js',
    icon: next, 
  },
  {
    name: 'Material UI',
    icon: materialui, 
  },
  {
    name: 'Sass',
    icon: sass, 
  },
  {
    name: 'Firebase',
    icon: firebase,
  },
  {
    name: 'Postman',
    icon: postman,
  },
];


const experiences = [
  {
    title: 'Associate Software Developer',
    company_name: '360XpertSolutions',
    icon: Xpert,
    iconBg: '#333333',
    date: 'Feb 2024 - Present',
  },
  {
    title: 'Front-End Developer',
    company_name: 'Freelancer',
    icon: Freelancer,
    iconBg: '#333333',
    date: 'May 2024 - Present',
  },
  {
    title: 'Web developer',
    company_name: 'Spark Foundation',
    icon: Spark,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Edumy',
    description: 'Edumy, your gateway to endless knowledge!',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Redux-Toolkit',
        color: 'green-text-gradient',
      },
      {
        name: 'Custom Css',
        color: 'pink-text-gradient',
      },
    ],
    image: edumy,
    repo: 'https://github.com/manalimran-12/Edumy-react.js.git',
    demo: ' https://edumy.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'Clarity Health',
    description:
      'Covid-19 Vaccination Website.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: clarityHealth,
    // repo: '',
    demo: 'https://clarityhealthinc.com/',
  },
  {
    id: 'project-3',
    name: 'Cyber Security NPO',
    description: 'Client Cyber Security e-learning Website',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: cyber,
    repo: 'https://github.com/manalimran-12/CyberNPO.git',
    demo: 'https://cybersecuritytrainernpo.com/',
  },
  {
    id: 'project-4',
    name: 'Weatherified App',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: ww,
    // repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://weatherified.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Fintech',
    description:
      'This is a Virtual banking website.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'materialUI',
        color: 'green-text-gradient',
      },
    ],
    image: fintech,
    // repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://fintech-y8fr.vercel.app/',
  },
];

export { services, technologies, experiences, projects };

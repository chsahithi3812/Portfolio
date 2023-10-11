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
  figma,
  docker,
  infuzex,
  iiitm,
  carrent,
  jobit,
  tripguide,
  threejs,
  social,
  blog,
  blotout,
  outshade,
  sentiment
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'https://bit.ly/sahithi_resume',
    title: 'Resume',
  },
];

const services = [
  {
    title: 'Fullstack Developer',
    icon: web,
  },
  {
    title: 'Machine Learning Enthusiast',
    icon: backend,
  },
  {
    title: 'Competitive Programmer',
    icon: creator,
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
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Client Engineer Intern',
    company_name: 'Blotout',
    icon: blotout,
    iconBg: '#E6DEDD',
    date: 'May 2023 - Present',
    points: [
      'Developed innovative custom event tracking solutions for 10+ ecommerce clients, strategically catalyzing remarkable advancements in marketing strategies and ad performance',
      'Employed HTML DOM properties and network calls to enhance the functionality and performance of the client\'s custom code, resulting in a streamlined and optimized user experience.'
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company_name: 'Outshade',
    icon:outshade,
    iconBg: '#383E56',
    date: 'Jul 2022 -Aug 2022',
    points: [
      'Effectively collaborated and contributed to the development of front-end pages using NextJS for a goal-oriented platform, ensuring seamless integration of components to deliver a user-friendly interface.',
       'Applied NextJS, HTML, CSS, and JavaScript to create engaging and intuitive user interfaces.'
    ],
  },
];

const projects = [
  {
    name: 'CLI-Application',
    description:
      'Command line based platform that allows users to search, add, and manage their key-value pairs, providing a convenient helper commands.',
    tags: [
      {
        name: 'nodejs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'commanderjs',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/KarthikSharma-7/cli-app/tree/sahithi',
  },
  {
    name: 'Portfolio Website',
    description: 'A Three.JS based personal portfolio application',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/KarthikSharma-7',
  },
  {
    name: 'GeekBot',
    description:
      'A Blog web application, where users can create,edit,delete their blogs. Authentication and Authorization are taken care of to keep the user identity private.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: blog,
    source_code_link: 'https://github.com/chsahithi3812/GeekBot',
  },
  {
    name: 'Sentimental Analysis using LSTM',
    description:
      'An approach to classify negative texts with good latency, which can be used at a large scale on social media platforms',
    tags: [
      {
        name: 'NLP',
        color: 'blue-text-gradient',
      },
      {
        name: 'LSTM',
        color: 'green-text-gradient',
      }
     
    ],
    image: sentiment,
    source_code_link: 'https://github.com/chsahithi3812/Sentimental-Analysis',
  },
];

export { services, technologies, experiences, projects };

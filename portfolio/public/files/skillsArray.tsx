import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiCsharp,
  SiMysql,
  SiTailwindcss,
} from 'react-icons/si';
import { IoLogoJavascript, IoLogoAndroid } from 'react-icons/io';
import { AiOutlineJava } from 'react-icons/ai';

type Skill = {
  name: string;
  bgColor: string;
  icon: React.ElementType;
  features: string[];
  description: string;
};

const skills: Skill[] = [
  {
    name: 'HTML',
    bgColor: '#F16529',
    icon: SiHtml5,
    features: [
      'Semantic markup for structuring web content',
      'Cross-platform compatibility',
      'Integration with CSS and JavaScript',
    ],
    description:
      'The standard markup language for creating web pages and web applications.',
  },
  {
    name: 'React',
    bgColor: '#087EA4',
    icon: SiReact,
    features: [
      'Component-based architecture',
      'Virtual DOM for efficient updates',
      'JSX for intuitive UI development',
    ],
    description:
      'A JavaScript library for building user interfaces, particularly single-page applications.',
  },
  {
    name: 'SQL',
    bgColor: '#5283A2',
    icon: SiMysql,
    features: [
      'Powerful querying capabilities',
      'ACID compliance for data integrity',
      'Scalable for large datasets',
    ],
    description:
      'A domain-specific language used for managing and querying relational databases.',
  },
  {
    name: 'CSS',
    bgColor: '#2965F1',
    icon: SiCss3,
    features: [
      'Responsive design with media queries',
      'Flexbox and Grid for layout control',
      'Animations and transitions',
    ],
    description:
      'A style sheet language used for describing the presentation of a document written in HTML.',
  },
  {
    name: 'Tailwind',
    bgColor: '#38BDF8',
    icon: SiTailwindcss,
    features: [
      'Utility-first approach',
      'Highly customizable',
      'Rapid prototyping and development',
    ],
    description:
      'A utility-first CSS framework for rapidly building custom user interfaces.',
  },
  {
    name: 'Java',
    bgColor: '#01618A',
    icon: AiOutlineJava,
    features: [
      'Platform independence (Write Once, Run Anywhere)',
      'Strong typing and object-oriented',
      'Extensive standard library',
    ],
    description:
      'A versatile, object-oriented programming language used for developing a wide range of applications.',
  },
  {
    name: 'JavaScript',
    bgColor: '#FFDE24',
    icon: IoLogoJavascript,
    features: [
      'Asynchronous programming with async/await',
      'Functional programming capabilities',
      'Rich ecosystem with npm and Node.js',
    ],
    description:
      'A high-level, interpreted programming language that is a core technology of the World Wide Web.',
  },
  {
    name: 'C#',
    bgColor: '#9F73D9',
    icon: SiCsharp,
    features: [
      'Strong typing with type inference',
      'LINQ for data querying',
      'Async/await for asynchronous programming',
    ],
    description:
      'A modern, object-oriented programming language developed by Microsoft for the .NET platform.',
  },
  {
    name: 'Android',
    bgColor: '#A4C639',
    icon: IoLogoAndroid,
    features: [
      'Native app development for Android devices',
      'Access to device-specific features',
      'Material Design principles',
    ],
    description:
      'An open-source, Linux-based mobile operating system developed by Google for smartphones and tablets.',
  },
];

export default skills;

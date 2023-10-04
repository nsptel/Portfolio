import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiVisualstudio } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandDjango,
  TbBrandPython,
  TbBrandAngular,
  TbBrandMysql,
  TbBrandMongodb,
  TbBrandAws,
  TbBrandDocker,
} from 'react-icons/tb';
import JiraIcon from 'public/assets/svg/jira.svg';

export const TECHNOLOGIES = [
  {
    category: 'Front-end',
    items: [
      { name: 'HTML', icon: <AiFillHtml5 size={32} /> },
      { name: 'CSS', icon: <DiCss3 size={32} /> },
      { name: 'JS', icon: <IoLogoJavascript size={32} /> },
      { name: 'React', icon: <FaReact size={32} /> },
      { name: 'Angular', icon: <TbBrandAngular size={32} /> },
      { name: 'Next', icon: <TbBrandNextjs size={32} /> },
      { name: 'Tailwind CSS', icon: <TbBrandTailwind size={32} /> },
      { name: 'Bootstrap', icon: <BsBootstrap size={32} /> },
    ],
  },
  {
    category: 'Back-end',
    items: [
      { name: 'Python', icon: <TbBrandPython size={32} /> },
      { name: 'Django', icon: <TbBrandDjango size={32} /> },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', icon: <TbBrandMysql size={32} /> },
      { name: 'MongoDB', icon: <TbBrandMongodb size={32} /> },
    ],
  },
  {
    category: 'Other tools',
    items: [
      { name: 'Jira', icon: <JiraIcon width={32} /> },
      { name: 'Github', icon: <AiFillGithub size={32} /> },
      { name: 'AWS', icon: <TbBrandAws size={32} /> },
      { name: 'Docker', icon: <TbBrandDocker size={32} /> },
      { name: 'VsCode', icon: <DiVisualstudio size={32} /> },
    ],
  },
];

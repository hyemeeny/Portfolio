import { FaReact, FaHtml5, FaJs, FaSass } from 'react-icons/fa';
import { VscJson } from 'react-icons/vsc';

export const navItems = [
  { path: '/', label: 'home.tsx', icon: FaReact, iconClass: 'reactIcon' },
  { path: '/about', label: 'about.html', icon: FaHtml5, iconClass: 'htmlIcon' },
  { path: '/project', label: 'project.js', icon: FaJs, iconClass: 'jsIcon' },
  { path: '/contact', label: 'contact.scss', icon: FaSass, iconClass: 'scssIcon' },
  { path: '/setting', label: 'setting.json', icon: VscJson, iconClass: 'jsonIcon' },
];

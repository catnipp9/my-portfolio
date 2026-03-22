import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal.tsx';

interface Skill {
  name: string;
  svg: string;
}

type TabKey = 'all' | 'languages' | 'frameworks' | 'mobile-ai' | 'cloud-db' | 'tools' | 'hardware';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'all',        label: 'All' },
  { key: 'languages',  label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks & Web' },
  { key: 'mobile-ai',  label: 'Mobile & AI' },
  { key: 'cloud-db',   label: 'Cloud & Databases' },
  { key: 'tools',      label: 'Tools & DevOps' },
  { key: 'hardware',   label: 'Engineering & Hardware' },
];

const languages: Skill[] = [
  { name: 'TypeScript', svg: '<rect x="1" y="1" width="22" height="22" rx="3" fill="#3178C6"/><text x="3" y="17" font-size="11" font-weight="bold" fill="white" font-family="sans-serif">TS</text>' },
  { name: 'JavaScript', svg: '<rect x="1" y="1" width="22" height="22" rx="3" fill="#F7DF1E"/><text x="3" y="17" font-size="11" font-weight="bold" fill="#222" font-family="sans-serif">JS</text>' },
  { name: 'Python', svg: '<path d="M12 2C9.24 2 7 3.34 7 5v2h5v1H5.5C3.57 8 2 9.79 2 12s1.57 4 3.5 4H7v-2.5c0-1.93 2.24-3.5 5-3.5s5 1.57 5 3.5V16h1.5c1.93 0 3.5-1.79 3.5-4s-1.57-4-3.5-4H17V6c0-1.66-2.24-3-5-3V2z" fill="#3776AB"/><circle cx="10.5" cy="4.5" r="1.2" fill="#FFD43B"/><circle cx="13.5" cy="19.5" r="1.2" fill="#FFD43B"/>' },
  { name: 'C++', svg: '<text x="1" y="17" font-size="13" font-weight="bold" fill="#00599C" font-family="sans-serif">C++</text>' },
  { name: 'C#', svg: '<rect x="1" y="1" width="22" height="22" rx="3" fill="#239120"/><text x="4" y="17" font-size="12" font-weight="bold" fill="white" font-family="sans-serif">C#</text>' },
  { name: 'Java', svg: '<path d="M8.5 18.5s-.9.5.65.7c1.9.22 2.87.19 4.97-.21 0 0 .55.35 1.32.65-4.7 2-10.63-.12-6.94-1.14zM8 16s-1 .76.54.92c2.03.21 3.64.23 6.41-.31 0 0 .38.39.99.6C10.26 18.86 3.95 17.35 8 16z" fill="#f89820"/><path d="M13.1 11.5c1.16 1.33-.3 2.53-.3 2.53s2.94-1.52 1.59-3.42C13.14 8.86 12.17 8 17.4 4.96c0 0-8.22 2.05-4.3 6.54z" fill="#f89820"/><path d="M19.3 20.5s.68.56-.75.99c-2.71.82-11.29 1.07-13.67.03-.86-.37.75-.89 1.25-1 .53-.11.83-.09.83-.09-.95-.67-6.16 1.32-2.64 1.89C13.91 23.88 21.78 21.63 19.3 20.5zM9.3 13.2s-4.36 1.04-1.54 1.41c1.19.16 3.56.12 5.77-.06 1.81-.15 3.62-.48 3.62-.48s-.64.27-1.1.59c-4.43 1.17-12.99.62-10.52-.57C7.61 13.08 9.3 13.2 9.3 13.2zM17.1 17.6c4.5-2.34 2.42-4.59.97-4.29-.35.07-.52.14-.52.14s.13-.21.39-.3c2.87-1.01 5.08 2.98-.93 4.56 0-.001.07-.062.09-.11z" fill="#f89820"/><path d="M14.4 1s2.49 2.49-2.37 6.33C8.18 10.4 11.19 12.16 12.08 14.16 9.81 12.11 8.14 10.3 9.26 8.62 10.9 6.15 15.41 4.95 14.4 1z" fill="#f89820"/>' },
  { name: 'C', svg: '<text x="5" y="18" font-size="16" font-weight="bold" fill="#A8B9CC" font-family="sans-serif">C</text>' },
  { name: 'HTML/CSS', svg: '<path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4z" fill="#E34F26"/><path d="M12 5.5v13L7.5 17l-.7-9H16.2L15.5 17 12 18.5" fill="#F06529"/>' },
  { name: 'Dart', svg: '<path d="M4.11 16.16L3 11.29 7.4 6.89h4.87l4.87-4.87 3.47 3.47-.35 1.57-9.76 9.76-6.39-.66z" fill="#01579B"/><path d="M3 16.71v3.82l3.82.94L20.65 8.07l-1.5-1.5L3 16.71z" fill="#29B6F6"/>' },
];

const frameworks: Skill[] = [
  { name: 'React', svg: '<circle cx="12" cy="12" r="2.2" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" stroke-width="1.3" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" stroke-width="1.3" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" stroke-width="1.3" fill="none" transform="rotate(120 12 12)"/>' },
  { name: 'Next.js', svg: '<rect x="1" y="1" width="22" height="22" rx="4" fill="#111"/><text x="3" y="16" font-size="8.5" font-weight="bold" fill="white" font-family="sans-serif">Next.js</text>' },
  { name: 'Astro', svg: '<path d="M9 19c-1.5-2-2-5-1-7l4-9 4 9c1 2 .5 5-1 7-1 1.5-2.5 2-3 2s-2-.5-3-2z" fill="#FF5D01"/><path d="M7.5 15.5c1-1 2.5-1.5 4.5-1.5s3.5.5 4.5 1.5" stroke="#FF5D01" stroke-width="1" fill="none"/>' },
  { name: 'Node.js', svg: '<path d="M12 2.04L3.29 6.96l-.01 9.96 8.72 4.96 8.72-4.96V6.96L12 2.04zm-1 15.32l-5.72-3.25V8.89L12 12.16V17.36zm1-6.56L5.85 7.53 12 4.04l6.15 3.49L12 10.8zm7 5.31l-5.72 3.25V12.16l5.72-3.27v6.22z" fill="#68A063"/>' },
  { name: 'Express.js', svg: '<path d="M3 8h18M3 12h14M3 16h10" stroke="#aaaaaa" stroke-width="2" stroke-linecap="round" fill="none"/>' },
  { name: 'Tailwind CSS', svg: '<path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15C19.67 12 21.33 10.67 22 8c-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.51 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 17.15 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 12.85 9.51 12 7 12z" fill="#38BDF8"/>' },
  { name: 'Django', svg: '<rect x="1" y="1" width="22" height="22" rx="3" fill="#092E20"/><text x="3" y="16" font-size="8.5" font-weight="bold" fill="#44B78B" font-family="sans-serif">Django</text>' },
  { name: 'Bootstrap', svg: '<rect x="1" y="1" width="22" height="22" rx="4" fill="#7952B3"/><text x="5" y="18" font-size="14" font-weight="bold" fill="white" font-family="sans-serif">B</text>' },
  { name: 'REST APIs', svg: '<path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9 9a9 9 0 019-9" stroke="#00B8D9" stroke-width="1.5" fill="none"/>' },
];

const mobileAi: Skill[] = [
  { name: 'Flutter', svg: '<path d="M13.9 2.01L3.9 12l3.09 3.09 2.71-2.7L20.1 2.01h-6.2zM13.9 22l6.2-6.19-3.1-3.09-3.1 3.09-2.7-2.7-3.1 3.1L13.9 22z" fill="#54C5F8"/>' },
  { name: 'React Native', svg: '<circle cx="12" cy="12" r="2" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" stroke-width="1.3" fill="none"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" stroke-width="1.3" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" stroke-width="1.3" fill="none" transform="rotate(120 12 12)"/>' },
  { name: '.NET MAUI', svg: '<rect x="1" y="1" width="22" height="22" rx="3" fill="#512BD4"/><text x="2.5" y="13" font-size="7" font-weight="bold" fill="white" font-family="sans-serif">.NET</text><text x="2" y="20" font-size="6.5" fill="white" font-family="sans-serif">MAUI</text>' },
  { name: 'TensorFlow', svg: '<path d="M12 2L4 6.5V12l8 4.5L20 12V6.5L12 2z" fill="none" stroke="#FF6F00" stroke-width="1.5"/><path d="M12 2v14.5M4 6.5l8 4M20 6.5l-8 4" stroke="#FF6F00" stroke-width="1.5" fill="none"/>' },
  { name: 'PyTorch', svg: '<circle cx="12" cy="12" r="9" fill="none" stroke="#EE4C2C" stroke-width="1.5"/><circle cx="12" cy="8" r="2.5" fill="#EE4C2C"/><path d="M12 10.5v5M9.5 13.5h5" stroke="#EE4C2C" stroke-width="1.5" stroke-linecap="round"/>' },
  { name: 'CNN', svg: '<rect x="1" y="8" width="4" height="8" rx="1" fill="#A259FF" opacity=".5"/><rect x="6.5" y="6" width="4" height="12" rx="1" fill="#A259FF" opacity=".7"/><rect x="13.5" y="6" width="4" height="12" rx="1" fill="#A259FF" opacity=".7"/><rect x="19" y="8" width="4" height="8" rx="1" fill="#A259FF" opacity=".5"/><path d="M5 12h1.5M10.5 12h3M17.5 12h1.5" stroke="#A259FF" stroke-width="1.5"/>' },
  { name: 'YOLOv11', svg: '<rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="#00BFFF" stroke-width="1.5"/><rect x="5" y="5" width="8" height="8" rx="1" fill="none" stroke="#00BFFF" stroke-width="1.3"/><circle cx="17" cy="17" r="3" fill="#00BFFF" opacity=".5"/><path d="M13 9l3.5 3.5" stroke="#00BFFF" stroke-width="1.2" stroke-linecap="round"/>' },
  { name: 'Jupyter', svg: '<circle cx="12" cy="12" r="9" fill="none" stroke="#F37626" stroke-width="1.5"/><circle cx="12" cy="7.5" r="2" fill="#F37626"/><circle cx="7" cy="15.5" r="2" fill="#9E9E9E"/><circle cx="17" cy="15.5" r="2" fill="#616161"/>' },
];

const cloudDb: Skill[] = [
  { name: 'PostgreSQL', svg: '<ellipse cx="12" cy="7" rx="7" ry="4" fill="none" stroke="#336791" stroke-width="1.5"/><path d="M5 7v10c0 2.21 3.13 4 7 4s7-1.79 7-4V7" fill="none" stroke="#336791" stroke-width="1.5"/><path d="M5 12c0 2.21 3.13 4 7 4s7-1.79 7-4" fill="none" stroke="#336791" stroke-width="1.5"/>' },
  { name: 'MySQL', svg: '<path d="M3 6h18v12H3z" fill="none" stroke="#4479A1" stroke-width="1.5" rx="2"/><path d="M3 10h18M3 14h18M8 6v12M14 6v12" stroke="#4479A1" stroke-width="1" fill="none"/>' },
  { name: 'Azure SQL', svg: '<rect x="1" y="1" width="22" height="22" rx="3" fill="#0089D6" opacity=".15" stroke="#0089D6" stroke-width="1.5"/><text x="2.5" y="13" font-size="7" font-weight="bold" fill="#0089D6" font-family="sans-serif">Azure</text><text x="4.5" y="20" font-size="7" fill="#0089D6" font-family="sans-serif">SQL</text>' },
  { name: 'Firebase', svg: '<path d="M5.71 16.27L6.68 3l4.54 8.46L5.71 16.27z" fill="#FFCA28"/><path d="M13.63 6.69l-1.38-2.6a.4.4 0 00-.7 0L8.94 8.9l4.69-2.21z" fill="#FFA000"/><path d="M18.29 16.27l-2.62-11.8a.42.42 0 00-.77-.09l-8.19 11.89L12 19.88l6.29-3.61z" fill="#F57C00"/>' },
  { name: 'Supabase', svg: '<path d="M13.5 3L4 14h8l-1.5 7L21 10h-8L13.5 3z" fill="#3ECF8E"/>' },
  { name: 'Appwrite', svg: '<rect x="1" y="1" width="22" height="22" rx="5" fill="#FD366E" opacity=".15" stroke="#FD366E" stroke-width="1.5"/><path d="M6 12h12M6 8h8M6 16h10" stroke="#FD366E" stroke-width="1.5" stroke-linecap="round"/>' },
  { name: 'MS Access', svg: '<rect x="1" y="1" width="22" height="22" rx="3" fill="#A4373A" opacity=".15" stroke="#A4373A" stroke-width="1.5"/><text x="4" y="14" font-size="7.5" font-weight="bold" fill="#A4373A" font-family="sans-serif">MDB</text>' },
];

const tools: Skill[] = [
  { name: 'Docker', svg: '<rect x="2" y="9" width="4" height="3" rx="0.5" fill="#2496ED"/><rect x="7" y="9" width="4" height="3" rx="0.5" fill="#2496ED"/><rect x="12" y="9" width="4" height="3" rx="0.5" fill="#2496ED"/><rect x="7" y="5" width="4" height="3" rx="0.5" fill="#2496ED"/><rect x="12" y="5" width="4" height="3" rx="0.5" fill="#2496ED"/><path d="M2 13s1-.5 3-.5 2.5 1 4.5 1S13 12 15 12c2 0 3.5.5 5 .5" stroke="#2496ED" stroke-width="1.2" fill="none" stroke-linecap="round"/>' },
  { name: 'Kubernetes', svg: '<path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" fill="none" stroke="#326CE5" stroke-width="1.5"/><circle cx="12" cy="12" r="3" fill="#326CE5" opacity=".4"/><path d="M12 2v4M12 18v4M3.5 7l3.5 2M17 15l3.5 2M3.5 17l3.5-2M17 9l3.5-2" stroke="#326CE5" stroke-width="1.2"/>' },
  { name: 'OpenShift', svg: '<circle cx="12" cy="12" r="9" fill="none" stroke="#EE0000" stroke-width="1.5"/><path d="M7 10a5 5 0 0 1 10 0" stroke="#EE0000" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M7 14a5 5 0 0 0 10 0" stroke="#EE0000" stroke-width="1.5" fill="none" stroke-linecap="round"/>' },
  { name: 'Git', svg: '<circle cx="6" cy="6" r="2" fill="#F05032"/><circle cx="18" cy="6" r="2" fill="#F05032"/><circle cx="6" cy="18" r="2" fill="#F05032"/><path d="M8 6h8M6 8v8M8 15.5L15.5 8" stroke="#F05032" stroke-width="1.5" fill="none" stroke-linecap="round"/>' },
  { name: 'Azure DevOps', svg: '<rect x="1" y="1" width="22" height="22" rx="3" fill="#0078D4" opacity=".15" stroke="#0078D4" stroke-width="1.5"/><path d="M6 16V8l5 3-5 5z" fill="#0078D4"/><path d="M13 8h6v2h-6zM13 14h6v2h-6z" fill="#0078D4"/>' },
  { name: 'GitHub Desktop', svg: '<path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7C6.73 19.91 6.14 18 6.14 18c-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 7.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z" fill="white"/>' },
  { name: 'VS Code', svg: '<path d="M17 2L9 10.5 5 7 2 9l4 3.5L2 16l3 2 4-3.5L17 23l3-1.5V3.5L17 2z" fill="#007ACC"/>' },
  { name: 'Figma', svg: '<path d="M8 2h8a4 4 0 010 8H8V2z" fill="#F24E1E"/><path d="M8 10h4a4 4 0 010 8H8v-8z" fill="#A259FF"/><path d="M8 18a4 4 0 100 4v-4z" fill="#0ACF83"/><circle cx="16" cy="14" r="4" fill="#1ABCFE"/>' },
  { name: 'Canva', svg: '<circle cx="12" cy="12" r="10" fill="#00C4CC"/><circle cx="12" cy="12" r="4" fill="white"/>' },
];

const hardware: Skill[] = [
  { name: 'Arduino Uno', svg: '<rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="#00979D" stroke-width="1.5"/><circle cx="7" cy="12" r="2" fill="#00979D" opacity=".6"/><path d="M9 9h6M9 12h4M9 15h5" stroke="#00979D" stroke-width="1.2" stroke-linecap="round"/>' },
  { name: 'ESP32', svg: '<rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="#E7352C" stroke-width="1.5"/><rect x="7" y="7" width="10" height="10" rx="1" fill="#E7352C" opacity=".25"/><path d="M1 8h3M1 12h3M1 16h3M20 8h3M20 12h3M20 16h3" stroke="#E7352C" stroke-width="1.2" stroke-linecap="round"/>' },
  { name: 'PCB Design', svg: '<rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="#FFB300" stroke-width="1.5"/><rect x="5" y="5" width="6" height="6" rx="1" fill="#FFB300" opacity=".4"/><rect x="13" y="13" width="6" height="6" rx="1" fill="#FFB300" opacity=".4"/><path d="M11 8h2M8 11v2M16 5v2M19 16h-2" stroke="#FFB300" stroke-width="1.2" stroke-linecap="round"/>' },
  {
    name: 'KiCad',
    svg: `
      <rect x="1" y="1" width="22" height="22" rx="3" fill="#1B2A6B"/>
      <text x="3" y="13" font-size="8" font-weight="bold" fill="#5A9FD4" font-family="sans-serif">Ki</text>
      <text x="11" y="13" font-size="8" font-weight="bold" fill="white" font-family="sans-serif">Cad</text>
      <path d="M3 16 Q7 14 12 16 Q17 18 21 16" stroke="#5A9FD4" stroke-width="1" fill="none"/>
    `
  },
  {
    name: 'AutoCAD',
    svg: `
      <rect x="1" y="1" width="22" height="22" rx="3" fill="#E51837" opacity=".9"/>
      <text x="3.5" y="11" font-size="6.5" font-weight="bold" fill="white" font-family="sans-serif">Auto</text>
      <text x="3" y="19" font-size="6.5" font-weight="bold" fill="white" font-family="sans-serif">CAD</text>
    `
  },
  { name: 'Embedded & IoT', svg: '<rect x="6" y="8" width="12" height="8" rx="1.5" fill="none" stroke="#00BCD4" stroke-width="1.5"/><path d="M9 8V6M12 8V5M15 8V6M9 16v2M12 16v3M15 16v2M2 11h4M18 11h4" stroke="#00BCD4" stroke-width="1.2" stroke-linecap="round"/>' },
  { name: 'Networking', svg: '<circle cx="12" cy="5" r="2.5" fill="#43A047" opacity=".7"/><circle cx="5" cy="19" r="2.5" fill="#43A047" opacity=".7"/><circle cx="19" cy="19" r="2.5" fill="#43A047" opacity=".7"/><path d="M12 7.5v5M12 12.5L5 17M12 12.5L19 17" stroke="#43A047" stroke-width="1.5" stroke-linecap="round"/>' },
  { name: 'Prototyping', svg: '<path d="M12 3L4 7v5l8 4 8-4V7L12 3z" fill="none" stroke="#9C27B0" stroke-width="1.5"/><path d="M4 12l8 4 8-4M4 17l8 4 8-4" stroke="#9C27B0" stroke-width="1.2" fill="none" stroke-linecap="round"/>' },
  { name: 'Soldering', svg: '<path d="M5 19L12 5l2 2-7 13-2-1z" fill="#FF7043" opacity=".8"/><path d="M14 7l4-4 1 1-4 4" fill="#FF7043"/><path d="M12 12c2 0 4 2 4 4" stroke="#FF7043" stroke-width="1.5" fill="none" stroke-linecap="round"/>' },
];

const allSkills: Skill[] = [...languages, ...frameworks, ...mobileAi, ...cloudDb, ...tools, ...hardware];

const skillsByTab: Record<TabKey, Skill[]> = {
  all: allSkills,
  languages,
  frameworks,
  'mobile-ai': mobileAi,
  'cloud-db': cloudDb,
  tools,
  hardware,
};

// No fixed min-height needed — grid naturally sizes to content

export default function SkillsCatalog() {
  const [active, setActive] = useState<TabKey>('all');
  const [tooltip, setTooltip] = useState<string | null>(null);

  const skills = skillsByTab[active];

  return (
    <ScrollReveal>
      <section id="skills" className="mb-28 sm:mb-36 scroll-mt-32">
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Tech Stack</h2>
          <p className="text-purple-300/50 text-sm max-w-xl mx-auto">
            A high-performance toolkit spanning software architecture, cloud infrastructure, and hardware engineering.
          </p>
        </div>

        {/* Tab bar — scrollable on mobile */}
        <div className="flex gap-2 mb-7 overflow-x-auto pb-1 justify-start sm:justify-center" style={{ scrollbarWidth: 'none' }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all border whitespace-nowrap ${
                active === tab.key
                  ? 'bg-purple-500 text-white border-purple-500 shadow-lg shadow-purple-900/50'
                  : 'bg-white/5 border-purple-800/50 text-purple-300/60 hover:border-purple-600 hover:text-purple-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2"
            >
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => setTooltip(skill.name)}
                  onMouseLeave={() => setTooltip(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.18 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    className="w-full aspect-square max-w-[72px] rounded-2xl bg-white/5 border border-purple-800/30 flex items-center justify-center cursor-pointer hover:border-purple-500/60 hover:bg-purple-900/30 hover:shadow-lg hover:shadow-purple-900/30 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="58%"
                      height="58%"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="none"
                      dangerouslySetInnerHTML={{ __html: skill.svg }}
                    />
                  </motion.div>

                  <AnimatePresence>
                    {tooltip === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.13 }}
                        className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#1a1330] border border-purple-700/60 text-white text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap z-20 pointer-events-none shadow-lg"
                      >
                        {skill.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </ScrollReveal>
  );
}

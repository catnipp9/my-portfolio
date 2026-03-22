export interface TechItem {
  category: 'frontend' | 'backend' | 'engineering' | 'design';
  name: string;
  skills: string[];
  icon: string;
  color: string;
}

export interface Project {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  gradient: string;
  link: string;
}

export interface Award {
  title: string;
  org: string;
  year: string;
  icon: string;
  image: string;
  desc: string;
}

export const techStack: TechItem[] = [
  { category: 'frontend', name: 'React Ecosystem', skills: ['React', 'Next.js', 'Redux'], icon: 'Layers', color: 'bg-purple-900/60 text-purple-300' },
  { category: 'frontend', name: 'Styling', skills: ['Tailwind', 'CSS Modules', 'Framer Motion'], icon: 'Palette', color: 'bg-pink-900/60 text-pink-300' },
  { category: 'backend', name: 'Logic & Server', skills: ['Node.js', 'Express', 'REST APIs'], icon: 'Terminal', color: 'bg-indigo-900/60 text-indigo-300' },
  { category: 'backend', name: 'Databases', skills: ['PostgreSQL', 'Firebase', 'MongoDB'], icon: 'Database', color: 'bg-blue-900/60 text-blue-300' },
  { category: 'engineering', name: 'AI & ML', skills: ['Python', 'TensorFlow', 'OpenCV'], icon: 'Cpu', color: 'bg-emerald-900/60 text-emerald-300' },
  { category: 'engineering', name: 'Dev Tools', skills: ['Git', 'Docker', 'Postman'], icon: 'Settings', color: 'bg-slate-700/60 text-slate-300' },
  { category: 'design', name: 'UI Design', skills: ['Figma', 'Canva', 'Adobe XD'], icon: 'Layout', color: 'bg-amber-900/60 text-amber-300' },
  { category: 'design', name: 'Prototyping', skills: ['User Flows', 'Prototyping', 'Design Ops'], icon: 'Sparkles', color: 'bg-rose-900/60 text-rose-300' },
];

export const projects: Project[] = [
  {
    title: 'WildCATrack',
    category: 'Emotion Recognition AI',
    desc: 'A friendly AI system designed to help teachers understand student engagement through emotion detection.',
    tags: ['Python', 'React', 'AI'],
    gradient: 'from-purple-900/80 to-indigo-900/80',
    link: '#',
  },
  {
    title: 'OptiCare',
    category: 'Healthcare Portal',
    desc: 'A clean, accessible platform for managing health appointments with ease and security.',
    tags: ['Next.js', 'PostgreSQL'],
    gradient: 'from-blue-900/80 to-purple-900/80',
    link: '#',
  },
];

export const awards: Award[] = [
  {
    title: "Dean's Lister",
    org: 'University of Tech',
    year: '2024',
    icon: 'Star',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    desc: 'Recognized for consistent academic excellence during the 4th year.',
  },
  {
    title: 'IBM Full Stack Certified',
    org: 'IBM / Coursera',
    year: '2023',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    desc: 'Complete specialization in professional software engineering practices.',
  },
  {
    title: 'Best AI Innovation',
    org: 'Tech Summit',
    year: '2022',
    icon: 'Heart',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    desc: 'Awarded for the WildCATrack project presentation and technical demo.',
  },
];

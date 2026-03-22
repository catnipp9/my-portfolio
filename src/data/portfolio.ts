export interface TechItem {
  category: 'frontend' | 'backend' | 'engineering' | 'design';
  name: string;
  skills: string[];
  icon: string;
  color: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  fit?: 'contain' | 'cover';
  label?: string;
}

export interface ProjectDetail {
  title: string;
  category: string;
  desc: string;
  overview: string;
  role: string[];
  tags: string[];
  gradient: string;
  images: ProjectImage[];
  github?: string;
  live?: string;
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

export const allProjects: ProjectDetail[] = [
  // --- Featured (shown on home, limit=3) ---
  {
    title: 'AI-Enhanced Thermal Imaging System for Early Detection of Diabetic Peripheral Neuropathy',
    category: 'Medical AI · Computer Vision',
    desc: 'A non-invasive AI diagnostic tool using thermal imaging to detect early signs of diabetic peripheral neuropathy.',
    overview:
      'This system combines thermal imaging hardware with a custom-trained deep learning model to identify temperature asymmetries and anomalies indicative of diabetic peripheral neuropathy (DPN) — enabling early, non-invasive screening before symptoms become irreversible. The tool outputs a risk-stratified heatmap overlay and a clinical summary report for healthcare providers.',
    role: ['Researcher', 'Developer'],
    tags: ['React Native', 'TensorFlow', 'OpenCV', 'YOLO11', 'Scikit-Learn', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-transparent to-transparent',
    images: [
      { src: '', alt: 'Ongoing Thesis Project', label: 'ONGOING THESIS PROJECT' },
    ],
    github: 'https://github.com/SeesonLau/vestigia',
    live: '',
  },
  {
    title: 'HanapBuhay',
    category: 'Freelance Marketplace · Web App',
    desc: 'A hyperlocal freelance marketplace connecting skilled workers with clients in underserved Philippine communities.',
    overview:
      'HanapBuhay ("find livelihood" in Filipino) bridges the gap between local skilled workers — carpenters, plumbers, tutors, caregivers — and nearby clients who need them. The platform features verified worker profiles, transparent ratings, in-app messaging, and a geo-based job-matching algorithm tailored to barangay-level proximity.',
    role: ['Full-Stack Developer'],
    tags: ['Next.js', 'PostgreSQL', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-transparent to-transparent',
    images: [
      { src: '/projects/hanapbuhay-logo.png', alt: 'HanapBuhay-logo app', fit: 'contain' },
      { src: '/projects/HanapBuhay.png', alt: 'HanapBuhay app', fit: 'contain' },
    ],
    github: 'https://github.com/SeesonLau/hanapbuhay',
    live: 'https://hanapbuhay.vercel.app/',
  },
  {
    title: 'OptiCare',
    category: 'Healthcare Portal · Web App',
    desc: 'A full-stack optometry clinic portal streamlining patient appointments, records, and prescription management.',
    overview:
      'OptiCare modernizes the optometry clinic experience with a patient-facing booking portal and a staff-facing management dashboard. Patients can schedule consultations, view their prescription history, and receive appointment reminders. Clinic staff manage schedules, update records, and track inventory — all from one unified interface.',
    role: ['Full-Stack Developer'],
    tags: ['Next.js', 'Firebase', 'Javascript', 'Tailwind CSS'],
    gradient: 'from-transparent to-transparent',
    images: [
      { src: '/projects/opticare-logo.png', alt: 'OptiCare-logo app', fit: 'contain' },
      { src: '/projects/OptiCare.png', alt: 'OptiCare portal', fit: 'contain' },
    ],
    github: 'https://github.com/SeesonLau/danledan',
    live: 'https://danledan.vercel.app/',
  },
  {
    title: 'Personal Portfolio',
    category: 'Portfolio · Web App',
    desc: 'The very portfolio you are browsing — a performant, animated showcase of my work and skills.',
    overview:
      'A fully custom portfolio site built from scratch with Astro and React, featuring smooth scroll-based animations, a dynamic skills catalog, an interactive project gallery with modal deep-dives, and a working contact form. Designed with a dark purple aesthetic and optimized for performance across all screen sizes.',
    role: ['Full-Stack Developer'],
    tags: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'from-transparent to-transparent',
    images: [
      { src: '/public/main-logo.png', alt: 'Portfolio preview', fit: 'contain' },
      { src: '/projects/My Portfolio.png', alt: 'Portfolio preview', fit: 'contain' },
      { src: '/projects/Portfolio preview.png', alt: 'Portfolio preview', fit: 'contain' },
    ],
    github: 'https://github.com/catnipp9/my-portfolio',
    live: 'https://jamelh.vercel.app/',
  },

  // --- All Projects only (shown on /projects, no limit) ---
  {
    title: 'MentorMatch',
    category: 'EdTech · Mobile App',
    desc: 'An AI-powered mentor-mentee matchmaking app that pairs students with industry professionals based on goals and skills.',
    overview:
      'MentorMatch uses a compatibility algorithm — weighing career goals, skill gaps, availability, and communication style — to suggest ideal mentor-mentee pairings. Once matched, pairs can track progress through structured milestone sessions, shared resources, and in-app video calls.',
    role: ['Full-Stack Developer'],
    tags: ['.NET MAUI', 'Microsoft Azure SQL', 'C#'],
    gradient: 'from-transparent to-transparent',
    images: [
      { src: '/projects/mentormatch-logo.png', alt: 'MentorMatch-logo app', fit: 'contain' },
      { src: '/projects/MentorMatch.png', alt: 'MentorMatch app', fit: 'contain' },
    ],
    github: 'https://github.com/SeesonLau/ProjectMentorMatch',
    live: '',
  },
  {
    title: 'GearFolio',
    category: 'AI Tools · Career Platform',
    desc: 'An AI-assisted platform that helps students and developers build a standout portfolio and navigate their career path.',
    overview:
      'GearFolio acts as a personal career co-pilot — it analyzes a user\'s skills, projects, and goals, then generates tailored portfolio structures, suggests missing skills, and recommends curated learning resources. Users can publish their portfolio directly from the platform with a custom subdomain.',
    role: ['AI Developer'],
    tags: ['Next.js', 'OpenAI API', 'JavaScript', 'Appwrite', 'Tailwind CSS'],
    gradient: 'from-transparent to-transparent',
    images: [
      { src: '/projects/gearfolio-logo.svg', alt: 'GearFolio platform', fit: 'contain' },
      { src: '/projects/Gearfolio.png', alt: 'GearFolio platform', fit: 'contain' },
      { src: '/projects/Gearfolio App.png', alt: 'GearFolio platform', fit: 'contain' },
    ],
    github: 'https://github.com/ICPEP-SE-CITU/GearFolio',
    live: '',
  },
  {
    title: 'IRON MYAN',
    category: 'Robotics · Embedded Systems',
    desc: 'A self-navigating robotic cat that autonomously waters household plants using sensor-based soil moisture detection.',
    overview:
      'IRON MYAN is an autonomous plant-care robot designed around a cat aesthetic. It uses ultrasonic sensors for obstacle avoidance, a soil moisture sensor array to identify which plants need water, and a servo-driven watering mechanism. A companion mobile app displays plant health logs and lets users set watering schedules or trigger manual runs.',
    role: ['Firmware Developer', 'Hardware Developer'],
    tags: ['C++', 'Arduino', 'EAGLE', 'Embedded Systems'],
    gradient: 'from-transparent to-transparent',
    images: [
      { src: '/projects/ironmyan-logo.png', alt: 'IRON MYAN robot', fit: 'contain' },
      { src: '/projects/Iron-myan.jpg', alt: 'IRON MYAN robot', fit: 'contain' },
      { src: '/projects/IronMyan.png', alt: 'IRON MYAN robot', fit: 'contain' },
    ],
  },
];

export const awards: Award[] = [
  {
    title: "Dean's Lister",
    org: 'Cebu Institute of Technology University',
    year: '2022–2026',
    icon: 'Star',
    image: '/certificates/CIT Logo.png',
    desc: 'Recognized for consistent academic excellence from 1st to 4th year — maintaining Dean\'s List standing throughout the entire Computer Engineering program.',
  },
  {
    title: 'IBM Full Stack Developer Professional Certificate',
    org: 'IBM / Coursera',
    year: '2026',
    icon: 'ShieldCheck',
    image: '/certificates/IBM Full Stack Developer_Certificate.png',
    desc: 'Completed 15 specialization courses covering HTML, CSS, JavaScript, React, Node.js, Python, Django, Docker, Kubernetes, CI/CD, and cloud-native development. Deployed multiple applications and delivered a capstone SaaS project.',
  },
  {
    title: 'Software QA Intern Certificate of Completion',
    org: 'Arielus Software Inc.',
    year: '2025',
    icon: 'ShieldCheck',
    image: '/certificates/Arielus_Certificate.png',
    desc: 'Completed a software quality assurance internship — performing regression, smoke, and functional testing; building automated test cases with Selenium; and managing defects in Azure DevOps.',
  },
  {
    title: 'Mastering PCB Design and Layout',
    org: 'Coursera',
    year: '2026',
    icon: 'ShieldCheck',
    image: '/certificates/Mastering PCB Design and Layout_Certificate.png',
    desc: 'Completed 3-course certification in professional PCB development — covering layout fundamentals, high-speed signal routing, EMI mitigation, Design for Manufacturability, and fabrication file generation using KiCAD.',
  },
  {
    title: 'Prompt Engineering Specialization',
    org: 'Coursera',
    year: '2026',
    icon: 'ShieldCheck',
    image: '/certificates/Prompt Engineering_Certificate.png',
    desc: 'Developed expertise in prompt engineering for generative AI systems. Gained hands-on skills in instructing large language models, automating complex tasks, and integrating AI into real workflows.',
  },
  {
    title: 'Mastering KiCAD: Open-Source PCB Design for Beginners',
    org: 'Coursera',
    year: '2026',
    icon: 'ShieldCheck',
    image: '/certificates/Mastering KiCAD_Certificate.png',
    desc: 'Certified in KiCAD PCB design covering schematic & layout design, multilayer PCB, SMT & THT components, PCB panelization, and Design for Manufacturing principles.',
  },
  {
    title: 'Web Development Fundamentals',
    org: 'Coursera',
    year: '2026',
    icon: 'ShieldCheck',
    image: '/certificates/Web Development Fundamentals_Certificate.png',
    desc: 'Certified in full-cycle web development covering front-end, back-end, SDLC, software testing, deployment, and DevOps practices.',
  },
];

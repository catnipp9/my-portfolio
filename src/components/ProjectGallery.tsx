import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal.tsx';

interface ProjectImage {
  src: string;
  alt: string;
  /** 'contain' to show the full image (good for app screenshots), 'cover' to fill (good for landscape photos) */
  fit?: 'contain' | 'cover';
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
      { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200', alt: 'Thermal imaging dashboard' },
      { src: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200', alt: 'AI heatmap analysis' },
      { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200', alt: 'Clinical report view' },
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

function ImageCarousel({ images }: { images: ProjectImage[] }) {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full h-full bg-[#0d0a16] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={images[idx].src}
          alt={images[idx].alt}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          className={`w-full h-full ${images[idx].fit === 'contain' ? 'object-contain p-4' : 'object-cover'}`}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0d0a16]/75 backdrop-blur border border-purple-700/40 flex items-center justify-center text-white hover:bg-purple-800/60 transition-all">
            <ChevronLeft size={16} />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0d0a16]/75 backdrop-blur border border-purple-700/40 flex items-center justify-center text-white hover:bg-purple-800/60 transition-all">
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'bg-purple-400 w-5' : 'bg-white/25 w-1.5'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

interface Props {
  /** How many projects to show. Undefined = show all. */
  limit?: number;
  showViewAll?: boolean;
  showHeader?: boolean;
}

export default function ProjectGallery({ limit, showViewAll = false, showHeader = true }: Props) {
  const [selected, setSelected] = useState<ProjectDetail | null>(null);
  const displayed = limit ? allProjects.slice(0, limit) : allProjects;

  return (
    <ScrollReveal>
      <section id="work" className={`${showHeader ? 'mb-28 sm:mb-36' : 'mb-4'} scroll-mt-32`}>
        {showHeader && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Projects</h2>
              <p className="text-purple-300/40 text-xs mt-1">Click any card to explore details</p>
            </div>
            {showViewAll && (
              <a
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors group"
              >
                View all projects
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="group-hover:translate-x-0.5 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            )}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayed.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group cursor-pointer"
              onClick={() => setSelected(project)}
            >
              <div className={`aspect-[4/3] rounded-[2rem] bg-gradient-to-br ${project.gradient} mb-4 overflow-hidden relative border border-purple-800/20 group-hover:shadow-2xl group-hover:shadow-purple-900/50 transition-shadow`}>
                <img
                  src={project.images[0].src}
                  alt={project.title}
                  className={`w-full h-full opacity-40 group-hover:opacity-80 transition-all duration-500 ${project.images[0].fit === 'contain' ? 'object-contain p-6' : 'object-cover group-hover:scale-105'}`}
                />
                <div className="absolute top-3 right-3 w-9 h-9 bg-white/10 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-1.5 group-hover:translate-y-0">
                  <ExternalLink size={14} className="text-white" />
                </div>
              </div>
              <div className="px-1">
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">{project.category}</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1 mb-1.5 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                <p className="text-purple-200/45 mb-3 leading-relaxed text-xs line-clamp-2">{project.desc}</p>
                <div className="flex gap-1.5 flex-wrap">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] font-bold px-2.5 py-1 bg-white/5 border border-purple-800/50 text-purple-300/55 rounded-full group-hover:border-purple-600/50 group-hover:text-purple-300 transition-all">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-bold px-2.5 py-1 bg-white/5 border border-purple-800/50 text-purple-300/35 rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
            >
              <motion.div
                className="absolute inset-0 bg-[#0d0a16]/88 backdrop-blur-sm"
                onClick={() => setSelected(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 24 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                className="relative bg-[#120e1f] border border-purple-800/40 w-full max-w-5xl max-h-[92vh] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
              >
                <button
                  className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 w-9 h-9 bg-purple-900/70 border border-purple-700/50 rounded-full flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-800/70 transition-all active:scale-90"
                  onClick={() => setSelected(null)}
                >
                  <X size={16} />
                </button>

                <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">
                  {/* Carousel */}
                  <div className="lg:w-[55%] h-52 sm:h-64 lg:h-auto shrink-0">
                    <ImageCarousel images={selected.images} />
                  </div>

                  {/* Details */}
                  <div className="lg:w-[45%] p-5 sm:p-7 flex flex-col gap-4 overflow-y-auto">
                    <div>
                      <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">{selected.category}</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{selected.title}</h3>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-1.5">Overview</h4>
                      <p className="text-purple-200/55 leading-relaxed text-xs sm:text-sm">{selected.overview}</p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-2">My Role</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selected.role.map((r) => (
                          <span key={r} className="text-[10px] font-bold px-2.5 py-1 bg-purple-900/50 border border-purple-700/50 text-purple-300 rounded-full">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selected.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-bold px-2.5 py-1 bg-purple-900/50 border border-purple-700/50 text-purple-300 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2.5 mt-auto pt-1">
                      {selected.github && (
                        <a
                          href={selected.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-purple-700/50 text-purple-300 rounded-full text-xs font-bold hover:bg-purple-900/40 hover:border-purple-500 transition-all"
                        >
                          <Github size={14} /> Source Code
                        </a>
                      )}
                      {selected.live && (
                        <a
                          href={selected.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-full text-xs font-bold hover:bg-purple-400 transition-all"
                        >
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </ScrollReveal>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal.tsx';

interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectDetail {
  title: string;
  category: string;
  desc: string;
  overview: string;
  role: string;
  tags: string[];
  gradient: string;
  images: ProjectImage[];
  github?: string;
  live?: string;
}

export const allProjects: ProjectDetail[] = [
  {
    title: 'WildCATrack',
    category: 'Emotion Recognition AI',
    desc: 'A friendly AI system designed to help teachers understand student engagement through emotion detection.',
    overview:
      'WildCATrack is a real-time classroom engagement tool that uses computer vision and deep learning to detect student emotions during online or in-person classes. Teachers receive a live dashboard showing engagement levels, helping them adapt their teaching in real time.',
    role: 'Led the full-stack development including the React frontend dashboard, Python-based emotion recognition pipeline using OpenCV and TensorFlow, and REST API integration between the AI model and the web interface.',
    tags: ['Python', 'React', 'TensorFlow', 'OpenCV', 'FastAPI', 'WebSockets'],
    gradient: 'from-purple-900/80 to-indigo-900/80',
    images: [
      { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200', alt: 'WildCATrack dashboard' },
      { src: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1200', alt: 'Emotion detection feed' },
      { src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200', alt: 'Analytics view' },
    ],
    github: 'https://github.com/',
    live: '',
  },
  {
    title: 'OptiCare',
    category: 'Healthcare Portal',
    desc: 'A clean, accessible platform for managing health appointments with ease and security.',
    overview:
      'OptiCare is a full-featured healthcare management portal that allows patients to book, manage, and track their medical appointments. It includes a doctor-facing dashboard, real-time notifications, and a secure patient record system.',
    role: 'Designed and developed the full frontend in Next.js with a focus on accessibility (WCAG 2.1 AA). Built the appointment scheduling API with PostgreSQL and implemented role-based authentication using NextAuth.',
    tags: ['Next.js', 'PostgreSQL', 'NextAuth', 'Prisma', 'Tailwind CSS'],
    gradient: 'from-blue-900/80 to-purple-900/80',
    images: [
      { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200', alt: 'OptiCare home' },
      { src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=1200', alt: 'Appointment dashboard' },
    ],
    github: 'https://github.com/',
    live: '',
  },
  {
    title: 'LuminarAI',
    category: 'Creative Tools',
    desc: 'An AI-powered design companion that generates UI palettes and layout suggestions from natural language.',
    overview:
      'LuminarAI helps designers accelerate ideation by converting natural-language prompts into structured design tokens, color palettes, and component layout recommendations ready to paste into Figma.',
    role: 'Built the prompt engineering pipeline, integrated the OpenAI API, and designed the Figma plugin interface using Figma Plugin API and React.',
    tags: ['React', 'OpenAI API', 'Figma Plugin', 'Node.js', 'TypeScript'],
    gradient: 'from-rose-900/80 to-purple-900/80',
    images: [
      { src: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&q=80&w=1200', alt: 'LuminarAI interface' },
      { src: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=1200', alt: 'Palette generation' },
    ],
    github: 'https://github.com/',
    live: '',
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
          className="w-full h-full object-cover"
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
}

export default function ProjectGallery({ limit, showViewAll = false }: Props) {
  const [selected, setSelected] = useState<ProjectDetail | null>(null);
  const displayed = limit ? allProjects.slice(0, limit) : allProjects;

  return (
    <ScrollReveal>
      <section id="work" className="mb-28 sm:mb-36 scroll-mt-32">
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
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
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
                      <h4 className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-1.5">My Role</h4>
                      <p className="text-purple-200/55 leading-relaxed text-xs sm:text-sm">{selected.role}</p>
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

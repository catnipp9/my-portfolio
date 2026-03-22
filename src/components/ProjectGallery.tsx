import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectDetail {
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

const projects: ProjectDetail[] = [
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
    live: '#',
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
    live: '#',
  },
];

function ImageCarousel({ images }: { images: ProjectImage[] }) {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full h-full bg-purple-950 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={images[idx].src}
          alt={images[idx].alt}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0d0a16]/70 backdrop-blur border border-purple-700/40 flex items-center justify-center text-white hover:bg-purple-800/60 transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0d0a16]/70 backdrop-blur border border-purple-700/40 flex items-center justify-center text-white hover:bg-purple-800/60 transition-all"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? 'bg-purple-400 w-4' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectGallery() {
  const [selected, setSelected] = useState<ProjectDetail | null>(null);

  return (
    <section id="work" className="mb-32 sm:mb-40">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Sweet Projects</h2>
        <span className="text-xs text-purple-400/60 font-medium">Click a project to explore</span>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group cursor-pointer"
            onClick={() => setSelected(project)}
          >
            {/* Preview card */}
            <div
              className={`aspect-[4/3] rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br ${project.gradient} mb-5 p-8 sm:p-10 flex items-center justify-center overflow-hidden relative border border-purple-800/20 shadow-sm group-hover:shadow-2xl group-hover:shadow-purple-900/50 transition-shadow`}
            >
              <div className="w-full h-full bg-white/5 backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center border border-white/10">
                <img
                  src={project.images[0].src}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-[1.5rem] sm:rounded-[2rem] opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                />
              </div>
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <ExternalLink size={16} className="text-white" />
              </div>
            </div>

            <div className="px-2">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">{project.category}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5 mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
              <p className="text-purple-200/50 mb-4 leading-relaxed text-sm line-clamp-2">{project.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-white/5 border border-purple-800/50 text-purple-300/60 rounded-full group-hover:border-purple-600/50 group-hover:text-purple-300 transition-all">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[10px] font-bold px-3 py-1 bg-white/5 border border-purple-800/50 text-purple-300/40 rounded-full">
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0d0a16]/85 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            {/* Modal box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative bg-[#120e1f] border border-purple-800/40 w-full max-w-5xl max-h-[92vh] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Close */}
              <button
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-purple-900/70 border border-purple-700/50 rounded-full flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-800/70 transition-all active:scale-90"
                onClick={() => setSelected(null)}
              >
                <X size={18} />
              </button>

              <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">
                {/* Image carousel */}
                <div className="lg:w-1/2 h-56 sm:h-72 lg:h-auto shrink-0">
                  <ImageCarousel images={selected.images} />
                </div>

                {/* Details */}
                <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col gap-5 overflow-y-auto">
                  <div>
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">{selected.category}</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">{selected.title}</h3>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">Overview</h4>
                    <p className="text-purple-200/60 leading-relaxed text-sm">{selected.overview}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">My Role</h4>
                    <p className="text-purple-200/60 leading-relaxed text-sm">{selected.role}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-bold px-3 py-1.5 bg-purple-900/50 border border-purple-700/50 text-purple-300 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto pt-2">
                    {selected.github && (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-purple-700/50 text-purple-300 rounded-full text-sm font-bold hover:bg-purple-900/40 hover:border-purple-500 transition-all"
                      >
                        <Github size={16} /> GitHub
                      </a>
                    )}
                    {selected.live && selected.live !== '#' && (
                      <a
                        href={selected.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-purple-500 text-white rounded-full text-sm font-bold hover:bg-purple-400 transition-all"
                      >
                        <ExternalLink size={16} /> Live Demo
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
  );
}

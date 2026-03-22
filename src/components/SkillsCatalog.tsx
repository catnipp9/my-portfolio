import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'engineering' | 'design';
  color: string;
  // SVG path(s) for the icon
  svg: string;
}

const skills: Skill[] = [
  // Frontend
  {
    name: 'React', category: 'frontend', color: '#61DAFB',
    svg: '<circle cx="12" cy="12" r="2.5"/><path d="M12 2C6.48 2 2 6.92 2 12c0 5.08 4.48 10 10 10s10-4.92 10-10C22 6.92 17.52 2 12 2zm0 16.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/>',
  },
  {
    name: 'Next.js', category: 'frontend', color: '#ffffff',
    svg: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4-8l-4 5V8h2v3.5L16 8h2l-3 4 3 4h-2l-2-2z"/>',
  },
  {
    name: 'TypeScript', category: 'frontend', color: '#3178C6',
    svg: '<rect x="2" y="2" width="20" height="20" rx="3"/><path d="M10 12H8v-1.5h5V12h-2v5h-1V12zm4.5 5v-1.1c.4.2.9.4 1.5.4.6 0 1-.3 1-.7 0-.4-.3-.6-1-.9-1-.4-1.5-.9-1.5-1.7 0-1 .8-1.6 2-1.6.6 0 1.1.1 1.4.3v1.1c-.3-.2-.8-.4-1.3-.4-.5 0-.9.2-.9.6 0 .4.3.5 1.1.9 1 .4 1.4.9 1.4 1.7 0 1-.8 1.6-2.1 1.6-.7 0-1.3-.1-1.6-.3z" fill="white"/>',
  },
  {
    name: 'Tailwind CSS', category: 'frontend', color: '#38BDF8',
    svg: '<path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15C19.67 12 21.33 10.67 22 8c-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.51 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 17.15 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 12.85 9.51 12 7 12z"/>',
  },
  {
    name: 'Redux', category: 'frontend', color: '#764ABC',
    svg: '<path d="M16.63 16.63c.39-1.18.24-2.48-.4-3.47.64-1.9.4-4.02-.67-5.71C14.19 5.35 11.84 4 9.28 4c-1.15 0-2.27.3-3.26.85C5.28 4.31 4.46 4 3.62 4 2.17 4 1 5.17 1 6.62c0 .84.4 1.62 1.05 2.12-.64 1.9-.4 4.02.67 5.71C4.09 16.65 6.44 18 9 18c1.15 0 2.27-.3 3.26-.85.74.54 1.56.85 2.4.85 1.45 0 2.62-1.17 2.62-2.62 0-.28-.04-.55-.12-.8l-.53.05zM9 16.5c-2.07 0-3.75-1.68-3.75-3.75S6.93 9 9 9s3.75 1.68 3.75 3.75S11.07 16.5 9 16.5zm6.66-1.59c-.18.54-.66.91-1.22.91-.47 0-.91-.2-1.22-.55.78-.82 1.27-1.92 1.27-3.15 0-2.9-2.35-5.25-5.25-5.25-1.53 0-2.9.65-3.87 1.69-.04-.27-.06-.54-.06-.81C5.31 6.16 6.97 4.5 9 4.5c2.03 0 3.69 1.66 3.69 3.69 0 .74-.22 1.43-.59 2.01.52.4.96.9 1.27 1.48.56-.29 1.2-.43 1.87-.4.32 0 .63.04.93.11l.01.02c.13.36.2.74.2 1.13 0 .93-.4 1.77-1.06 2.37h-.36z"/>',
  },
  {
    name: 'Framer Motion', category: 'frontend', color: '#FF4D4D',
    svg: '<path d="M4 4h8v8H4zM4 12h4l4 8H4z"/><path d="M12 4l8 8h-8z"/>',
  },
  // Backend
  {
    name: 'Node.js', category: 'backend', color: '#68A063',
    svg: '<path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.18L19 8.5v7L12 19.82 5 15.5v-7L12 4.18zm0 2.32L7 9.5v5l5 2.82 5-2.82v-5L12 6.5z"/>',
  },
  {
    name: 'Express', category: 'backend', color: '#aaaaaa',
    svg: '<path d="M3 9h18M3 15h18M12 3v18" stroke-width="2" stroke-linecap="round"/>',
  },
  {
    name: 'PostgreSQL', category: 'backend', color: '#336791',
    svg: '<ellipse cx="12" cy="8" rx="7" ry="4"/><path d="M5 8v8c0 2.21 3.13 4 7 4s7-1.79 7-4V8"/><path d="M5 12c0 2.21 3.13 4 7 4s7-1.79 7-4"/>',
  },
  {
    name: 'Firebase', category: 'backend', color: '#FFCA28',
    svg: '<path d="M5.71 16.27L6.68 3l4.54 8.46L5.71 16.27zM13.63 6.69l-1.38-2.6a.4.4 0 00-.7 0L8.94 8.9l4.69-2.21zM18.29 16.27l-2.62-11.8a.42.42 0 00-.77-.09l-8.19 11.89L12 19.88l6.29-3.61z"/>',
  },
  {
    name: 'MongoDB', category: 'backend', color: '#47A248',
    svg: '<path d="M12 2C8.5 2 6 6 6 10c0 3.75 2.5 6.5 5.5 7.5V22h1v-4.5C15.5 16.5 18 13.75 18 10c0-4-2.5-8-6-8zm.5 15.5V20h-1v-2.5C9.5 16.5 7 14 7 10c0-3.5 2-7 5-7s5 3.5 5 7c0 4-2.5 6.5-4.5 7.5z"/>',
  },
  {
    name: 'REST APIs', category: 'backend', color: '#00B8D9',
    svg: '<path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9 9a9 9 0 019-9"/>',
  },
  // Engineering
  {
    name: 'Python', category: 'engineering', color: '#3776AB',
    svg: '<path d="M12 2C9.24 2 7 3.34 7 5v2h5v1H5.5C3.57 8 2 9.79 2 12s1.57 4 3.5 4H7v-2.5c0-1.93 2.24-3.5 5-3.5s5 1.57 5 3.5V16h1.5c1.93 0 3.5-1.79 3.5-4s-1.57-4-3.5-4H17V6c0-1.66-2.24-3-5-3V2zm-1.5 2.5a1 1 0 110 2 1 1 0 010-2zM7 12v2.5c0 1.66 2.24 3 5 3s5-1.34 5-3V12H7zm6.5 2.5a1 1 0 110 2 1 1 0 010-2z"/>',
  },
  {
    name: 'TensorFlow', category: 'engineering', color: '#FF6F00',
    svg: '<path d="M12 2L2 7v10l10 5 10-5V7L12 2zm-1 13.5v-5L7 13V8.5l4-2v5l4-2.5V4.5l-3-1.5L5.5 6v10L12 19.5V17l-1-1.5z"/>',
  },
  {
    name: 'OpenCV', category: 'engineering', color: '#5C3EE8',
    svg: '<circle cx="8" cy="8" r="4"/><circle cx="16" cy="8" r="4"/><circle cx="12" cy="16" r="4"/>',
  },
  {
    name: 'Git', category: 'engineering', color: '#F05032',
    svg: '<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M8.5 6H15.5M6 8.5V15.5M8.5 15.5L15.5 8.5"/>',
  },
  {
    name: 'Docker', category: 'engineering', color: '#2496ED',
    svg: '<rect x="2" y="10" width="4" height="3" rx="0.5"/><rect x="7" y="10" width="4" height="3" rx="0.5"/><rect x="12" y="10" width="4" height="3" rx="0.5"/><rect x="7" y="6" width="4" height="3" rx="0.5"/><rect x="12" y="6" width="4" height="3" rx="0.5"/><path d="M2 13.5s1-1 3-1c2 0 2.5 1.5 4.5 1.5S12 12.5 14 12.5c2 0 3.5 1 5 1l.5-1c-1.5-1-3-1.5-5.5-1.5-2 0-3 1.5-4.5 1.5S7 11 5 11C3 11 2 12 2 12v1.5z"/>',
  },
  // Design
  {
    name: 'Figma', category: 'design', color: '#F24E1E',
    svg: '<path d="M8 2h8a4 4 0 010 8H8V2z"/><path d="M8 10h4a4 4 0 010 8H8v-8z"/><path d="M8 18a4 4 0 100 4v-4z"/><circle cx="16" cy="14" r="4"/>',
  },
  {
    name: 'Adobe XD', category: 'design', color: '#FF61F6',
    svg: '<rect x="2" y="2" width="20" height="20" rx="4"/><path d="M14 7l3 5-3 5M10 7L7 12l3 5" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
  },
  {
    name: 'Canva', category: 'design', color: '#00C4CC',
    svg: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4" fill="white"/>',
  },
];

type Category = 'all' | 'frontend' | 'backend' | 'engineering' | 'design';

const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Front End' },
  { key: 'backend', label: 'Back End' },
  { key: 'engineering', label: 'Engineering' },
  { key: 'design', label: 'Design' },
];

export default function SkillsCatalog() {
  const [active, setActive] = useState<Category>('all');
  const [tooltip, setTooltip] = useState<string | null>(null);

  const filtered = active === 'all' ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="mb-32 sm:mb-40">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">My Toolbox</h2>
        <p className="text-purple-300/50 text-sm sm:text-base">The ingredients for my digital recipes</p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all border ${
              active === cat.key
                ? 'bg-purple-500 text-white border-purple-500 shadow-lg shadow-purple-900/50'
                : 'bg-white/5 border-purple-800/50 text-purple-300/60 hover:border-purple-600 hover:text-purple-300'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Icon grid */}
      <motion.div
        layout
        className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 sm:gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setTooltip(skill.name)}
              onMouseLeave={() => setTooltip(null)}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-purple-800/30 flex items-center justify-center cursor-pointer hover:border-purple-500/60 hover:bg-purple-900/30 hover:shadow-lg hover:shadow-purple-900/30 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={skill.color}
                  stroke="none"
                  dangerouslySetInnerHTML={{ __html: skill.svg }}
                />
              </motion.div>

              {/* Tooltip */}
              <AnimatePresence>
                {tooltip === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute -top-9 left-1/2 -translate-x-1/2 bg-purple-900 border border-purple-700/60 text-white text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap z-10 pointer-events-none"
                  >
                    {skill.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

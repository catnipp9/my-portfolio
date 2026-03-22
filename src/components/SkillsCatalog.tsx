import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal.tsx';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'engineering' | 'design';
  color: string;
  svg: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', color: '#61DAFB', svg: '<circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.5" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.5" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.5" fill="none" transform="rotate(120 12 12)"/>' },
  { name: 'Next.js', category: 'frontend', color: '#ffffff', svg: '<path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.448 3.81 20.239.022 15.89.007 15.527-.005 11.69-.002 11.572 0z" fill="white" stroke="none" transform="scale(0.85) translate(1.8 1.8)"/>' },
  { name: 'TypeScript', category: 'frontend', color: '#3178C6', svg: '<rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6"/><text x="4" y="17" font-size="11" font-weight="bold" fill="white" font-family="sans-serif">TS</text>' },
  { name: 'Tailwind CSS', category: 'frontend', color: '#38BDF8', svg: '<path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15C19.67 12 21.33 10.67 22 8c-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.51 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 17.15 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 12.85 9.51 12 7 12z" fill="#38BDF8" stroke="none"/>' },
  { name: 'Redux', category: 'frontend', color: '#764ABC', svg: '<path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.044-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 0 0-1.648 1.769c.044.479.209.883.479 1.183-1.016 2.019-2.574 3.509-4.899 4.739-1.569.84-3.212 1.154-4.84.93-1.33-.195-2.379-.81-3.036-1.798-.959-1.499-1.047-3.107-.239-4.739.584-1.154 1.509-2.019 2.094-2.468a9.858 9.858 0 0 1-.194-1.798c-1.39.999-2.484 2.348-2.994 3.867-.705 2.109-.239 4.128 1.195 5.821 1.075 1.243 2.739 1.918 4.569 1.918.524 0 1.063-.045 1.589-.164 3.396-.66 5.985-2.724 7.194-5.657zm2.139-3.953c-2.006-2.348-4.964-3.637-8.345-3.637h-.419c-.225-.479-.718-.794-1.27-.794h-.061c-.959 0-1.709.779-1.664 1.739.044.914.796 1.648 1.709 1.648h.06a1.709 1.709 0 0 0 1.6-1.154h.465c1.993 0 3.877.554 5.595 1.648 1.315.84 2.26 1.948 2.814 3.298.479 1.109.449 2.203-.045 3.107-.734 1.348-1.948 2.083-3.577 2.083-1.046 0-2.054-.314-2.563-.554-.36.329-.99.854-1.44 1.183.9.404 1.813.629 2.698.629 2.004 0 3.502-.999 4.313-2.498.87-1.618.78-4.279-1.87-6.698zm-14.1 5.402c.044.914.796 1.648 1.709 1.648h.06a1.71 1.71 0 0 0 1.649-1.769c-.044-.914-.796-1.648-1.709-1.648h-.061c-.06 0-.135.015-.194.03-.45-1.454-.525-2.918-.209-4.323.225-1.003.734-1.873 1.45-2.53.599-.569 1.749-1.138 2.953-1.168.63 0 1.39.209 1.964.524.36-.329.99-.869 1.44-1.198-.899-.404-1.813-.644-2.713-.644-3.172.015-6.219 2.169-7.15 5.162-.569 1.843-.33 3.807.614 5.491a1.557 1.557 0 0 0-.803 1.424z" fill="#764ABC" stroke="none"/>' },
  { name: 'Framer Motion', category: 'frontend', color: '#FF4D4D', svg: '<path d="M4 4h8v8H4zM4 12h4l4 8H4z" fill="#FF4D4D" stroke="none"/><path d="M12 4l8 8h-8z" fill="#FF4D4D" stroke="none"/>' },
  // Backend
  { name: 'Node.js', category: 'backend', color: '#68A063', svg: '<path d="M12 2.04L3.29 6.96l-.01 9.96 8.72 4.96 8.72-4.96V6.96L12 2.04zm-1 15.32l-5.72-3.25V8.89L12 12.16V17.36zm1-6.56L5.85 7.53 12 4.04l6.15 3.49L12 10.8zm7 5.31l-5.72 3.25V12.16l5.72-3.27v6.22z" fill="#68A063" stroke="none"/>' },
  { name: 'Express', category: 'backend', color: '#aaaaaa', svg: '<path d="M3 8h18M3 12h18M3 16h10" stroke="#aaaaaa" stroke-width="2" stroke-linecap="round" fill="none"/>' },
  { name: 'PostgreSQL', category: 'backend', color: '#336791', svg: '<ellipse cx="12" cy="7" rx="7" ry="4" fill="none" stroke="#336791" stroke-width="1.5"/><path d="M5 7v10c0 2.21 3.13 4 7 4s7-1.79 7-4V7" fill="none" stroke="#336791" stroke-width="1.5"/><path d="M5 12c0 2.21 3.13 4 7 4s7-1.79 7-4" fill="none" stroke="#336791" stroke-width="1.5"/>' },
  { name: 'Firebase', category: 'backend', color: '#FFCA28', svg: '<path d="M5.71 16.27L6.68 3l4.54 8.46L5.71 16.27z" fill="#FFCA28" stroke="none"/><path d="M13.63 6.69l-1.38-2.6a.4.4 0 00-.7 0L8.94 8.9l4.69-2.21z" fill="#FFA000" stroke="none"/><path d="M18.29 16.27l-2.62-11.8a.42.42 0 00-.77-.09l-8.19 11.89L12 19.88l6.29-3.61z" fill="#F57C00" stroke="none"/>' },
  { name: 'MongoDB', category: 'backend', color: '#47A248', svg: '<path d="M12 2C9 2 7 6 7 10c0 3.5 2 6 4.5 7.2V22h1v-4.8C15 16 17 13.5 17 10c0-4-2-8-5-8z" fill="#47A248" stroke="none"/><path d="M12 14v8" stroke="#47A248" stroke-width="1.5" fill="none"/>' },
  { name: 'REST APIs', category: 'backend', color: '#00B8D9', svg: '<path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9 9a9 9 0 019-9" stroke="#00B8D9" stroke-width="1.5" fill="none"/>' },
  // Engineering
  { name: 'Python', category: 'engineering', color: '#3776AB', svg: '<path d="M12 2C9.24 2 7 3.34 7 5v2h5v1H5.5C3.57 8 2 9.79 2 12s1.57 4 3.5 4H7v-2.5c0-1.93 2.24-3.5 5-3.5s5 1.57 5 3.5V16h1.5c1.93 0 3.5-1.79 3.5-4s-1.57-4-3.5-4H17V6c0-1.66-2.24-3-5-3V2z" fill="#3776AB" stroke="none"/><circle cx="10.5" cy="4.5" r="1" fill="#FFD43B" stroke="none"/><circle cx="13.5" cy="19.5" r="1" fill="#FFD43B" stroke="none"/>' },
  { name: 'TensorFlow', category: 'engineering', color: '#FF6F00', svg: '<path d="M12 2L4 6.5V12l8 4.5L20 12V6.5L12 2z" fill="none" stroke="#FF6F00" stroke-width="1.5"/><path d="M12 2v14.5M4 6.5l8 4M20 6.5l-8 4" stroke="#FF6F00" stroke-width="1.5" fill="none"/>' },
  { name: 'OpenCV', category: 'engineering', color: '#5C3EE8', svg: '<circle cx="8" cy="8" r="4" fill="none" stroke="#5C3EE8" stroke-width="1.5"/><circle cx="16" cy="8" r="4" fill="none" stroke="#E83E3E" stroke-width="1.5"/><circle cx="12" cy="16" r="4" fill="none" stroke="#3EE85C" stroke-width="1.5"/>' },
  { name: 'Git', category: 'engineering', color: '#F05032', svg: '<circle cx="6" cy="6" r="2" fill="#F05032"/><circle cx="18" cy="6" r="2" fill="#F05032"/><circle cx="6" cy="18" r="2" fill="#F05032"/><path d="M8 6h8M6 8v8M8 15.5L15.5 8" stroke="#F05032" stroke-width="1.5" fill="none" stroke-linecap="round"/>' },
  { name: 'Docker', category: 'engineering', color: '#2496ED', svg: '<rect x="2" y="9" width="4" height="3" rx="0.5" fill="#2496ED"/><rect x="7" y="9" width="4" height="3" rx="0.5" fill="#2496ED"/><rect x="12" y="9" width="4" height="3" rx="0.5" fill="#2496ED"/><rect x="7" y="5" width="4" height="3" rx="0.5" fill="#2496ED"/><rect x="12" y="5" width="4" height="3" rx="0.5" fill="#2496ED"/><path d="M2 12.5s1-.5 3-.5 2.5 1 4.5 1S13 11.5 15 11.5c2 0 3.5.5 5 .5l.5-1C19 10 17.5 9.5 15 9.5c-2 0-3 1-4.5 1S8 9 6 9C4 9 2 10 2 10v2.5z" fill="#2496ED" stroke="none"/>' },
  // Design
  { name: 'Figma', category: 'design', color: '#F24E1E', svg: '<path d="M8 2h8a4 4 0 010 8H8V2z" fill="#F24E1E" stroke="none"/><path d="M8 10h4a4 4 0 010 8H8v-8z" fill="#A259FF" stroke="none"/><path d="M8 18a4 4 0 100 4v-4z" fill="#0ACF83" stroke="none"/><circle cx="16" cy="14" r="4" fill="#1ABCFE" stroke="none"/>' },
  { name: 'Adobe XD', category: 'design', color: '#FF61F6', svg: '<rect x="2" y="2" width="20" height="20" rx="4" fill="#FF61F6"/><path d="M14 7l3 5-3 5M10 7L7 12l3 5" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/>' },
  { name: 'Canva', category: 'design', color: '#00C4CC', svg: '<circle cx="12" cy="12" r="10" fill="#00C4CC" stroke="none"/><circle cx="12" cy="12" r="4" fill="white" stroke="none"/>' },
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
    <ScrollReveal>
      <section id="skills" className="mb-28 sm:mb-36 scroll-mt-32">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">My Toolbox</h2>
          <p className="text-purple-300/50 text-sm">The ingredients for my digital recipes</p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all border ${
                active === cat.key
                  ? 'bg-purple-500 text-white border-purple-500 shadow-lg shadow-purple-900/50'
                  : 'bg-white/5 border-purple-800/50 text-purple-300/60 hover:border-purple-600 hover:text-purple-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Icon grid — high density */}
        <motion.div
          layout
          className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-10 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                layoutId={skill.name}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setTooltip(skill.name)}
                onMouseLeave={() => setTooltip(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.18 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-purple-800/30 flex items-center justify-center cursor-pointer hover:border-purple-500/60 hover:bg-purple-900/30 hover:shadow-lg hover:shadow-purple-900/30 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="none"
                    dangerouslySetInnerHTML={{ __html: skill.svg }}
                  />
                </motion.div>

                {/* Tooltip */}
                <AnimatePresence>
                  {tooltip === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#1a1330] border border-purple-700/60 text-white text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap z-20 pointer-events-none shadow-lg"
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
    </ScrollReveal>
  );
}

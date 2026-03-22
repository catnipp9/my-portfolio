import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
}

export default function SparkleButton() {
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleClick = () => {
    const newParticles: Particle[] = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 60,
      y: (Math.random() - 0.5) * 60,
      angle: (i / 8) * 360,
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 700);
  };

  return (
    <div className="relative flex items-center justify-center">
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.3, rotate: 20 }}
        whileTap={{ scale: 0.9, rotate: -10 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        className="w-10 h-10 flex items-center justify-center bg-purple-900/80 backdrop-blur border border-purple-700/50 rounded-2xl shadow-lg cursor-pointer focus:outline-none"
        aria-label="Sparkle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-300"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
          <path d="M3 5h4" />
          <path d="M17 19h4" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{ opacity: 0, x: p.x, y: p.y, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute w-2 h-2 rounded-full bg-purple-400 pointer-events-none"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

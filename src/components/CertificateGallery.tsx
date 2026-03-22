import { useState } from 'react';
import {
  Star, ShieldCheck, Heart, Eye, X,
  type LucideIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { awards, type Award } from '../data/portfolio.ts';
import ScrollReveal from './ScrollReveal.tsx';

type IconName = 'Star' | 'ShieldCheck' | 'Heart';

const iconMap: Record<IconName, LucideIcon> = { Star, ShieldCheck, Heart };

interface Props {
  limit?: number;
  showViewAll?: boolean;
  showSectionHeader?: boolean;
}

export default function CertificateGallery({ limit, showViewAll = false, showSectionHeader = true }: Props) {
  const [selected, setSelected] = useState<Award | null>(null);
  const displayed = limit ? awards.slice(0, limit) : awards;

  return (
    <ScrollReveal>
      <section id="awards" className="mb-20 scroll-mt-32">
        {showSectionHeader && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-10">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">Awards & Certifications</h2>
              <p className="text-purple-300/50 text-sm">Certifications &amp; Proof of Excellence</p>
            </div>
            {showViewAll && (
              <a
                href="/awards"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors group shrink-0"
              >
                View all accomplishments
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            )}
          </div>
        )}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {displayed.map((award, index) => {
            const Icon = iconMap[award.icon as IconName];
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="bg-white/5 border border-purple-800/30 rounded-[2rem] overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-purple-900/50 transition-shadow"
                onClick={() => setSelected(award)}
              >
                <div className="aspect-video relative overflow-hidden bg-purple-900/30">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-55 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-purple-900/40 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 text-white">
                      <Eye size={12} /> View Proof
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-7 h-7 bg-purple-900/60 rounded-lg flex items-center justify-center text-purple-300">
                      {Icon && <Icon size={14} />}
                    </div>
                    <span className="text-[9px] font-bold text-purple-400 uppercase tracking-widest">{award.year}</span>
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1 group-hover:text-purple-300 transition-colors">{award.title}</h4>
                  <p className="text-[10px] text-purple-300/40 font-medium uppercase mb-2">{award.org}</p>
                  <p className="text-[11px] text-purple-200/45 leading-relaxed line-clamp-2">{award.desc}</p>
                </div>
              </motion.div>
            );
          })}
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
              <motion.div
                className="absolute inset-0 bg-[#0d0a16]/82 backdrop-blur-sm"
                onClick={() => setSelected(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                className="relative bg-[#120e1f] border border-purple-800/40 w-full max-w-3xl max-h-[88vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
              >
                <button
                  className="absolute top-4 right-4 z-10 w-9 h-9 bg-purple-900/60 border border-purple-700/50 rounded-full flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-800/60 transition-all active:scale-90"
                  onClick={() => setSelected(null)}
                >
                  <X size={16} />
                </button>
                <div className="flex flex-col md:flex-row h-full overflow-y-auto">
                  <div className="md:w-3/5 h-52 md:h-auto bg-[#0d0a16] shrink-0 flex items-center justify-center">
                    <img src={selected.image} alt={selected.title} className="w-full h-full object-contain p-4" />
                  </div>
                  <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-center gap-3">
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                      {selected.org} — {selected.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{selected.title}</h3>
                    <p className="text-purple-200/55 leading-relaxed text-sm">{selected.desc}</p>
                    <div className="mt-auto pt-2 flex items-center gap-2 text-purple-400 font-bold text-xs">
                      <ShieldCheck size={15} /> Verified Credential
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

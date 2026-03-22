import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function InternshipCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setOpen(true)}
        className="bg-white/5 border border-purple-800/30 rounded-[1.5rem] p-4 flex-1 flex flex-col cursor-pointer hover:border-purple-600/50 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-purple-900/40 transition-all group"
      >
        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
          <span className="w-6 h-6 rounded-lg bg-purple-900/60 border border-purple-700/40 flex items-center justify-center text-purple-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </span>
          Internship
        </h3>

        <div className="flex items-start gap-3">
          {/* Logo */}
          <img src="/Arielus.png" alt="Arielus Software Inc." className="w-24 h-24 shrink-0 rounded-xl object-cover" />
          {/* Text */}
          <div className="flex flex-col h-24 flex-1">
            <p className="text-white text-base font-bold group-hover:text-purple-300 transition-colors">Software QA Intern</p>
            <p className="text-purple-200/70 text-sm mt-0.5">Arielus Software Inc.</p>
            <p className="text-purple-400/80 text-xs font-bold uppercase tracking-widest mt-0.5">Jun – Jul 2025</p>
            <p className="text-purple-400/50 text-[10px] mt-auto self-end group-hover:text-purple-400/80 transition-colors">Click for more details →</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              className="absolute inset-0 bg-[#0d0a16]/88 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              className="relative bg-[#120e1f] border border-purple-800/40 w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <button
                className="absolute top-4 right-4 z-10 w-9 h-9 bg-purple-900/60 border border-purple-700/50 rounded-full flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-800/60 transition-all active:scale-90"
                onClick={() => setOpen(false)}
              >
                <X size={16} />
              </button>

              {/* Header */}
              <div className="p-6 flex items-center gap-4 border-b border-purple-800/30">
                <img src="/Arielus.png" alt="Arielus Software Inc." className="w-16 h-16 shrink-0 rounded-2xl object-cover" />
                <div>
                  <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-1">Internship</p>
                  <h3 className="text-lg font-bold text-white">Software QA Intern</h3>
                  <p className="text-purple-200/70 text-sm">Arielus Software Inc.</p>
                  <p className="text-purple-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">Jun – Jul 2025</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h4 className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-3">Responsibilities</h4>
                <ul className="flex flex-col gap-2.5 text-sm text-purple-200/65">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5"></span>
                    Performed regression, smoke, and functional testing to ensure software quality
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5"></span>
                    Created and maintained test cases for manual and automated testing using Selenium
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5"></span>
                    Tracked and managed defects in Azure DevOps, collaborating with developers for resolution
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5"></span>
                    Assisted in test assurance to validate compliance with quality standards
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

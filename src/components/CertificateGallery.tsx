import { useState } from 'react';
import {
  Star, ShieldCheck, Heart, Eye, X,
  type LucideIcon,
} from 'lucide-react';
import { awards, type Award } from '../data/portfolio.ts';

type IconName = 'Star' | 'ShieldCheck' | 'Heart';

const iconMap: Record<IconName, LucideIcon> = { Star, ShieldCheck, Heart };

export default function CertificateGallery() {
  const [selected, setSelected] = useState<Award | null>(null);

  return (
    <section id="awards" className="mb-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Recognition</h2>
        <p className="text-purple-300/50">Certifications &amp; Proof of Excellence</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {awards.map((award, index) => {
          const Icon = iconMap[award.icon as IconName];
          return (
            <div
              key={index}
              className="bg-white/5 border border-purple-800/30 rounded-[2.5rem] overflow-hidden group hover:shadow-2xl hover:shadow-purple-900/50 transition-all hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelected(award)}
            >
              <div className="aspect-video relative overflow-hidden bg-purple-900/30">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-purple-900/40 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 text-white">
                    <Eye size={14} /> View Proof
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-purple-900/60 rounded-lg flex items-center justify-center text-purple-300">
                    {Icon && <Icon size={16} />}
                  </div>
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                    {award.year}
                  </span>
                </div>
                <h4 className="font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {award.title}
                </h4>
                <p className="text-xs text-purple-300/40 font-medium uppercase mb-4">{award.org}</p>
                <p className="text-xs text-purple-200/50 leading-relaxed line-clamp-2">{award.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div
            className="absolute inset-0 bg-[#0d0a16]/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative bg-[#120e1f] border border-purple-800/40 w-full max-w-4xl max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl animate-modal-up flex flex-col">
            <button
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-purple-900/60 border border-purple-700/50 rounded-full flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-800/60 shadow-lg transition-all active:scale-90"
              onClick={() => setSelected(null)}
            >
              <X size={20} />
            </button>
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-2/3 h-64 md:h-auto bg-purple-900/30">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-contain md:object-cover"
                />
              </div>
              <div className="md:w-1/3 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">
                  {selected.org} &mdash; {selected.year}
                </span>
                <h3 className="text-3xl font-bold text-white mb-6">{selected.title}</h3>
                <p className="text-purple-200/60 leading-relaxed mb-8">{selected.desc}</p>
                <div className="mt-auto">
                  <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                    <ShieldCheck size={18} /> Verified Credential
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

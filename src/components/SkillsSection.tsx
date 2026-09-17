import React, { useState, useEffect } from 'react';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';
import { SkillsBigBoard } from './SkillsBigBoard';
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Cpu, 
  Video, 
  Camera, 
  TrendingUp, 
  BarChart3, 
  Briefcase, 
  Sparkles, 
  X, 
  CheckCircle,
  ArrowUpRight,
  ExternalLink,
  Mail,
  ShieldCheck,
  Zap,
  Layers
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code,
  Palette,
  Database,
  Globe,
  Cpu,
  Video,
  Camera,
  TrendingUp,
  BarChart3,
  Briefcase,
};

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedSkill(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold tracking-wider uppercase shadow-lg shadow-emerald-950/40">
            <Cpu className="w-4 h-4 text-emerald-400 animate-spin-slow" />
            <span>Xogta Farsamada & Xirfadaha</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Xirfadaha <span className="coral-gradient-text">& Awoodaha Shaqo</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Dhammaan 12-ka xirfadood ee asalka ah oo lagu maamulo hal beg/weel weyn oo casri ah, oo wata sawirro heer sare ah, cabbiraad aqooneed (proficiency %), iyo khibrad ganacsi oo dhab ah.
          </p>
        </div>

        {/* 
          HAL BEG OO WEYN (THE BIG CONTAINER FROM USER SKETCH)
          Displaying all 12 cards in 4 columns x 3 rows with interactive filters & search.
        */}
        <SkillsBigBoard onSelectSkill={(skill) => setSelectedSkill(skill)} />

      </div>

      {/* Enhanced Skill Detail Modal */}
      {selectedSkill && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedSkill(null)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="glass-card max-w-xl w-full rounded-[32px] border border-emerald-500/40 shadow-[0_25px_70px_rgba(0,0,0,0.9)] relative overflow-hidden bg-[#041911] p-0"
          >
            
            {/* Top Image Banner */}
            {selectedSkill.imageUrl && (
              <div className="w-full h-52 relative overflow-hidden bg-slate-900 border-b border-emerald-500/20">
                <img 
                  src={selectedSkill.imageUrl} 
                  alt={selectedSkill.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041911] via-[#041911]/40 to-transparent" />
                
                {/* Floating tags on image */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-black text-white bg-slate-950/80 backdrop-blur-md border border-white/20 shadow-md">
                    {selectedSkill.badge || selectedSkill.category.toUpperCase()}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-amber-300 bg-emerald-950/90 border border-emerald-500/40 shadow-md">
                    {selectedSkill.experience}
                  </span>
                </div>
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-950/80 hover:bg-slate-900 border border-white/15 z-20 cursor-pointer transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Header Info */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl shrink-0"
                  style={{ backgroundColor: selectedSkill.color || '#059669' }}
                >
                  {React.createElement(iconMap[selectedSkill.iconName] || Code, { className: 'w-7 h-7' })}
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase block">
                    {selectedSkill.category.toUpperCase()} DISCIPLINE
                  </span>
                  <h3 className="text-2xl font-black text-white">{selectedSkill.name}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedSkill.description}
              </p>

              {/* Tags / Tools */}
              {selectedSkill.tags && (
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-2 font-bold">
                    Aaladaha & Farsamooyinka Muhiimka ah:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-mono px-3 py-1 rounded-xl bg-emerald-950/60 text-emerald-200 border border-emerald-500/30 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Metric & Readiness Box */}
              <div className="bg-emerald-950/40 p-4 sm:p-5 rounded-2xl border border-emerald-500/20 space-y-3 shadow-inner">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-400">Khibrad Ganacsi (Commercial Exp):</span>
                  <span className="text-white font-bold">{selectedSkill.experience}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-400">Heerka Aqoonta (Proficiency):</span>
                  <span className="font-bold font-mono text-amber-400">{selectedSkill.level}%</span>
                </div>
                
                {/* Visual Progress Bar */}
                <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-emerald-900/60 p-[1px]">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 h-full rounded-full"
                    style={{ width: `${selectedSkill.level}%` }}
                  />
                </div>

                <div className="pt-2 border-t border-emerald-900/50 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Xaqiijiyay Mashruucyo Nool</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Production Grade</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 cursor-pointer transition-colors text-center"
                >
                  Xidh
                </button>
                <a
                  href="#projects"
                  onClick={() => setSelectedSkill(null)}
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 hover:brightness-110 shadow-lg shadow-emerald-950/50 transition-all text-center"
                >
                  <span>Eeg Mashaariicda</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};


import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Bot, 
  Code, 
  Palette, 
  Sparkles, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Send
} from 'lucide-react';

interface AboutSectionProps {
  onOpenCV: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCV }) => {
  const pillars = [
    {
      icon: Bot,
      title: 'AI & Prompt Engineering',
      desc: 'Mastering generative AI prompts, automated business workflows, and integrating modern AI into practical real-world solutions.',
    },
    {
      icon: Code,
      title: 'Full-Stack Web Architecture',
      desc: 'Crafting responsive frontend designs (HTML5, CSS3, JavaScript ES6+) combined with robust PHP, SQL, and Firebase cloud backends.',
    },
    {
      icon: Palette,
      title: 'Digital Media & Strategy',
      desc: 'Producing striking graphic design, engaging video edits, camera operation, and data-driven digital marketing campaigns.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>About Yaasir</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging <span className="coral-gradient-text">AI Innovation</span> & Practical Web Solutions
          </h2>
          <p className="text-slate-400 text-base">
            Professional background, creative philosophy, and technical execution.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-emerald-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Bio Details */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Somali Original Statement */}
              <div className="bg-emerald-950/50 p-5 rounded-2xl border-l-4 border-emerald-500 relative shadow-inner">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  Ku Saabsan Yaasir (About Statement)
                </div>
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                  &ldquo;{PERSONAL_INFO.aboutMe}&rdquo;
                </p>
              </div>

              {/* Mission Summary */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As a versatile developer and digital creator, I combine rigorous coding principles with cutting-edge artificial intelligence and creative multimedia design. Whether building a full-fledged news portal like <strong className="text-emerald-400">Heego News Portal</strong> or Islamic educational platforms like <strong className="text-amber-400">Madrasada Al-Qasaam</strong>, my priority is delivering dependable, modern, and aesthetically pristine digital experiences.
              </p>

              {/* Direct Info Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-emerald-500/20 text-slate-300">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-emerald-500/20 text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-emerald-500/20 text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-emerald-500/20 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Open for Contracts & Freelance</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenCV}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 hover:brightness-110 transition-all shadow-md shadow-emerald-950/50 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-950" />
                  <span>Download Curriculum Vitae (CV)</span>
                </button>

                <a
                  href="#contact"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-emerald-200 hover:text-white bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 transition-all"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Send Direct Message</span>
                </a>
              </div>
            </div>

            {/* Right Pillars Showcase */}
            <div className="lg:col-span-5 space-y-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-amber-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-amber-400 group-hover:text-slate-950 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed mt-1">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Maximize2,
  X,
  Server,
  GraduationCap,
  Newspaper,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold tracking-wider uppercase shadow-lg shadow-emerald-950/40">
            <FolderGit2 className="w-4 h-4 text-emerald-400" />
            <span>Mashaariicda & Qeybaheena</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Mashaariicda <span className="coral-gradient-text">Ugu Waaweyn</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Nidaamyada dhabta ah ee online-ka ka shaqeynaya sida <strong className="text-white">Heego News Portal</strong> iyo <strong className="text-white">Madrasada Al-Qasaam</strong> ee ku shaqeeya server-yada Cloud Run & databases casri ah.
          </p>
        </div>

        {/* Projects Grid: Responsive 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS_DATA.map((project) => {
            const isHeego = project.id === 'heego-news-portal' || project.id === 'heego-news';
            const isMadrasa = project.id === 'madrasada-al-qasaam';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="glass-card rounded-[28px] p-5 sm:p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 border border-emerald-500/20 hover:border-emerald-500/50 bg-[#041911]/90 shadow-xl"
              >
                {/* Accent glow on top */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5 transition-opacity opacity-90 group-hover:opacity-100"
                  style={{
                    background: project.accentColor 
                      ? `linear-gradient(90deg, ${project.accentColor}, #10b981)` 
                      : 'linear-gradient(90deg, #059669, #fbbf24)'
                  }}
                />

                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-2.5 h-2.5 rounded-full animate-pulse shrink-0"
                        style={{ backgroundColor: project.accentColor || '#10b981' }}
                      />
                      <span className="text-[11px] font-mono font-bold text-amber-300 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-200 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30 shrink-0">
                      {project.metrics}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1.5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5 group-hover:text-emerald-300"
                    >
                      <span>{project.title}</span>
                      <ExternalLink className="w-4 h-4 text-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </h3>
                  <h4 className="text-xs font-medium text-slate-400 mb-4 line-clamp-1">
                    {project.subtitle}
                  </h4>

                  {/* Visual Preview Display (Screenshot or Graphic Mockup) */}
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer mb-5 rounded-2xl bg-slate-950/80 border border-emerald-900/60 overflow-hidden group/visual hover:border-emerald-500/50 transition-all shadow-inner relative"
                  >
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-900/50 text-[10px] text-slate-400 font-mono bg-slate-900/90">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/80" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                        <span className="ml-1 text-slate-400 truncate max-w-[160px] sm:max-w-[200px]">
                          {project.link.replace('https://', '')}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-amber-300 opacity-0 group-hover/visual:opacity-100 transition-opacity font-bold">
                        <Maximize2 className="w-3 h-3" />
                        <span>Inspect</span>
                      </span>
                    </div>

                    {/* Image / Graphic Visual */}
                    {project.imageUrl ? (
                      <div className="relative h-40 w-full overflow-hidden bg-slate-950">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/visual:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                        
                        {/* Overlay floating badge */}
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono bg-slate-950/85 backdrop-blur-md border border-white/20 text-white">
                            {isMadrasa && <GraduationCap className="w-3 h-3 text-emerald-400" />}
                            {isHeego && <Newspaper className="w-3 h-3 text-amber-400" />}
                            <span>{isMadrasa ? 'Madrasa Portal' : isHeego ? 'Live News Feed' : 'Creative AI'}</span>
                          </span>

                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                            ● Active Live
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Fallback graphical mock representation */
                      <div className="p-4 space-y-2.5 bg-slate-950/70">
                        <div className="flex items-center justify-between bg-slate-900/90 px-3 py-1.5 rounded-xl text-xs border border-emerald-900/60">
                          <span className="font-bold text-amber-300 tracking-wider flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-amber-400" />
                            SMART AI CAMPAIGN
                          </span>
                          <span className="text-[10px] text-emerald-400">Prompt Powered</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-gradient-to-br from-emerald-950/40 to-slate-900/80 p-2.5 rounded-xl border border-emerald-500/20 col-span-2 space-y-1">
                            <div className="text-[11px] font-bold text-white">AI-Generated Visual Assets</div>
                            <div className="text-[10px] text-slate-400">Conversion Landing Page + Funnels</div>
                          </div>
                          <div className="bg-slate-900/70 p-2 rounded-xl border border-slate-800 flex flex-col justify-center items-center text-center">
                            <span className="text-base font-black text-amber-400">+185%</span>
                            <span className="text-[9px] text-slate-400">Engagement</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-2 font-mono">
                      Farsamooyinka Lagu Dhisay:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-emerald-950/50 text-emerald-200 border border-emerald-500/20 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-emerald-900/40 flex items-center gap-2.5 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-demo-btn-${project.id}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 hover:brightness-110 transition-all shadow-md shadow-emerald-950/50 text-center"
                  >
                    <span>Furan Platform-ka</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    id={`project-inspect-btn-${project.id}`}
                    className="flex items-center gap-1.5 py-2.5 px-3.5 rounded-full text-xs font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>Faahfaahin</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Case Study / Deep Dive Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="glass-card max-w-2xl w-full rounded-3xl border border-emerald-500/40 shadow-2xl relative max-h-[90vh] overflow-y-auto bg-[#041911] p-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Banner if Image available */}
              {selectedProject.imageUrl && (
                <div className="w-full h-56 relative overflow-hidden bg-slate-950 border-b border-emerald-500/20">
                  <img 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041911] via-[#041911]/40 to-transparent" />
                  
                  {/* Top Close Button on Banner */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer border border-white/15 transition-all z-20"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-white bg-slate-950/80 backdrop-blur-md border border-white/20">
                      {selectedProject.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-amber-300 bg-emerald-950/90 border border-emerald-500/40">
                      {selectedProject.metrics}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8 space-y-6">
                {/* Modal Header without image or subheader */}
                {!selectedProject.imageUrl && (
                  <div className="flex items-start justify-between pb-4 border-b border-emerald-900/60">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span>{selectedProject.category}</span>
                      </div>
                      <h3 className="text-2xl font-black text-white">{selectedProject.title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{selectedProject.subtitle}</p>
                    </div>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {selectedProject.imageUrl && (
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedProject.title}</h3>
                    <p className="text-xs sm:text-sm text-amber-400 font-medium mt-1">{selectedProject.subtitle}</p>
                  </div>
                )}

                {/* Project Description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                    Dulmar Guud & Qaab-dhismeedka (Architecture):
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed bg-emerald-950/40 p-4 rounded-2xl border border-emerald-500/20">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Stack Highlight */}
                <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/20 space-y-2.5">
                  <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                    Full Architecture & Tech Stack:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 rounded-xl text-xs font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Link Action Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-[#041911] to-emerald-950/60 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h5 className="text-sm font-bold text-white flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span>Live Production Deployment</span>
                    </h5>
                    <p className="text-xs text-slate-400 mt-0.5 font-mono truncate max-w-sm">
                      {selectedProject.link}
                    </p>
                  </div>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 hover:brightness-110 shadow-lg shadow-emerald-950/50 transition-all shrink-0 text-center"
                  >
                    <span>Furan Bogga Tooska ah</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Modal Footer */}
                <div className="pt-2 border-t border-emerald-900/50 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Xidh Faahfaahinta
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

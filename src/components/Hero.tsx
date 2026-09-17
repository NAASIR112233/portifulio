import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Download, 
  MessageCircle, 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUpRight, 
  Star,
  Sparkles,
  CheckCircle2,
  Layers,
  Play,
  Box,
  Cpu
} from 'lucide-react';
import yaasirPortrait from '../assets/images/yaasir_portrait_1789197954717.jpg';
import heroBgWaves from '../assets/images/hero_bg_waves_1789203961595.jpg';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="top" 
      onMouseMove={handleMouseMove}
      className="relative pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden min-h-[92vh] flex items-center justify-center"
    >
      {/* 
        ========================================================================
        ANIMATED BACKGROUND IMAGE LAYER (With Wakeup / Loading Animations & UX)
        ========================================================================
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Animated Background Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 1.18, filter: 'blur(12px)' }}
          animate={{ opacity: 0.55, scale: 1, filter: 'blur(0px)' }}
          transition={{ 
            duration: 1.8, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Breathing subtle movement */}
          <motion.div
            animate={{ 
              scale: [1, 1.035, 1],
              x: mousePos.x * -25,
              y: mousePos.y * -20
            }}
            transition={{
              scale: { repeat: Infinity, duration: 16, ease: "easeInOut" },
              x: { type: "spring", stiffness: 80, damping: 25 },
              y: { type: "spring", stiffness: 80, damping: 25 }
            }}
            className="w-full h-full"
          >
            <img 
              src={heroBgWaves} 
              alt="3D Abstract Fluid Background" 
              className="w-full h-full object-cover object-center opacity-85 select-none"
            />
          </motion.div>
        </motion.div>

        {/* Studio Lighting & Vignette Gradients for Perfect UX/UI Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04140e] via-[#04140e]/70 to-[#04140e]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#04140e_85%)]"></div>

        {/* Ambient Glowing Orbs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px]"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.45, 0.2] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-500/15 rounded-full blur-[110px]"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px]"
        />

        {/* Floating Abstract UI Feature Chips in the Background */}
        <motion.div
          initial={{ opacity: 0, y: -20, x: -30 }}
          animate={{ opacity: 0.8, y: [0, -8, 0], x: mousePos.x * 20 }}
          transition={{
            opacity: { duration: 1, delay: 0.8 },
            y: { repeat: Infinity, duration: 5.5, ease: "easeInOut" }
          }}
          className="absolute top-32 left-[8%] hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-[11px] font-mono shadow-xl"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Animations & 3D Flow</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, x: 30 }}
          animate={{ opacity: 0.8, y: [0, 9, 0], x: mousePos.x * -20 }}
          transition={{
            opacity: { duration: 1, delay: 1 },
            y: { repeat: Infinity, duration: 6.2, ease: "easeInOut", delay: 0.5 }
          }}
          className="absolute top-44 right-[8%] hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 backdrop-blur-md border border-amber-500/30 text-amber-300 text-[11px] font-mono shadow-xl"
        >
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <span>Glassmorphism UI</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.75, y: [0, -7, 0] }}
          transition={{
            opacity: { duration: 1, delay: 1.2 },
            y: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }
          }}
          className="absolute bottom-36 left-[12%] hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-emerald-500/20 text-emerald-200 text-[10px] font-mono"
        >
          <Cpu className="w-3 h-3 text-emerald-400" />
          <span>Full-Stack & Generative AI</span>
        </motion.div>
      </div>

      {/* 
        ========================================================================
        HERO CONTENT CONTAINER
        ========================================================================
      */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* Top Hello Badge with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -25, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-4"
        >
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/35 text-xs font-bold text-emerald-300 backdrop-blur-md shadow-lg shadow-emerald-950/40">
            <span className="text-sm">👋</span>
            <span>Hello!</span>
            <span className="absolute -top-1.5 -right-1.5 text-[11px] text-amber-400 font-bold animate-pulse">✨</span>
          </div>
        </motion.div>

        {/* Main Display Headline with Staggered Fade Up */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-2 mb-8 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            I'm <span className="coral-gradient-text drop-shadow-sm">{PERSONAL_INFO.name}</span>,
            <br />
            <span className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold">
              Full-Stack Developer & Digital Creative
            </span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-300 italic max-w-2xl mx-auto pt-2 font-light"
          >
            &ldquo;{PERSONAL_INFO.tagline}&rdquo;
          </motion.p>
        </motion.div>

        {/* Central Visual Arch Showcase with Cinematic Portal Entrance */}
        <div className="relative max-w-xl mx-auto mt-6 mb-12 flex justify-center">
          
          {/* Sunset Arch Portal with Motion entrance */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="relative w-[280px] sm:w-[340px] md:w-[380px] h-[340px] sm:h-[410px] md:h-[450px] rounded-t-[140px] sm:rounded-t-[170px] md:rounded-t-[190px] bg-gradient-to-b from-emerald-600/35 via-emerald-800/20 to-slate-950/50 border-t-2 border-x-2 border-emerald-500/50 p-3 pt-6 shadow-[0_0_60px_-10px_rgba(16,185,129,0.35)] flex items-end justify-center overflow-hidden group"
          >
            
            {/* Background circular sun halo behind portrait */}
            <motion.div 
              animate={{ 
                scale: [1, 1.08, 1],
                opacity: [0.45, 0.7, 0.45] 
              }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-emerald-500/45 via-teal-400/35 to-amber-300/30 blur-2xl pointer-events-none"
            />

            {/* Portrait Image */}
            <img
              src={yaasirPortrait}
              alt="Yaasir - Full-Stack Developer & Digital Creative"
              referrerPolicy="no-referrer"
              className="relative z-10 w-full h-full object-cover object-top rounded-t-[120px] sm:rounded-t-[150px] md:rounded-t-[170px] drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* Subtle bottom gradient fade */}
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#04140e] via-[#04140e]/80 to-transparent z-20 pointer-events-none"></div>

            {/* Overlaid Pill Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-4 z-30 flex items-center gap-2 p-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 shadow-2xl"
            >
              <a
                href="#projects"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 hover:brightness-110 shadow-md shadow-emerald-950/50 transition-all hover:scale-105 active:scale-95"
              >
                <span>Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/15 transition-colors"
              >
                Hire me
              </a>
            </motion.div>
          </motion.div>

          {/* Floating Card Left: Testimonial & 5 Stars */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, -6, 0]
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.4 },
              x: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
              y: { repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.4 }
            }}
            className="absolute -left-4 sm:-left-12 top-1/4 z-30 max-w-[210px] sm:max-w-[240px] glass-card p-3.5 rounded-2xl shadow-2xl border border-emerald-500/30 hidden sm:block backdrop-blur-xl"
          >
            <div className="flex items-center gap-1 text-amber-400 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-[11px] text-slate-200 leading-snug font-medium">
              Exceptional development & AI solutions. Highly recommended.
            </p>
            <div className="mt-2 flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3 h-3 text-amber-400" />
              <span>Verified Client Rating</span>
            </div>
          </motion.div>

          {/* Floating Card Right: Experience */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, 6, 0]
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.5 },
              x: { duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
              y: { repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.6 }
            }}
            className="absolute -right-4 sm:-right-12 top-1/3 z-30 glass-card p-4 rounded-2xl shadow-2xl border border-emerald-500/30 hidden sm:block text-right backdrop-blur-xl"
          >
            <div className="flex items-center justify-end gap-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {PERSONAL_INFO.experienceYears}
            </div>
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Experience
            </div>
            <div className="text-[10px] text-slate-300 mt-1">
              45+ Projects Delivered
            </div>
          </motion.div>

        </div>

        {/* Action & Contact Strip with Subtle Entry */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 text-center"
        >
          <button
            onClick={onOpenCV}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-emerald-950/80 border border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-900/80 transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>Download Curriculum Vitae (CV)</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium">Connect:</span>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};


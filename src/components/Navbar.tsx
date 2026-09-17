import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  Download, 
  MessageCircle, 
  Sparkles,
  FileCode,
  ArrowUpRight
} from 'lucide-react';

interface NavbarProps {
  onOpenCV: () => void;
  onOpenExport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV, onOpenExport }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['contact', 'services', 'projects', 'skills', 'about'];
      const scrollPos = window.scrollY + 200;
      
      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Floating Capsule Bar */}
        <div className="w-full glass-pill-nav rounded-full px-3 sm:px-5 py-2.5 flex items-center justify-between gap-2 shadow-2xl border border-white/10">
          
          {/* Left: Home pill + About + Services */}
          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href="#top"
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeSection === 'home'
                  ? 'bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 text-slate-950 font-black shadow-md shadow-emerald-950/50'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`hidden md:inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeSection === 'about'
                  ? 'text-emerald-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              About
            </a>
            <a
              href="#services"
              className={`hidden md:inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeSection === 'services'
                  ? 'text-emerald-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Services
            </a>
          </div>

          {/* Center: Brand Badge (like the JCREA badge in the reference image) */}
          <a
            href="#top"
            className="flex items-center gap-2 group px-2 py-1 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-amber-400 flex items-center justify-center text-slate-950 font-black shadow-md shadow-emerald-950/40 group-hover:scale-105 transition-transform">
              Y
            </div>
            <span className="font-extrabold tracking-wider text-sm sm:text-base text-white group-hover:text-emerald-400 transition-colors uppercase">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Right: Skills + Projects + Contact + CTAs */}
          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href="#skills"
              className={`hidden lg:inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeSection === 'skills'
                  ? 'text-emerald-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`hidden md:inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeSection === 'projects'
                  ? 'text-emerald-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`hidden sm:inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeSection === 'contact'
                  ? 'text-emerald-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Contact
            </a>

            {/* Resume / CV button */}
            <button
              onClick={onOpenCV}
              title="View & Download CV"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-200 hover:text-white transition-all cursor-pointer border border-emerald-500/30"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>CV</span>
            </button>

            {/* Direct Hire / WhatsApp CTA */}
            <a
              href={PERSONAL_INFO.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 hover:brightness-110 shadow-md shadow-emerald-950/50 transition-all hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="max-w-5xl mx-auto mt-2 pointer-events-auto md:hidden">
          <div className="glass-card rounded-2xl p-4 border border-white/10 shadow-2xl space-y-2 text-sm">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 hover:text-orange-400 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 hover:text-orange-400 font-medium"
            >
              About Yaasir
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 hover:text-orange-400 font-medium"
            >
              Services Offered
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 hover:text-orange-400 font-medium"
            >
              Skills (12 Techs)
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 hover:text-orange-400 font-medium"
            >
              Featured Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 hover:text-orange-400 font-medium"
            >
              Contact Form
            </a>
            <div className="pt-2 border-t border-slate-800 flex">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full py-2 text-center text-xs font-semibold rounded-lg bg-white/10 text-white flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-orange-400" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

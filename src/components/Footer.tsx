import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  MessageCircle, 
  Mail, 
  Phone, 
  Heart, 
  ArrowUp, 
  Download,
  FileCode
} from 'lucide-react';

interface FooterProps {
  onOpenCV: () => void;
  onOpenExport: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV, onOpenExport }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-emerald-500/20 bg-[#020e09] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-500/10">
          
          {/* Brand Column */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-amber-400 flex items-center justify-center text-slate-950 font-black shadow-md">
                Y
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-amber-400 font-semibold tracking-wide uppercase">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-xs text-slate-300 italic max-w-md">
              &ldquo;{PERSONAL_INFO.tagline}&rdquo;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Specialized in combining Generative AI prompt engineering with high-performance web development (HTML, CSS, JS, PHP, SQL, Firebase), camera operation, and creative multimedia design.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Yaasir</a></li>
              <li><a href="#skills" className="hover:text-emerald-400 transition-colors">Skills Showcase (12 Skills)</a></li>
              <li><a href="#projects" className="hover:text-emerald-400 transition-colors">Featured Projects</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services Offered</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Form</a></li>
            </ul>
          </div>

          {/* Actions & Credentials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Actions & Direct Links
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {PERSONAL_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer mt-1"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Download / Print CV</span>
              </button>

              <button
                onClick={onOpenExport}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
              >
                <FileCode className="w-3.5 h-3.5 text-emerald-400" />
                <span>Get Standalone Single HTML</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-400 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-300 font-medium">{PERSONAL_INFO.name}</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

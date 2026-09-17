import React, { useState } from 'react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, SERVICES_DATA } from '../data/portfolioData';
import { 
  Download, 
  Printer, 
  Copy, 
  Check, 
  X, 
  Mail, 
  Phone, 
  Globe, 
  Sparkles,
  ExternalLink,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const cvText = `
CURRICULUM VITAE: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.title}
Tagline: "${PERSONAL_INFO.tagline}"

CONTACT:
Email: ${PERSONAL_INFO.email}
Phone / WhatsApp: ${PERSONAL_INFO.phone}
WhatsApp Direct: ${PERSONAL_INFO.whatsAppLink}
Location: ${PERSONAL_INFO.location}

ABOUT ME:
${PERSONAL_INFO.aboutMe}

TECHNICAL SKILLS:
- Frontend: HTML5, CSS3, JavaScript (ES6+)
- Backend & Cloud: PHP, SQL, Firebase
- Creative & Multimedia: Graphic Design, Video Editing, Camera Operator
- Strategy & Operations: Digital Marketing, Data Analysis, Office Management

FEATURED PROJECTS:
1. Heego News Portal (https://heegonews-4450.ai.studio)
   - News portal platform with responsive UI, PHP backend, and Firebase/SQL database integration.
   - Tech: HTML, CSS, PHP, SQL, Firebase

2. Madrasada Al-Qasaam Portal (https://madrasada-al-qasaam-367542427068.europe-west2.run.app)
   - Full-stack Islamic academy & student management portal deployed on Cloud Run.
   - Tech: React, TypeScript, Tailwind CSS, Cloud Run, SQL / Database

3. Smart AI Brand Campaign (https://branddemo.example.com)
   - Digital marketing & AI brand campaign featuring custom AI-generated graphics and landing pages.
   - Tech: Digital Marketing, AI Graphics, JavaScript

SERVICES OFFERED:
- Website Development
- Business Website Solutions
- Graphic Design
- Video Editing
- Digital Marketing
- Firebase Web Apps
- Data & Office Management
    `.trim();

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="glass-card max-w-3xl w-full p-6 sm:p-8 rounded-2xl border border-emerald-500/30 bg-[#041911] shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        id="cv-printable-container"
      >
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-emerald-900/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Curriculum Vitae (CV)</h3>
              <p className="text-[11px] text-slate-400">Verified Profile & Credentials</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-lg transition-colors cursor-pointer"
              title="Copy text summary"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-black text-slate-950 bg-gradient-to-r from-emerald-500 to-amber-400 hover:brightness-110 rounded-lg transition-colors cursor-pointer shadow-md shadow-emerald-950/50"
            >
              <Printer className="w-3.5 h-3.5 text-slate-950" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors border border-emerald-500/20"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="py-6 space-y-6 text-slate-200 text-xs sm:text-sm">
          {/* Header Block */}
          <div className="bg-[#03130d] p-5 rounded-xl border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{PERSONAL_INFO.name}</h1>
              <p className="text-amber-400 font-semibold">{PERSONAL_INFO.title}</p>
              <p className="text-xs text-slate-400 italic mt-1">&ldquo;{PERSONAL_INFO.tagline}&rdquo;</p>
            </div>

            <div className="text-xs text-slate-300 space-y-1 sm:text-right">
              <div>Email: <span className="font-mono text-amber-300">{PERSONAL_INFO.email}</span></div>
              <div>WhatsApp: <span className="font-mono text-emerald-300">{PERSONAL_INFO.phone}</span></div>
              <div>Location: <span className="text-slate-200">{PERSONAL_INFO.location}</span></div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 font-mono">Professional Summary</h4>
            <p className="bg-emerald-950/30 p-4 rounded-xl border border-emerald-500/20 leading-relaxed text-slate-300">
              {PERSONAL_INFO.aboutMe}
            </p>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 font-mono">Key Skills & Technologies</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {SKILLS_DATA.map((skill) => (
                <div key={skill.id} className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-between">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="text-[11px] font-mono text-amber-300">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 font-mono">Featured Projects</h4>
            <div className="space-y-3">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="text-[11px] text-amber-300 font-mono">{proj.link}</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-emerald-950/80 text-[10px] text-emerald-200 border border-emerald-500/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Provided */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 font-mono">Services Provided</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SERVICES_DATA.map((srv) => (
                <div key={srv.id} className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-medium text-slate-200">{srv.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-emerald-900/50 flex flex-wrap items-center justify-between gap-3">
          <a
            href={PERSONAL_INFO.whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5"
          >
            <span>Direct WhatsApp: {PERSONAL_INFO.phone}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-emerald-950/80 hover:bg-emerald-900/80 text-slate-300 hover:text-white rounded-lg border border-emerald-500/30 cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

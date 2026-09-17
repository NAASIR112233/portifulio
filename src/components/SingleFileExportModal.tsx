import React, { useState } from 'react';
import { Download, Copy, Check, X, FileCode, ExternalLink } from 'lucide-react';
import { generateStandaloneHtml } from '../utils/generateStandaloneHtml';

interface SingleFileExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SingleFileExportModal: React.FC<SingleFileExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [htmlContent] = useState<string>(() => generateStandaloneHtml());

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'yaasir-portfolio-standalone.html');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="glass-card max-w-4xl w-full p-6 sm:p-8 rounded-2xl border border-emerald-500/40 bg-[#041911] shadow-2xl relative my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-emerald-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Standalone Single-File HTML Code</h3>
              <p className="text-xs text-slate-400">
                Self-contained production-ready HTML with embedded CSS & JavaScript
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy All Code'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-black text-slate-950 bg-gradient-to-r from-emerald-500 to-amber-400 hover:brightness-110 rounded-lg transition-colors cursor-pointer shadow-md shadow-emerald-950/50"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>Download .HTML</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/20 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="my-4 p-3.5 rounded-xl bg-[#03130d] border border-emerald-500/30 text-xs text-slate-300 flex items-center justify-between">
          <span>
            💡 This single file can be opened directly in any browser or hosted on GitHub Pages, Netlify, or Apache/Nginx with zero dependencies.
          </span>
          <span className="font-mono text-amber-400 ml-2 font-bold">~{(htmlContent.length / 1024).toFixed(1)} KB</span>
        </div>

        {/* Code Preview Box */}
        <div className="flex-1 min-h-[350px] overflow-hidden rounded-xl border border-emerald-900/50 bg-[#03130d] relative">
          <textarea
            readOnly
            value={htmlContent}
            className="w-full h-full p-4 font-mono text-xs text-emerald-200 bg-transparent resize-none focus:outline-none selection:bg-emerald-500/30 overflow-auto"
          />
        </div>

        {/* Footer */}
        <div className="pt-4 mt-2 border-t border-emerald-900/50 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Includes all requested modules: Hero, Skills, Projects, Services, Working Contact Form & Floating WhatsApp.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-500/30 text-slate-300 rounded-lg cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

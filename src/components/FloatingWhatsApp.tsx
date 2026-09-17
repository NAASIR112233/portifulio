import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [quickMessage, setQuickMessage] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSendQuick = (e: React.FormEvent) => {
    e.preventDefault();
    const text = quickMessage || 'Hello Yaasir! I found your portfolio and would like to discuss a project.';
    window.open(`https://wa.me/252638801669?text=${encodeURIComponent(text)}`, '_blank');
    setIsExpanded(false);
  };

  return (
    <div 
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
    >
      {/* Quick Chat Popup Widget if expanded */}
      {isExpanded && (
        <div 
          id="whatsapp-chat-popup"
          className="mb-3 w-80 sm:w-88 glass-card rounded-2xl p-4 border border-emerald-500/40 shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                  Y
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0d1117]"></span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">{PERSONAL_INFO.name}</h4>
                <span className="text-[10px] text-emerald-400 font-medium">Online • Instant Response</span>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 text-xs"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-slate-300">
            <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 text-slate-300 mb-2">
              <p className="text-[11px] leading-relaxed">
                👋 Salaam! Waxaan ahay Yaasir. How can I assist you with web development or digital creative services today?
              </p>
            </div>
          </div>

          <form onSubmit={handleSendQuick} className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={quickMessage}
              onChange={(e) => setQuickMessage(e.target.value)}
              className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold flex items-center justify-center"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative flex items-center">
        {/* Tooltip on hover */}
        {!isExpanded && showTooltip && (
          <div className="mr-3 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-xl whitespace-nowrap animate-in fade-in slide-in-from-right-2">
            Chat on WhatsApp ({PERSONAL_INFO.phone})
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          id="floating-whatsapp-btn"
          aria-label="Direct WhatsApp Chat"
          className="relative group p-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center"
        >
          {/* Subtle radar ping effect */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30"></span>
          
          <MessageCircle className="w-6 h-6 fill-slate-950 text-transparent relative z-10" />
          
          {/* Online green indicator badge */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-300 border-2 border-[#0d1117] rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

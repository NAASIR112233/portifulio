import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { 
  Globe, 
  Building2, 
  PenTool, 
  Film, 
  Target, 
  Flame, 
  FolderKanban, 
  Check, 
  ArrowRight, 
  Sparkles,
  MessageCircle
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Building2,
  PenTool,
  Film,
  Target,
  Flame,
  FolderKanban,
};

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider shadow-md shadow-emerald-950/40">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Commercial & Creative Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services <span className="coral-gradient-text">Offered</span>
          </h2>
          <p className="text-slate-300 text-base">
            End-to-end digital solutions combining engineering precision, AI productivity, and striking multimedia design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Globe;
            const isFullWidthOnLarge = index === SERVICES_DATA.length - 1;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 border border-emerald-500/20 hover:border-emerald-500/50 bg-[#041911]/90 ${
                  isFullWidthOnLarge ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top glow indicator */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-amber-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-emerald-500 group-hover:to-amber-400 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider block">
                      Deliverables Included:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA Actions */}
                <div className="pt-4 border-t border-emerald-900/40 flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-950/60 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-amber-500 transition-all border border-emerald-500/30 cursor-pointer"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/252638801669?text=${encodeURIComponent(
                      `Hello Yaasir, I am interested in your "${service.title}" service.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Order via WhatsApp"
                    className="p-2.5 rounded-xl text-emerald-400 hover:text-slate-950 bg-emerald-950/60 hover:bg-emerald-400 border border-emerald-500/30 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-[#041911] to-emerald-950/80 border border-emerald-500/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Need a custom combination of digital services?</h4>
              <p className="text-xs text-slate-300">Bundle Web Development + AI Brand Marketing + Camera & Video for unified delivery.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectService('Custom Digital Solution')}
            className="px-5 py-2.5 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 hover:brightness-110 transition-all shadow-md shadow-emerald-950/50 cursor-pointer whitespace-nowrap"
          >
            Custom Quote
          </button>
        </div>

      </div>
    </section>
  );
};

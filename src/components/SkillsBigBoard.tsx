import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';
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
  FileCode2, 
  Flame, 
  Layers, 
  Server, 
  Search, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Filter, 
  SlidersHorizontal,
  X,
  Award,
  Clock,
  Layers3,
  ChevronDown,
  Eye
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  FileCode2,
  Palette,
  Code,
  Server,
  Database,
  Flame,
  Layers,
  Video,
  Camera,
  TrendingUp,
  BarChart3,
  Briefcase,
};

interface SkillsBigBoardProps {
  onSelectSkill: (skill: SkillItem) => void;
}

type SortOption = 'default' | 'level-desc' | 'level-asc' | 'name-asc';

export const SkillsBigBoard: React.FC<SkillsBigBoardProps> = ({ onSelectSkill }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Dhammaan', count: SKILLS_DATA.length, icon: Sparkles },
    { id: 'frontend', label: 'Frontend Web', count: SKILLS_DATA.filter(s => s.category === 'frontend').length, icon: Code },
    { id: 'backend', label: 'Backend & Cloud', count: SKILLS_DATA.filter(s => s.category === 'backend').length, icon: Server },
    { id: 'creative', label: 'Creative & Media', count: SKILLS_DATA.filter(s => s.category === 'creative').length, icon: Palette },
    { id: 'management', label: 'Strategy & Ops', count: SKILLS_DATA.filter(s => s.category === 'management').length, icon: TrendingUp },
  ];

  const processedSkills = useMemo(() => {
    const list = SKILLS_DATA.filter((skill) => {
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesSearch = 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.tags && skill.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'level-desc') {
      return [...list].sort((a, b) => b.level - a.level);
    }
    if (sortBy === 'level-asc') {
      return [...list].sort((a, b) => a.level - b.level);
    }
    if (sortBy === 'name-asc') {
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="w-full relative">
      
      {/* 
        ========================================================================
        HAL BEG OO WEYN (THE BIG SHOWCASE BOARD / CONTAINER)
        A high-craft, illuminated master board containing all 12 core skills
        with custom photographic previews, glowing metrics, and responsive grid.
        ========================================================================
      */}
      <div className="relative w-full rounded-[36px] sm:rounded-[48px] bg-[#041911]/95 border border-emerald-500/25 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(16,185,129,0.15)] p-5 sm:p-8 lg:p-10 overflow-hidden backdrop-blur-xl">
        
        {/* Subtle Ambient Mesh Glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-600/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-500/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-teal-600/10 rounded-full blur-[140px] pointer-events-none" />
        
        {/* Fine background grid overlay for high-tech aesthetic */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* TOP IDENTITY & STATS STRIP */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 p-3 sm:p-4 rounded-3xl bg-emerald-950/40 border border-emerald-500/20 backdrop-blur-md">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
              <Layers3 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-white leading-tight">12 Xirfadood</div>
              <div className="text-[11px] text-slate-400">Core Proficiencies</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-white leading-tight">95% Peak</div>
              <div className="text-[11px] text-slate-400">HTML5 & CSS3 Master</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-white leading-tight">4+ Sanadood</div>
              <div className="text-[11px] text-slate-400">Khibrad Ganacsi</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-white leading-tight">100% Ready</div>
              <div className="text-[11px] text-slate-400">Mashaariic Dhab ah</div>
            </div>
          </div>
        </div>

        {/* CONTROLS HEADER: Search, Category Filters, Sort */}
        <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-5 pb-6 border-b border-emerald-500/20 mb-8">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Weelka Weyn ee Xogta & Farsamada</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Dhammaan Xirfadaha <span className="coral-gradient-text">& Sawiradooda Dhabta ah</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Guji kaadh kasta si aad u hesho sharraxaad qoto-dheer, aaladaha la xiriira, iyo mashaariicda lagu hirgeliyay.
            </p>
          </div>

          {/* Interactive Tool Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            
            {/* Search Input with live match counter */}
            <div className="relative min-w-[220px]">
              <input
                type="text"
                placeholder="Raadi xirfad (e.g. HTML, SQL, CSS...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-9 pr-8 rounded-2xl bg-[#03130d] border border-emerald-900/60 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-inner"
              />
              <Search className="w-4 h-4 text-emerald-400 absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Kala sooc xirfadaha"
                className="w-full sm:w-auto appearance-none py-2 pl-3.5 pr-8 rounded-2xl bg-[#03130d] border border-emerald-900/60 text-xs font-semibold text-slate-300 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="default">Kala sooc: Asal ahaan (12)</option>
                <option value="level-desc">Heerka: Ugu Sarreeya (95% - 85%)</option>
                <option value="level-asc">Heerka: Ugu Hooseeya</option>
                <option value="name-asc">Magaca: Xarfaha (A - Z)</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-emerald-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

          </div>

        </div>

        {/* CATEGORY FILTER PILLS */}
        <div className="relative z-10 flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-400 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-950/50 font-black scale-102'
                    : 'bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-200 border-emerald-500/20 hover:border-emerald-500/40'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-emerald-400'}`} />
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  isActive ? 'bg-black/20 text-slate-950 font-bold' : 'bg-white/10 text-emerald-300'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 
          ========================================================================
          THE 12 SKILL CARDS (4 COLUMNS x 3 ROWS)
          With visual preview photography, accent edge glow, glassmorphic badges,
          and interactive expansion triggers.
          ========================================================================
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 relative z-10">
          <AnimatePresence mode="popLayout">
            {processedSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.iconName] || Code;
              const isHovered = hoveredCardId === skill.id;

              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  onMouseEnter={() => setHoveredCardId(skill.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  onClick={() => onSelectSkill(skill)}
                  id={`skill-board-card-${skill.id}`}
                  style={{
                    boxShadow: isHovered 
                      ? `0 20px 40px -15px rgba(16,185,129,0.35), 0 0 0 1px rgba(16,185,129,0.6)`
                      : undefined
                  }}
                  className="group relative rounded-3xl bg-gradient-to-b from-[#06251b]/95 to-[#031610]/95 border border-emerald-500/20 p-4.5 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden hover:border-emerald-500/50"
                >
                  {/* Top Edge Glow matching the emerald/amber brand color */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, #10b981, transparent)`
                    }}
                  />

                  <div>
                    {/* 
                      SAWIRKA XOGTA (Photographic Preview)
                      High quality visual mockup representing the exact skill
                    */}
                    <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-emerald-500/20 shadow-inner group-hover:border-emerald-500/40 transition-all">
                      <img 
                        src={skill.imageUrl} 
                        alt={skill.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600 ease-out"
                      />
                      
                      {/* Vignette layer for clear contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                      {/* Top Badges: Category & Experience */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-black font-mono tracking-wider text-white bg-slate-950/85 backdrop-blur-md border border-white/20 shadow-md">
                          {skill.badge || skill.category.toUpperCase()}
                        </span>

                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-amber-300 bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 shadow-md">
                          {skill.experience}
                        </span>
                      </div>

                      {/* Bottom Floating Skill Icon & Name */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2 min-w-0">
                          <div 
                            className="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-lg shrink-0"
                            style={{ backgroundColor: skill.color || '#059669' }}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-black text-white drop-shadow truncate">
                            {skill.name}
                          </span>
                        </div>

                        <div 
                          className="px-2 py-0.5 rounded-lg text-xs font-mono font-black border border-emerald-500/30 bg-slate-950/80 shrink-0 text-amber-300"
                        >
                          {skill.level}%
                        </div>
                      </div>

                      {/* Hover Overlay Button "Daawo Faahfaahin" */}
                      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 text-slate-950 text-xs font-black shadow-xl shadow-emerald-950/50 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Furan Faahfaahin</span>
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-3">
                      {skill.description}
                    </p>

                    {/* Skill Tags */}
                    {skill.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {skill.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-950/50 text-emerald-200 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors"
                          >
                            <span 
                              className="w-1 h-1 rounded-full bg-amber-400" 
                            />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Proficiency Progress & Details Trigger */}
                  <div className="pt-3 border-t border-emerald-900/40 mt-auto">
                    <div className="flex justify-between items-center text-[11px] mb-1.5">
                      <span className="text-slate-400 font-medium">Proficiency Level</span>
                      <span className="font-mono font-bold text-amber-300">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Glowing Progress Gauge */}
                    <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-emerald-900/60 p-[1px] mb-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, #059669, #10b981, #fbbf24)',
                          boxShadow: '0 0 10px rgba(16,185,129,0.5)'
                        }}
                      />
                    </div>

                    {/* Card Action Text */}
                    <div className="flex items-center justify-between text-xs text-slate-400 group-hover:text-emerald-300 transition-colors font-medium">
                      <span>Faahfaahin & Tusaalooyin</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-amber-400" />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty state if search returns nothing */}
        {processedSkills.length === 0 && (
          <div className="text-center py-16">
            <div className="w-14 h-14 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <p className="text-white font-bold text-base">Xirfad laguma helin raadintaada "{searchQuery}"</p>
            <p className="text-xs text-slate-400 mt-1">Fadlan hubi qoraalka ama dib u deji filter-ka si aad u aragto dhammaan 12-ka xirfadood.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSortBy('default'); }}
              className="mt-4 px-5 py-2 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 hover:brightness-110 transition-all cursor-pointer"
            >
              Dib u soo celi Dhammaan (12)
            </button>
          </div>
        )}

        {/* Bottom Verification Footer inside the Board */}
        <div className="mt-10 pt-6 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 relative z-10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-300 font-medium">
              Dhammaan 12-ka xirfadood waxay leeyihiin tusaalooyin dhab ah iyo khibrad ganacsi oo 4+ sano ah.
            </span>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>Eeg Mashaariicda Lagu Hirgeliyay</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Candidate, VerifiedSkill, ProjectRequirement } from '../../types';
import { ShieldCheck, CheckCircle2, Star, Zap, ArrowRight, Eye, UserCheck, EyeOff, Search, Palette, Code, Video, FileText } from 'lucide-react';
import { searchCandidates, ALL_CANDIDATES } from '../../data/mockData';

interface Screen7MatchProps {
  isBlindMode: boolean;
  onSelectCandidateToHire: (candidate: Candidate) => void;
  onOpenProveIt: (skill: VerifiedSkill) => void;
  currentRequirement?: ProjectRequirement | null;
}

export const Screen7Match: React.FC<Screen7MatchProps> = ({
  isBlindMode,
  onSelectCandidateToHire,
  onOpenProveIt,
  currentRequirement,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>(
    currentRequirement?.prompt || 'looking for a person who can design a logo'
  );

  // Dynamic candidate relevance engine search
  const { candidates, detectedCategory, primarySkillName } = searchCandidates(searchQuery);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-slate-100">
      
      {/* Top Header & Relevance Search Bar */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center space-x-1.5 text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20 mb-3">
          <Zap className="w-4 h-4 text-amber-300" /> AI RELEVANCE SEARCH & MATCH ENGINE
        </span>
        <h2 className="text-3xl sm:text-5xl font-black font-display text-white">RELEVANT MATCHED TALENT</h2>
        <p className="text-sm text-slate-300 mt-2 max-w-2xl mx-auto">
          Showing verified candidates relevant to: <span className="text-indigo-400 font-bold">"{primarySkillName}"</span>
        </p>

        {/* Live Search Refinement Input */}
        <div className="mt-6 max-w-2xl mx-auto relative">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-indigo-400 absolute left-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. looking for a person who can design a logo..."
              className="w-full bg-slate-900 border border-indigo-500/40 rounded-2xl pl-12 pr-28 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-xl"
            />
            <button
              onClick={() => setSearchQuery(searchQuery)}
              className="absolute right-2.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl transition shadow"
            >
              SEARCH
            </button>
          </div>

          {/* Quick Category Chips */}
          <div className="flex flex-wrap gap-2 justify-center mt-3 text-xs">
            <button
              onClick={() => setSearchQuery("looking for logo design and brand identity")}
              className={`px-3 py-1 rounded-full border font-bold transition flex items-center space-x-1 ${
                detectedCategory === 'logo_design'
                  ? 'bg-purple-600/30 border-purple-500 text-purple-300'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Logo Design</span>
            </button>

            <button
              onClick={() => setSearchQuery("looking for website building developer")}
              className={`px-3 py-1 rounded-full border font-bold transition flex items-center space-x-1 ${
                detectedCategory === 'website_building'
                  ? 'bg-cyan-600/30 border-cyan-500 text-cyan-300'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Website Building</span>
            </button>

            <button
              onClick={() => setSearchQuery("looking for video editing and reel creator")}
              className={`px-3 py-1 rounded-full border font-bold transition flex items-center space-x-1 ${
                detectedCategory === 'video_editing'
                  ? 'bg-indigo-600/30 border-indigo-500 text-indigo-300'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Video Editing</span>
            </button>

            <button
              onClick={() => setSearchQuery("looking for conversion copywriter")}
              className={`px-3 py-1 rounded-full border font-bold transition flex items-center space-x-1 ${
                detectedCategory === 'copywriting'
                  ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Copywriting</span>
            </button>
          </div>
        </div>
      </div>

      {/* Candidate Cards Stack */}
      <div className="space-y-6">
        {candidates.map((cand, idx) => (
          <motion.div
            key={cand.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className={`p-6 bg-slate-900/90 rounded-3xl border transition-all shadow-xl ${
              idx === 0
                ? 'border-indigo-500/60 ring-1 ring-indigo-500/30 bg-gradient-to-r from-[#0D1322] via-[#0F172A] to-[#151C30]'
                : 'border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              
              {/* Candidate Info & Recent Work */}
              <div className="flex items-start space-x-4 flex-1">
                <div className="relative shrink-0">
                  <img
                    src={cand.avatar}
                    alt={cand.name}
                    className={`w-16 h-16 rounded-2xl object-cover border-2 border-indigo-500/40 ${
                      isBlindMode ? 'blur-md grayscale' : ''
                    }`}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 p-0.5 rounded-md border border-slate-900">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold font-display text-white">
                      {isBlindMode ? `CANDIDATE #${idx + 24}` : cand.name}
                    </h3>
                    {idx === 0 && (
                      <span className="text-[10px] font-black uppercase bg-indigo-600 text-white px-2 py-0.5 rounded-full">
                        TOP RELEVANT MATCH
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400">
                    {cand.projects} Verified Projects • <span className="text-amber-400 font-bold">★ {cand.rating} Rating</span>
                  </p>

                  <p className="text-xs text-indigo-300 font-medium">
                    Speciality: <span className="text-white font-bold">{cand.primarySkillName}</span>
                  </p>

                  <p className="text-xs text-slate-300">
                    Recent Work: <span className="text-slate-300 italic">{cand.recentWorkTitle}</span>
                  </p>

                  {/* Portfolio Thumbnail Preview Badges */}
                  {cand.portfolioSamples && cand.portfolioSamples.length > 0 && (
                    <div className="flex items-center space-x-2 pt-2">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Portfolio Proofs:</span>
                      {cand.portfolioSamples.map((sample, sIdx) => (
                        <span key={sIdx} className="text-[10px] bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-indigo-300 font-medium flex items-center">
                          ✓ {sample.title}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Match Score & Skill Bars */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full lg:w-auto shrink-0">
                
                {/* Match Badge */}
                <div className="bg-slate-950 p-3.5 rounded-2xl border border-indigo-500/30 text-center min-w-[110px]">
                  <span className="text-[9px] uppercase font-bold text-slate-400 block">RELEVANCE</span>
                  <div className="text-3xl font-black text-emerald-400 font-display mt-0.5">{cand.matchScore}%</div>
                </div>

                {/* Skill Breakdown Micro Bars */}
                <div className="space-y-1.5 w-full sm:w-44 text-xs font-semibold">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-300 mb-0.5">
                      <span>{cand.primarySkillName.split(' ')[0]}:</span>
                      <span className="text-indigo-400 font-bold">{cand.skills.Primary}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500" style={{ width: `${cand.skills.Primary}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-slate-300 mb-0.5">
                      <span>Creativity:</span>
                      <span className="text-purple-400 font-bold">{cand.skills.Creativity}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500" style={{ width: `${cand.skills.Creativity}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-slate-300 mb-0.5">
                      <span>Execution:</span>
                      <span className="text-emerald-400 font-bold">{cand.skills.Execution}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400" style={{ width: `${cand.skills.Execution}%` }} />
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => onSelectCandidateToHire(cand)}
                    className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center justify-center space-x-1.5"
                  >
                    <span>HIRE & START PROJECT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenProveIt({
                      id: 'proof_match',
                      name: cand.primarySkillName,
                      category: cand.categoryType,
                      score: cand.skills.Primary,
                      verified: true,
                      growth: [82, cand.skills.Primary],
                      lastUpdated: 'Today',
                      evidenceCount: cand.projects
                    })}
                    className="px-4 py-2 bg-slate-950 hover:bg-slate-800 text-indigo-300 border border-slate-800 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    <span>PROVE IT</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

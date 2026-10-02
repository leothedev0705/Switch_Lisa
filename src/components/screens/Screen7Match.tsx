import React from 'react';
import { motion } from 'framer-motion';
import { Candidate, VerifiedSkill } from '../../types';
import { ShieldCheck, CheckCircle2, Star, Zap, ArrowRight, Eye, UserCheck, EyeOff } from 'lucide-react';
import { MOCK_CANDIDATES } from '../../data/mockData';

interface Screen7MatchProps {
  isBlindMode: boolean;
  onSelectCandidateToHire: (candidate: Candidate) => void;
  onOpenProveIt: (skill: VerifiedSkill) => void;
}

export const Screen7Match: React.FC<Screen7MatchProps> = ({
  isBlindMode,
  onSelectCandidateToHire,
  onOpenProveIt,
}) => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-slate-100">
      
      {/* Top Banner */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center space-x-1.5 text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20 mb-3">
          <Zap className="w-4 h-4 text-amber-300" /> AI MATCH ALGORITHM RESULTS
        </span>
        <h2 className="text-3xl sm:text-5xl font-black font-display text-white">MATCHED TALENT</h2>
        <p className="text-sm text-slate-300 mt-2">
          Candidates ranked dynamically based on verified skill thresholds, delivery speed, and client satisfaction ratings.
        </p>
      </div>

      {/* Candidate Cards Stack */}
      <div className="space-y-5">
        {MOCK_CANDIDATES.map((cand, idx) => (
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
              
              {/* Candidate Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
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

                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold font-display text-white">
                      {isBlindMode ? `CANDIDATE #${idx + 24}` : cand.name}
                    </h3>
                    {idx === 0 && (
                      <span className="text-[10px] font-black uppercase bg-indigo-600 text-white px-2 py-0.5 rounded-full">
                        TOP MATCH
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {cand.projects} Completed Projects • <span className="text-amber-400 font-bold">★ {cand.rating} Rating</span>
                  </p>
                  <p className="text-xs text-indigo-300 font-medium mt-1">
                    Work Proof: <span className="text-slate-300 italic">{cand.recentWorkTitle}</span>
                  </p>
                </div>
              </div>

              {/* Match Score & Skill Bars */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full lg:w-auto">
                
                {/* Match Badge */}
                <div className="bg-slate-950 p-3.5 rounded-2xl border border-indigo-500/30 text-center min-w-[110px]">
                  <span className="text-[9px] uppercase font-bold text-slate-400 block">AI MATCH</span>
                  <div className="text-3xl font-black text-emerald-400 font-display mt-0.5">{cand.matchScore}%</div>
                </div>

                {/* Skill Breakdown Micro Bars */}
                <div className="space-y-1.5 w-full sm:w-44 text-xs font-semibold">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-300 mb-0.5">
                      <span>Editing:</span>
                      <span className="text-indigo-400 font-bold">{cand.skills.Editing}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500" style={{ width: `${cand.skills.Editing}%` }} />
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
                      <span>Social Media:</span>
                      <span className="text-emerald-400 font-bold">{cand.skills.SocialMedia}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400" style={{ width: `${cand.skills.SocialMedia}%` }} />
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
                      name: 'Video Editing',
                      category: 'Media',
                      score: cand.skills.Editing,
                      verified: true,
                      growth: [80, 90],
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

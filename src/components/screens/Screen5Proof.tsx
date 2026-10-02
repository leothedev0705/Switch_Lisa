import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Award, Zap, Star, Video, FileText, Lock, ExternalLink, ArrowLeft } from 'lucide-react';

interface Screen5ProofProps {
  onBackToPassport: () => void;
  onOpenSkillCard: () => void;
}

export const Screen5Proof: React.FC<Screen5ProofProps> = ({
  onBackToPassport,
  onOpenSkillCard,
}) => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-slate-100">
      
      {/* Top Navigation Back */}
      <button
        onClick={onBackToPassport}
        className="mb-6 inline-flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-white transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Skill Passport</span>
      </button>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 p-6 sm:p-8 rounded-3xl border border-indigo-500/30 shadow-2xl mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              TRANSPARENT PROOF AUDIT
            </span>
            <span className="text-xs text-emerald-400 font-bold flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-1" /> VERIFIED ON-CHAIN
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white">VIDEO EDITING — 91</h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Every score on SWITCH is transparent, defensible, and audited by cryptographic proof logs.
          </p>
        </div>

        {/* Verification Status Card */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-emerald-500/40 text-center shrink-0">
          <div className="text-[10px] uppercase font-extrabold text-slate-400">VERIFICATION STATUS</div>
          <div className="text-xl font-black text-emerald-400 font-display mt-0.5">VERIFIED ✓</div>
          <div className="text-[10px] text-slate-400 mt-1">Valid until: <span className="text-white font-bold">March 2027</span></div>
        </div>
      </div>

      {/* 5 Core Evidence Blocks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        
        {/* 1. Challenge Result */}
        <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition">
          <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl w-max mb-4">
            <Zap className="w-6 h-6" />
          </div>
          <span className="text-xs uppercase font-bold text-slate-400">EVIDENCE ITEM #1</span>
          <h3 className="text-xl font-bold text-white font-display mt-1">🎬 Challenge Result</h3>
          <div className="text-3xl font-black text-indigo-400 mt-2 font-display">91 / 100</div>
          <p className="text-xs text-slate-400 mt-2">
            Passed 30-minute Gen-Z Café Reel challenge evaluated by AI rhythm & grading engine.
          </p>
        </div>

        {/* 2. Portfolio Projects */}
        <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-purple-500/40 transition">
          <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl w-max mb-4">
            <Video className="w-6 h-6" />
          </div>
          <span className="text-xs uppercase font-bold text-slate-400">EVIDENCE ITEM #2</span>
          <h3 className="text-xl font-bold text-white font-display mt-1">📁 Portfolio Projects</h3>
          <div className="text-3xl font-black text-purple-400 mt-2 font-display">8 Projects</div>
          <p className="text-xs text-slate-400 mt-2">
            Automated timeline, cut density, and visual retention analysis on uploaded work.
          </p>
        </div>

        {/* 3. Client Reviews */}
        <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition">
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl w-max mb-4">
            <Star className="w-6 h-6" />
          </div>
          <span className="text-xs uppercase font-bold text-slate-400">EVIDENCE ITEM #3</span>
          <h3 className="text-xl font-bold text-white font-display mt-1">⭐ Client Reviews</h3>
          <div className="text-3xl font-black text-amber-400 mt-2 font-display">4.9 / 5.0</div>
          <p className="text-xs text-slate-400 mt-2">
            Weighted feedback rating from 12 verified paying business contracts on SWITCH.
          </p>
        </div>

        {/* 4. Completed Projects */}
        <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-max mb-4">
            <Award className="w-6 h-6" />
          </div>
          <span className="text-xs uppercase font-bold text-slate-400">EVIDENCE ITEM #4</span>
          <h3 className="text-xl font-bold text-white font-display mt-1">🏆 Completed Projects</h3>
          <div className="text-3xl font-black text-emerald-400 mt-2 font-display">12 Contracts</div>
          <p className="text-xs text-slate-400 mt-2">
            100% on-time delivery metric with zero client dispute flags.
          </p>
        </div>

        {/* 5. Assessment Breakdown */}
        <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition lg:col-span-2">
          <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl w-max mb-4">
            <FileText className="w-6 h-6" />
          </div>
          <span className="text-xs uppercase font-bold text-slate-400">EVIDENCE ITEM #5</span>
          <h3 className="text-xl font-bold text-white font-display mt-1">📊 Assessment Rubric Metrics</h3>
          
          <div className="grid grid-cols-2 gap-4 mt-4 text-xs font-semibold">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400">Storytelling Retention:</span>
              <span className="text-indigo-400 font-bold block text-base mt-0.5">91 / 100</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400">Pacing & Cut Timing:</span>
              <span className="text-emerald-400 font-bold block text-base mt-0.5">87 / 100</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400">Creativity & Style:</span>
              <span className="text-purple-400 font-bold block text-base mt-0.5">94 / 100</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400">Visual Quality:</span>
              <span className="text-amber-400 font-bold block text-base mt-0.5">89 / 100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Raw Hash & Verification Audit Footer */}
      <div className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400">
          <span className="text-slate-300 font-bold block">Cryptographic Audit Hash:</span>
          <code className="text-indigo-400 font-mono">0x9f88a1b2c3d4e5f67890123456789abcdef0123456789</code>
        </div>
        <button
          onClick={onOpenSkillCard}
          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md transition"
        >
          Share Skill Card
        </button>
      </div>
    </div>
  );
};

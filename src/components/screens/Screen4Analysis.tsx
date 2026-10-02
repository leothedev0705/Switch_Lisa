import React from 'react';
import { motion } from 'framer-motion';
import { AIAnalysisResult } from '../../types';
import { ShieldCheck, CheckCircle2, Award, Zap, ArrowRight, BarChart2, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Screen4AnalysisProps {
  analysis: AIAnalysisResult;
  onViewProof: () => void;
  onContinueToMarketplace: () => void;
}

export const Screen4Analysis: React.FC<Screen4AnalysisProps> = ({
  analysis,
  onViewProof,
  onContinueToMarketplace,
}) => {

  React.useEffect(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-slate-100">
      
      {/* Top Banner */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center space-x-1.5 text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20 mb-3">
          <ShieldCheck className="w-4 h-4" /> AI SKILL EVALUATION COMPLETE
        </span>
        <h2 className="text-3xl sm:text-5xl font-black font-display text-white">{analysis.title}</h2>
        <p className="text-sm text-slate-400 mt-2">Assessment category: <span className="text-indigo-400 font-bold">{analysis.skillName}</span></p>
      </div>

      {/* Main Score Hero Card */}
      <div className="bg-gradient-to-br from-[#0D1322] via-[#0F172A] to-[#161D30] p-8 rounded-3xl border border-indigo-500/30 shadow-2xl relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          
          {/* Final Score Circle Big Display */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-emerald-400 p-1 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full bg-[#0D1322] rounded-full flex flex-col items-center justify-center p-4">
                <span className="text-[10px] uppercase font-bold text-slate-400">FINAL SCORE</span>
                <span className="text-5xl font-black text-white font-display gradient-text-emerald">
                  {analysis.finalScore}
                </span>
                <span className="text-[10px] font-bold text-emerald-400 mt-0.5">OUT OF 100</span>
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4" />
              <span>STATUS: {analysis.status}</span>
            </div>
          </div>

          {/* Individual Breakdown Bars */}
          <div className="flex-1 w-full space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Detailed AI Rubric Breakdown</h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-200">Storytelling</span>
                  <span className="text-indigo-400">{analysis.scores.Storytelling} / 100</span>
                </div>
                <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${analysis.scores.Storytelling}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-200">Timing & Audio Sync</span>
                  <span className="text-emerald-400">{analysis.scores.Timing} / 100</span>
                </div>
                <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${analysis.scores.Timing}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-200">Creativity & Hook Style</span>
                  <span className="text-purple-400">{analysis.scores.Creativity} / 100</span>
                </div>
                <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: `${analysis.scores.Creativity}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-200">Visual Quality & Grading</span>
                  <span className="text-amber-400">{analysis.scores.VisualQuality} / 100</span>
                </div>
                <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: `${analysis.scores.VisualQuality}%` }} />
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 italic bg-slate-950 p-3 rounded-xl border border-slate-800">
              "{analysis.feedbackText}"
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onViewProof}
          className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-2xl shadow-xl shadow-indigo-600/30 transition flex items-center justify-center space-x-2"
        >
          <Zap className="w-4 h-4 text-amber-300" />
          <span>VIEW PROOF BEHIND THE SCORE</span>
        </button>

        <button
          onClick={onContinueToMarketplace}
          className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm rounded-2xl transition flex items-center justify-center space-x-2"
        >
          <span>CONTINUE TO MARKETPLACE MATCH</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

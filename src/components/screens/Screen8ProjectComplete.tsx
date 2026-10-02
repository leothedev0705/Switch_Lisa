import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle2, Star, Zap, Award, Sparkles, ArrowRight, RefreshCw, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Screen8ProjectCompleteProps {
  onViewPassport: () => void;
  onRestartFlow: () => void;
}

export const Screen8ProjectComplete: React.FC<Screen8ProjectCompleteProps> = ({
  onViewPassport,
  onRestartFlow,
}) => {
  useEffect(() => {
    // Fire celebratory confetti bursts
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-slate-100 text-center">
      
      {/* Celebration Header Pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-widest mb-4"
      >
        <Trophy className="w-4 h-4 text-amber-400" />
        <span>PROJECT DELIVERED & RATED BY CLIENT</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-6xl font-black font-display text-white tracking-tight"
      >
        PROJECT COMPLETE
      </motion.h2>

      <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto mt-2">
        Sublime Coffee Co. verified delivery and rated your performance.
      </p>

      {/* Main Scorecard Banner */}
      <div className="mt-8 bg-gradient-to-br from-[#0D1322] via-[#0F172A] to-[#161D32] p-8 rounded-3xl border border-indigo-500/30 shadow-2xl space-y-6 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
          
          {/* XP & Satisfaction Header */}
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 font-black rounded-2xl shadow-lg shadow-amber-500/20 text-2xl font-display">
              +420 XP ⚡
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold text-slate-400">Client Satisfaction</span>
              <div className="text-2xl font-black text-amber-400 font-display">4.9 / 5.0 ★</div>
              <span className="text-xs text-emerald-400 font-semibold flex items-center mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> "Reliable under deadlines"
              </span>
            </div>
          </div>

          {/* Badge Unlocked Notification */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-amber-500/40 text-center w-full sm:w-auto">
            <span className="text-[9px] uppercase font-bold text-amber-300 block">NEW BADGE UNLOCKED!</span>
            <div className="text-lg font-black text-white font-display mt-0.5 flex items-center justify-center space-x-1">
              <span>🏆 Deadline Machine</span>
            </div>
            <span className="text-[10px] text-slate-400 block mt-0.5">Completed 10 projects on time</span>
          </div>
        </div>

        {/* 4 Performance Metric Bars */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Performance Breakdown</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-300">Quality of Work</span>
                <span className="text-indigo-400 font-bold">92 / 100</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '92%' }} />
              </div>
            </div>

            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-300">On-Time Delivery</span>
                <span className="text-emerald-400 font-bold">100 / 100</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: '100%' }} />
              </div>
            </div>

            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-300">Communication Speed</span>
                <span className="text-purple-400 font-bold">88 / 100</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '88%' }} />
              </div>
            </div>

            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-300">Creativity & Style</span>
                <span className="text-amber-400 font-bold">95 / 100</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '95%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onViewPassport}
          className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-indigo-600/30 transition flex items-center justify-center space-x-2"
        >
          <ShieldCheck className="w-5 h-5" />
          <span>VIEW UPDATED SKILL PASSPORT</span>
        </button>

        <button
          onClick={onRestartFlow}
          className="w-full sm:w-auto px-7 py-4 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-bold text-sm rounded-2xl transition flex items-center justify-center space-x-2"
        >
          <RefreshCw className="w-4 h-4" />
          <span>RESTART CORE PROTOTYPE FLOW</span>
        </button>
      </div>
    </div>
  );
};

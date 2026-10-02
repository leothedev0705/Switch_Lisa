import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Target, Zap, ArrowRight, TrendingUp, AlertTriangle } from 'lucide-react';

interface SkillGapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartChallenge: () => void;
}

export const SkillGapModal: React.FC<SkillGapModalProps> = ({
  isOpen,
  onClose,
  onStartChallenge
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-md bg-[#0F172A] border border-amber-500/30 rounded-2xl p-6 shadow-2xl overflow-hidden text-slate-100"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                AI SKILL GAP DETECTOR
              </span>
              <h3 className="text-xl font-bold font-display text-white mt-1">Growth Insight Identified</h3>
            </div>
          </div>

          <div className="bg-amber-950/30 border border-amber-500/20 rounded-xl p-4 mb-5 space-y-2">
            <div className="flex items-start space-x-2 text-amber-300 font-medium text-sm">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>You're strong at editing, but your projects show a gap in storytelling.</span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-amber-500/20 text-xs">
              <span className="text-slate-400">Current Storytelling Score:</span>
              <span className="font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded text-sm">72 / 100</span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">Recommended Improvement Challenge</h4>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white">Create a 20-second emotional story</div>
                <div className="text-xs text-slate-400 mt-0.5">Estimated time: 30 minutes • +150 XP</div>
              </div>
              <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg">
                <Zap className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Loop visualization */}
          <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800 text-center mb-6">
            <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Continuous Growth Loop</div>
            <div className="text-xs font-semibold text-indigo-300 flex items-center justify-center space-x-1 flex-wrap">
              <span>TEST</span>
              <span>→</span>
              <span>IDENTIFY GAP</span>
              <span>→</span>
              <span>PRACTICE</span>
              <span>→</span>
              <span>IMPROVE</span>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition"
            >
              Maybe Later
            </button>
            <button
              onClick={() => {
                onClose();
                onStartChallenge();
              }}
              className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition flex items-center justify-center space-x-1.5 shadow-lg shadow-amber-500/20"
            >
              <span>Take Challenge Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, DollarSign, Briefcase, FolderPlus, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PERFECT_SWITCH_RECOMMENDATIONS } from '../data/mockData';

interface PerfectSwitchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (title: string) => void;
}

export const PerfectSwitchModal: React.FC<PerfectSwitchModalProps> = ({
  isOpen,
  onClose,
  onSelectProject
}) => {
  const [selectedGoal, setSelectedGoal] = useState<string>('Make money');

  if (!isOpen) return null;

  const goals = [
    { label: 'Make money', icon: DollarSign, color: 'text-emerald-400 border-emerald-500/30' },
    { label: 'Build experience', icon: Briefcase, color: 'text-blue-400 border-blue-500/30' },
    { label: 'Build portfolio', icon: FolderPlus, color: 'text-purple-400 border-purple-500/30' },
    { label: 'Try something new', icon: Compass, color: 'text-amber-400 border-amber-500/30' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-xl bg-[#0F172A] border border-indigo-500/30 rounded-3xl p-6 shadow-2xl overflow-hidden text-slate-100"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                PERFECT SWITCH MATCH
              </span>
              <h3 className="text-xl font-bold font-display text-white mt-1">WHAT DO YOU WANT TO DO?</h3>
            </div>
          </div>

          <p className="text-xs text-slate-400 mb-5">
            Tell SWITCH your immediate priority. Our AI will filter projects aligned with your verified skill thresholds.
          </p>

          {/* Goals Selection Grid */}
          <div className="grid grid-cols-2 gap-2.5 mb-6">
            {goals.map((g) => {
              const Icon = g.icon;
              const isSelected = selectedGoal === g.label;
              return (
                <button
                  key={g.label}
                  onClick={() => setSelectedGoal(g.label)}
                  className={`flex items-center space-x-2.5 p-3 rounded-xl border text-xs font-semibold transition text-left ${
                    isSelected
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${g.color}`} />
                  <span>{g.label}</span>
                </button>
              );
            })}
          </div>

          {/* Recommendations List */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center text-xs">
              <span className="uppercase font-bold text-slate-400 tracking-wider">Top AI Recommendations for "{selectedGoal}"</span>
              <span className="text-indigo-400 font-semibold">3 Instant Matches</span>
            </div>

            {PERFECT_SWITCH_RECOMMENDATIONS.map((rec) => (
              <div
                key={rec.id}
                className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition flex items-center justify-between group"
              >
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      {rec.match} Match
                    </span>
                    <span className="text-[10px] font-medium bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full">
                      {rec.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition">{rec.project}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{rec.client} • {rec.skillRequired}</p>
                </div>

                <div className="text-right flex flex-col items-end">
                  <span className="text-sm font-extrabold text-emerald-400">{rec.budget}</span>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectProject(rec.project);
                    }}
                    className="mt-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

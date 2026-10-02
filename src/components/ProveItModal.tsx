import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Award, ExternalLink, X, Zap, Star, Video, FileCheck } from 'lucide-react';
import { VerifiedSkill } from '../types';

interface ProveItModalProps {
  isOpen: boolean;
  onClose: () => void;
  skill?: VerifiedSkill | null;
  candidateName?: string;
}

export const ProveItModal: React.FC<ProveItModalProps> = ({
  isOpen,
  onClose,
  skill,
  candidateName = 'Tanmayee'
}) => {
  if (!isOpen || !skill) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-[#0F172A] border border-indigo-500/30 rounded-2xl p-6 shadow-2xl overflow-hidden text-slate-100"
        >
          {/* Subtle gradient background ambient light */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                  PROOF OF ABILITY
                </span>
                <span className="text-xs text-emerald-400 flex items-center font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> VERIFIED ON-CHAIN
                </span>
              </div>
              <h2 className="text-2xl font-bold font-display text-white mt-1">
                How did {candidateName} earn this {skill.score} score?
              </h2>
            </div>
          </div>

          <p className="text-sm text-slate-300 mb-6 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            SWITCH scores are non-declarative. Every point is backed by automated AI skill challenges, verified client deliverable performance, and peer audit trace logs.
          </p>

          {/* Core Evidence Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start space-x-3">
              <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Challenge Result</span>
                <div className="text-xl font-bold text-white mt-0.5">{skill.score} / 100</div>
                <p className="text-xs text-slate-400 mt-1">Passed 30-min Gen-Z Cafe Reel Challenge</p>
              </div>
            </div>

            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start space-x-3">
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Portfolio Projects</span>
                <div className="text-xl font-bold text-white mt-0.5">{skill.evidenceCount} Projects</div>
                <p className="text-xs text-slate-400 mt-1">Inspected & code/timeline analyzed</p>
              </div>
            </div>

            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start space-x-3">
              <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Client Reviews</span>
                <div className="text-xl font-bold text-white mt-0.5">4.9 / 5.0 Rating</div>
                <p className="text-xs text-slate-400 mt-1">Based on 12 verified client projects</p>
              </div>
            </div>

            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start space-x-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Verification Badge</span>
                <div className="text-xl font-bold text-emerald-400 mt-0.5">VERIFIED ✓</div>
                <p className="text-xs text-slate-400 mt-1">Valid until March 2027</p>
              </div>
            </div>
          </div>

          {/* Assessment Breakdown Bars */}
          <div className="space-y-3 mb-6 bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">AI Assessment Breakdown</h4>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1 font-medium">
                  <span className="text-slate-300">Storytelling & Hook Retention</span>
                  <span className="text-indigo-400 font-bold">91/100</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: '91%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1 font-medium">
                  <span className="text-slate-300">Pacing & Audio Sync Timing</span>
                  <span className="text-emerald-400 font-bold">87/100</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '87%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1 font-medium">
                  <span className="text-slate-300">Visual Polish & Color Grading</span>
                  <span className="text-purple-400 font-bold">94/100</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: '94%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <a
              href="#view-raw-evidence"
              onClick={(e) => { e.preventDefault(); alert("Viewing cryptographic proof audit logs..."); }}
              className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center font-medium"
            >
              <FileCheck className="w-4 h-4 mr-1.5" /> Audit Proof Log #892-SW
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition shadow-lg shadow-indigo-600/25"
            >
              Close Defensible Proof
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

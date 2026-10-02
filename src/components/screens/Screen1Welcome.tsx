import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Compass } from 'lucide-react';

interface Screen1WelcomeProps {
  onStartPassport: () => void;
  onOpenChallenge: () => void;
}

export const Screen1Welcome: React.FC<Screen1WelcomeProps> = ({
  onStartPassport,
  onOpenChallenge,
}) => {
  const [selectedSkill, setSelectedSkill] = useState<string>('🎬 Edit Videos');

  const skillCards = [
    { title: '🎬 Edit Videos', count: '1.2k Active Hiring Projects', color: 'from-blue-600/20 to-indigo-600/20 border-indigo-500/40' },
    { title: '🎨 Design', count: '890 Active Projects', color: 'from-purple-600/20 to-pink-600/20 border-purple-500/40' },
    { title: '📱 Manage Social Media', count: '640 Active Projects', color: 'from-amber-600/20 to-orange-600/20 border-amber-500/40' },
    { title: '✍️ Write', count: '520 Active Projects', color: 'from-emerald-600/20 to-teal-600/20 border-emerald-500/40' },
    { title: '💻 Build Websites', count: '780 Active Projects', color: 'from-cyan-600/20 to-blue-600/20 border-cyan-500/40' },
    { title: '🎤 Present', count: '310 Active Projects', color: 'from-rose-600/20 to-red-600/20 border-rose-500/40' },
    { title: '📸 Photography', count: '450 Active Projects', color: 'from-violet-600/20 to-purple-600/20 border-violet-500/40' },
  ];

  return (
    <div className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-slate-100">
      
      {/* Hero Ambient Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Value Pill */}
      <div className="flex justify-center mb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 shadow-xl"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-bold text-indigo-300">
            PROOF-OF-ABILITY TALENT MARKETPLACE
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-xs text-slate-300 flex items-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1" /> No Resumes Needed
          </span>
        </motion.div>
      </div>

      {/* Headline & Subtext */}
      <div className="text-center max-w-4xl mx-auto space-y-4 mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-tight"
        >
          What can you <br className="hidden sm:inline" />
          <span className="gradient-text-primary">actually do?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          SWITCH helps you prove your skills, find opportunities, and build a reputation based on what you can <span className="text-white font-semibold underline decoration-indigo-500 decoration-2">actually deliver</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={onStartPassport}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-indigo-600/30 transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>BUILD MY SKILL PASSPORT</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenChallenge}
            className="w-full sm:w-auto px-7 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 font-bold text-base rounded-2xl transition flex items-center justify-center space-x-2"
          >
            <Zap className="w-5 h-5 text-indigo-400" />
            <span>TRY 30-MIN CHALLENGE</span>
          </button>
        </motion.div>
      </div>

      {/* Interactive Skill Cards Grid */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold font-display text-white flex items-center">
              <Compass className="w-5 h-5 text-indigo-400 mr-2" />
              Select a Skill to Prove
            </h3>
            <p className="text-xs text-slate-400">Click any card to preview challenge requirements</p>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            ✓ 7 Skill Passports Available
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillCards.map((card, idx) => {
            const isSelected = selectedSkill === card.title;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => setSelectedSkill(card.title)}
                className={`cursor-pointer rounded-2xl p-5 border backdrop-blur-xl transition-all duration-300 bg-gradient-to-b ${card.color} ${
                  isSelected
                    ? 'ring-2 ring-indigo-500 shadow-xl scale-[1.02] bg-slate-900/95'
                    : 'bg-slate-900/60 hover:bg-slate-900/90 hover:border-indigo-500/50'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-2xl">{card.title.split(' ')[0]}</span>
                  {isSelected && (
                    <span className="bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      SELECTED
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-bold text-white font-display">
                  {card.title.replace(/^[^\s]+\s/, '')}
                </h4>
                <p className="text-xs text-slate-400 mt-1">{card.count}</p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-indigo-300 font-semibold flex items-center">
                    <Zap className="w-3.5 h-3.5 mr-1" /> 30-Min AI Test
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenChallenge();
                    }}
                    className="text-xs font-bold text-indigo-400 hover:text-white flex items-center space-x-1"
                  >
                    <span>PROVE IT</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Proof-of-Ability Value Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-800/80">
        <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 flex items-start space-x-4">
          <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white font-display">30-Min Skill Challenges</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              No lengthy resumes. Perform actual tasks in timed micro-assessments evaluated by AI models.
            </p>
          </div>
        </div>

        <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 flex items-start space-x-4">
          <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white font-display">Transparent Proof Log</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Every score on your passport links directly to the raw clip output, code, or design you created.
            </p>
          </div>
        </div>

        <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 flex items-start space-x-4">
          <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white font-display">Blind Skill Match</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Employers hire based purely on verified capability scores, bypassing college prestige bias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

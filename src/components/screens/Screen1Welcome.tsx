import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, ArrowRight, CheckCircle2, Sparkles, Compass, Palette, Code, Video, FileText, Share2 } from 'lucide-react';
import { SkillCategoryType } from '../../types';

interface Screen1WelcomeProps {
  onStartPassport: () => void;
  onOpenChallenge: (category?: SkillCategoryType) => void;
  onOpenLoginModal?: () => void;
}

export const Screen1Welcome: React.FC<Screen1WelcomeProps> = ({
  onStartPassport,
  onOpenChallenge,
  onOpenLoginModal,
}) => {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<SkillCategoryType>('logo_design');

  const skillCards: { title: string; categoryType: SkillCategoryType; count: string; color: string; icon: string }[] = [
    { title: '🎨 Logo & Brand Design', categoryType: 'logo_design', count: '890 Active Hiring Projects', color: 'from-purple-600/20 to-pink-600/20 border-purple-500/40', icon: '🎨' },
    { title: '💻 Website Building', categoryType: 'website_building', count: '780 Active Hiring Projects', color: 'from-cyan-600/20 to-blue-600/20 border-cyan-500/40', icon: '💻' },
    { title: '🎬 Edit Videos', categoryType: 'video_editing', count: '1.2k Active Hiring Projects', color: 'from-blue-600/20 to-indigo-600/20 border-indigo-500/40', icon: '🎬' },
    { title: '✍️ Copywriting', categoryType: 'copywriting', count: '520 Active Hiring Projects', color: 'from-emerald-600/20 to-teal-600/20 border-emerald-500/40', icon: '✍️' },
    { title: '📱 Social Media Strategy', categoryType: 'social_media', count: '640 Active Hiring Projects', color: 'from-amber-600/20 to-orange-600/20 border-amber-500/40', icon: '📱' },
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
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1" /> Dual Login (Business & Talent)
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
          <span className="gradient-text-primary">actually deliver?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          SWITCH helps you prove your skills through relevant 30-minute challenges, find opportunities, and connect businesses with verified top talent.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={() => onOpenChallenge(selectedSkillCategory)}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-indigo-600/30 transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>TRY RELEVANT 30-MIN TEST</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {onOpenLoginModal && (
            <button
              onClick={onOpenLoginModal}
              className="w-full sm:w-auto px-7 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 font-bold text-base rounded-2xl transition flex items-center justify-center space-x-2"
            >
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              <span>LOG IN (BUSINESS / TALENT)</span>
            </button>
          )}
        </motion.div>
      </div>

      {/* Interactive Skill Cards Grid */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold font-display text-white flex items-center">
              <Compass className="w-5 h-5 text-indigo-400 mr-2" />
              Select a Skill Test to Prove
            </h3>
            <p className="text-xs text-slate-400">Click any card to launch its specific interactive skill test</p>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            ✓ 5 Relevant Tests Available
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skillCards.map((card, idx) => {
            const isSelected = selectedSkillCategory === card.categoryType;
            return (
              <motion.div
                key={card.categoryType}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => setSelectedSkillCategory(card.categoryType)}
                className={`cursor-pointer rounded-2xl p-5 border backdrop-blur-xl transition-all duration-300 bg-gradient-to-b ${card.color} ${
                  isSelected
                    ? 'ring-2 ring-indigo-500 shadow-xl scale-[1.02] bg-slate-900/95'
                    : 'bg-slate-900/60 hover:bg-slate-900/90 hover:border-indigo-500/50'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-2xl">{card.icon}</span>
                  {isSelected && (
                    <span className="bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      SELECTED
                    </span>
                  )}
                </div>

                <h4 className="text-base font-bold text-white font-display">
                  {card.title.replace(/^[^\s]+\s/, '')}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1">{card.count}</p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-indigo-300 font-semibold flex items-center text-[10px]">
                    <Zap className="w-3 h-3 mr-1 text-amber-300" /> 30-Min Test
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenChallenge(card.categoryType);
                    }}
                    className="text-xs font-bold text-indigo-400 hover:text-white flex items-center space-x-1"
                  >
                    <span>START</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

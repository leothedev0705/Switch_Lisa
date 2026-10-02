import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectRequirement, SkillCategoryType } from '../../types';
import { Building2, Sparkles, Search, Sliders, ArrowRight, Zap, CheckCircle2, ShieldCheck, Palette, Code, Video, FileText } from 'lucide-react';
import { MOCK_DEFAULT_REQUIREMENT, searchCandidates } from '../../data/mockData';

interface Screen6MarketplaceProps {
  onFindTalent: (req: ProjectRequirement) => void;
  initialQuery?: string;
}

export const Screen6Marketplace: React.FC<Screen6MarketplaceProps> = ({
  onFindTalent,
  initialQuery = MOCK_DEFAULT_REQUIREMENT.prompt,
}) => {
  const [inputText, setInputText] = useState<string>(initialQuery);
  const [isParsing, setIsParsing] = useState<boolean>(false);

  // Derive skill category and thresholds from input text
  const searchResult = searchCandidates(inputText);
  const categoryType = searchResult.detectedCategory;
  const primarySkillName = searchResult.primarySkillName;

  const getThresholds = (cat: SkillCategoryType) => {
    if (cat === 'logo_design') {
      return { PrimarySkill: 88, Creativity: 90, Execution: 85 };
    } else if (cat === 'website_building') {
      return { PrimarySkill: 90, Creativity: 85, Execution: 92 };
    } else if (cat === 'copywriting') {
      return { PrimarySkill: 88, Creativity: 92, Execution: 86 };
    } else {
      return { PrimarySkill: 85, Creativity: 88, Execution: 84 };
    }
  };

  const currentThresholds = getThresholds(categoryType);

  const handleSubmit = () => {
    setIsParsing(true);
    setTimeout(() => {
      setIsParsing(false);
      onFindTalent({
        prompt: inputText,
        categoryType,
        convertedThresholds: currentThresholds,
        primarySkillName,
        budget: categoryType === 'website_building' ? '₹8,500' : categoryType === 'logo_design' ? '₹4,500' : '₹3,500',
        duration: '48 Hours'
      });
    }, 600);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-slate-100">
      
      {/* Top Banner */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center space-x-1.5 text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3.5 py-1 rounded-full border border-indigo-500/20 mb-3">
          <Building2 className="w-4 h-4" /> BUSINESS HIRER PORTAL
        </span>
        <h2 className="text-3xl sm:text-5xl font-black font-display text-white">SWITCH Marketplace</h2>
        <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto">
          Describe what you need in plain English. Our AI automatically extracts relevant skill thresholds and matches verified talent.
        </p>
      </div>

      {/* Main Input & AI Skill Threshold Converter Card */}
      <div className="bg-gradient-to-br from-[#0D1322] via-[#0F172A] to-[#141C30] p-6 sm:p-8 rounded-3xl border border-indigo-500/30 shadow-2xl space-y-6">
        
        {/* Quick Suggestion Chips */}
        <div>
          <span className="text-[10px] uppercase font-extrabold text-indigo-400 tracking-wider block mb-2">
            Suggested Relevance Queries:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setInputText("I am looking for a person who can design a logo and brand identity")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1 border ${
                categoryType === 'logo_design'
                  ? 'bg-purple-600/30 border-purple-500 text-purple-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>🎨 Logo & Brand Design</span>
            </button>

            <button
              onClick={() => setInputText("I need a person to build a responsive website and web UI")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1 border ${
                categoryType === 'website_building'
                  ? 'bg-cyan-600/30 border-cyan-500 text-cyan-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>💻 Website Building</span>
            </button>

            <button
              onClick={() => setInputText("I need someone to edit 3 Instagram Reels for a trendy café")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1 border ${
                categoryType === 'video_editing'
                  ? 'bg-indigo-600/30 border-indigo-500 text-indigo-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>🎬 Video Editing & Reels</span>
            </button>

            <button
              onClick={() => setInputText("I need a copywriter to write conversion ad headlines and hooks")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1 border ${
                categoryType === 'copywriting'
                  ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>✍️ Conversion Copywriting</span>
            </button>
          </div>
        </div>

        {/* Input Text Box */}
        <div>
          <label className="block text-xs uppercase font-extrabold text-indigo-400 tracking-wider mb-2 flex items-center justify-between">
            <span>Describe your requirement</span>
            <span className="text-slate-400 text-[10px]">AI Search Auto-Matching Enabled</span>
          </label>

          <div className="relative">
            <textarea
              rows={3}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="e.g. I am looking for a person who can design a logo..."
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white placeholder-slate-500 text-sm sm:text-base focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition resize-none"
            />
          </div>
        </div>

        {/* AI Converted Skill Requirements Box */}
        <div className="p-5 bg-slate-950/80 rounded-2xl border border-slate-800/80 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="uppercase font-bold text-slate-400 flex items-center">
              <Sparkles className="w-4 h-4 text-indigo-400 mr-1.5" /> AI Skill Threshold Extractor
            </span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
              MATCH CATEGORY: {categoryType.toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
              <span className="text-xs text-slate-400 uppercase font-semibold block">{primarySkillName}</span>
              <span className="text-2xl font-black text-indigo-400 font-display mt-0.5">{currentThresholds.PrimarySkill}+</span>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
              <span className="text-xs text-slate-400 uppercase font-semibold block">Creativity Minimum</span>
              <span className="text-2xl font-black text-purple-400 font-display mt-0.5">{currentThresholds.Creativity}+</span>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
              <span className="text-xs text-slate-400 uppercase font-semibold block">Execution Rating</span>
              <span className="text-2xl font-black text-emerald-400 font-display mt-0.5">{currentThresholds.Execution}+</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            disabled={isParsing}
            onClick={handleSubmit}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-indigo-600/30 transition flex items-center justify-center space-x-2"
          >
            {isParsing ? (
              <span>Matching Verified Candidates...</span>
            ) : (
              <>
                <Search className="w-5 h-5" />
                <span>FIND MATCHED RELEVANT TALENT</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

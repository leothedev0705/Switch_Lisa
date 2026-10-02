import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectRequirement } from '../../types';
import { Building2, Sparkles, Search, Sliders, ArrowRight, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';
import { MOCK_DEFAULT_REQUIREMENT } from '../../data/mockData';

interface Screen6MarketplaceProps {
  onFindTalent: (req: ProjectRequirement) => void;
}

export const Screen6Marketplace: React.FC<Screen6MarketplaceProps> = ({
  onFindTalent,
}) => {
  const [inputText, setInputText] = useState<string>(MOCK_DEFAULT_REQUIREMENT.prompt);
  const [isParsing, setIsParsing] = useState<boolean>(false);
  const [thresholds, setThresholds] = useState(MOCK_DEFAULT_REQUIREMENT.convertedThresholds);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setInputText(val);

    // Dynamic AI auto-conversion simulation
    if (val.toLowerCase().includes('reel') || val.toLowerCase().includes('video')) {
      setThresholds({ Editing: 80, Creativity: 75, SocialMedia: 70 });
    } else if (val.toLowerCase().includes('design') || val.toLowerCase().includes('logo')) {
      setThresholds({ Editing: 60, Creativity: 88, SocialMedia: 65 });
    } else {
      setThresholds({ Editing: 75, Creativity: 75, SocialMedia: 75 });
    }
  };

  const handleSubmit = () => {
    setIsParsing(true);
    setTimeout(() => {
      setIsParsing(false);
      onFindTalent({
        prompt: inputText,
        convertedThresholds: thresholds,
        budget: '₹3,500',
        duration: '48 Hours'
      });
    }, 800);
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
          Describe what you need in plain English. Our AI automatically extracts minimum skill thresholds and matches verified talent.
        </p>
      </div>

      {/* Main Input & AI Skill Threshold Converter Card */}
      <div className="bg-gradient-to-br from-[#0D1322] via-[#0F172A] to-[#141C30] p-6 sm:p-8 rounded-3xl border border-indigo-500/30 shadow-2xl space-y-6">
        
        {/* Input Text Box */}
        <div>
          <label className="block text-xs uppercase font-extrabold text-indigo-400 tracking-wider mb-2 flex items-center justify-between">
            <span>Describe your requirement</span>
            <span className="text-slate-400 text-[10px]">AI Auto-Parsing Enabled</span>
          </label>

          <div className="relative">
            <textarea
              rows={3}
              value={inputText}
              onChange={handleTextChange}
              placeholder="e.g. I need someone to edit 3 Instagram Reels for a trendy café..."
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white placeholder-slate-500 text-sm sm:text-base focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition resize-none"
            />
            <div className="absolute bottom-3 right-3 flex space-x-2">
              <button
                onClick={() => setInputText("I need someone to edit 3 Instagram Reels for a Bandra café.")}
                className="text-[10px] bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/30 px-2.5 py-1 rounded-lg font-bold"
              >
                Preset 1 (Reels)
              </button>
              <button
                onClick={() => setInputText("I need a modern minimalist logo and story template design.")}
                className="text-[10px] bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30 px-2.5 py-1 rounded-lg font-bold"
              >
                Preset 2 (Design)
              </button>
            </div>
          </div>
        </div>

        {/* AI Converted Skill Requirements Box */}
        <div className="p-5 bg-slate-950/80 rounded-2xl border border-slate-800/80 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="uppercase font-bold text-slate-400 flex items-center">
              <Sparkles className="w-4 h-4 text-indigo-400 mr-1.5" /> AI Converted Skill Thresholds
            </span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              ✓ AUTO-EXTRACTED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
              <span className="text-xs text-slate-400 uppercase font-semibold block">Editing Minimum</span>
              <span className="text-2xl font-black text-indigo-400 font-display mt-0.5">{thresholds.Editing}+</span>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
              <span className="text-xs text-slate-400 uppercase font-semibold block">Creativity Minimum</span>
              <span className="text-2xl font-black text-purple-400 font-display mt-0.5">{thresholds.Creativity}+</span>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
              <span className="text-xs text-slate-400 uppercase font-semibold block">Social Media Minimum</span>
              <span className="text-2xl font-black text-emerald-400 font-display mt-0.5">{thresholds.SocialMedia}+</span>
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
                <span>FIND TALENT NOW</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

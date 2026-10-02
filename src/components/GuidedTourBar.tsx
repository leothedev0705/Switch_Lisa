import React from 'react';
import { ChevronLeft, ChevronRight, Play, CheckCircle } from 'lucide-react';

interface GuidedTourBarProps {
  currentIndex: number;
  totalScreens: number;
  screenNames: string[];
  flowSteps: string[];
  onSelectScreen: (index: number) => void;
  onOpenPerfectSwitch: () => void;
  onOpenSkillGap: () => void;
}

export const GuidedTourBar: React.FC<GuidedTourBarProps> = ({
  currentIndex,
  totalScreens,
  screenNames,
  flowSteps,
  onSelectScreen,
  onOpenPerfectSwitch,
  onOpenSkillGap,
}) => {
  const currentFlowStage = flowSteps[currentIndex] || 'DISCOVER';

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 w-[95%] max-w-4xl bg-[#0F172A]/90 border border-indigo-500/30 rounded-2xl p-3 shadow-2xl backdrop-blur-xl text-slate-100">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Step Counter & Stage indicator */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2.5 py-1 rounded-xl text-xs font-bold font-display">
            <span>SCREEN {currentIndex + 1} / {totalScreens}</span>
          </div>

          <div className="hidden md:flex items-center space-x-1.5 text-xs font-semibold">
            <span className="text-slate-400">FLOW STAGE:</span>
            <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold uppercase">
              {currentFlowStage}
            </span>
          </div>

          <span className="text-xs font-semibold text-slate-200 truncate max-w-[180px] sm:max-w-[240px]">
            {screenNames[currentIndex]}
          </span>
        </div>

        {/* Quick Screen Dots Selector */}
        <div className="hidden lg:flex items-center space-x-1.5">
          {screenNames.map((name, i) => (
            <button
              key={i}
              onClick={() => onSelectScreen(i)}
              title={`Screen ${i + 1}: ${name}`}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentIndex
                  ? 'bg-indigo-500 scale-125 shadow-lg shadow-indigo-500/50'
                  : i < currentIndex
                  ? 'bg-emerald-500/80'
                  : 'bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenPerfectSwitch}
            className="hidden sm:flex items-center space-x-1 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 rounded-xl text-xs font-bold transition"
          >
            <span>🎯 Perfect Match</span>
          </button>

          <button
            onClick={onOpenSkillGap}
            className="hidden sm:flex items-center space-x-1 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 rounded-xl text-xs font-bold transition"
          >
            <span>🔍 Gap Detector</span>
          </button>

          <button
            disabled={currentIndex === 0}
            onClick={() => onSelectScreen(currentIndex - 1)}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-xl text-slate-300 transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            disabled={currentIndex === totalScreens - 1}
            onClick={() => onSelectScreen(currentIndex + 1)}
            className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center space-x-1 shadow-lg shadow-indigo-600/30"
          >
            <span>Next Stage</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

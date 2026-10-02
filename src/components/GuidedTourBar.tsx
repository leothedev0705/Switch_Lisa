import React from 'react';
import { ChevronLeft, ChevronRight, Building2, UserCheck, ShieldCheck } from 'lucide-react';
import { RoleView } from '../types';

interface GuidedTourBarProps {
  currentIndex: number;
  totalScreens: number;
  screenNames: string[];
  flowSteps: string[];
  onSelectScreen: (index: number) => void;
  onOpenPerfectSwitch: () => void;
  onOpenSkillGap: () => void;
  roleView: RoleView;
}

export const GuidedTourBar: React.FC<GuidedTourBarProps> = ({
  currentIndex,
  totalScreens,
  screenNames,
  flowSteps,
  onSelectScreen,
  onOpenPerfectSwitch,
  onOpenSkillGap,
  roleView,
}) => {
  // Define allowed screen indices per role
  const talentScreens = [0, 1, 2, 3, 4, 7];
  const businessScreens = [5, 6, 7];

  const allowedScreens = roleView === 'business' ? businessScreens : talentScreens;
  const currentRoleStepIndex = allowedScreens.indexOf(currentIndex);
  const activeRoleIndex = currentRoleStepIndex >= 0 ? currentRoleStepIndex : 0;

  const currentFlowStage = flowSteps[currentIndex] || 'PORTAL';

  const handlePrev = () => {
    if (activeRoleIndex > 0) {
      onSelectScreen(allowedScreens[activeRoleIndex - 1]);
    }
  };

  const handleNext = () => {
    if (activeRoleIndex < allowedScreens.length - 1) {
      onSelectScreen(allowedScreens[activeRoleIndex + 1]);
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 w-[95%] max-w-4xl bg-[#0F172A]/95 border border-indigo-500/30 rounded-2xl p-3 shadow-2xl backdrop-blur-xl text-slate-100">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Step Counter & Role Pill */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2.5 py-1 rounded-xl text-xs font-bold font-display">
            {roleView === 'business' ? <Building2 className="w-3.5 h-3.5 text-purple-400" /> : <UserCheck className="w-3.5 h-3.5 text-indigo-400" />}
            <span>{roleView === 'business' ? 'HIRER PAGE' : 'TALENT PAGE'} {activeRoleIndex + 1} / {allowedScreens.length}</span>
          </div>

          <div className="hidden md:flex items-center space-x-1.5 text-xs font-semibold">
            <span className="text-slate-400">STAGE:</span>
            <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold uppercase">
              {currentFlowStage}
            </span>
          </div>

          <span className="text-xs font-semibold text-slate-200 truncate max-w-[180px] sm:max-w-[240px]">
            {screenNames[currentIndex]}
          </span>
        </div>

        {/* Role-Restricted Screen Dots Selector */}
        <div className="hidden lg:flex items-center space-x-2">
          {allowedScreens.map((screenIdx, i) => (
            <button
              key={screenIdx}
              onClick={() => onSelectScreen(screenIdx)}
              title={`Page ${i + 1}: ${screenNames[screenIdx]}`}
              className={`w-3.5 h-3.5 rounded-full transition-all flex items-center justify-center text-[8px] font-bold ${
                screenIdx === currentIndex
                  ? 'bg-indigo-500 text-white scale-125 shadow-lg shadow-indigo-500/50'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          {roleView === 'talent' && (
            <>
              <button
                onClick={onOpenPerfectSwitch}
                className="hidden sm:flex items-center space-x-1 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 rounded-xl text-xs font-bold transition"
              >
                <span>🎯 Jobs Match</span>
              </button>

              <button
                onClick={onOpenSkillGap}
                className="hidden sm:flex items-center space-x-1 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 rounded-xl text-xs font-bold transition"
              >
                <span>🔍 Gap Detector</span>
              </button>
            </>
          )}

          <button
            disabled={activeRoleIndex === 0}
            onClick={handlePrev}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-xl text-slate-300 transition"
            title="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            disabled={activeRoleIndex === allowedScreens.length - 1}
            onClick={handleNext}
            className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 text-white rounded-xl text-xs font-bold transition flex items-center space-x-1 shadow-lg shadow-indigo-600/30"
          >
            <span>Next Page</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

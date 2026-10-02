import React from 'react';
import { RoleView } from '../types';
import { ShieldCheck, Eye, EyeOff, Sparkles, UserCheck, Building2, QrCode, Award } from 'lucide-react';

interface NavbarProps {
  roleView: RoleView;
  onToggleRoleView: (view: RoleView) => void;
  isBlindMode: boolean;
  onToggleBlindMode: () => void;
  switchScore: number;
  activeScreenIndex: number;
  onNavigateScreen: (index: number) => void;
  onOpenSkillCard: () => void;
  onOpenProveIt: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  roleView,
  onToggleRoleView,
  isBlindMode,
  onToggleBlindMode,
  switchScore,
  activeScreenIndex,
  onNavigateScreen,
  onOpenSkillCard,
  onOpenProveIt,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#090D16]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigateScreen(0)}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/25 flex items-center justify-center">
            <div className="w-full h-full bg-[#090D16] rounded-[10px] flex items-center justify-center">
              <span className="text-xl">⚡</span>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-xl font-black font-display tracking-tight text-white">SWITCH</span>
              <span className="text-[10px] font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-1.5 py-0.5 rounded">
                PROTOTYPE
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium block -mt-0.5">Skill-First Marketplace</span>
          </div>
        </div>

        {/* Center Quick Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => onNavigateScreen(0)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
              activeScreenIndex === 0 ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Welcome
          </button>
          <button
            onClick={() => onNavigateScreen(1)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
              activeScreenIndex === 1 ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Skill Passport
          </button>
          <button
            onClick={() => onNavigateScreen(2)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
              activeScreenIndex === 2 ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Challenge
          </button>
          <button
            onClick={() => onNavigateScreen(5)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
              activeScreenIndex === 5 ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Marketplace
          </button>
          <button
            onClick={() => onNavigateScreen(6)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
              activeScreenIndex === 6 ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            AI Match
          </button>
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Blind Portfolio Toggle */}
          <button
            onClick={onToggleBlindMode}
            title="Toggle Blind Portfolio mode: hides college, degree & age; highlights pure skill proof"
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition ${
              isBlindMode
                ? 'bg-purple-950/60 border-purple-500/50 text-purple-300 shadow-lg shadow-purple-500/20'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {isBlindMode ? <EyeOff className="w-3.5 h-3.5 text-purple-400" /> : <Eye className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isBlindMode ? 'BLIND MODE: ON' : 'BLIND MODE'}</span>
          </button>

          {/* Role Perspective Switcher */}
          <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => onToggleRoleView('talent')}
              className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                roleView === 'talent'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Talent</span>
            </button>
            <button
              onClick={() => onToggleRoleView('business')}
              className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                roleView === 'business'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Business</span>
            </button>
          </div>

          {/* Switch Score Badge */}
          <div
            onClick={onOpenProveIt}
            className="flex items-center space-x-1.5 bg-gradient-to-r from-indigo-950 to-purple-950 border border-indigo-500/40 px-3 py-1 rounded-xl cursor-pointer hover:border-indigo-400 transition"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <div className="text-left leading-tight">
              <span className="text-[9px] uppercase font-bold text-indigo-300 block">SCORE</span>
              <span className="text-sm font-extrabold text-white font-display">{switchScore}</span>
            </div>
          </div>

          {/* Digital Skill Card Button */}
          <button
            onClick={onOpenSkillCard}
            className="p-2 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 rounded-xl transition"
            title="View Digital Skill Card"
          >
            <QrCode className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { GuidedTourBar } from './components/GuidedTourBar';
import { ProveItModal } from './components/ProveItModal';
import { DigitalSkillCardModal } from './components/DigitalSkillCardModal';
import { SkillGapModal } from './components/SkillGapModal';
import { PerfectSwitchModal } from './components/PerfectSwitchModal';

import { Screen1Welcome } from './components/screens/Screen1Welcome';
import { Screen2Passport } from './components/screens/Screen2Passport';
import { Screen3Challenge } from './components/screens/Screen3Challenge';
import { Screen4Analysis } from './components/screens/Screen4Analysis';
import { Screen5Proof } from './components/screens/Screen5Proof';
import { Screen6Marketplace } from './components/screens/Screen6Marketplace';
import { Screen7Match } from './components/screens/Screen7Match';
import { Screen8ProjectComplete } from './components/screens/Screen8ProjectComplete';

import { INITIAL_PROFILE, MOCK_CHALLENGE, MOCK_AI_ANALYSIS } from './data/mockData';
import { RoleView, VerifiedSkill, Candidate, ProjectRequirement } from './types';

export default function App() {
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [roleView, setRoleView] = useState<RoleView>('talent');
  const [isBlindMode, setIsBlindMode] = useState<boolean>(false);
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);

  // Modals state
  const [proveItModalOpen, setProveItModalOpen] = useState<boolean>(false);
  const [selectedProveSkill, setSelectedProveSkill] = useState<VerifiedSkill | null>(null);
  const [skillCardModalOpen, setSkillCardModalOpen] = useState<boolean>(false);
  const [skillGapModalOpen, setSkillGapModalOpen] = useState<boolean>(false);
  const [perfectSwitchModalOpen, setPerfectSwitchModalOpen] = useState<boolean>(false);

  const screenNames = [
    'Welcome / Intro',
    'Skill Passport',
    '30-Min Challenge',
    'AI Skill Analysis',
    'Proof Behind Score',
    'SWITCH Marketplace',
    'AI Skill Match',
    'Project Complete'
  ];

  const flowSteps = [
    'DISCOVER',
    'TEST & VERIFY',
    'TEST',
    'VERIFY',
    'SHOW',
    'MATCH',
    'WORK',
    'GET RATED & GROW'
  ];

  const handleOpenProveIt = (skill?: VerifiedSkill | null) => {
    setSelectedProveSkill(skill || profile.skills[0]);
    setProveItModalOpen(true);
  };

  const handleHireCandidate = (candidate: Candidate) => {
    // When employer hires candidate, progress to Screen 8 (Project Complete)
    setActiveScreenIndex(7);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] bg-grid-pattern relative pb-28 selection:bg-indigo-500 selection:text-white">
      
      {/* Top Header Navigation */}
      <Navbar
        roleView={roleView}
        onToggleRoleView={(view) => {
          setRoleView(view);
          if (view === 'business' && activeScreenIndex < 5) {
            setActiveScreenIndex(5); // Switch to marketplace when toggled to business view
          }
        }}
        isBlindMode={isBlindMode}
        onToggleBlindMode={() => setIsBlindMode(!isBlindMode)}
        switchScore={profile.switchScore}
        activeScreenIndex={activeScreenIndex}
        onNavigateScreen={(idx) => setActiveScreenIndex(idx)}
        onOpenSkillCard={() => setSkillCardModalOpen(true)}
        onOpenProveIt={() => handleOpenProveIt(profile.skills[0])}
      />

      {/* Main View Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {activeScreenIndex === 0 && (
          <Screen1Welcome
            onStartPassport={() => setActiveScreenIndex(1)}
            onOpenChallenge={() => setActiveScreenIndex(2)}
          />
        )}

        {activeScreenIndex === 1 && (
          <Screen2Passport
            profile={profile}
            isBlindMode={isBlindMode}
            onOpenProveIt={(skill) => handleOpenProveIt(skill)}
            onOpenSkillCard={() => setSkillCardModalOpen(true)}
            onStartChallenge={() => setActiveScreenIndex(2)}
          />
        )}

        {activeScreenIndex === 2 && (
          <Screen3Challenge
            challenge={MOCK_CHALLENGE}
            onSubmitChallenge={() => setActiveScreenIndex(3)}
          />
        )}

        {activeScreenIndex === 3 && (
          <Screen4Analysis
            analysis={MOCK_AI_ANALYSIS}
            onViewProof={() => setActiveScreenIndex(4)}
            onContinueToMarketplace={() => setActiveScreenIndex(5)}
          />
        )}

        {activeScreenIndex === 4 && (
          <Screen5Proof
            onBackToPassport={() => setActiveScreenIndex(1)}
            onOpenSkillCard={() => setSkillCardModalOpen(true)}
          />
        )}

        {activeScreenIndex === 5 && (
          <Screen6Marketplace
            onFindTalent={(req) => setActiveScreenIndex(6)}
          />
        )}

        {activeScreenIndex === 6 && (
          <Screen7Match
            isBlindMode={isBlindMode}
            onSelectCandidateToHire={handleHireCandidate}
            onOpenProveIt={(skill) => handleOpenProveIt(skill)}
          />
        )}

        {activeScreenIndex === 7 && (
          <Screen8ProjectComplete
            onViewPassport={() => setActiveScreenIndex(1)}
            onRestartFlow={() => setActiveScreenIndex(0)}
          />
        )}
      </main>

      {/* Modals */}
      <ProveItModal
        isOpen={proveItModalOpen}
        onClose={() => setProveItModalOpen(false)}
        skill={selectedProveSkill}
        candidateName={isBlindMode ? profile.blindCandidateId : profile.name}
      />

      <DigitalSkillCardModal
        isOpen={skillCardModalOpen}
        onClose={() => setSkillCardModalOpen(false)}
        profile={profile}
      />

      <SkillGapModal
        isOpen={skillGapModalOpen}
        onClose={() => setSkillGapModalOpen(false)}
        onStartChallenge={() => setActiveScreenIndex(2)}
      />

      <PerfectSwitchModal
        isOpen={perfectSwitchModalOpen}
        onClose={() => setPerfectSwitchModalOpen(false)}
        onSelectProject={(title) => {
          setActiveScreenIndex(5);
        }}
      />

      {/* Guided Tour Floating Footer */}
      <GuidedTourBar
        currentIndex={activeScreenIndex}
        totalScreens={screenNames.length}
        screenNames={screenNames}
        flowSteps={flowSteps}
        onSelectScreen={(idx) => setActiveScreenIndex(idx)}
        onOpenPerfectSwitch={() => setPerfectSwitchModalOpen(true)}
        onOpenSkillGap={() => setSkillGapModalOpen(true)}
      />
    </div>
  );
}

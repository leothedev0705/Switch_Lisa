import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { GuidedTourBar } from './components/GuidedTourBar';
import { ProveItModal } from './components/ProveItModal';
import { DigitalSkillCardModal } from './components/DigitalSkillCardModal';
import { SkillGapModal } from './components/SkillGapModal';
import { PerfectSwitchModal } from './components/PerfectSwitchModal';
import { LoginModal } from './components/LoginModal';

import { Screen1Welcome } from './components/screens/Screen1Welcome';
import { Screen2Passport } from './components/screens/Screen2Passport';
import { Screen3Challenge } from './components/screens/Screen3Challenge';
import { Screen4Analysis } from './components/screens/Screen4Analysis';
import { Screen5Proof } from './components/screens/Screen5Proof';
import { Screen6Marketplace } from './components/screens/Screen6Marketplace';
import { Screen7Match } from './components/screens/Screen7Match';
import { Screen8ProjectComplete } from './components/screens/Screen8ProjectComplete';

import { INITIAL_PROFILE, MULTI_SKILL_CHALLENGES, MOCK_AI_ANALYSIS_MAP } from './data/mockData';
import { RoleView, VerifiedSkill, Candidate, ProjectRequirement, SkillCategoryType, UserAccount } from './types';

export default function App() {
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [roleView, setRoleView] = useState<RoleView>('talent');
  const [isBlindMode, setIsBlindMode] = useState<boolean>(false);
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);

  // Authentication & Login state
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserAccount | null>({
    id: 'usr_default',
    name: 'Tanmayee P.',
    email: 'tanmayee@switch.io',
    role: 'talent',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    title: 'Short-Form Video & Visual Content Creator',
    switchScore: 87,
  });

  // Active Skill Test State (defaults to logo_design / website_building)
  const [activeCategory, setActiveCategory] = useState<SkillCategoryType>('website_building');
  const [currentRequirement, setCurrentRequirement] = useState<ProjectRequirement | null>(null);

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

  const handleStartSkillTest = (category?: SkillCategoryType) => {
    if (category) {
      setActiveCategory(category);
    }
    setActiveScreenIndex(2);
  };

  const handleLoginSuccess = (account: UserAccount) => {
    setCurrentUser(account);
    setRoleView(account.role);
    if (account.role === 'business') {
      setActiveScreenIndex(5); // Jump straight to marketplace for business hirer
    }
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] bg-grid-pattern relative pb-28 selection:bg-indigo-500 selection:text-white">
      
      {/* Top Header Navigation with SwitchLogo & Login */}
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
        currentUser={currentUser}
        onOpenLoginModal={() => setLoginModalOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {activeScreenIndex === 0 && (
          <Screen1Welcome
            onStartPassport={() => setActiveScreenIndex(1)}
            onOpenChallenge={(cat) => handleStartSkillTest(cat)}
            onOpenLoginModal={() => setLoginModalOpen(true)}
          />
        )}

        {activeScreenIndex === 1 && (
          <Screen2Passport
            profile={profile}
            isBlindMode={isBlindMode}
            onOpenProveIt={(skill) => handleOpenProveIt(skill)}
            onOpenSkillCard={() => setSkillCardModalOpen(true)}
            onStartChallenge={() => handleStartSkillTest('website_building')}
          />
        )}

        {activeScreenIndex === 2 && (
          <Screen3Challenge
            challenge={MULTI_SKILL_CHALLENGES[activeCategory] || MULTI_SKILL_CHALLENGES.video_editing}
            onSelectSkillTest={(cat) => setActiveCategory(cat)}
            onSubmitChallenge={(cat) => {
              setActiveCategory(cat);
              setActiveScreenIndex(3);
            }}
          />
        )}

        {activeScreenIndex === 3 && (
          <Screen4Analysis
            analysis={MOCK_AI_ANALYSIS_MAP[activeCategory] || MOCK_AI_ANALYSIS_MAP.video_editing}
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
            onFindTalent={(req) => {
              setCurrentRequirement(req);
              setActiveScreenIndex(6);
            }}
          />
        )}

        {activeScreenIndex === 6 && (
          <Screen7Match
            isBlindMode={isBlindMode}
            currentRequirement={currentRequirement}
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
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        initialRole={roleView}
      />

      <ProveItModal
        isOpen={proveItModalOpen}
        onClose={() => setProveItModalOpen(false)}
        skill={selectedProveSkill}
        candidateName={isBlindMode ? profile.blindCandidateId : (currentUser?.name || profile.name)}
      />

      <DigitalSkillCardModal
        isOpen={skillCardModalOpen}
        onClose={() => setSkillCardModalOpen(false)}
        profile={profile}
      />

      <SkillGapModal
        isOpen={skillGapModalOpen}
        onClose={() => setSkillGapModalOpen(false)}
        onStartChallenge={() => handleStartSkillTest('logo_design')}
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

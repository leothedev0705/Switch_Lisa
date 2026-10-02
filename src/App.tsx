import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { GuidedTourBar } from './components/GuidedTourBar';
import { ProveItModal } from './components/ProveItModal';
import { DigitalSkillCardModal } from './components/DigitalSkillCardModal';
import { SkillGapModal } from './components/SkillGapModal';
import { PerfectSwitchModal } from './components/PerfectSwitchModal';
import { LoginModal } from './components/LoginModal';

import { Screen0Login } from './components/screens/Screen0Login';
import { Screen1Welcome } from './components/screens/Screen1Welcome';
import { Screen2Passport } from './components/screens/Screen2Passport';
import { Screen3Challenge } from './components/screens/Screen3Challenge';
import { Screen4Analysis } from './components/screens/Screen4Analysis';
import { Screen5Proof } from './components/screens/Screen5Proof';
import { Screen6Marketplace } from './components/screens/Screen6Marketplace';
import { Screen7Match } from './components/screens/Screen7Match';
import { Screen8ProjectComplete } from './components/screens/Screen8ProjectComplete';

import { INITIAL_PROFILE, MULTI_SKILL_CHALLENGES, MOCK_AI_ANALYSIS_MAP, getProfileForAccount } from './data/mockData';
import { RoleView, VerifiedSkill, Candidate, ProjectRequirement, SkillCategoryType, UserAccount } from './types';
import { ShieldCheck, Building2, UserCheck, ArrowRight } from 'lucide-react';

export default function App() {
  const [roleView, setRoleView] = useState<RoleView>('talent');
  const [isBlindMode, setIsBlindMode] = useState<boolean>(false);
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);

  // Authentication State (Unauthenticated by default to show initial Login Screen)
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [loginModalRole, setLoginModalRole] = useState<RoleView>('talent');
  const [switchAuthMessage, setSwitchAuthMessage] = useState<string | null>(null);

  // Dynamically derive current user's profile based on authenticated account
  const profile = getProfileForAccount(currentUser);

  // Active Skill Test State
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
    setActiveScreenIndex(7);
  };

  const handleStartSkillTest = (category?: SkillCategoryType) => {
    if (category) {
      setActiveCategory(category);
    }
    setActiveScreenIndex(2);
  };

  // Login handler
  const handleLoginSuccess = (account: UserAccount) => {
    setCurrentUser(account);
    setRoleView(account.role);
    setSwitchAuthMessage(null);

    // Auto-align default active challenge based on talent type
    if (account.name.toLowerCase().includes('rohan')) {
      setActiveCategory('logo_design');
    } else if (account.name.toLowerCase().includes('devansh')) {
      setActiveCategory('website_building');
    } else if (account.name.toLowerCase().includes('tanmayee')) {
      setActiveCategory('video_editing');
    }

    if (account.role === 'business') {
      setActiveScreenIndex(5); // Jump straight to marketplace for business hirer
    } else {
      setActiveScreenIndex(1); // Jump straight to talent passport
    }
  };

  // STRICT ROLE SWITCHING AUTHENTICATION GUARD
  const handleRequestRoleSwitch = (targetRole: RoleView) => {
    if (!currentUser || currentUser.role !== targetRole) {
      setLoginModalRole(targetRole);
      setSwitchAuthMessage(
        targetRole === 'business'
          ? 'Please log in with a Business Account to access the Business Hirer Portal.'
          : 'Please log in with a Freelance Talent Account to access skill passports & tests.'
      );
      setLoginModalOpen(true);
    } else {
      setRoleView(targetRole);
      if (targetRole === 'business') {
        setActiveScreenIndex(5);
      } else {
        setActiveScreenIndex(1);
      }
    }
  };

  // Helper check if screen is allowed for active role
  const isBusinessScreen = activeScreenIndex >= 5;

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] bg-grid-pattern relative pb-28 selection:bg-indigo-500 selection:text-white">
      
      {/* Top Header Navigation */}
      <Navbar
        roleView={roleView}
        onToggleRoleView={handleRequestRoleSwitch}
        isBlindMode={isBlindMode}
        onToggleBlindMode={() => setIsBlindMode(!isBlindMode)}
        switchScore={profile.switchScore}
        activeScreenIndex={activeScreenIndex}
        onNavigateScreen={(idx) => setActiveScreenIndex(idx)}
        onOpenSkillCard={() => setSkillCardModalOpen(true)}
        onOpenProveIt={() => handleOpenProveIt(profile.skills[0])}
        currentUser={currentUser}
        onOpenLoginModal={() => {
          setLoginModalRole(roleView);
          setSwitchAuthMessage(null);
          setLoginModalOpen(true);
        }}
      />

      {/* Main View Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* ========================================================
            CASE 0: INITIAL MANDATORY LOGIN SCREEN (UNAUTHENTICATED)
           ======================================================== */}
        {!currentUser && (
          <Screen0Login
            initialRole={roleView}
            onLoginSuccess={handleLoginSuccess}
          />
        )}

        {/* ========================================================
            AUTHENTICATED VIEW RENDER LOGIC
           ======================================================== */}
        {currentUser && (
          <>
            {/* BUSINESS ROLE GUARD: Trying to view Talent pages as Business */}
            {roleView === 'business' && !isBusinessScreen && (
              <div className="py-16 text-center max-w-xl mx-auto space-y-4">
                <div className="p-4 bg-purple-950/60 border border-purple-500/40 rounded-3xl w-max mx-auto text-purple-400">
                  <Building2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-black text-white font-display">Business Account Required</h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  You are viewing the <span className="text-purple-300 font-bold">Business Hirer Portal</span>. Talent testing & personal skill passport pages are restricted to Freelance Talent profiles.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveScreenIndex(5)}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold text-xs rounded-xl shadow-lg flex items-center space-x-1.5"
                  >
                    <span>GO TO HIRER MARKETPLACE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleRequestRoleSwitch('talent')}
                    className="px-5 py-3 bg-slate-900 border border-slate-700 text-slate-300 font-bold text-xs rounded-xl hover:text-white"
                  >
                    Log in as Freelancer
                  </button>
                </div>
              </div>
            )}

            {/* TALENT ROLE GUARD: Trying to view Business pages as Talent */}
            {roleView === 'talent' && activeScreenIndex === 5 && (
              <div className="py-16 text-center max-w-xl mx-auto space-y-4">
                <div className="p-4 bg-indigo-950/60 border border-indigo-500/40 rounded-3xl w-max mx-auto text-indigo-400">
                  <UserCheck className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-black text-white font-display">Business Account Required</h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The Hirer Prompt Converter is reserved for Business Accounts posting job requirements. Please log in with a Business Account to create project listings.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => handleRequestRoleSwitch('business')}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold text-xs rounded-xl shadow-lg flex items-center space-x-1.5"
                  >
                    <span>LOG IN WITH BUSINESS ACCOUNT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveScreenIndex(1)}
                    className="px-5 py-3 bg-slate-900 border border-slate-700 text-slate-300 font-bold text-xs rounded-xl hover:text-white"
                  >
                    Back to My Skill Passport
                  </button>
                </div>
              </div>
            )}

            {/* ALLOWED SCREENS RENDER LOGIC */}
            {((roleView === 'talent' && activeScreenIndex !== 5) || (roleView === 'business' && isBusinessScreen)) && (
              <>
                {activeScreenIndex === 0 && (
                  <Screen1Welcome
                    onStartPassport={() => setActiveScreenIndex(1)}
                    onOpenChallenge={(cat) => handleStartSkillTest(cat)}
                    onOpenLoginModal={() => {
                      setLoginModalRole(roleView);
                      setSwitchAuthMessage(null);
                      setLoginModalOpen(true);
                    }}
                  />
                )}

                {activeScreenIndex === 1 && (
                  <Screen2Passport
                    profile={profile}
                    isBlindMode={isBlindMode}
                    onOpenProveIt={(skill) => handleOpenProveIt(skill)}
                    onOpenSkillCard={() => setSkillCardModalOpen(true)}
                    onStartChallenge={() => handleStartSkillTest(activeCategory)}
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
                    onContinueToMarketplace={() => {
                      if (roleView === 'talent') {
                        setPerfectSwitchModalOpen(true);
                      } else {
                        setActiveScreenIndex(5);
                      }
                    }}
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
                    onRestartFlow={() => setActiveScreenIndex(roleView === 'business' ? 5 : 0)}
                  />
                )}
              </>
            )}
          </>
        )}
      </main>

      {/* Modals */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        initialRole={loginModalRole}
        switchMessage={switchAuthMessage}
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
          if (roleView === 'business') {
            setActiveScreenIndex(5);
          } else {
            setActiveScreenIndex(1);
          }
        }}
      />

      {/* Guided Tour Floating Footer */}
      {currentUser && (
        <GuidedTourBar
          currentIndex={activeScreenIndex}
          totalScreens={screenNames.length}
          screenNames={screenNames}
          flowSteps={flowSteps}
          onSelectScreen={(idx) => setActiveScreenIndex(idx)}
          onOpenPerfectSwitch={() => setPerfectSwitchModalOpen(true)}
          onOpenSkillGap={() => setSkillGapModalOpen(true)}
          roleView={roleView}
        />
      )}
    </div>
  );
}

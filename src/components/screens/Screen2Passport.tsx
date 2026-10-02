import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Profile, VerifiedSkill } from '../../types';
import { ShieldCheck, CheckCircle2, Star, Trophy, TrendingUp, Layers, QrCode, Share2, Zap, ArrowUpRight, Award, EyeOff } from 'lucide-react';
import { SKILL_STACK_PRESETS } from '../../data/mockData';

interface Screen2PassportProps {
  profile: Profile;
  isBlindMode: boolean;
  onOpenProveIt: (skill: VerifiedSkill) => void;
  onOpenSkillCard: () => void;
  onStartChallenge: () => void;
}

export const Screen2Passport: React.FC<Screen2PassportProps> = ({
  profile,
  isBlindMode,
  onOpenProveIt,
  onOpenSkillCard,
  onStartChallenge,
}) => {
  const [activeTab, setActiveTab] = useState<'skills' | 'projects' | 'ratings' | 'growth' | 'badges'>('skills');

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-slate-100">
      
      {/* Top Banner for Blind Mode Notice if Active */}
      {isBlindMode && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-3 rounded-2xl bg-purple-950/40 border border-purple-500/40 flex items-center justify-between text-xs text-purple-200"
        >
          <div className="flex items-center space-x-2">
            <EyeOff className="w-4 h-4 text-purple-400" />
            <span className="font-bold">BLIND PORTFOLIO ACTIVE:</span>
            <span>College name, degree, and personal demographic data are hidden. Showing only verified skills & deliverables.</span>
          </div>
          <span className="font-mono bg-purple-900/80 px-2 py-0.5 rounded font-bold text-purple-300">
            {profile.blindCandidateId}
          </span>
        </motion.div>
      )}

      {/* Main Profile Header Card */}
      <div className="relative bg-gradient-to-br from-[#0D1322] via-[#0F172A] to-[#141B2D] p-6 sm:p-8 rounded-3xl border border-indigo-500/30 shadow-2xl overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          
          {/* User Profile Summary */}
          <div className="flex items-center space-x-5">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-indigo-500/60 shadow-xl ${
                  isBlindMode ? 'blur-md grayscale' : ''
                }`}
              />
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 p-1 rounded-lg border border-slate-900 shadow">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                  {isBlindMode ? profile.blindCandidateId : profile.name}
                </h2>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> VERIFIED PASSPORT
                </span>
              </div>

              {!isBlindMode && (
                <p className="text-sm font-semibold text-indigo-300">
                  {profile.education} • <span className="text-slate-300">{profile.title}</span>
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-300 font-medium">
                <span className="bg-slate-900/90 px-3 py-1 rounded-xl border border-slate-800">
                  📂 {profile.projectsCompleted} Projects Completed
                </span>
                <span className="bg-slate-900/90 px-3 py-1 rounded-xl border border-slate-800 text-amber-300">
                  ★ {profile.clientRating} / 5.0 Rating
                </span>
                <span className="bg-slate-900/90 px-3 py-1 rounded-xl border border-slate-800 text-emerald-300 font-bold">
                  ⚡ Level: {profile.xpLevel} ({profile.xp} XP)
                </span>
              </div>
            </div>
          </div>

          {/* Switch Score & Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            
            {/* SWITCH Score Big Badge */}
            <div className="bg-gradient-to-tr from-indigo-950 via-slate-900 to-purple-950 p-4 rounded-2xl border border-indigo-500/40 text-center min-w-[140px] shadow-lg">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-indigo-300 block">
                SWITCH SCORE
              </span>
              <div className="text-4xl font-black text-white font-display mt-0.5 gradient-text-primary">
                {profile.switchScore}
              </div>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Top 3% Creator</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onOpenProveIt(profile.skills[0])}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center justify-center space-x-1.5"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>PROVE IT</span>
              </button>

              <button
                onClick={onOpenSkillCard}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-indigo-300 border border-indigo-500/30 font-bold text-xs rounded-xl transition flex items-center justify-center space-x-1.5"
              >
                <QrCode className="w-4 h-4" />
                <span>VIEW DIGITAL CARD</span>
              </button>
            </div>
          </div>
        </div>

        {/* Skill Stack Feature Highlight Bar */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-slate-950 font-black text-sm">
              🔥 STACK
            </div>
            <div>
              <div className="text-sm font-bold text-white font-display flex items-center">
                {profile.stackName}
                <span className="ml-2 text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-bold">
                  AUTO-DETECTED
                </span>
              </div>
              <p className="text-xs text-slate-400">{profile.stackDescription}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs font-semibold">
            <span className="text-slate-400">STACK COMBINATION:</span>
            <span className="bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-300">
              Editing (91) + Social (89) + Copywriting (82)
            </span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex space-x-2 border-b border-slate-800 pb-3 mb-6 overflow-x-auto">
        {[
          { id: 'skills', label: 'Verified Skills', count: profile.skills.length },
          { id: 'projects', label: 'Projects Completed', count: profile.projectsCompleted },
          { id: 'ratings', label: 'Client Ratings', count: '4.9 ★' },
          { id: 'growth', label: 'Skill Growth', count: '+19 pts' },
          { id: 'badges', label: 'Badges', count: profile.badges.length },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 shrink-0 ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <span>{tab.label}</span>
            <span className="px-1.5 py-0.5 rounded-md bg-black/20 text-[10px]">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* TAB CONTENT 1: VERIFIED SKILLS */}
      {activeTab === 'skills' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold font-display text-white">Verified Skill Badges</h3>
            <button
              onClick={onStartChallenge}
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
            >
              <span>+ Take New Skill Challenge</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.skills.map((skill) => (
              <motion.div
                key={skill.id}
                whileHover={{ y: -2 }}
                className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition shadow-lg"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      {skill.category}
                    </span>
                    <h4 className="text-lg font-bold text-white font-display mt-0.5">{skill.name}</h4>
                  </div>
                  <div className="bg-indigo-950/80 px-3 py-1 rounded-xl border border-indigo-500/30 text-right">
                    <span className="text-[9px] text-indigo-300 font-bold uppercase block">SCORE</span>
                    <span className="text-xl font-black text-indigo-400 font-display">{skill.score}</span>
                  </div>
                </div>

                {/* Score Progress Bar */}
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                    <span className="text-emerald-400 flex items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> VERIFIED ON-CHAIN
                    </span>
                    <span>Updated {skill.lastUpdated}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full"
                      style={{ width: `${skill.score}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs">
                  <span className="text-slate-400">{skill.evidenceCount} Verified Evidence Logs</span>
                  <button
                    onClick={() => onOpenProveIt(skill)}
                    className="px-3 py-1 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 rounded-lg font-bold transition flex items-center space-x-1"
                  >
                    <span>PROVE IT</span>
                    <Zap className="w-3 h-3 text-amber-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: PROJECTS COMPLETED */}
      {activeTab === 'projects' && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-display text-white">Verified Work History</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Gen-Z Café 15-Sec Reel Series', client: 'Sublime Brews Bandra', score: '92/100', rating: '5.0 ★', payout: '₹4,500' },
              { title: 'Streetwear Brand Autumn Launch Edits', client: 'Velvet Threads', score: '94/100', rating: '4.9 ★', payout: '₹6,000' },
              { title: 'Tech Startup Podcast Reels (5 Clips)', client: 'HyperFlow AI', score: '89/100', rating: '4.8 ★', payout: '₹3,500' },
              { title: 'Fitness Gym Instagram Growth Reel', client: 'Pulse Fitness', score: '91/100', rating: '5.0 ★', payout: '₹5,000' },
            ].map((p, idx) => (
              <div key={idx} className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 flex justify-between items-start">
                <div>
                  <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">VERIFIED DELIVERABLE</div>
                  <h4 className="text-base font-bold text-white font-display">{p.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">Client: {p.client}</p>
                  <div className="flex space-x-3 mt-3 text-xs font-semibold">
                    <span className="text-emerald-400">Score: {p.score}</span>
                    <span className="text-amber-300">Rating: {p.rating}</span>
                  </div>
                </div>
                <span className="text-sm font-extrabold text-emerald-400 bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
                  {p.payout}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: CLIENT RATINGS */}
      {activeTab === 'ratings' && (
        <div className="space-y-4">
          <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase">OVERALL CLIENT SATISFACTION</div>
              <div className="text-3xl font-extrabold text-amber-400 font-display mt-1">4.9 / 5.0 ★</div>
              <p className="text-xs text-slate-400 mt-1">100% On-Time Delivery Rate • 12 Completed Contracts</p>
            </div>
            <span className="px-4 py-2 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-xl text-xs font-bold">
              🏆 CLIENT FAVOURITE
            </span>
          </div>

          <div className="space-y-3">
            {[
              { client: 'Sublime Coffee Co.', review: 'Tanmayee delivered the Reels 4 hours ahead of schedule. The cuts were insanely punchy.', rating: 5.0 },
              { client: 'Velvet Apparel', review: 'Storytelling was on point. Managed to double our Instagram retention metric in 1 week.', rating: 4.9 },
            ].map((r, i) => (
              <div key={i} className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="font-bold text-white">{r.client}</span>
                  <span className="text-amber-400 font-bold">★ {r.rating}</span>
                </div>
                <p className="text-xs text-slate-300 italic">"{r.review}"</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: SKILL GROWTH */}
      {activeTab === 'growth' && (
        <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-6">
          <div>
            <span className="text-xs uppercase font-bold text-indigo-400 tracking-wider">YOUR PROGRESS</span>
            <h3 className="text-xl font-bold font-display text-white mt-1">Skill Growth Trajectory</h3>
            <div className="mt-3 p-4 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-sm font-semibold text-indigo-200">
              🔥 You've improved your Video Editing score by 19 points in 3 months.
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-white">Video Editing Evolution</span>
                <span className="text-indigo-400">72 → 78 → 84 → 91 (+19 Pts)</span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-slate-600" style={{ width: '25%' }} />
                <div className="h-full bg-indigo-600" style={{ width: '25%' }} />
                <div className="h-full bg-purple-600" style={{ width: '25%' }} />
                <div className="h-full bg-emerald-400" style={{ width: '25%' }} />
              </div>
            </div>

            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-white">Design Evolution</span>
                <span className="text-purple-400">68 → 74 → 82 → 84 (+16 Pts)</span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-slate-600" style={{ width: '30%' }} />
                <div className="h-full bg-purple-600" style={{ width: '30%' }} />
                <div className="h-full bg-emerald-400" style={{ width: '40%' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 5: BADGES */}
      {activeTab === 'badges' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {profile.badges.map((b) => (
            <div key={b.id} className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 text-center relative overflow-hidden">
              {b.isNew && (
                <span className="absolute top-2 right-2 text-[9px] font-bold uppercase bg-indigo-600 text-white px-2 py-0.5 rounded-full">
                  NEW!
                </span>
              )}
              <div className="text-4xl mb-2">{b.icon}</div>
              <h4 className="text-base font-bold text-white font-display">{b.name}</h4>
              <p className="text-xs text-slate-400 mt-1">{b.condition}</p>
              {b.unlockedAt && (
                <span className="text-[10px] text-emerald-400 font-semibold block mt-3">
                  Unlocked {b.unlockedAt}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

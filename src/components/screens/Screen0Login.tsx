import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, UserCheck, Mail, Lock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { RoleView, UserAccount } from '../../types';
import { SwitchLogo } from '../SwitchLogo';

interface Screen0LoginProps {
  onLoginSuccess: (account: UserAccount) => void;
  initialRole?: RoleView;
}

export const Screen0Login: React.FC<Screen0LoginProps> = ({
  onLoginSuccess,
  initialRole = 'talent',
}) => {
  const [role, setRole] = useState<RoleView>(initialRole);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [companyOrTitle, setCompanyOrTitle] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const userAccount: UserAccount = {
        id: `usr_${Date.now()}`,
        name: name || (role === 'business' ? 'Acme Creative Studio' : 'Tanmayee P.'),
        email: email || (role === 'business' ? 'hiring@acme.com' : 'tanmayee@switch.io'),
        role,
        avatar: role === 'business'
          ? 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200'
          : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        title: role === 'business' ? (companyOrTitle || 'Head of Digital Hiring') : (companyOrTitle || 'Short-Form Video & Visual Content Creator'),
        switchScore: role === 'talent' ? 87 : undefined,
        companyName: role === 'business' ? (companyOrTitle || 'Acme Creative') : undefined,
      };

      onLoginSuccess(userAccount);
    }, 600);
  };

  const handleDemoLogin = (type: 'business' | 'talent_video' | 'talent_dev' | 'talent_design') => {
    let demoAccount: UserAccount;

    if (type === 'business') {
      demoAccount = {
        id: 'usr_biz_demo',
        name: 'Alex Rivera (TechStudio)',
        email: 'alex@techstudio.co',
        role: 'business',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        title: 'VP of Digital Experience',
        companyName: 'TechStudio Global',
      };
    } else if (type === 'talent_dev') {
      demoAccount = {
        id: 'usr_dev_demo',
        name: 'Devansh Gupta',
        email: 'devansh@switch.io',
        role: 'talent',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        title: 'Fullstack & Web Builder Specialist',
        switchScore: 94,
      };
    } else if (type === 'talent_design') {
      demoAccount = {
        id: 'usr_des_demo',
        name: 'Rohan Mehta',
        email: 'rohan@switch.io',
        role: 'talent',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
        title: 'Brand Identity & Logo Specialist',
        switchScore: 91,
      };
    } else {
      demoAccount = {
        id: 'usr_talent_demo',
        name: 'Tanmayee P.',
        email: 'tanmayee@switch.io',
        role: 'talent',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        title: 'Short-Form Video & Content Creator',
        switchScore: 87,
      };
    }

    onLoginSuccess(demoAccount);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-slate-100 flex flex-col items-center justify-center min-h-[80vh]">
      
      {/* Brand Hero Mark */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-block mb-4 scale-125">
          <SwitchLogo size="lg" />
        </div>
        <p className="text-sm text-slate-400 max-w-md mx-auto mt-2">
          The Proof-of-Ability Marketplace. Please log in with your account to access your dedicated portal.
        </p>
      </motion.div>

      {/* Main Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-gradient-to-br from-[#0B0F19] via-[#0F172A] to-[#141C30] border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Role Selection Tabs */}
        <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-950 rounded-2xl border border-slate-800 mb-6">
          <button
            type="button"
            onClick={() => setRole('business')}
            className={`py-3 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-2 ${
              role === 'business'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Business Hirer</span>
          </button>

          <button
            type="button"
            onClick={() => setRole('talent')}
            className={`py-3 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-2 ${
              role === 'talent'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Freelance Talent</span>
          </button>
        </div>

        <div className="mb-4">
          <span className="text-xs text-indigo-300 font-semibold block text-center bg-indigo-500/10 py-1 rounded-xl border border-indigo-500/20">
            {role === 'business' ? '🏢 Accessing Business Hirer Portal' : '🎨 Accessing Freelance Talent Portal'}
          </span>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={role === 'business' ? 'e.g. Alex Rivera' : 'e.g. Tanmayee P.'}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-indigo-500 focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">
              {role === 'business' ? 'Business Account Email' : 'Talent Account Email'}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === 'business' ? 'hirer@company.com' : 'talent@switch.io'}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center justify-center space-x-2 mt-2"
          >
            {isLoading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>LOG IN TO {role.toUpperCase()} PORTAL</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Quick Demo Logins */}
        <div className="mt-6 pt-5 border-t border-slate-800/80">
          <span className="text-[10px] uppercase font-extrabold text-indigo-400 tracking-wider block mb-2.5 text-center flex items-center justify-center">
            <Sparkles className="w-3 h-3 mr-1 text-amber-300" /> Instant 1-Click Demo Accounts
          </span>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleDemoLogin('business')}
              className="p-2.5 bg-slate-950 hover:bg-slate-900 border border-purple-500/30 rounded-xl text-left transition text-xs"
            >
              <span className="font-bold text-purple-300 block">🏢 Business Hirer</span>
              <span className="text-[10px] text-slate-400">TechStudio Inc.</span>
            </button>

            <button
              type="button"
              onClick={() => handleDemoLogin('talent_design')}
              className="p-2.5 bg-slate-950 hover:bg-slate-900 border border-indigo-500/30 rounded-xl text-left transition text-xs"
            >
              <span className="font-bold text-indigo-300 block">🎨 Logo Designer</span>
              <span className="text-[10px] text-slate-400">Rohan Mehta</span>
            </button>

            <button
              type="button"
              onClick={() => handleDemoLogin('talent_dev')}
              className="p-2.5 bg-slate-950 hover:bg-slate-900 border border-cyan-500/30 rounded-xl text-left transition text-xs"
            >
              <span className="font-bold text-cyan-300 block">💻 Web Builder</span>
              <span className="text-[10px] text-slate-400">Devansh Gupta</span>
            </button>

            <button
              type="button"
              onClick={() => handleDemoLogin('talent_video')}
              className="p-2.5 bg-slate-950 hover:bg-slate-900 border border-emerald-500/30 rounded-xl text-left transition text-xs"
            >
              <span className="font-bold text-emerald-300 block">🎬 Video Editor</span>
              <span className="text-[10px] text-slate-400">Tanmayee P.</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

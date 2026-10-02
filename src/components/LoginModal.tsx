import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, UserCheck, Mail, Lock, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, User } from 'lucide-react';
import { RoleView, UserAccount } from '../types';
import { SwitchLogo } from './SwitchLogo';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (account: UserAccount) => void;
  initialRole?: RoleView;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const userAccount: UserAccount = {
        id: `usr_${Date.now()}`,
        name: name || (role === 'business' ? 'Acme Studios' : 'Tanmayee P.'),
        email: email || (role === 'business' ? 'hirer@acme.com' : 'tanmayee@switch.io'),
        role,
        avatar: role === 'business'
          ? 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200'
          : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        title: role === 'business' ? (companyOrTitle || 'Product Design Lead') : (companyOrTitle || 'Short-Form Content Creator'),
        switchScore: role === 'talent' ? 87 : undefined,
        companyName: role === 'business' ? (companyOrTitle || 'Acme Creative') : undefined,
      };

      onLoginSuccess(userAccount);
      onClose();
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
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-[#0B0F19] border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-slate-100"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800/80 transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header & Logo */}
          <div className="text-center mb-6">
            <div className="inline-block mb-3">
              <SwitchLogo size="md" />
            </div>
            <h2 className="text-2xl font-black font-display text-white">
              {isSignUp ? 'Create SWITCH Account' : 'Welcome Back to SWITCH'}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Select your account type to access verified talent or skill passports
            </p>
          </div>

          {/* Role Switcher Tabs */}
          <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800 mb-6">
            <button
              type="button"
              onClick={() => setRole('business')}
              className={`py-3 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-2 ${
                role === 'business'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Business / Hirer</span>
            </button>

            <button
              type="button"
              onClick={() => setRole('talent')}
              className={`py-3 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-2 ${
                role === 'talent'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Talent / Freelancer</span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={role === 'business' ? 'e.g. Sarah Jenkins' : 'e.g. Tanmayee P.'}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">
                {role === 'business' ? 'Business Email' : 'Email Address'}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={role === 'business' ? 'hiring@company.com' : 'you@domain.com'}
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

            {isSignUp && (
              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">
                  {role === 'business' ? 'Company Name' : 'Primary Skill Title'}
                </label>
                <input
                  type="text"
                  value={companyOrTitle}
                  onChange={(e) => setCompanyOrTitle(e.target.value)}
                  placeholder={role === 'business' ? 'e.g. Acme Media Corp' : 'e.g. Logo Designer & Brand Specialist'}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center justify-center space-x-2 mt-2"
            >
              {isLoading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>{isSignUp ? `SIGN UP AS ${role.toUpperCase()}` : `LOG IN AS ${role.toUpperCase()}`}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Login Preset Buttons */}
          <div className="mt-6 pt-5 border-t border-slate-800/80">
            <span className="text-[10px] uppercase font-extrabold text-indigo-400 tracking-wider block mb-2 text-center">
              ⚡ Quick 1-Click Demo Accounts
            </span>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleDemoLogin('business')}
                className="p-2.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-xl text-left transition text-xs"
              >
                <span className="font-bold text-indigo-300 block">🏢 Demo Business Hirer</span>
                <span className="text-[10px] text-slate-400">TechStudio Inc.</span>
              </button>

              <button
                type="button"
                onClick={() => handleDemoLogin('talent_design')}
                className="p-2.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-xl text-left transition text-xs"
              >
                <span className="font-bold text-purple-300 block">🎨 Demo Logo Designer</span>
                <span className="text-[10px] text-slate-400">Rohan Mehta (91 Score)</span>
              </button>

              <button
                type="button"
                onClick={() => handleDemoLogin('talent_dev')}
                className="p-2.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-xl text-left transition text-xs"
              >
                <span className="font-bold text-cyan-300 block">💻 Demo Web Builder</span>
                <span className="text-[10px] text-slate-400">Devansh Gupta (94 Score)</span>
              </button>

              <button
                type="button"
                onClick={() => handleDemoLogin('talent_video')}
                className="p-2.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-xl text-left transition text-xs"
              >
                <span className="font-bold text-emerald-300 block">🎬 Demo Video Editor</span>
                <span className="text-[10px] text-slate-400">Tanmayee P. (87 Score)</span>
              </button>
            </div>
          </div>

          {/* Toggle Sign Up / Log In */}
          <div className="mt-5 text-center text-xs text-slate-400">
            {isSignUp ? (
              <span>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className="text-indigo-400 font-bold hover:underline"
                >
                  Log In
                </button>
              </span>
            ) : (
              <span>
                Need a new account?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className="text-indigo-400 font-bold hover:underline"
                >
                  Create Account
                </button>
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

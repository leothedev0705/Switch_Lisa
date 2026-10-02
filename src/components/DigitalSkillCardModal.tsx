import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, QrCode, Share2, Download, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';
import { Profile } from '../types';
import confetti from 'canvas-confetti';

interface DigitalSkillCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
}

export const DigitalSkillCardModal: React.FC<DigitalSkillCardModalProps> = ({
  isOpen,
  onClose,
  profile
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://switch.passport.id/${profile.name.toLowerCase()}`);
    setCopied(true);
    triggerConfetti();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-[#0D1322] border border-indigo-500/30 rounded-3xl p-6 shadow-2xl overflow-hidden text-slate-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-5">
            <span className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-2">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> VERIFIED DIGITAL SKILL CARD
            </span>
            <h3 className="text-2xl font-bold font-display text-white">Your Skill Passport</h3>
            <p className="text-xs text-slate-400 mt-1">Share your proof-of-ability badge anywhere</p>
          </div>

          {/* 3D Glass Passport Card */}
          <div className="relative group cursor-pointer perspective-1000 my-4">
            <div className="relative w-full bg-gradient-to-br from-indigo-950/90 via-slate-900 to-slate-950 p-6 rounded-2xl border border-indigo-500/40 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:border-indigo-400 group-hover:shadow-indigo-500/20 group-hover:shadow-2xl">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Top Card Row */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500/60 p-0.5 shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 p-0.5 rounded-full border border-slate-900">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white font-display tracking-tight flex items-center">
                      {profile.name}
                    </h4>
                    <p className="text-xs text-indigo-300 font-semibold mt-0.5">{profile.education}</p>
                    <p className="text-[11px] text-slate-400">{profile.title}</p>
                  </div>
                </div>

                {/* Score Pill */}
                <div className="text-right bg-indigo-950/80 px-3 py-1.5 rounded-xl border border-indigo-500/30">
                  <div className="text-[10px] text-indigo-300 font-bold uppercase">SWITCH SCORE</div>
                  <div className="text-2xl font-black text-indigo-400 font-display">{profile.switchScore}</div>
                </div>
              </div>

              {/* Skills Badges */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Verified Abilities</span>
                <div className="grid grid-cols-3 gap-2">
                  {profile.skills.slice(0, 3).map((skill) => (
                    <div key={skill.id} className="bg-slate-900/90 p-2 rounded-xl border border-slate-800 text-center">
                      <div className="text-xs font-semibold text-slate-300 truncate">{skill.name}</div>
                      <div className="text-sm font-bold text-indigo-400 flex items-center justify-center space-x-1 mt-0.5">
                        <span>{skill.score}</span>
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats & QR Code */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex space-x-4">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Completed</span>
                    <div className="text-sm font-bold text-white">{profile.projectsCompleted} Projects</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Rating</span>
                    <div className="text-sm font-bold text-amber-400">★ {profile.clientRating} / 5.0</div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex items-center space-x-2 bg-slate-900 p-2 rounded-xl border border-slate-800">
                  <QrCode className="w-8 h-8 text-indigo-400" />
                  <div className="text-[9px] text-slate-400 leading-tight">
                    <span className="text-indigo-300 font-bold block">SCAN PROOF</span>
                    ID: #SW-90412
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons Grid */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button
              onClick={() => {
                alert("Shared to LinkedIn feed! Skill card attached with live verification badge.");
                triggerConfetti();
              }}
              className="flex items-center justify-center space-x-2 p-2.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 rounded-xl text-xs font-semibold transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>Add to LinkedIn</span>
            </button>

            <button
              onClick={() => {
                alert("Instagram story card template generated!");
                triggerConfetti();
              }}
              className="flex items-center justify-center space-x-2 p-2.5 bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 border border-pink-500/30 rounded-xl text-xs font-semibold transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Share on Instagram</span>
            </button>

            <button
              onClick={() => {
                alert("Downloading High-Res Digital Skill Passport PNG...");
                triggerConfetti();
              }}
              className="flex items-center justify-center space-x-2 p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold transition"
            >
              <Download className="w-4 h-4" />
              <span>Download PNG</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center space-x-2 p-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition shadow-lg shadow-indigo-600/20"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? 'Link Copied! ✓' : 'Copy Live Link'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Challenge, SkillCategoryType } from '../../types';
import { Clock, Play, CheckCircle2, Video, Sparkles, Layers, Sliders, ArrowRight, Code, Layout, Palette, Type, Monitor, Smartphone, FileText, Share2 } from 'lucide-react';
import { MULTI_SKILL_CHALLENGES } from '../../data/mockData';

interface Screen3ChallengeProps {
  challenge: Challenge;
  onSubmitChallenge: (categoryType: SkillCategoryType) => void;
  onSelectSkillTest?: (cat: SkillCategoryType) => void;
}

export const Screen3Challenge: React.FC<Screen3ChallengeProps> = ({
  challenge,
  onSubmitChallenge,
  onSelectSkillTest,
}) => {
  const categoryType = challenge.categoryType || 'video_editing';
  const [secondsLeft, setSecondsLeft] = useState<number>(28 * 60 + 43); // 28:43
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // --- 1. VIDEO EDITING STATE ---
  const [selectedClips, setSelectedClips] = useState<string[]>(['clip_1', 'clip_2', 'clip_3']);

  // --- 2. WEBSITE BUILDING STATE ---
  const [webLayout, setWebLayout] = useState<'saas' | 'agency' | 'ecommerce'>('saas');
  const [webTheme, setWebTheme] = useState<'switch_dark' | 'neon_indigo' | 'emerald_glow'>('switch_dark');
  const [ctaText, setCtaText] = useState<string>('START FREE TRIAL');
  const [cardCount, setCardCount] = useState<number>(3);
  const [isMobilePreview, setIsMobilePreview] = useState<boolean>(false);

  // --- 3. LOGO DESIGN STATE ---
  const [logoShape, setLogoShape] = useState<'switch_monogram' | 'shield_emblem' | 'geometric_hexagon' | 'minimal_circle'>('switch_monogram');
  const [logoColor, setLogoColor] = useState<string>('#FFFFFF');
  const [logoBg, setLogoBg] = useState<string>('#000000');
  const [logoTypography, setLogoTypography] = useState<'bold_sans' | 'futuristic_display' | 'minimal_serif'>('bold_sans');
  const [logoBrandName, setLogoBrandName] = useState<string>('SWITCH');

  // --- 4. COPYWRITING STATE ---
  const [hookHeadline, setHookHeadline] = useState<string>('Stop sending 10-page resumes nobody reads.');
  const [valueProp, setValueProp] = useState<string>('Prove your skills with 30-minute AI challenges and get hired directly.');

  // Live Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleClip = (id: string) => {
    if (selectedClips.includes(id)) {
      setSelectedClips(selectedClips.filter((c) => c !== id));
    } else {
      setSelectedClips([...selectedClips, id]);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitChallenge(categoryType);
    }, 1200);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-slate-100">
      
      {/* Skill Test Category Switcher Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-slate-900/90 p-2.5 rounded-2xl border border-slate-800">
        <span className="text-xs uppercase font-extrabold text-indigo-400 px-3 flex items-center">
          <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-300" /> Select Active Test:
        </span>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => onSelectSkillTest && onSelectSkillTest('website_building')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1 ${
              categoryType === 'website_building' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Website Building</span>
          </button>

          <button
            onClick={() => onSelectSkillTest && onSelectSkillTest('logo_design')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1 ${
              categoryType === 'logo_design' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Logo Design</span>
          </button>

          <button
            onClick={() => onSelectSkillTest && onSelectSkillTest('video_editing')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1 ${
              categoryType === 'video_editing' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Video Editing</span>
          </button>

          <button
            onClick={() => onSelectSkillTest && onSelectSkillTest('copywriting')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1 ${
              categoryType === 'copywriting' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Copywriting</span>
          </button>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 p-6 rounded-3xl border border-indigo-500/30 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              {challenge.category} ASSESSMENT
            </span>
            <span className="text-xs text-emerald-400 font-bold flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> LIVE EVALUATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-white">{challenge.title}</h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">{challenge.instruction}</p>
        </div>

        {/* Live Timer Box */}
        <div className="bg-slate-950/90 px-6 py-3 rounded-2xl border border-indigo-500/40 text-center shadow-lg shrink-0">
          <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center justify-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span>TIME REMAINING</span>
          </div>
          <div className="text-3xl font-black text-amber-400 font-mono tracking-widest mt-0.5">
            {formatTime(secondsLeft)}
          </div>
        </div>
      </div>

      {/* DYNAMIC INTERACTIVE CHALLENGE WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Dynamic Challenge Editor */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* ========================================================
              CATEGORY 1: WEBSITE BUILDING TEST
             ======================================================== */}
          {categoryType === 'website_building' && (
            <div className="space-y-6">
              {/* Studio Controls */}
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center">
                    <Code className="w-4 h-4 text-indigo-400 mr-2" /> Interactive Web Page Builder Studio
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsMobilePreview(false)}
                      className={`p-1.5 rounded-lg border text-xs font-bold ${!isMobilePreview ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                    >
                      <Monitor className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsMobilePreview(true)}
                      className={`p-1.5 rounded-lg border text-xs font-bold ${isMobilePreview ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                    >
                      <Smartphone className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Layout Preset</label>
                    <select
                      value={webLayout}
                      onChange={(e) => setWebLayout(e.target.value as any)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                    >
                      <option value="saas">SaaS Dark Theme Hero</option>
                      <option value="agency">Agency Creative Splash</option>
                      <option value="ecommerce">Modern E-Commerce Store</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Theme Palette</label>
                    <select
                      value={webTheme}
                      onChange={(e) => setWebTheme(e.target.value as any)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                    >
                      <option value="switch_dark">SWITCH Midnight (#000000)</option>
                      <option value="neon_indigo">Electric Indigo</option>
                      <option value="emerald_glow">Emerald Cyber</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">CTA Text</label>
                    <input
                      type="text"
                      value={ctaText}
                      onChange={(e) => setCtaText(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* LIVE WEBPAGE INTERACTIVE PREVIEW BOX */}
              <div className="bg-slate-950 rounded-3xl border border-indigo-500/40 p-4 shadow-2xl overflow-hidden">
                <div className="flex items-center space-x-2 border-b border-slate-800 pb-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-mono text-slate-500 ml-2">https://switch-prototype.preview/app-build</span>
                </div>

                <div className={`mx-auto transition-all duration-300 rounded-2xl overflow-hidden border border-slate-800 ${isMobilePreview ? 'max-w-xs' : 'w-full'}`}>
                  {/* Built Webpage Render */}
                  <div className={`p-8 text-center min-h-[280px] flex flex-col justify-center items-center ${
                    webTheme === 'switch_dark' ? 'bg-[#06080F] text-white' :
                    webTheme === 'neon_indigo' ? 'bg-indigo-950 text-white' : 'bg-emerald-950 text-white'
                  }`}>
                    <span className="text-[10px] uppercase font-extrabold px-3 py-1 rounded-full bg-white/10 text-indigo-300 border border-white/20 mb-3">
                      LIVE RENDER PREVIEW
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black font-display tracking-tight leading-tight">
                      {webLayout === 'saas' ? 'Build Faster with Verified Talent' :
                       webLayout === 'agency' ? 'We Design Digital Products That Convert' :
                       'Curated Modern Essentials'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-2">
                      Responsive UI layout built with zero latency and high accessibility scores.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3 justify-center">
                      <button className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-extrabold text-xs rounded-xl shadow-lg">
                        {ctaText}
                      </button>
                    </div>

                    {/* Dynamic Feature Cards */}
                    <div className={`grid grid-cols-1 sm:grid-cols-${cardCount} gap-3 w-full mt-8 pt-6 border-t border-white/10 text-left`}>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs">
                        <span className="font-bold block text-white">⚡ 99.9% Performance</span>
                        <span className="text-[10px] text-slate-300">Fast rendering speed</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs">
                        <span className="font-bold block text-white">📱 Fully Responsive</span>
                        <span className="text-[10px] text-slate-300">Mobile & desktop ready</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs">
                        <span className="font-bold block text-white">🎨 Clean CSS Math</span>
                        <span className="text-[10px] text-slate-300">Accessibility passed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              CATEGORY 2: LOGO & BRAND DESIGN TEST
             ======================================================== */}
          {categoryType === 'logo_design' && (
            <div className="space-y-6">
              {/* Studio Controls */}
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center border-b border-slate-800 pb-3">
                  <Palette className="w-4 h-4 text-purple-400 mr-2" /> Vector Logo & Brand Identity Studio
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Brand Name</label>
                    <input
                      type="text"
                      value={logoBrandName}
                      onChange={(e) => setLogoBrandName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Icon Geometry</label>
                    <select
                      value={logoShape}
                      onChange={(e) => setLogoShape(e.target.value as any)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                    >
                      <option value="switch_monogram">SWITCH Monogram (Arrows & Toggle)</option>
                      <option value="shield_emblem">Shield Emblem</option>
                      <option value="geometric_hexagon">Futuristic Hexagon</option>
                      <option value="minimal_circle">Minimalist Circle</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Typography Style</label>
                    <select
                      value={logoTypography}
                      onChange={(e) => setLogoTypography(e.target.value as any)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                    >
                      <option value="bold_sans">Bold Modern Sans</option>
                      <option value="futuristic_display">Futuristic Geometric</option>
                      <option value="minimal_serif">Minimalist Luxury Serif</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Color Presets:</span>
                  <button onClick={() => { setLogoColor('#FFFFFF'); setLogoBg('#000000'); }} className="w-6 h-6 rounded-full bg-black border-2 border-white" title="High Contrast Black & White" />
                  <button onClick={() => { setLogoColor('#6366F1'); setLogoBg('#0F172A'); }} className="w-6 h-6 rounded-full bg-indigo-600 border-2 border-slate-700" title="Indigo Night" />
                  <button onClick={() => { setLogoColor('#10B981'); setLogoBg('#064E3B'); }} className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-700" title="Cyber Emerald" />
                </div>
              </div>

              {/* LIVE VECTOR LOGO CANVAS PREVIEW */}
              <div className="bg-slate-950 rounded-3xl border border-purple-500/40 p-8 shadow-2xl flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[320px]">
                <div className="absolute top-3 left-4 text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                  VECTOR LOGO RENDERING ENGINE
                </div>

                {/* LOGO MARK CANVAS RENDER */}
                <div
                  className="w-28 h-28 rounded-3xl flex items-center justify-center shadow-2xl p-4 transition-all duration-300 border border-white/20 mb-4"
                  style={{ backgroundColor: logoBg }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {logoShape === 'switch_monogram' && (
                      <g>
                        <path d="M 30,22 C 45,22 45,38 30,42 C 15,46 15,62 30,62 L 35,62 M 32,15 L 20,22 L 32,29 M 28,69 L 40,62 L 28,55" 
                          stroke={logoColor} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <rect x="62" y="16" width="22" height="52" rx="11" stroke={logoColor} strokeWidth="8" fill="none" />
                        <circle cx="73" cy="27" r="7" fill={logoColor} />
                      </g>
                    )}
                    {logoShape === 'shield_emblem' && (
                      <path d="M 50,15 L 80,30 V 55 C 80,72 50,88 50,88 C 50,88 20,72 20,55 V 30 Z" fill="none" stroke={logoColor} strokeWidth="8" />
                    )}
                    {logoShape === 'geometric_hexagon' && (
                      <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" fill="none" stroke={logoColor} strokeWidth="8" />
                    )}
                    {logoShape === 'minimal_circle' && (
                      <circle cx="50" cy="50" r="36" fill="none" stroke={logoColor} strokeWidth="10" />
                    )}
                  </svg>
                </div>

                {/* LOGO TYPOGRAPHY BRAND NAME */}
                <h3 className={`text-3xl font-black tracking-tight ${logoTypography === 'futuristic_display' ? 'font-mono' : 'font-display'}`} style={{ color: logoColor }}>
                  {logoBrandName || 'SWITCH'}
                </h3>
                <span className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">
                  Vector Scalability & Contrast Passed ✓
                </span>
              </div>
            </div>
          )}

          {/* ========================================================
              CATEGORY 3: VIDEO EDITING TEST (Original Clip Picker)
             ======================================================== */}
          {categoryType === 'video_editing' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center bg-slate-900/80 p-2 rounded-2xl border border-slate-800">
                <span className="text-xs font-bold text-slate-300 px-3 flex items-center">
                  <Video className="w-4 h-4 text-indigo-400 mr-2" /> Select Raw Video Clips ({selectedClips.length}/5 Selected)
                </span>
                <span className="text-xs font-bold text-slate-400 px-3">Target Duration: 15s</span>
              </div>

              {/* Clip Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {challenge.clips?.map((clip) => {
                  const isSelected = selectedClips.includes(clip.id);
                  return (
                    <div
                      key={clip.id}
                      onClick={() => toggleClip(clip.id)}
                      className={`cursor-pointer relative rounded-2xl overflow-hidden border transition-all duration-300 bg-slate-900/90 ${
                        isSelected
                          ? 'border-indigo-500 ring-2 ring-indigo-500/40 shadow-xl'
                          : 'border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="relative h-36 w-full">
                        <img src={clip.thumbnail} alt={clip.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                        
                        <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-white font-mono">
                          ⏱ {clip.duration}
                        </span>

                        {isSelected && (
                          <span className="absolute top-3 right-3 bg-indigo-600 text-white p-1 rounded-full shadow">
                            <CheckCircle2 className="w-4 h-4" />
                          </span>
                        )}

                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                          <h4 className="text-xs font-bold text-white truncate">{clip.title}</h4>
                          <span className="text-[9px] bg-slate-800/80 px-2 py-0.5 rounded text-indigo-300 font-semibold">
                            {clip.tags[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================
              CATEGORY 4: COPYWRITING TEST
             ======================================================== */}
          {categoryType === 'copywriting' && (
            <div className="space-y-6">
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center border-b border-slate-800 pb-3">
                  <FileText className="w-4 h-4 text-emerald-400 mr-2" /> Conversion Copy & Ad Hook Studio
                </h3>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">3-Second Hook Sentence</label>
                  <input
                    type="text"
                    value={hookHeadline}
                    onChange={(e) => setHookHeadline(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Core Value Proposition Statement</label>
                  <textarea
                    rows={2}
                    value={valueProp}
                    onChange={(e) => setValueProp(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: AI Live Challenge Progress & Submit Box */}
        <div className="space-y-6">
          <div className="p-6 bg-slate-900/90 rounded-3xl border border-slate-800 space-y-5">
            <h3 className="text-lg font-bold font-display text-white">AI Evaluation Criteria</h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">1. Execution Precision</span>
                <span className="text-indigo-400 font-bold">30% Weight</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">2. Visual & Structural Polish</span>
                <span className="text-indigo-400 font-bold">30% Weight</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">3. Brand Alignment</span>
                <span className="text-indigo-400 font-bold">20% Weight</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">4. Speed & Responsiveness</span>
                <span className="text-indigo-400 font-bold">20% Weight</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-slate-950 font-black text-sm rounded-2xl shadow-xl shadow-emerald-500/20 transition flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Evaluating Work via AI...</span>
                ) : (
                  <>
                    <span>SUBMIT FOR AI EVALUATION</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

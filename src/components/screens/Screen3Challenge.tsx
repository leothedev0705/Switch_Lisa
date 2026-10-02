import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Challenge } from '../../types';
import { Clock, Play, CheckCircle2, Video, Sparkles, Layers, Sliders, ArrowRight } from 'lucide-react';

interface Screen3ChallengeProps {
  challenge: Challenge;
  onSubmitChallenge: () => void;
}

export const Screen3Challenge: React.FC<Screen3ChallengeProps> = ({
  challenge,
  onSubmitChallenge,
}) => {
  const [selectedClips, setSelectedClips] = useState<string[]>(['clip_1', 'clip_2', 'clip_3']);
  const [secondsLeft, setSecondsLeft] = useState<number>(28 * 60 + 43); // 28:43
  const [activeTab, setActiveTab] = useState<'select' | 'timeline' | 'preview'>('select');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Live Timer Effect
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
      onSubmitChallenge();
    }, 1200);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-slate-100">
      
      {/* Header Banner with Category & Live Countdown Timer */}
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

      {/* Challenge Stepper & Studio Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Clip Picker & Asset Bin (2 cols wide) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center bg-slate-900/80 p-2 rounded-2xl border border-slate-800">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('select')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                  activeTab === 'select' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Video className="w-4 h-4" />
                <span>Raw Clips ({selectedClips.length}/5 Selected)</span>
              </button>
              <button
                onClick={() => setActiveTab('timeline')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                  activeTab === 'timeline' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sliders className="w-4 h-4" />
                <span>Reel Timeline Trim</span>
              </button>
            </div>
            <span className="text-xs font-bold text-slate-400 px-3">Target Duration: 15s</span>
          </div>

          {/* Clip Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {challenge.clips.map((clip) => {
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

          {/* Timeline Trim Controls Preview */}
          <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase font-bold text-slate-400">15-Second Cut Sequence Bar</span>
              <span className="text-xs font-mono text-emerald-400 font-bold">14.8s / 15.0s Perfect Fit</span>
            </div>

            <div className="h-10 w-full bg-slate-950 rounded-xl p-1 border border-slate-800 flex space-x-1">
              {selectedClips.map((id, i) => (
                <div
                  key={id}
                  className="h-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white px-2 truncate"
                  style={{ width: `${100 / selectedClips.length}%` }}
                >
                  Clip {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: AI Live Challenge Progress & Submit Box */}
        <div className="space-y-6">
          <div className="p-6 bg-slate-900/90 rounded-3xl border border-slate-800 space-y-5">
            <h3 className="text-lg font-bold font-display text-white">Challenge Evaluation Criteria</h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">1. Storyline Hook Retention</span>
                <span className="text-indigo-400 font-bold">30% Weight</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">2. Beat Matching & Transition</span>
                <span className="text-indigo-400 font-bold">30% Weight</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">3. Color Grading & Lighting</span>
                <span className="text-indigo-400 font-bold">20% Weight</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">4. Gen-Z Aesthetics</span>
                <span className="text-indigo-400 font-bold">20% Weight</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                disabled={isSubmitting || selectedClips.length === 0}
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-slate-950 font-black text-sm rounded-2xl shadow-xl shadow-emerald-500/20 transition flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Evaluating Clips via AI...</span>
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

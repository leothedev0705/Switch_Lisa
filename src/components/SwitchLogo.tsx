import React from 'react';

interface SwitchLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const SwitchLogo: React.FC<SwitchLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', sub: 'text-[9px]' },
    md: { icon: 'w-9 h-9', text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 'w-12 h-12', text: 'text-3xl', sub: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      {/* Visual Logo Container matching the SWITCH logo mark */}
      <div className={`${currentSize.icon} rounded-xl bg-black border border-slate-700/80 shadow-lg flex items-center justify-center relative overflow-hidden group p-1`}>
        {/* Subtle glowing ring background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-indigo-500/10 to-purple-500/20 opacity-80 group-hover:opacity-100 transition" />

        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 fill-white" xmlns="http://www.w3.org/2000/svg">
          {/* S with opposite arrows */}
          <path d="M 30,22 C 45,22 45,38 30,42 C 15,46 15,62 30,62 L 35,62 M 32,15 L 20,22 L 32,29 M 28,69 L 40,62 L 28,55" 
            stroke="white" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          
          {/* Vertical Toggle Switch pill (representing the 'I' / Switch element) */}
          <rect x="62" y="16" width="22" height="52" rx="11" stroke="white" strokeWidth="8" fill="none" />
          <circle cx="73" cy="27" r="7" fill="white" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center space-x-1.5 leading-none">
            <span className={`${currentSize.text} font-black font-display tracking-tight text-white flex items-center`}>
              {/* Custom styled SWITCH text matching logo */}
              <span className="tracking-tight">SW</span>
              {/* Toggle switch icon inside word SWITCH */}
              <span className="inline-block relative mx-0.5 w-[0.65em] h-[1.1em] border-2 border-white rounded-full bg-black align-middle top-[-0.05em]">
                <span className="absolute top-[0.1em] left-[0.1em] w-[0.4em] h-[0.4em] bg-white rounded-full"></span>
              </span>
              <span className="tracking-tight">TCH</span>
            </span>
          </div>
          <span className={`${currentSize.sub} text-slate-400 font-medium tracking-wide block`}>
            Proof-of-Ability Marketplace
          </span>
        </div>
      )}
    </div>
  );
};

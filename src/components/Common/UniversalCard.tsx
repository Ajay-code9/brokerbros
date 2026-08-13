import React from 'react';

export interface UniversalCardProps {
  icon?: React.ReactNode;
  badge?: string;
  badgeColor?: string;
  title: string;
  description: string;
  footerLeft?: React.ReactNode;
  footerRight?: React.ReactNode;
  onClick?: () => void;
  variant?: 'light' | 'dark' | 'glass';
  className?: string;
  interactiveGlow?: boolean;
}

export const UniversalCard: React.FC<UniversalCardProps> = ({
  icon,
  badge,
  badgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200',
  title,
  description,
  footerLeft,
  footerRight,
  onClick,
  variant = 'light',
  className = '',
  interactiveGlow = true
}) => {
  const isDark = variant === 'dark';
  const isGlass = variant === 'glass';

  return (
    <div
      onClick={onClick}
      className={`
        relative group rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full
        transition-all duration-300 transform-gpu cursor-pointer overflow-hidden
        ${
          isDark
            ? 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-xl hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/15 hover:-translate-y-1.5'
            : isGlass
            ? 'bg-slate-900/90 backdrop-blur-md text-white border border-slate-800 shadow-2xl hover:border-emerald-400/80 hover:shadow-emerald-500/20 hover:-translate-y-1.5'
            : 'bg-white dark:bg-[#121520] text-slate-900 dark:text-slate-100 border border-slate-200/90 dark:border-slate-800/80 shadow-2xs hover:border-emerald-500/60 dark:hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/15 hover:-translate-y-1.5'
        }
        ${className}
      `}
    >
      {/* Dynamic Hover Gradient Glow Backdrop */}
      {interactiveGlow && (
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}

      {/* Internal Content Container */}
      <div className="space-y-4 relative z-10">
        {/* Header Row: Icon + Badge */}
        {(icon || badge) && (
          <div className="flex items-center justify-between gap-3">
            {icon && (
              <div
                className={`
                  w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-inner transition-all duration-300
                  ${
                    isDark || isGlass
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 group-hover:scale-105'
                      : 'bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/80 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 group-hover:border-emerald-400 group-hover:scale-105'
                  }
                `}
              >
                {icon}
              </div>
            )}
            {badge && (
              <span
                className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border shadow-2xs transition-colors ${badgeColor}`}
              >
                {badge}
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <h3
          className={`text-lg sm:text-xl font-bold font-sans tracking-tight transition-colors duration-200 ${
            isDark || isGlass
              ? 'text-white group-hover:text-emerald-400'
              : 'text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400'
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`text-xs sm:text-sm leading-relaxed font-sans ${
            isDark || isGlass ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'
          }`}
        >
          {description}
        </p>
      </div>

      {/* Footer Section (If Provided) */}
      {(footerLeft || footerRight) && (
        <div
          className={`pt-4 mt-4 border-t flex items-center justify-between relative z-10 transition-colors ${
            isDark || isGlass ? 'border-slate-800/80' : 'border-slate-100 dark:border-slate-800/80'
          }`}
        >
          {footerLeft && (
            <div className="text-xs font-mono text-slate-500 font-medium">
              {footerLeft}
            </div>
          )}
          {footerRight && (
            <div className="text-xs font-extrabold text-emerald-700 hover:text-emerald-600 flex items-center gap-1.5 cursor-pointer">
              {footerRight}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

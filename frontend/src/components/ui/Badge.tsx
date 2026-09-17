import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'amber' | 'emerald' | 'navy' | 'slate' | 'outline' | 'blue' | 'solar';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'amber',
  size = 'md',
  icon,
  className = '',
}) => {
  const base = 'inline-flex items-center gap-1.5 font-semibold rounded-full tracking-wide uppercase transition-colors';

  const sizes = {
    sm: 'px-2.5 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
  };

  const variants = {
    amber: 'bg-orange-50 text-[#c84300] border border-[#f4a304]/40',
    emerald: 'bg-[#f1f8ee] text-[#265e11] border border-[#265e11]/30',
    navy: 'bg-slate-900 text-[#f4a304] border border-slate-700',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200',
    outline: 'bg-transparent text-slate-700 border border-slate-300',
    blue: 'bg-blue-50 text-[#1d4ed8] border border-blue-200/90 shadow-2xs font-bold',
    solar: 'bg-[#071328] text-sky-300 border border-blue-500/40 shadow-xs font-bold',
  };

  return (
    <span className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

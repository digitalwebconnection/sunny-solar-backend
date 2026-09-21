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
    amber: 'bg-[#E8EDFB] text-[#2B3CB8] border border-[#D1DCF8]',
    emerald: 'bg-[#F5F7FD] text-[#1D2984] border border-[#D1DCF8]',
    navy: 'bg-[#0C123E] text-white border border-[#2B3CB8]/40',
    slate: 'bg-[#F5F7FD] text-[#1D2984] border border-[#D1DCF8]',
    outline: 'bg-transparent text-[#1D2984] border border-[#D1DCF8]',
    blue: 'bg-[#E8EDFB] text-[#2B3CB8] border border-[#D1DCF8] shadow-2xs font-bold',
    solar: 'bg-[#0C123E] text-white border border-[#2B3CB8]/40 shadow-xs font-bold',
  };

  return (
    <span className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glass?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glass = false,
  onClick,
}) => {
  const base = 'rounded-2xl border transition-all duration-300 relative overflow-hidden';
  const glassStyles = glass ? 'glass-panel' : 'bg-white border-slate-200/80 shadow-sm';
  const hoverStyles = hoverEffect ? 'hover:shadow-xl hover:border-[#f06e02]/40 hover:-translate-y-1' : '';

  return (
    <div
      onClick={onClick}
      className={`${base} ${glassStyles} ${hoverStyles} ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {children}
    </div>
  );
};

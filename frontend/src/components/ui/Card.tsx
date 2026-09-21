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
  const glassStyles = glass ? 'glass-panel' : 'bg-white border-[#D1DCF8] shadow-sm';
  const hoverStyles = hoverEffect ? 'hover:shadow-xl hover:border-[#2B3CB8]/40 hover:-translate-y-1' : '';

  return (
    <div
      onClick={onClick}
      className={`${base} ${glassStyles} ${hoverStyles} ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {children}
    </div>
  );
};

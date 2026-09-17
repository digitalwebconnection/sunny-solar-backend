import React from 'react';
import { Badge } from '../ui/Badge';
import { Breadcrumbs } from './Breadcrumbs';

export interface PageHeaderProps {
  badge?: string;
  badgeVariant?: 'amber' | 'emerald' | 'navy' | 'slate' | 'blue' | 'solar';
  title: string;
  highlightText?: string;
  description: string;
  actions?: React.ReactNode;
  showBreadcrumbs?: boolean;
  align?: 'left' | 'center';
  dark?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  badgeVariant = 'amber',
  title,
  highlightText,
  description,
  actions,
  showBreadcrumbs = true,
  align = 'center',
  dark = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`relative overflow-hidden pt-28 sm:pt-32 ${dark ? 'bg-slate-900 text-white' : 'bg-gradient-to-b from-[#ed5001]/5 via-slate-50 to-white text-slate-900'} border-b border-slate-200/60`}>
      {/* Background ambient solar and sky blue blurs */}
      <div className="absolute top-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#f4a304]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-52 sm:w-80 h-52 sm:h-80 bg-[#ed5001]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 ${isCenter ? 'text-center' : 'text-left'}`}>
        {badge && (
          <div className={`mb-4 flex ${isCenter ? 'justify-center' : 'justify-start'}`}>
            <Badge variant={badgeVariant} size="sm">
              {badge}
            </Badge>
          </div>
        )}

        {/* Ambient radial glow positioned directly behind the text */}
        <div className={`relative inline-block w-full max-w-4xl ${isCenter ? 'mx-auto' : ''}`}>
          <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-2xl h-36 sm:h-44 ${
              dark 
                ? 'bg-gradient-to-r from-[#ed5001]/20 via-[#f06e02]/25 to-[#f4a304]/15' 
                : 'bg-gradient-to-r from-[#ed5001]/20 via-[#f06e02]/25 to-[#f4a304]/20'
            } rounded-full blur-3xl pointer-events-none -z-10`} 
          />

          <h1 className={`relative text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight leading-tight max-w-3xl ${isCenter ? 'mx-auto' : ''} ${
            dark 
              ? 'drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]' 
              : 'drop-shadow-[0_2px_18px_rgba(237,80,1,0.15)]'
          }`}>
            {title}{' '}
            {highlightText && (
              <span className="bg-gradient-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(237,80,1,0.35)]">
                {highlightText}
              </span>
            )}
          </h1>
        </div>

        <p className={`relative mt-4 text-base sm:text-lg md:text-xl ${dark ? 'text-slate-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]' : 'text-slate-600'} max-w-6xl leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {description}
        </p>

        {actions && (
          <div className={`relative mt-8 flex flex-wrap gap-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

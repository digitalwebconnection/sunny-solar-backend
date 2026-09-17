import React from 'react';
import { CalculatorsHeroSection } from './sections/CalculatorsHeroSection';
import { CalculatorsGridSection } from './sections/CalculatorsGridSection';
import { CalculatorsAddBatterySolarSection } from './sections/CalculatorsAddBatterySolarSection';

export const CalculatorsLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* 1. Page Hero with Quick Actions */}
      <CalculatorsHeroSection />

      {/* 2. Full Suite Calculators Grid */}
      <CalculatorsGridSection />

      {/* 3. Add Battery with Solar Synergy Showcase (Small Normal Container, Image & Non-Box Design) */}
      <CalculatorsAddBatterySolarSection />


    </div>
  );
};

export default CalculatorsLandingPage;
export * from './subpages';

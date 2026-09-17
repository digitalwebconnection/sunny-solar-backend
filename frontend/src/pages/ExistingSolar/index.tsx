import React from 'react';
import { ExistingSolarHeroSection } from './sections/ExistingSolarHeroSection';
import { ExistingSolarSolutionsGridSection } from './sections/ExistingSolarSolutionsGridSection';
import { ExistingSolarWarningSignsSection } from './sections/ExistingSolarWarningSignsSection';
import { ExistingSolarEvolutionSection } from './sections/ExistingSolarEvolutionSection';

export const ExistingSolarLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* 1. Page Header */}
      <ExistingSolarHeroSection />

      <div className="mt-12 sm:mt-16 space-y-16 sm:space-y-20">
        {/* 2. Solutions & Services Grid */}
        <ExistingSolarSolutionsGridSection />

            {/* 4. Legacy Solar vs Modern Solar + Storage Evolution */}
        <ExistingSolarEvolutionSection />

        {/* 3. 5 Warning Signs & Fault Diagnostics */}
        <ExistingSolarWarningSignsSection />

    
      </div>
    </div>
  );
};

export default ExistingSolarLandingPage;

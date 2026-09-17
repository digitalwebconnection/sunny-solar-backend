import React from 'react';
import { SavingsHeroSection } from './sections/SavingsHeroSection';
import { SavingsPillarsSection } from './sections/SavingsPillarsSection';
import { SavingsOptimizationSection } from './sections/SavingsOptimizationSection';
import { SavingsProfilesSection } from './sections/SavingsProfilesSection';

export const SavingsPage: React.FC = () => {
  return (
    <div className="min-h-screen  space-y-16 sm:space-y-14">
      {/* Section 1: Financial Performance Hero & Quick-Stats Strip */}
      <SavingsHeroSection />

      

      {/* Section 3: Savings Leakage vs. Calibrated Optimization Benchmark */}
      <SavingsOptimizationSection />
      {/* Section 2: Core Revenue Pillars & Net Metering Flow */}
      <SavingsPillarsSection />

      {/* Section 4: Real Household Case Studies & Trusted Next Steps */}
      <SavingsProfilesSection />

    </div>
  );
};

export default SavingsPage;

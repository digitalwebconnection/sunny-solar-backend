import React from 'react';
import { BatteryDecisionGuideHeroSection } from './sections/BatteryDecisionGuideHeroSection';
import { BatteryDecisionGuideMainSection } from './sections/BatteryDecisionGuideMainSection';
import { BatteryDecisionGuideBatterySection } from './sections/BatteryDecisionGuideBatterySection';
import { BatteryDecisionGuideCTASection } from './sections/BatteryDecisionGuideCTASection';

export const BatteryDecisionGuidePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Section 1: Page Header & Hero */}
      <BatteryDecisionGuideHeroSection />

      {/* Section 2: Recreated Technical Report Preview & Download Form */}
      <BatteryDecisionGuideMainSection />

      {/* Section 3: Add Battery with Solar Sweet Spot Showcase (No Calculator, Real Imagery, Non-Box) */}
      <BatteryDecisionGuideBatterySection />

  
    </div>
  );
};

export default BatteryDecisionGuidePage;

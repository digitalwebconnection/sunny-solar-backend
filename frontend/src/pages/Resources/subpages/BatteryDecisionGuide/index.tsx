import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BatteryDecisionGuideHeroSection } from './sections/BatteryDecisionGuideHeroSection';
import { BatteryDecisionGuideMainSection } from './sections/BatteryDecisionGuideMainSection';
import { BatteryDecisionGuideBatterySection } from './sections/BatteryDecisionGuideBatterySection';
import { BatteryDecisionGuideCTASection } from './sections/BatteryDecisionGuideCTASection';

export const BatteryDecisionGuidePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Helmet>
        <title>Home Battery Storage Decision Guide | Sunny Solar</title>
        <meta
          name="description"
          content="Learn how to choose the right battery capacity, evaluate AC vs DC coupling, and assess financial payback with our free guide."
        />
      </Helmet>
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

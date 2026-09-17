import React from 'react';
import { BuyerGuideHeroSection } from './sections/BuyerGuideHeroSection';
import { BuyerGuideMainSection } from './sections/BuyerGuideMainSection';
import { BuyerGuideBatterySection } from './sections/BuyerGuideBatterySection';
import { BuyerGuideCTASection } from './sections/BuyerGuideCTASection';

export const BuyerGuidePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Section 1: Page Header & Hero */}
      <BuyerGuideHeroSection />

      {/* Section 2: Recreated 38-Page E-Book Preview & Download Form */}
      <BuyerGuideMainSection />

      {/* Section 3: Add Battery with Solar Synergy (No Calculator, Real Imagery, Non-Box) */}
      <BuyerGuideBatterySection />


    </div>
  );
};

export default BuyerGuidePage;

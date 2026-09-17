import React from 'react';
import { SolarSavingsHeroSection } from './sections/SolarSavingsHeroSection';
import { SolarSavingsCalcSection } from './sections/SolarSavingsCalcSection';
import { SolarSavingsAddBatterySection } from './sections/SolarSavingsAddBatterySection';

export const SolarSavingsCalcPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Section 1: Page Header & Hero */}
      <SolarSavingsHeroSection />

      {/* Section 2: Interactive Quarterly Bill Calculator */}
      <SolarSavingsCalcSection />

      {/* Section 3: Add Battery with Solar Synergy (Small Container, Image, Non-Box Design) */}
      <SolarSavingsAddBatterySection />


    </div>
  );
};

export default SolarSavingsCalcPage;

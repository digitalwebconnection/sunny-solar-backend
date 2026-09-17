import React from 'react';
import { BatterySizeHeroSection } from './sections/BatterySizeHeroSection';
import { BatterySizeCalcSection } from './sections/BatterySizeCalcSection';
import { BatterySizeSolarPairingSection } from './sections/BatterySizeSolarPairingSection';

export const BatterySizeCalcPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Section 1: Page Header & Hero */}
      <BatterySizeHeroSection />

      {/* Section 2: Interactive Consumption & Capacity Matcher */}
      <BatterySizeCalcSection />

      {/* Section 3: Add Battery with Solar Pairing Matrix (Small Container, Image, Non-Box Design) */}
      <BatterySizeSolarPairingSection />

 
    </div>
  );
};

export default BatterySizeCalcPage;

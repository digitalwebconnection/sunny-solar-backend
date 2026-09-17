import React from 'react';
import { PaybackHeroSection } from './sections/PaybackHeroSection';
import { PaybackCalcSection } from './sections/PaybackCalcSection';
import { PaybackAddBatterySection } from './sections/PaybackAddBatterySection';

export const PaybackCalcPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Section 1: Page Header & Hero */}
      <PaybackHeroSection />

      {/* Section 2: Interactive Break-Even Forecaster */}
      <PaybackCalcSection />

      {/* Section 3: Add Battery with Solar ROI Multiplier (Small Container, Image, Non-Box Design) */}
      <PaybackAddBatterySection />


    </div>
  );
};

export default PaybackCalcPage;

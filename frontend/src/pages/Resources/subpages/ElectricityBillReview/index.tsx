import React from 'react';
import { ElectricityBillReviewHeroSection } from './sections/ElectricityBillReviewHeroSection';
import { ElectricityBillReviewMainSection } from './sections/ElectricityBillReviewMainSection';
import { ElectricityBillReviewBatterySection } from './sections/ElectricityBillReviewBatterySection';
import { ElectricityBillReviewCTASection } from './sections/ElectricityBillReviewCTASection';

export const ElectricityBillReviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Section 1: Page Header & Hero */}
      <ElectricityBillReviewHeroSection />

      {/* Section 2: Recreated Bill Analysis & Submission Form */}
      <ElectricityBillReviewMainSection />

      {/* Section 3: Add Battery with Solar Tariff Trap Solution (No Calculator, Real Imagery, Non-Box) */}
      <ElectricityBillReviewBatterySection />

    </div>
  );
};

export default ElectricityBillReviewPage;

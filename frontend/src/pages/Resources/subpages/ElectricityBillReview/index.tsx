import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ElectricityBillReviewHeroSection } from './sections/ElectricityBillReviewHeroSection';
import { ElectricityBillReviewMainSection } from './sections/ElectricityBillReviewMainSection';
import { ElectricityBillReviewBatterySection } from './sections/ElectricityBillReviewBatterySection';
import { ElectricityBillReviewCTASection } from './sections/ElectricityBillReviewCTASection';

export const ElectricityBillReviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Helmet>
        <title>Free Electricity Bill Analysis & Tariff Audit | Sunny Solar</title>
        <meta
          name="description"
          content="Submit your power bill for a complimentary tariff audit and personalized solar production forecast."
        />
      </Helmet>
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

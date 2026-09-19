import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BuyingChecklistHeroSection } from './sections/BuyingChecklistHeroSection';
import { BuyingChecklistMainSection } from './sections/BuyingChecklistMainSection';
import { BuyingChecklistBatterySection } from './sections/BuyingChecklistBatterySection';
import { BuyingChecklistCTASection } from './sections/BuyingChecklistCTASection';

export const BuyingChecklistPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Helmet>
        <title>Solar Buying Checklist - 25 Essential Questions | Sunny Solar</title>
        <meta
          name="description"
          content="Free printable solar buying checklist. Essential questions to ask any solar retailer before signing a contract."
        />
      </Helmet>
      {/* Section 1: Page Header & Hero */}
      <BuyingChecklistHeroSection />

      {/* Section 2: Recreated Checklist Preview & Interactive Download Form */}
      <BuyingChecklistMainSection />

      {/* Section 3: Add Battery with Solar Vetting Showcase (No Calculator, Real Imagery, Non-Box) */}
      <BuyingChecklistBatterySection />

    </div>
  );
};

export default BuyingChecklistPage;

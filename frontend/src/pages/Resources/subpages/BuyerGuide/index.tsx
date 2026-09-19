import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BuyerGuideHeroSection } from './sections/BuyerGuideHeroSection';
import { BuyerGuideMainSection } from './sections/BuyerGuideMainSection';
import { BuyerGuideBatterySection } from './sections/BuyerGuideBatterySection';
import { BuyerGuideCTASection } from './sections/BuyerGuideCTASection';

export const BuyerGuidePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Helmet>
        <title>Complete Solar Buyer's Guide (Free Download) | Sunny Solar</title>
        <meta
          name="description"
          content="Download our comprehensive 38-page residential solar guide covering system sizing, panel technologies, and inverter choices."
        />
      </Helmet>
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

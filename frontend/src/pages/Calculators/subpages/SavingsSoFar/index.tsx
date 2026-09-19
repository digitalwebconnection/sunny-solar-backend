import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SavingsSoFarHeroSection } from './sections/SavingsSoFarHeroSection';
import { SavingsSoFarCalcSection } from './sections/SavingsSoFarCalcSection';
import { SavingsSoFarAddBatterySection } from './sections/SavingsSoFarAddBatterySection';

export const SavingsSoFarCalcPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Helmet>
        <title>Historical Solar Savings Audit Tool | Sunny Solar</title>
        <meta
          name="description"
          content="Audit how much money your existing solar array has generated to date and detect any performance drop-off."
        />
      </Helmet>
      {/* Section 1: Page Header & Hero */}
      <SavingsSoFarHeroSection />

      {/* Section 2: Historical Solar Savings & Generation Audit */}
      <SavingsSoFarCalcSection />

      {/* Section 3: Add Battery to Existing Solar (Small Container, Image, Non-Box Design) */}
      <SavingsSoFarAddBatterySection />


    </div>
  );
};

export default SavingsSoFarCalcPage;

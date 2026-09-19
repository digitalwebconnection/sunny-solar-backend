import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BatterySavingsHeroSection } from './sections/BatterySavingsHeroSection';
import { BatterySavingsCalcSection } from './sections/BatterySavingsCalcSection';
import { BatterySavingsSolarSynergySection } from './sections/BatterySavingsSolarSynergySection';

export const BatterySavingsCalcPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Helmet>
        <title>Battery Savings & Peak Tariff Calculator | Sunny Solar</title>
        <meta
          name="description"
          content="Estimate additional savings by storing daytime solar energy and avoiding peak grid tariff rates in South East Queensland."
        />
      </Helmet>
      {/* Section 1: Page Header & Hero */}
      <BatterySavingsHeroSection />

      {/* Section 2: Interactive Peak Elimination Calculator */}
      <BatterySavingsCalcSection />

      {/* Section 3: Add Battery with Solar Synergy (Small Container, Image, Non-Box Design) */}
      <BatterySavingsSolarSynergySection />

    </div>
  );
};

export default BatterySavingsCalcPage;

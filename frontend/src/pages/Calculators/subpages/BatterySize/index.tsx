import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BatterySizeHeroSection } from './sections/BatterySizeHeroSection';
import { BatterySizeCalcSection } from './sections/BatterySizeCalcSection';
import { BatterySizeSolarPairingSection } from './sections/BatterySizeSolarPairingSection';

export const BatterySizeCalcPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Helmet>
        <title>Battery Size & Capacity Calculator | Sunny Solar</title>
        <meta
          name="description"
          content="Find the ideal usable kWh storage capacity to cover your evening electricity usage and provide outage backup."
        />
      </Helmet>
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

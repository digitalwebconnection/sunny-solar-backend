import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SolarUpgradesHeroSection } from './sections/SolarUpgradesHeroSection';
import { SolarUpgradesOptionsSection } from './sections/SolarUpgradesOptionsSection';
import { SolarUpgradesProcessSection } from './sections/SolarUpgradesProcessSection';

export const SolarUpgradesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>Solar System Upgrades & Capacity Expansion | Sunny Solar</title>
        <meta
          name="description"
          content="Upgrade your existing solar array with high-efficiency panels, modern hybrid inverters, and switchboard optimization."
        />
      </Helmet>
      {/* 1. Hero with Real Photography, Breadcrumbs & Output Multipliers */}
      <SolarUpgradesHeroSection />

      {/* 2. Interactive Engineering Pathways (Inverter Swap, Expansion, Full Repowering) */}
      <SolarUpgradesOptionsSection />

      {/* 3. The 4-Stage Modernization Journey & Certified E-Waste Recycling */}
      <SolarUpgradesProcessSection />
    </div>
  );
};

export default SolarUpgradesPage;

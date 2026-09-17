import React from 'react';
import { SolarUpgradesHeroSection } from './sections/SolarUpgradesHeroSection';
import { SolarUpgradesOptionsSection } from './sections/SolarUpgradesOptionsSection';
import { SolarUpgradesProcessSection } from './sections/SolarUpgradesProcessSection';

export const SolarUpgradesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
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

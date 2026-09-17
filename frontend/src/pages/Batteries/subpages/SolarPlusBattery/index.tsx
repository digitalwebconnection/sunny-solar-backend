import React from 'react';
import { SolarPlusBatteryHeroSection } from './sections/SolarPlusBatteryHeroSection';
import { SolarPlusBatterySavingsSliderSection } from './sections/SolarPlusBatterySavingsSliderSection';
import { SolarPlusBatteryPackagesSection } from './sections/SolarPlusBatteryPackagesSection';
import { SolarPlusBatteryAdvantagesSection } from './sections/SolarPlusBatteryAdvantagesSection';

export const SolarPlusBatteryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* 1. Page Header */}
      <SolarPlusBatteryHeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-10 sm:space-y-14">
        {/* 2. How Bundling Works (24-Hour Clean Energy Cycle) */}
        <SolarPlusBatterySavingsSliderSection />

        {/* 3. Turnkey Packages Grid */}
        <SolarPlusBatteryPackagesSection />

        {/* 4. Why Bundle Savings Engineering Callout */}
        <SolarPlusBatteryAdvantagesSection />

      </div>
    </div>
  );
};

export default SolarPlusBatteryPage;

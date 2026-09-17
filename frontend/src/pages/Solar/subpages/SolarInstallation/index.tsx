import React from 'react';
import { SolarInstallationHeroSection } from './sections/SolarInstallationHeroSection';
import { SolarInstallationTimelineSection } from './sections/SolarInstallationTimelineSection';
import { SolarInstallationStandardsSection } from './sections/SolarInstallationStandardsSection';

export const SolarInstallationPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero with Authentic Rooftop Photography, Breadcrumbs & Guarantees */}
      <SolarInstallationHeroSection />

      {/* 2. Interactive Single-Day Installation Timeline (07:00 AM - 03:45 PM) */}
      <SolarInstallationTimelineSection />

      {/* 3. Trade Standards Comparison & 42-Point Commissioning Safety Audit */}
      <SolarInstallationStandardsSection />
    </div>
  );
};

export default SolarInstallationPage;

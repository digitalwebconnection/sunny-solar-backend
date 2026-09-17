import React from 'react';
import { SolarSystemsHeroSection } from './sections/SolarSystemsHeroSection';
import { SolarPackagesGridSection } from './sections/SolarPackagesGridSection';
import { SolarHardwareComparisonSection } from './sections/SolarHardwareComparisonSection';
import { SolarSystemsFAQSection } from './sections/SolarSystemsFAQSection';

export const SolarSystemsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SolarSystemsHeroSection />
      <SolarPackagesGridSection />
      <SolarHardwareComparisonSection />
      <SolarSystemsFAQSection />
    </div>
  );
};

export default SolarSystemsPage;

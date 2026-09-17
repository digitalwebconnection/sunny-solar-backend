import React from 'react';
import { SolarLandingHeroSection } from './sections/landing/SolarLandingHeroSection';
import { SolarLandingBenefitsSection } from './sections/landing/SolarLandingBenefitsSection';
import { SolarLandingPackagesSection } from './sections/landing/SolarLandingPackagesSection';
import { SolarLandingProcessSection } from './sections/landing/SolarLandingProcessSection';

export const SolarLandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SolarLandingHeroSection />
      <SolarLandingBenefitsSection />
      <SolarLandingPackagesSection />
      <SolarLandingProcessSection />
    </div>
  );
};

export default SolarLandingPage;

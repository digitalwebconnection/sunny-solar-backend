import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SolarSystemsHeroSection } from './sections/SolarSystemsHeroSection';
// import { SolarPackagesGridSection } from './sections/SolarPackagesGridSection';
import { SolarHardwareComparisonSection } from './sections/SolarHardwareComparisonSection';
import { SolarSystemsFAQSection } from './sections/SolarSystemsFAQSection';
import { SolarLandingPackagesSection } from '../../sections/landing/SolarLandingPackagesSection';

export const SolarSystemsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Complete Solar Packages (6.6kW to 13.2kW) | Sunny Solar</title>
        <meta
          name="description"
          content="Explore our premium 6.6kW, 9.9kW, and 13.2kW residential solar packages with Tier-1 N-Type TOPCon panels and high-efficiency inverters."
        />
      </Helmet>
      <SolarSystemsHeroSection />
       <SolarLandingPackagesSection />
      {/* <SolarPackagesGridSection /> */}
      <SolarHardwareComparisonSection />
      <SolarSystemsFAQSection />
    </div>
  );
};

export default SolarSystemsPage;

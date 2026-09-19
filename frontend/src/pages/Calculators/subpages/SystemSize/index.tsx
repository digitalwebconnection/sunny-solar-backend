import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SystemSizeHeroSection } from './sections/SystemSizeHeroSection';
import { SystemSizeCalcSection } from './sections/SystemSizeCalcSection';
import { SystemSizeAddBatterySection } from './sections/SystemSizeAddBatterySection';

export const SystemSizeCalcPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Helmet>
        <title>Solar System Size Calculator | Sunny Solar</title>
        <meta
          name="description"
          content="Determine the ideal solar panel kW capacity and rooftop layout for your household energy consumption."
        />
      </Helmet>
      {/* Section 1: Page Header & Hero */}
      <SystemSizeHeroSection />

      {/* Section 2: Interactive Array Sizing Engine */}
      <SystemSizeCalcSection />

      {/* Section 3: Add Battery with Solar Headroom Sizing (Small Container, Image, Non-Box Design) */}
      <SystemSizeAddBatterySection />


    </div>
  );
};

export default SystemSizeCalcPage;

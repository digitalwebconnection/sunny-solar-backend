import React from 'react';
import { SystemSizeHeroSection } from './sections/SystemSizeHeroSection';
import { SystemSizeCalcSection } from './sections/SystemSizeCalcSection';
import { SystemSizeAddBatterySection } from './sections/SystemSizeAddBatterySection';

export const SystemSizeCalcPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
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

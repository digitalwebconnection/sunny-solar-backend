import React from 'react';
import { IsSolarRightHeroSection } from './sections/IsSolarRightHeroSection';
import { IsSolarRightQuizSection } from './sections/IsSolarRightQuizSection';
import { IsSolarRightBatteryReadySection } from './sections/IsSolarRightBatteryReadySection';

export const IsSolarRightCalcPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Section 1: Page Header & Hero */}
      <IsSolarRightHeroSection />

      {/* Section 2: 4-Step Interactive Feasibility Quiz */}
      <IsSolarRightQuizSection />

      {/* Section 3: Add Battery with Solar Readiness (Small Container, Image, Non-Box Design) */}
      <IsSolarRightBatteryReadySection />


    </div>
  );
};

export default IsSolarRightCalcPage;

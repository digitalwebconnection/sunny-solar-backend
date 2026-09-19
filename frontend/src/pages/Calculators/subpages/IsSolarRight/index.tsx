import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IsSolarRightHeroSection } from './sections/IsSolarRightHeroSection';
import { IsSolarRightQuizSection } from './sections/IsSolarRightQuizSection';
import { IsSolarRightBatteryReadySection } from './sections/IsSolarRightBatteryReadySection';

export const IsSolarRightCalcPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Helmet>
        <title>Solar Feasibility Quiz - Is Solar Right For You? | Sunny Solar</title>
        <meta
          name="description"
          content="Take our 60-second interactive solar feasibility quiz to check roof suitability, shading, and estimated financial return."
        />
      </Helmet>
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

import React from 'react';
import { PageHeader } from '../../../../../components/layout/PageHeader';

export const BatteryDecisionGuideHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="Technical Report • 2025 Edition"
      title="The 2025 Home Battery"
      highlightText="Decision & Comparison Guide"
      description="An independent engineering breakdown comparing Tesla Powerwall 3, Sungrow, Enphase, and AlphaESS on capacity, usable kWh, cycle life, warranty degradation, and real ROI economics."
    />
  );
};

export default BatteryDecisionGuideHeroSection;

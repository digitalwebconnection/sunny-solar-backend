import React from 'react';
import { PageHeader } from '../../../../../components/layout/PageHeader';

export const QuoteComparisonHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="Proposal Auditor"
      title="Independent Solar"
      highlightText="Quote Comparison Tool"
      description="Benchmark competitor proposals on price-per-watt, inverter engineering, and warranty terms to ensure you don't get trapped by high-pressure sales outfits."
    />
  );
};

export default QuoteComparisonHeroSection;

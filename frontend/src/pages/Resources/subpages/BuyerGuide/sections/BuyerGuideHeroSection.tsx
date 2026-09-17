import React from 'react';
import { PageHeader } from '../../../../../components/layout/PageHeader';

export const BuyerGuideHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="Comprehensive E-Book • 38 Pages"
      title="The Australian Homeowner's"
      highlightText="Complete Solar & Battery Guide"
      description="A jargon-free technical roadmap from initial assessment to 25 years of guaranteed energy independence. Top manufacturer benchmarks, STC federal rebates, and real case studies."
    />
  );
};

export default BuyerGuideHeroSection;

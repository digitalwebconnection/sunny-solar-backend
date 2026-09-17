import React from 'react';
import { PageHeader } from '../../../../../components/layout/PageHeader';

export const IsSolarRightHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="60-Second Quiz"
      title="Is Solar Right for"
      highlightText="Your Property?"
      description="Not every roof is suited to solar. Answer 4 quick questions to see if your roof orientation, shading, and electricity tariff make solar a sound investment."
    />
  );
};

export default IsSolarRightHeroSection;

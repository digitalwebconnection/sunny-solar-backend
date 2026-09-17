import React from 'react';
import { PageHeader } from '../../../../../components/layout/PageHeader';

export const SystemSizeHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="Sizing Engine"
      title="Solar System Size"
      highlightText="Recommender"
      description="Calculate the exact solar panel capacity required to power your family's appliances and prevent under-sizing regret."
    />
  );
};

export default SystemSizeHeroSection;

import React from 'react';
import { PageHeader } from '../../../../../components/layout/PageHeader';

export const SolarSavingsHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="Savings Estimator"
      title="Solar Electricity Bill"
      highlightText="Savings Calculator"
      description="Find out how much you can slash from your quarterly electricity bill by generating your own clean power from the sun."
    />
  );
};

export default SolarSavingsHeroSection;

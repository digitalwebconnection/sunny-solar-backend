import React from 'react';
import { PageHeader } from '../../../../../components/layout/PageHeader';

export const BatterySavingsHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="Storage ROI"
      title="Home Battery"
      highlightText="Savings Calculator"
      description="Calculate how much money you save by capturing cheap daytime solar and discharging it during expensive 4pm-9pm evening peak tariff hours."
    />
  );
};

export default BatterySavingsHeroSection;

import React from 'react';
import { PageHeader } from '../../../../../components/layout/PageHeader';

export const BatterySizeHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="Capacity Matcher"
      title="Home Battery Sizing"
      highlightText="Calculator"
      description="Don't buy an undersized battery that dies at 8 PM, or overpay for capacity you won't use. Sized specifically to your evening appliances."
    />
  );
};

export default BatterySizeHeroSection;

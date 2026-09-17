import React from 'react';
import { PageHeader } from '../../../../../components/layout/PageHeader';

export const PaybackHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="ROI Analysis"
      title="Solar Investment"
      highlightText="Payback Calculator"
      description="See how fast a modern residential solar installation pays for itself in avoided utility bills and government rebates."
    />
  );
};

export default PaybackHeroSection;

import React from 'react';
import { PageHeader } from '../../../../../components/layout/PageHeader';

export const ElectricityBillReviewHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="Free Analysis • Personalized"
      title="Free Electricity Bill &"
      highlightText="Tariff Analysis"
      description="Upload your latest electricity bill. Our system uncovers hidden peak tariff traps and calculates the exact solar and battery capacity required to wipe out up to 85%+ of your grid charges."
    />
  );
};

export default ElectricityBillReviewHeroSection;

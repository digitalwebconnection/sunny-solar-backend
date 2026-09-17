import React from 'react';
import { PageHeader } from '../../../../../components/layout/PageHeader';

export const BuyingChecklistHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="Essential • 2025 Edition"
      title="The Ultimate Solar"
      highlightText="Buying Checklist"
      description="15 critical questions every Australian homeowner must ask before signing any solar contract. Avoid telemarketers, sub-contracted crews, and cheap orphaned hardware."
    />
  );
};

export default BuyingChecklistHeroSection;

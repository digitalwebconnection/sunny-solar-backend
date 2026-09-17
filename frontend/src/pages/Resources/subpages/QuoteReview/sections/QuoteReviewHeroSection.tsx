import React from 'react';
import { PageHeader } from '../../../../../components/layout/PageHeader';

export const QuoteReviewHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="Free Audit • Zero Obligation"
      title="Free Independent Solar"
      highlightText="Quote Review"
      description="Already received a quote from another provider? Have our CEC-accredited solar engineers audit the hardware choices, string design, line-item pricing, and warranty clauses before you sign."
    />
  );
};

export default QuoteReviewHeroSection;

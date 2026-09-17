import React from 'react';
import { PageHeader } from '../../../../../components/layout/PageHeader';

export const SavingsSoFarHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="Historical Audit"
      title="How Much Have You Saved"
      highlightText="With Solar So Far?"
      description="Audit your existing solar system generation against historical utility tariffs to verify your lifetime return on investment."
    />
  );
};

export default SavingsSoFarHeroSection;

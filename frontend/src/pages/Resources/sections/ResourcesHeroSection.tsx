import React from 'react';
import { PageHeader } from '../../../components/layout/PageHeader';

export const ResourcesHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="Consumer Protection & Education"
      title="Free Solar & Battery"
      highlightText="Buyer Guides & Audits"
      description="Arm yourself with facts, verified checklists, and vendor-neutral guidance before signing any contract. Download our free homeowner guides or request an independent quote audit."
    />
  );
};

export default ResourcesHeroSection;

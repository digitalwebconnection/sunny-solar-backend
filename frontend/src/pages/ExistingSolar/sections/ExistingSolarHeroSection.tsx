import React from 'react';
import { ArrowRight, Calculator } from 'lucide-react';
import { PageHeader } from '../../../components/layout/PageHeader';
import { Button } from '../../../components/ui/Button';

export const ExistingSolarHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="System Optimization & Health"
      badgeVariant="amber"
      title="Already Have Solar?"
      highlightText="Maximize Your Investment"
      description="Whether you want to verify your system is operating safely, audit your true lifetime returns, expand panel capacity, or add an AC-coupled battery retrofit, our Master Electricians are here to help."
      actions={
        <>
          <Button
            to="/existing-solar/health-check"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Book 24-Point Health Check
          </Button>
          <Button
            to="/existing-solar/savings"
            variant="outline"
            size="md"
            icon={<Calculator className="w-4 h-4" />}
          >
            Calculate Lifetime ROI
          </Button>
        </>
      }
    />
  );
};

export default ExistingSolarHeroSection;

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '../../../../../components/layout/PageHeader';
import { Button } from '../../../../../components/ui/Button';

export const SolarBatteriesHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="Hardware Directory & Retrofits"
      badgeVariant="emerald"
      title="Residential Solar Batteries &"
      highlightText="Retrofit Solutions"
      description="Compare Australia's leading Tier-1 home energy storage systems. Engineered with cobalt-free lithium iron phosphate (LiFePO4) chemistry and installed strictly by full-time Master Electricians."
      actions={
        <>
          <Button
            to="/get-started/free-assessment"
            variant="accent-green"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Get Free Battery Proposal
          </Button>
          <Button
            to="/calculators/battery-size"
            variant="outline"
            size="md"
          >
            Calculate Battery Sizing
          </Button>
        </>
      }
    />
  );
};

export default SolarBatteriesHeroSection;

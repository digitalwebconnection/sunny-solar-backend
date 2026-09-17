import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '../../../../../components/layout/PageHeader';
import { Button } from '../../../../../components/ui/Button';

export const SolarPlusBatteryHeroSection: React.FC = () => {
  return (
    <PageHeader
      badge="Matched Bundled Packages"
      badgeVariant="amber"
      title="Integrated Solar +"
      highlightText="Battery Bundles"
      description="Save up to $2,200 on installation costs by bundling rooftop solar with home battery storage together. Matched hybrid architectures, single-app management, and maximum STC & state rebates."
      actions={
        <>
          <Button
            to="/get-started/free-assessment"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Get Free Bundle Proposal
          </Button>
          <Button
            to="/calculators/solar-savings"
            variant="outline"
            size="md"
          >
            Calculate Solar ROI
          </Button>
        </>
      }
    />
  );
};

export default SolarPlusBatteryHeroSection;

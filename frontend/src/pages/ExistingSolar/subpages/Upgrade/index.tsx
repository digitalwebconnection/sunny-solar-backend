import React from 'react';
import { Helmet } from 'react-helmet-async';
import { UpgradeHeroSection } from './sections/UpgradeHeroSection';
import { UpgradePathwaysSection } from './sections/UpgradePathwaysSection';
import { UpgradeComparisonSection } from './sections/UpgradeComparisonSection';
import { UpgradeEligibilitySection } from './sections/UpgradeEligibilitySection';

export const UpgradePage: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 space-y-16 sm:space-y-14">
      <Helmet>
        <title>Existing Solar System Upgrades & Panel Expansion | Sunny Solar</title>
        <meta
          name="description"
          content="Modernize your legacy solar system with panel additions, hybrid inverters, and switchboard safety upgrades across QLD."
        />
      </Helmet>
      {/* Section 1: Capacity Expansion Hero & Quick-Spec Showcase */}
      <UpgradeHeroSection />

      {/* Section 2: Three Strategic Upgrade Pathways (Dynamic Stepped Layout) */}
      <UpgradePathwaysSection />

      {/* Section 3: Technical Evolution: Legacy vs. Modernized Solar & Switchboard Safety */}
      <UpgradeComparisonSection />

      {/* Section 4: Engineering Eligibility Matrix & Action Steps */}
      <UpgradeEligibilitySection />
    </div>
  );
};

export default UpgradePage;

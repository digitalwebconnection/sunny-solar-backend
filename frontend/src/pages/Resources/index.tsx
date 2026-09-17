import React from 'react';
import { ResourcesHeroSection } from './sections/ResourcesHeroSection';
import { ResourcesGridSection } from './sections/ResourcesGridSection';
import { ResourcesAddBatterySection } from './sections/ResourcesAddBatterySection';
import { ResourcesCTASection } from './sections/ResourcesCTASection';

export const ResourcesLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Section 1: Hero Section */}
      <ResourcesHeroSection />

      {/* Section 2: Recreated Resources Grid */}
      <ResourcesGridSection />

      {/* Section 3: Add Battery with Solar Showcase (No Calculator, Organic Photography & Highlights) */}
      <ResourcesAddBatterySection />

      {/* Section 4: Engineering Audit CTA & Guarantees */}
      <ResourcesCTASection />
    </div>
  );
};

export default ResourcesLandingPage;

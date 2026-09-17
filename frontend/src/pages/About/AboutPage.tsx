import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { CollaborationSection } from './sections/CollaborationSection';
import { StorySection } from './sections/StorySection';
import { ValuesSection } from './sections/ValuesSection';
import { CTASection } from './sections/CTASection';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <SolutionsSection />
      <CollaborationSection />
      <StorySection />
      <ValuesSection />
      <CTASection />
    </div>
  );
};

export default AboutPage;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from './sections/HeroSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { CollaborationSection } from './sections/CollaborationSection';
import { StorySection } from './sections/StorySection';
import { ValuesSection } from './sections/ValuesSection';
import { CTASection } from './sections/CTASection';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>About Us - Master Electrician Solar Installers | Sunny Solar</title>
        <meta
          name="description"
          content="Learn about Sunny Solar's commitment to electrical engineering excellence, transparent advice, and 20+ years of Australian solar experience."
        />
      </Helmet>
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

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ProjectsHeroSection } from './sections/ProjectsHeroSection';
import { ProjectsGridSection } from './sections/ProjectsGridSection';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Completed Solar & Battery Installations | Sunny Solar</title>
        <meta
          name="description"
          content="View real residential solar and battery installations across Gold Coast, Brisbane, and Sunshine Coast with verified specs and photos."
        />
      </Helmet>
      <ProjectsHeroSection />
      <ProjectsGridSection />
    </div>
  );
};

export default ProjectsPage;

import React from 'react';
import { ProjectsHeroSection } from './sections/ProjectsHeroSection';
import { ProjectsGridSection } from './sections/ProjectsGridSection';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ProjectsHeroSection />
      <ProjectsGridSection />
    </div>
  );
};

export default ProjectsPage;

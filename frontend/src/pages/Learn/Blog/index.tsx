import React from 'react';
import { BlogHeroSection } from './sections/BlogHeroSection';
import { BlogFeaturedSection } from './sections/BlogFeaturedSection';
import { BlogGridSection } from './sections/BlogGridSection';

export const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      {/* 1. News & Market Analysis Hero */}
      <BlogHeroSection />

      {/* 2. Top Featured Editorial Story */}
      <BlogFeaturedSection />

      {/* 3. Filterable Article Grid */}
      <BlogGridSection />
    </div>
  );
};

export default BlogPage;

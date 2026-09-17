import React from 'react';
import { PageHeader } from '../../../../components/layout/PageHeader';
import { TrendingUp, Newspaper, Sparkles, BatteryCharging } from 'lucide-react';

export const BlogHeroSection: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="News & Market Analysis"
        title="The Sunny Solar"
        highlightText="Blog & Insights"
        description="Stay updated with Australian energy policy shifts, falling battery prices, grid feed-in trends, and verified local homeowner case studies."
      />

  
    </div>
  );
};

export default BlogHeroSection;

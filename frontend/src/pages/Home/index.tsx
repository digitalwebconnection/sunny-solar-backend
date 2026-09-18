import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { TrustMarqueeSection } from './sections/TrustMarqueeSection';
import { ServicesOverviewSection } from './sections/ServicesOverviewSection';
import { FeaturedProjectsSection } from './sections/FeaturedProjectsSection';
import { ApprovedBrandsSection } from './sections/ApprovedBrandsSection';
import { TrustBarSection } from './sections/TrustBarSection';
import { PreferSunnySolarSection } from './sections/PreferSunnySolarSection';
import { CalculatorsTeaserSection } from './sections/CalculatorsTeaserSection';
import { ParallaxBannerSection } from './sections/ParallaxBannerSection';
import { ServiceAreasTeaserSection } from './sections/ServiceAreasTeaserSection';
import { TestimonialsSliderSection } from './sections/TestimonialsSliderSection';
import { FAQSection } from './sections/FAQSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1 */}
      <HeroSection />
      {/* 2 */}
      <TrustMarqueeSection />
      {/* 3 */}
      <ServicesOverviewSection />
      {/* 4 */}
      <CalculatorsTeaserSection />
      {/* 5 */}
      <FeaturedProjectsSection />
      {/* 6 */}
      <ApprovedBrandsSection />
      {/* 7 */}
      <ParallaxBannerSection />
      {/* 8 */}
      <TrustBarSection />
      {/* Authority Awards Badges (After Section 8) */}
      <PreferSunnySolarSection />
      {/* 9 */}
      <ServiceAreasTeaserSection />
      {/* 10 */}
      <TestimonialsSliderSection />
      {/* 11 */}
      <FAQSection />
    </div>
  );
};

export default HomePage;

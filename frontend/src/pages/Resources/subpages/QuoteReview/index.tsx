import React from 'react';
import { Helmet } from 'react-helmet-async';
import { QuoteReviewHeroSection } from './sections/QuoteReviewHeroSection';
import { QuoteReviewMainSection } from './sections/QuoteReviewMainSection';
import { QuoteReviewBatterySection } from './sections/QuoteReviewBatterySection';
import { QuoteReviewCTASection } from './sections/QuoteReviewCTASection';

export const QuoteReviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Helmet>
        <title>Free Second Opinion Solar Quote Review | Sunny Solar</title>
        <meta
          name="description"
          content="Get an independent technical review of any competitor solar quote from our licensed Master Electricians. No pressure, no obligations."
        />
      </Helmet>
      {/* Section 1: Page Header & Hero */}
      <QuoteReviewHeroSection />

      {/* Section 2: Recreated Quote Audit Submission & Inspection Breakdown */}
      <QuoteReviewMainSection />

      {/* Section 3: Add Battery with Solar Quote Traps (No Calculator, Real Imagery, Non-Box) */}
      <QuoteReviewBatterySection />


    </div>
  );
};

export default QuoteReviewPage;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { QuoteComparisonHeroSection } from './sections/QuoteComparisonHeroSection';
import { QuoteComparisonCalcSection } from './sections/QuoteComparisonCalcSection';
import { QuoteComparisonAddBatterySection } from './sections/QuoteComparisonAddBatterySection';

export const QuoteComparisonCalcPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Helmet>
        <title>Solar Quote Comparison Tool | Sunny Solar</title>
        <meta
          name="description"
          content="Compare solar quotes side-by-side on tier quality, warranties, inverter specifications, and price per watt."
        />
      </Helmet>
      {/* Section 1: Page Header & Hero */}
      <QuoteComparisonHeroSection />

      {/* Section 2: Interactive Quote Benchmark Tool */}
      <QuoteComparisonCalcSection />

      {/* Section 3: Add Battery with Solar Quote Checks (Small Container, Image, Non-Box Design) */}
      <QuoteComparisonAddBatterySection />

    </div>
  );
};

export default QuoteComparisonCalcPage;

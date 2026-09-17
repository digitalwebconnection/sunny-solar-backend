import React from 'react';
import {
  FreeAssessmentHeroSection,
  FreeAssessmentFormSection,
  FreeAssessmentFaqSection,
} from './sections';

export const FreeAssessmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* 1. Hero / Header Section */}
      <FreeAssessmentHeroSection />

      {/* 2. Main Contact Channels + Interactive Assessment Form */}
      <FreeAssessmentFormSection />

      {/* 3. Quick FAQ Accordion */}
      <FreeAssessmentFaqSection />
    </div>
  );
};

export default FreeAssessmentPage;

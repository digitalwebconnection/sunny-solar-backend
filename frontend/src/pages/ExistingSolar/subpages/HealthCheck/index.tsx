import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HealthCheckHeroSection } from './sections/HealthCheckHeroSection';
import { HealthCheckAuditGridSection } from './sections/HealthCheckAuditGridSection';
import { HealthCheckReportCTASection } from './sections/HealthCheckReportCTASection';

export const HealthCheckPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Helmet>
        <title>Comprehensive 24-Point Solar Health Check & Audit | Sunny Solar</title>
        <meta
          name="description"
          content="Book an on-site master electrician inspection, thermal imaging scan, and electrical safety audit for your existing solar installation."
        />
      </Helmet>
      {/* 1. Page Header & Trust Overview */}
      <HealthCheckHeroSection />

      <div className="mt-12 sm:mt-16 space-y-16 sm:space-y-20">
        {/* 2. 24-Point Health & Safety Audit Grid with Silent Failure Advisory */}
        <HealthCheckAuditGridSection />

        {/* 3. Written Audit Report Deliverables & $189 Booking Offer */}
        <HealthCheckReportCTASection />
      </div>
    </div>
  );
};

export default HealthCheckPage;

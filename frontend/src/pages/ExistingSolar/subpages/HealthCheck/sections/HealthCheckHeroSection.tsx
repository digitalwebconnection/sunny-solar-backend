import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Zap, Camera, FileCheck } from 'lucide-react';
import { PageHeader } from '../../../../../components/layout/PageHeader';
import { Button } from '../../../../../components/ui/Button';

export const HealthCheckHeroSection: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="Safety & Performance Audit"
        badgeVariant="amber"
        title="Comprehensive 24-Point"
        highlightText="Solar Health Check"
        description="Over 38% of rooftop solar systems older than 5 years suffer from undetected performance drops, water ingress, or dangerous DC isolator degradation. Our Master Electricians inspect, calibrate, and certify your setup."
        actions={
          <>
            <Button
              to="/get-started/free-assessment"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book Health Check ($189 Special)
            </Button>
            <Button
              href="tel:1300786697"
              variant="outline"
              size="md"
              icon={<Phone className="w-4 h-4" />}
            >
              Call 1300 SUNNY (786 697)
            </Button>
          </>
        }
      />

      {/* Streamlined Full-Width Trust Banner (No bulky floating boxes) */}
      <div className="border-b border-slate-200/80 bg-white py-3.5 sm:py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-slate-800">
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="font-semibold">$189 Flat Fee Special</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold">Master Electrician Inspected</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800">
              <Camera className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="font-semibold">Infrared Thermal Imaging</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800">
              <FileCheck className="w-4 h-4 text-purple-600 shrink-0" />
              <span className="font-semibold">Official Safety Certificate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCheckHeroSection;

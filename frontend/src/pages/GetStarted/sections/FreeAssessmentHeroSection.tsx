import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const FreeAssessmentHeroSection: React.FC = () => {
  return (
    <section className="relative bg-linear-to-b from-amber-500/10 via-amber-500/5 to-white pt-24 pb-14 border-b border-slate-200/80 overflow-hidden">
      {/* Subtle ambient solar blue glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1d4ed8] bg-blue-50 border border-blue-200/90 shadow-2xs mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1d4ed8]" />
            <span>100% Free Consultation • Zero Sales Pressure</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
            Get Your Free Solar Assessment{' '} <br />
            <span className="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              & Engineering Quote
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-900 leading-relaxed">
            Honest energy advice, high-resolution 3D roof analysis, and guaranteed fixed pricing. Speak directly with licensed solar electricians with zero sales pressure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeAssessmentHeroSection;

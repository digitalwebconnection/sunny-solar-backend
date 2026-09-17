import React from 'react';
import { ArrowRight, Stethoscope } from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';

export const SolarUpgradesHeroSection: React.FC = () => {
  return (
    <section className="relative bg-white text-slate-900 pt-14 pb-16 lg:pb-24 border-b border-slate-200/80 overflow-hidden">
      {/* Subtle atmospheric solar radiance */}
      <div className="absolute -top-32 right-1/4 w-150 h-87.5 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-28 w-112.5 h-75 bg-emerald-400/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle engineering blueprint dot grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <Breadcrumbs />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1d4ed8] bg-blue-50 border border-blue-200/90 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-pulse" />
              <span>Modernize Aging Solar Systems</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-[1.12]">
              Upgrade & Re-Power Your{' '}
              <span className="bg-linear-to-r from-amber-500 via-amber-600 to-orange-500 bg-clip-text text-transparent">
                Existing Solar Setup
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Has your household outgrown your original solar system? We replace failing inverters, expand capacity for electric vehicles and ducted air conditioning, and replace aging 1.5kW–3kW arrays with modern high-density technology—generating up to 400% more clean energy from your roof.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                to="/existing-solar/health-check"
                variant="primary"
                size="lg"
                icon={<Stethoscope className="w-5 h-5" />}
              >
                Book Solar Health Check ($189)
              </Button>
              <Button
                to="/get-started/free-assessment"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Request Upgrade Assessment
              </Button>
            </div>
          </div>

          {/* Right Column: High-Resolution Authentic Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-100 aspect-4/3 group">
                <img
                  src="/images/about/gallery/electrician-mounting-inverter.jpg"
                  alt="Sunny Solar Master Electrician upgrading a solar inverter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Precision Upgrade
                  </span>
                  <div className="text-sm font-semibold mt-0.5">
                    Fronius & Sungrow Active-Cooled Hybrid Replacements
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarUpgradesHeroSection;

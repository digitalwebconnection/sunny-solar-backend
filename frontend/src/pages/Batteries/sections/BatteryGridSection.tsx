import React from 'react';
import { ArrowRight, Check, BatteryCharging, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';

export const BatteryGridSection: React.FC = () => {
  const subpages = [
    {
      title: 'Solar Batteries',
      slug: '/batteries/solar-batteries',
      icon: BatteryCharging,
      badge: 'Standalone & Retrofit',
      badgeVariant: 'emerald' as const,
      tagline: 'Retrofit to any existing solar inverter or choose premium standalone storage',
      description: 'Compare top Tier-1 battery hardware: Tesla Powerwall 3, Sungrow SBR, Enphase IQ 5P, and AlphaESS on usable capacity, cycle life, warranty, and thermal safety.',
      bullets: [
        'AC-coupled retrofit connects to any existing solar inverter brand',
        'Modular capacities scaling from 5.0 kWh to 25.6 kWh+',
        'Cobalt-free LiFePO4 (LFP) chemistries with extreme fire safety',
        '10 to 15-year full manufacturer replacement warranties',
        'Compatible with existing single-phase and 3-phase switchboards',
      ],
      cta: 'Explore Solar Batteries',
      image: '/images/solutions/battery-hero.jpg',
    },
    {
      title: 'Solar + Battery Bundles',
      slug: '/batteries/solar-plus-battery',
      icon: Zap,
      badge: 'Most Popular & Best ROI',
      badgeVariant: 'amber' as const,
      tagline: 'All-in-one engineered solar array + hybrid storage for maximum savings',
      description: 'Installing solar panels and home battery storage simultaneously cuts installation labor costs by up to $2,200 while maximizing DC-to-DC conversion efficiency.',
      bullets: [
        'Save up to $2,200 on bundled installation and switchboard upgrades',
        'Single high-efficiency European hybrid inverter powers both panels & battery',
        'Up to 97.5% DC roundtrip efficiency with zero clipping',
        'Combined Federal STC + QLD Battery Booster rebates applied upfront',
        'Unified single-app dashboard for real-time smartphone telemetry',
      ],
      cta: 'View Solar + Battery Packages',
      isFeatured: true,
      image: '/images/solutions/battery-bundle.jpg',
    },
    {
      title: 'Battery Backup & EPS',
      slug: '/batteries/battery-backup',
      icon: ShieldCheck,
      badge: 'Storm & Disaster Resilience',
      badgeVariant: 'navy' as const,
      tagline: 'Sub-100ms whole-home emergency power supply & BOM storm tracking',
      description: 'Severe Queensland summer storms regularly sever power transmission lines. Our automated Emergency Power Supply keeps your home running smoothly with zero downtime.',
      bullets: [
        'Sub-100 millisecond automatic grid isolation (computers & clocks never reboot)',
        'Option for Whole-Home Backup or protected Essential-Circuit sub-board',
        'BOM Weather Watch automatically pre-charges battery before severe storms hit',
        'Black-start capability: solar continues refilling battery during multi-day outages',
        'Full compliance with Australian Standards AS/NZS 3000 & AS/NZS 5139',
      ],
      cta: 'Explore Backup Solutions',
      image: '/images/solutions/battery-storm.jpg',
    },
  ];

  return (
    <section className="py-14 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
       
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-3 tracking-tight">
            Our Battery Energy Storage Solutions
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Whether you want to add storage to an existing solar setup, install a complete matched solar + battery bundle, or blackout-proof your home against Queensland storms, we have engineered solutions.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {subpages.map((sub, idx) => {
            const Icon = sub.icon;
            return (
              <div
                key={idx}
                className={`rounded-xl p-8 transition-all duration-300 flex flex-col justify-between relative ${
                  sub.isFeatured
                    ? 'bg-slate-950 text-white shadow-2xl border-2 border-amber-500 scale-100 lg:-translate-y-4'
                    : 'bg-white text-slate-900 border border-slate-300/80 shadow-sm shadow-black/50 hover:shadow-xl hover:border-emerald-400'
                }`}
              >
                {sub.isFeatured && (
                  <div className="absolute w-60 -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md inline-flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                      Highest Savings Option
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      sub.isFeatured
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-400/30'
                        : 'bg-emerald-500/10 text-emerald-600 border border-emerald-300/40'
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <Badge variant={sub.badgeVariant} size="sm">
                      {sub.badge}
                    </Badge>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className={`text-2xl font-bold tracking-tight mb-2 ${
                    sub.isFeatured ? 'text-white' : 'text-slate-950'
                  }`}>
                    {sub.title}
                  </h3>
                  <p className={`text-xs font-semibold mb-4 ${
                    sub.isFeatured ? 'text-amber-400' : 'text-emerald-700'
                  }`}>
                    {sub.tagline}
                  </p>

                  <p className={`text-sm leading-relaxed mb-6 ${
                    sub.isFeatured ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {sub.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className={`space-y-3 pb-6 border-b ${
                    sub.isFeatured ? 'border-slate-800' : 'border-slate-100'
                  }`}>
                    {sub.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                          sub.isFeatured ? 'text-amber-400' : 'text-emerald-600'
                        }`} />
                        <span className={sub.isFeatured ? 'text-slate-200' : 'text-slate-700'}>
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8">
                  <Button
                    to={sub.slug}
                    variant={sub.isFeatured ? 'primary' : 'outline'}
                    size="md"
                    fullWidth
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {sub.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BatteryGridSection;

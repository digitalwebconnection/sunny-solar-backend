import React from 'react';
import { Check, ArrowRight, Sparkles, Sun, Shield, BatteryCharging } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '../../../../components/ui/Badge';
import { Button } from '../../../../components/ui/Button';

export const SolarLandingPackagesSection: React.FC = () => {
  const packages = [
    {
      name: 'Essential Home 6.6kW',
      tagline: 'Ideal for 2-3 bedroom homes with moderate daytime usage',
      capacity: '6.6 kW DC',
      panels: '15x 440W Tier-1 N-Type TOPCon Panels',
      inverter: '5.0kW European Fronius Primo or Sungrow Inverter',
      dailyYield: '24 - 28 kWh / day',
      typicalSavings: '$1,800 - $2,400 / yr',
      stcDiscount: 'Up to $2,400 STC Rebate Deducted',
      popular: false,
      features: [
        'High-density N-Type bifacial dual-glass cells',
        '25-year panel product & performance warranty',
        'Smart consumption monitoring meter included',
        'Direct roof waterproofing leak guarantee',
        'Battery-upgrade ready hybrid architecture',
      ],
    },
    {
      name: 'Family High-Yield 10.0kW',
      tagline: 'Our #1 best seller for ducted A/C, swimming pools & growing families',
      capacity: '10.0 kW DC',
      panels: '23x 440W All-Black AIKO Neostar or REC Alpha',
      inverter: '8.2kW European Fronius Primo / Sungrow Hybrid',
      dailyYield: '38 - 44 kWh / day',
      typicalSavings: '$2,800 - $3,600 / yr',
      stcDiscount: 'Up to $3,200 STC Rebate Deducted',
      popular: true,
      features: [
        'Ultra-aesthetic all-black modules matching your roofline',
        'Generates huge daytime surplus to eliminate power bills',
        'Zero export clipping with smart dynamic phase injection',
        '10-year comprehensive Master Electrician workmanship',
        'Direct plug-in compatibility with Tesla Powerwall 3',
      ],
    },
    {
      name: 'Maximum Power 13.2kW - 15kW',
      tagline: 'Complete energy autonomy for large residences & electric vehicle owners',
      capacity: '13.2 - 15.0 kW DC',
      panels: '30-34x 440W REC Alpha Pure-R Heterojunction Panels',
      inverter: '10kW Single or Three-Phase Smart Inverter Setup',
      dailyYield: '52 - 64 kWh / day',
      typicalSavings: '$3,800 - $5,200 / yr',
      stcDiscount: 'Maximum Federal STC Rebate Applied',
      popular: false,
      features: [
        'Multi-string design optimizing east, west and north facets',
        'Maximum allowable residential Energex grid capacity',
        'Level 2 EV smart solar diversion charging support',
        'Dedicated Master Electrician project manager',
        'Commercial-grade Clenergy cyclone mounting hardware',
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Badge variant="amber">Signature Configurations</Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-3 tracking-tight">
              Engineered Residential Solar Packages
            </h2>
            <p className="mt-4 text-slate-600 text-base max-w-2xl">
              Transparent specifications with zero bait-and-switch hardware. Every package includes full STC paperwork management and local utility grid approval.
            </p>
          </div>
          <Button
            to="/solar/systems"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore All System Packages
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-8 transition-all duration-300 relative flex flex-col justify-between ${pkg.popular
                ? 'bg-slate-950 text-white shadow-2xl border-2 border-amber-500 scale-100 lg:-translate-y-2'
                : 'bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-xl'
                }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-500 w-52 text-slate-950 text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md inline-flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    Most Popular Choice
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold font-mono uppercase tracking-wider ${pkg.popular ? 'text-amber-400' : 'text-amber-600'}`}>
                    {pkg.capacity}
                  </span>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${pkg.popular ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-100 text-slate-600'}`}>
                    {pkg.stcDiscount}
                  </span>
                </div>

                <h3 className={`text-2xl font-serif font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-slate-950'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-xs leading-relaxed mb-6 ${pkg.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                  {pkg.tagline}
                </p>

                {/* Metrics Box */}
                <div className={`p-4 rounded-2xl mb-6 grid grid-cols-2 gap-3 text-xs ${pkg.popular ? 'bg-slate-900 border border-slate-800' : 'bg-slate-50 border border-slate-200/60'}`}>
                  <div>
                    <div className={pkg.popular ? 'text-slate-400' : 'text-slate-500'}>Typical Savings</div>
                    <div className="font-bold text-emerald-500 text-sm mt-0.5">{pkg.typicalSavings}</div>
                  </div>
                  <div>
                    <div className={pkg.popular ? 'text-slate-400' : 'text-slate-500'}>Est. Daily Harvest</div>
                    <div className={`font-bold text-sm mt-0.5 ${pkg.popular ? 'text-amber-400' : 'text-slate-900'}`}>{pkg.dailyYield}</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-slate-100/10">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={pkg.popular ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100/10">
                <Button
                  to="/get-started/free-assessment"
                  variant={pkg.popular ? 'primary' : 'outline'}
                  size="md"
                  fullWidth
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Package Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

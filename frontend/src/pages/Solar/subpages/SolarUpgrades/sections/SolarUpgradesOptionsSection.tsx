import React from 'react';
import { RefreshCw, Layers, ArrowUpCircle, Check, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const SolarUpgradesOptionsSection: React.FC = () => {
  const upgradeTypes = [
    {
      icon: RefreshCw,
      badge: 'Most Common',
      badgeVariant: 'slate' as const,
      title: 'Inverter Replacement',
      subtitle: 'Swap out faulty, noisy, or aging inverters',
      metric: 'Immediate Output Restoration',
      desc: 'Inverters installed between 2010 and 2018 commonly fail after 7–10 years. We replace dead units with smart European Fronius or Sungrow hybrid inverters featuring live smartphone app tracking, 10-year warranties, and battery upgrade support.',
      bullets: [
        'Immediate restoration of daily power generation',
        'Adds live smartphone app & Wi-Fi telemetry',
        'Direct hybrid battery upgrade capability',
        'Eliminates dangerous recalled DC isolator fire hazards',
      ],
      ctaText: 'Replace Faulted Inverter',
      ctaLink: '/existing-solar/health-check',
      primary: false,
    },
    {
      icon: Layers,
      badge: 'High ROI',
      badgeVariant: 'amber' as const,
      title: 'Panel Capacity Expansion',
      subtitle: 'Add 3kW to 6kW+ onto your existing roof array',
      metric: '+18 to +30 kWh / Day Added',
      desc: 'If your power bills have grown due to new ducted climate control, an electric vehicle, or a pool heat pump, we add high-efficiency N-Type panels to vacant roof facets using a secondary MPPT string without disturbing your working setup.',
      bullets: [
        'Zero need to tear down your working panels',
        'Fully eligible for current Federal STC discounts',
        'Maximizes east, west, and north sun exposure',
        'We manage all Energex network export approvals',
      ],
      ctaText: 'Expand Solar Capacity',
      ctaLink: '/get-started/free-assessment',
      primary: true,
    },
    {
      icon: ArrowUpCircle,
      badge: 'Maximum Output',
      badgeVariant: 'emerald' as const,
      title: 'Complete System Re-Power',
      subtitle: 'Replace obsolete 190W–250W panels with modern 10kW+',
      metric: 'Up to 400% More Output',
      desc: 'Replace legacy systems (e.g. 1.5kW to 3kW) with a modern 10kW high-density array in nearly the exact same roof footprint. Generate up to 400% more electricity every day with fresh 25-year manufacturer warranties.',
      bullets: [
        'Old panels safely decommissioned and recycled',
        'Upgraded to cyclone-rated Clenergy anodized racking',
        'Full 25-year manufacturer warranties renewed',
        'Unlocks direct compatibility with Tesla Powerwall 3',
      ],
      ctaText: 'Request Full Re-Power',
      ctaLink: '/get-started/free-assessment',
      primary: false,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl max-w-3xl mx-auto lg:text-5xl font-serif font-bold text-slate-950 mt-3 tracking-tight leading-[1.15]">
              Three Ways to Modernize Your Existing Solar
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
              Whether your inverter has failed or your family's power consumption has doubled, we engineer the most cost-effective path forward.
            </p>
          </div>
        </div>

        {/* 3 Seamless Columns with Hairline Vertical Dividers */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/90 items-stretch">
          {upgradeTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="py-10 lg:py-0 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between"
              >
                <div>
                  {/* Top Eyebrow Tag & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/70 text-amber-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant={item.badgeVariant} size="sm">
                      {item.badge}
                    </Badge>
                  </div>

                  {/* Title & Sizing */}
                  <h3 className="text-2xl font-serif font-bold text-slate-950 tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-700 mb-3">
                    {item.subtitle}
                  </div>

                  {/* Impact Metric Strip */}
                  <div className="inline-block text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 mb-4">
                    {item.metric}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Bullets */}
                  <div className="space-y-3 pt-6 border-t border-slate-100">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Button
                    to={item.ctaLink}
                    variant={item.primary ? 'primary' : 'outline'}
                    size="md"
                    fullWidth
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {item.ctaText}
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

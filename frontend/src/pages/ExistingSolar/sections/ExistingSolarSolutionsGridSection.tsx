import React from 'react';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';

export interface ExistingSolarSolution {
  title: string;
  slug: string;
  image: string;
  badge: string;
  badgeVariant: 'amber' | 'emerald' | 'navy';
  metric: string;
  desc: string;
  bullets: string[];
  cta: string;
}

export const ExistingSolarSolutionsGridSection: React.FC = () => {
  const sections: ExistingSolarSolution[] = [
    {
      title: 'Solar Health Check',
      slug: '/existing-solar/health-check',
      image: '/hero-installer.jpg',
      badge: 'Safety & Audit',
      badgeVariant: 'amber',
      metric: '24-Point Thermal Scan',
      desc: 'Detect silent inverter faults, micro-cracks, and dangerous rooftop DC isolator degradation before costly bills arrive.',
      bullets: [
        'Infrared thermal imaging of cells',
        'DC isolator fire safety inspection',
        'Inverter efficiency & firmware testing',
      ],
      cta: 'Book Health Check ($189)',
    },
    {
      title: 'How Much Have I Saved?',
      slug: '/existing-solar/savings',
      image: '/images/solutions/net-metering.jpg',
      badge: 'Savings Audit',
      badgeVariant: 'emerald',
      metric: 'Benchmark Lifetime ROI',
      desc: 'Audit your existing solar system against Queensland historical radiation data to verify your true lifetime return on investment.',
      bullets: [
        'Lifetime retail bill savings audit',
        'Analyze low feed-in tariff losses',
        'Identify hidden degradation drops',
      ],
      cta: 'Calculate Historical ROI',
    },
    {
      title: 'Solar Array Expansion',
      slug: '/existing-solar/upgrade',
      image: '/images/about/solar-installation-aerial.jpg',
      badge: 'Capacity Boost',
      badgeVariant: 'navy',
      metric: 'Up to 4x More Daily Output',
      desc: 'Outgrown your 3kW or 5kW system? Add high-efficiency N-Type panels to vacant roof facets or re-power with modern 440W modules.',
      bullets: [
        'Double harvest in same roof footprint',
        'Swap aging inverters for Fronius units',
        'Claim Federal STC point-of-sale rebates',
      ],
      cta: 'Explore Upgrade Options',
    },
    {
      title: 'Add a Battery Retrofit',
      slug: '/existing-solar/add-battery',
      image: '/images/solutions/battery-bundle.jpg',
      badge: 'High Rebate',
      badgeVariant: 'emerald',
      metric: 'Zero Roof Disruption',
      desc: 'Keep your existing solar panels and connect an AC-coupled battery (Tesla Powerwall 3 or Sungrow) directly to your switchboard.',
      bullets: [
        '100% compatible with any inverter',
        'Whole-home storm blackout backup',
        'Eligible for Battery Booster rebates',
      ],
      cta: 'View Battery Retrofits',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
      {/* Section Header */}
      <div className="text-center max-w-6xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-950 mt-2 tracking-tight">
          Existing Solar Solutions & Services
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Whether you want to verify safety compliance, calculate historical ROI, expand panel capacity, or add smart battery storage, our Master Electricians are ready to help.
        </p>
      </div>

      {/* 4 Visual Solution Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-md shadow-black/5 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Photo Container */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-950">
                <img
                  src={sec.image}
                  alt={sec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Top Floating Badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant={sec.badgeVariant} size="sm">
                    {sec.badge}
                  </Badge>
                </div>

                {/* Bottom Metric inside Photo */}
                <div className="absolute bottom-2.5 left-3 right-3 text-[11px] font-bold text-emerald-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{sec.metric}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5">
                <h3 className="text-lg font-serif font-bold text-slate-950 group-hover:text-amber-700 transition-colors mb-1.5">
                  {sec.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 min-h-[48px]">
                  {sec.desc}
                </p>

                {/* Bullets */}
                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-700">
                  {sec.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-5 pt-0">
              <div className="pt-3 border-t border-slate-100">
                <Button
                  to={sec.slug}
                  variant="outline"
                  size="sm"
                  fullWidth
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="hover:bg-amber-500 hover:text-white hover:border-amber-500"
                >
                  {sec.cta}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExistingSolarSolutionsGridSection;

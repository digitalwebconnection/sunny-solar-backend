import React from 'react';
import { Sparkles, Check, ArrowRight, Sun, BatteryCharging, Shield, Zap } from 'lucide-react';
import { Badge } from '../../../../../components/ui/Badge';
import { Button } from '../../../../../components/ui/Button';

export interface SolarBundlePackage {
  id: string;
  name: string;
  badge: string;
  badgeVariant: 'emerald' | 'amber' | 'navy' | 'slate';
  isPopular?: boolean;
  tagline: string;
  solar: string;
  battery: string;
  backup: string;
  dailyYield: string;
  savings: string;
  price: string;
  weeklyFinance: string;
  features: string[];
}

export const SolarPlusBatteryPackagesSection: React.FC = () => {
  const packages: SolarBundlePackage[] = [
    {
      id: 'suburban-starter',
      name: 'Suburban Starter Bundle',
      badge: 'Best Value Starter',
      badgeVariant: 'emerald',
      isPopular: false,
      tagline: 'Ideal for 2-3 bedroom suburban homes wanting to eliminate evening electricity bills.',
      solar: '6.6 kW Solar Array (15x 440W)',
      battery: '9.6 kWh Sungrow SBR Storage',
      backup: 'Essential Circuits EPS Backup',
      dailyYield: '~28 kWh / day avg',
      savings: 'Save $2,800 – $3,400 / yr',
      price: 'From $11,990*',
      weeklyFinance: 'From ~$42 / week',
      features: [
        '15x 440W N-Type TOPCon Dual-Glass high-efficiency modules',
        '9.6 kWh modular stackable LiFePO4 cobalt-free storage bank',
        'Automatic switchboard EPS circuit protection (lights & fridge)',
        'Smart 24/7 digital consumption & solar monitoring meter',
        'Full CEC Master Electrician install with 10-yr workmanship warranty',
      ],
    },
    {
      id: 'family-flagship',
      name: 'Family Flagship (Tesla Powerwall 3)',
      badge: '#1 Top Customer Choice',
      badgeVariant: 'amber',
      isPopular: true,
      tagline: 'Our #1 best-seller for central ducted air conditioning, swimming pools & complete storm backup.',
      solar: '10.0 kW High-Yield (23x 440W)',
      battery: '13.5 kWh Tesla Powerwall 3',
      backup: 'Sub-100ms Whole-Home Backup',
      dailyYield: '~44 kWh / day avg',
      savings: 'Save $3,800 – $4,600 / yr',
      price: 'From $16,800*',
      weeklyFinance: 'From ~$56 / week',
      features: [
        '23x 440W All-Black AIKO Neostar premium ABC modules',
        'Tesla Powerwall 3 with integrated 11.5kW inverter & Backup Gateway 2',
        'Sub-100ms automated storm switchover (Wi-Fi & computers never reboot)',
        'Effortlessly starts heavy 15kW+ whole-home central ducted air conditioning',
        'Automated BOM severe storm pre-charging protection included',
      ],
    },
    {
      id: 'executive-autonomy',
      name: 'Executive Autonomy Bundle',
      badge: 'Maximum Single-Phase',
      badgeVariant: 'navy',
      isPopular: false,
      tagline: 'Maximum allowable single-phase capacity, multi-split cooling & electric vehicle charging.',
      solar: '13.2 kW Max Single-Phase',
      battery: '19.2 kWh High-Voltage Bank',
      backup: 'Whole-Home Contactor Switch',
      dailyYield: '~58 kWh / day avg',
      savings: 'Save $4,800 – $5,800 / yr',
      price: 'From $21,400*',
      weeklyFinance: 'From ~$72 / week',
      features: [
        '30x 440W Dual-Glass panels harvesting roof facets facing East, North & West',
        '19.2 kWh modular expandable high-voltage storage bank for overnight autonomy',
        'Level 2 EV smart solar diversion charging support ready',
        'Heavy-duty switchboard upgrade with automated whole-home contactor',
        'Full utility network engineering approval managed start-to-finish',
      ],
    },
   
  ];

  return (
    <section className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
      {/* Section Header */}
      <div className="text-center max-w-6xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-950 mt-3 tracking-tight">
          Signature Solar + Battery Packages
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-6xl mx-auto">
          Turnkey all-in-one systems engineered with Tier-1 panels, matched hybrid lithium storage, automated switchboard backup, and local Queensland grid approval.
        </p>
      </div>

      {/* Full-Width Horizontal Package Cards (No Images) */}
      <div className="space-y-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-white rounded-2xl p-6 sm:p-8 border transition-all duration-300 relative ${
              pkg.isPopular
                ? 'border-2 border-amber-500 shadow-lg shadow-amber-500/5 ring-1 ring-amber-500/20'
                : 'border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300'
            }`}
          >
            {/* Featured Floating Badge */}
            {pkg.isPopular && (
              <div className="absolute -top-3.5 left-6 sm:left-8">
                <span className="bg-amber-500 text-slate-950 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                  {pkg.badge}
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Title, Tagline & Checklist (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center gap-2">
                  {!pkg.isPopular && (
                    <Badge variant={pkg.badgeVariant} size="sm">
                      {pkg.badge}
                    </Badge>
                  )}
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    {pkg.savings}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                  {pkg.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pkg.tagline}
                </p>

                {/* Inclusions Checklist */}
                <div className="space-y-2 pt-2 text-xs text-slate-600">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle Column: Structured Hardware & Yield Specs (4 cols) */}
              <div className="lg:col-span-4 bg-slate-50/90 rounded-2xl p-5 border border-slate-200/80 space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
                  <span className="text-slate-500 flex items-center gap-2 font-medium">
                    <Sun className="w-4 h-4 text-amber-500 shrink-0" />
                    Solar Array:
                  </span>
                  <span className="font-mono font-bold text-slate-900">{pkg.solar}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
                  <span className="text-slate-500 flex items-center gap-2 font-medium">
                    <BatteryCharging className="w-4 h-4 text-emerald-500 shrink-0" />
                    Battery Storage:
                  </span>
                  <span className="font-mono font-bold text-emerald-700">{pkg.battery}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
                  <span className="text-slate-500 flex items-center gap-2 font-medium">
                    <Shield className="w-4 h-4 text-sky-500 shrink-0" />
                    Backup Transfer:
                  </span>
                  <span className="font-medium text-slate-800">{pkg.backup}</span>
                </div>

                <div className="flex items-center justify-between pt-0.5">
                  <span className="text-slate-500 flex items-center gap-2 font-medium">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                    Est. Daily Yield:
                  </span>
                  <span className="font-mono font-bold text-slate-900">{pkg.dailyYield}</span>
                </div>
              </div>

              {/* Right Column: Pricing & Action (3 cols) */}
              <div className="lg:col-span-3 flex flex-col justify-center items-start lg:items-end lg:text-right pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                  Turnkey Net Investment
                </span>
                
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-950">
                  {pkg.price}
                </div>
                
                <span className="text-xs text-slate-500 font-medium mt-0.5 mb-4 block">
                  {pkg.weeklyFinance} • Rebates Applied
                </span>

                <Button
                  to="/get-started/free-assessment"
                  variant={pkg.isPopular ? 'primary' : 'accent-green'}
                  size="md"
                  className="w-full sm:w-auto lg:w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Claim Bundle Quote
                </Button>
              </div>

            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default SolarPlusBatteryPackagesSection;

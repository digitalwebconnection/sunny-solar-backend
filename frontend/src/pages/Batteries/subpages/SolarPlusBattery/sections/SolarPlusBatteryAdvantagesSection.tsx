import React from 'react';
import { Check, X, DollarSign, Zap, Smartphone, ShieldCheck, CloudLightning, ArrowRight } from 'lucide-react';
import { Badge } from '../../../../../components/ui/Badge';
import { Button } from '../../../../../components/ui/Button';

export const SolarPlusBatteryAdvantagesSection: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Inverter Hardware',
      bundle: '1 Unified Hybrid Inverter (serves panels & battery)',
      separate: '2 Separate Inverters (extra $1,800 – $2,400 cost)',
      winner: 'bundle',
    },
    {
      feature: 'Electrical Labor & Staging',
      bundle: 'Single deployment: 1 roof access, 1 conduit run',
      separate: 'Two separate trade callouts, double scaffold & labor',
      winner: 'bundle',
    },
    {
      feature: 'Solar Charging Efficiency',
      bundle: '97.5% Direct DC-to-DC hybrid charge path',
      separate: '88% – 90% (Lossy DC → AC → DC conversions)',
      winner: 'bundle',
    },
    {
      feature: 'Grid Network Approvals',
      bundle: '1 single utility grid application (Energex/Ergon)',
      separate: '2 separate network engineering review fees',
      winner: 'bundle',
    },
    {
      feature: 'Monitoring & Controls',
      bundle: '1 single smartphone app (live solar + battery + loads)',
      separate: '2 different manufacturer apps with conflicting data',
      winner: 'bundle',
    },
    {
      feature: 'Warranty & Accountability',
      bundle: 'Single CEC Master Electrician covers entire system',
      separate: 'Multiple installers blaming each other for faults',
      winner: 'bundle',
    },
  ];

  const engineeringPillars = [
    {
      icon: DollarSign,
      iconColor: 'text-amber-600 bg-amber-500/10',
      title: 'Save $2,200+ in Redundant Labor',
      desc: 'Running heavy DC isolator cables through roof cavities, installing safety conduit, and upgrading your main electrical switchboard is completed in one seamless visit.',
      badge: 'Upfront Cost Reduction',
    },
    {
      icon: Zap,
      iconColor: 'text-emerald-600 bg-emerald-500/10',
      title: '97.5% Direct DC Hybrid Efficiency',
      desc: 'Bundled systems feed rooftop solar electricity straight into your battery storage via direct DC strings, avoiding double AC inversion losses and yielding 8% more usable power every day.',
      badge: 'Max Energy Harvest',
    },
    {
      icon: CloudLightning,
      iconColor: 'text-sky-600 bg-sky-500/10',
      title: 'Sub-100ms Blackout Defense',
      desc: 'An integrated automated transfer switch isolates your residence from the fallen grid instantly during severe storms. Lights, refrigeration, and home Wi-Fi never lose power.',
      badge: 'Uninterrupted Power',
    },
    {
      icon: Smartphone,
      iconColor: 'text-indigo-600 bg-indigo-500/10',
      title: 'Unified Single-App Telemetry',
      desc: 'Monitor rooftop generation, home consumption, battery state-of-charge, and EV diversion charging from one intuitive dashboard on iOS or Android.',
      badge: 'Full Visibility',
    },
  ];

  return (
    <section className="">
      {/* Header */}
      <div className="text-center max-w-6xl mx-auto ">
   
        <h2 className="text-3xl sm:text-4xl max-w-3xl mx-auto font-serif font-bold text-slate-950 mt-3 tracking-tight">
          The Engineering Advantage of Installing Bundles
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          Why pairing high-efficiency solar panels with hybrid battery storage delivers superior electrical efficiency, lower lifetime costs, and complete peace of mind.
        </p>
      </div>

      {/* Head-to-Head Comparison Table */}
      <div className="mb-14 overflow-hidden rounded-xl border border-slate-200 shadow-xs">
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-bold">Bundle vs. Phased Upgrade Comparison</h3>
            <p className="text-xs text-slate-400">See why 78% of our customers choose turnkey bundled installation</p>
          </div>
          <span className="text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full">
            Average Savings: $2,200+
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-bold uppercase text-[11px] tracking-wider">
                <th className="p-3.5 sm:p-4 w-1/4">System Aspect</th>
                <th className="p-3.5 sm:p-4 w-3/8 bg-emerald-50/70 text-emerald-950 border-x border-emerald-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Turnkey Solar + Battery Bundle
                  </div>
                </th>
                <th className="p-3.5 sm:p-4 w-3/8 text-slate-500">
                  Adding Battery Later (Retrofit)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                    {row.feature}
                  </td>
                  <td className="p-3.5 sm:p-4 bg-emerald-50/40 border-x border-emerald-100 font-medium text-slate-900">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{row.bundle}</span>
                    </div>
                  </td>
                  <td className="p-3.5 sm:p-4 text-slate-500">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{row.separate}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      
    </section>
  );
};

export default SolarPlusBatteryAdvantagesSection;

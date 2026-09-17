import React from 'react';
import { ArrowRight, Sparkles, Check, History } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const ExistingSolarEvolutionSection: React.FC = () => {
  const comparisonRows = [
    {
      aspect: 'System Size & Capacity',
      legacy: '1.5 kW – 3.0 kW (Small 6 to 12 panel setup)',
      modern: '6.6 kW – 13.2 kW (High-yield multi-facet array)',
      advantage: 'Up to 4x More Daily Energy Harvest',
    },
    {
      aspect: 'Panel Technology',
      legacy: '200W – 250W Polycrystalline (14%–16% efficiency)',
      modern: '440W+ N-Type TOPCon Dual-Glass (22.8% efficiency)',
      advantage: 'Double generation in the exact same roof footprint',
    },
    {
      aspect: 'Financial Economics',
      legacy: 'Relied on 44¢ FIT (now expired down to 3¢–5¢)',
      modern: 'Stores surplus in 10–13.5kWh battery to avoid 45¢ grid rates',
      advantage: 'Slashing quarterly electricity bills by up to 88%',
    },
    {
      aspect: 'App & Live Telemetry',
      legacy: 'Obscure 2-line inverter LCD screen with error codes',
      modern: 'Real-time 24/7 smartphone app tracking power in real time',
      advantage: 'Instant alerts if any circuit or panel underperforms',
    },
    {
      aspect: 'Blackout & Storm Defense',
      legacy: 'Shuts down completely during grid outages (0 power)',
      modern: 'Sub-100ms automatic transfer switch runs whole home',
      advantage: 'Lights, Wi-Fi, and refrigeration never lose power',
    },
    {
      aspect: 'Typical Annual Savings',
      legacy: '$600 – $1,100 / year (under current retail tariffs)',
      modern: '$2,800 – $4,600+ / year with matched battery storage',
      advantage: 'Save an additional $2,000+ every single year',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
      {/* Section Header */}
      <div className="text-center max-w-6xl mx-auto mb-10">
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-2xl mx-auto font-serif font-bold text-slate-950 mt-2 tracking-tight">
          Legacy Solar (2012–2018) vs Modern Solar + Storage
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
          If your solar system was installed 5 to 12 years ago, see how modern high-efficiency panels and battery storage multiply your energy independence.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-bold">The 10-Year Solar Technology Leap</h3>
            <p className="text-xs text-slate-400">Compare older rooftop systems with today's smart energy ecosystems</p>
          </div>
          <span className="text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full">
            Modernize & Double Your ROI
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-bold uppercase text-[11px] tracking-wider">
                <th className="p-3.5 sm:p-4 w-1/4">Key Metric</th>
                <th className="p-3.5 sm:p-4 w-3/8 text-slate-500">Older Solar (2012–2018)</th>
                <th className="p-3.5 sm:p-4 w-3/8 bg-emerald-50/70 text-emerald-950 border-x border-emerald-200">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Today's Solar + Battery Systems
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                    <div>{row.aspect}</div>
                    <span className="text-[10px] text-slate-400 font-normal block mt-0.5">
                      {row.advantage}
                    </span>
                  </td>
                  <td className="p-3.5 sm:p-4 text-slate-500">
                    {row.legacy}
                  </td>
                  <td className="p-3.5 sm:p-4 bg-emerald-50/40 border-x border-emerald-100 font-medium text-slate-900">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{row.modern}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA bar inside table card */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            Wondering what your existing roof could produce with modern high-efficiency panels?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              to="/existing-solar/upgrade"
              variant="outline"
              size="sm"
              className="w-full sm:w-auto"
            >
              Explore Upgrade Options
            </Button>
            <Button
              to="/get-started/free-assessment"
              variant="primary"
              size="sm"
              className="w-full sm:w-auto"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Get Modernization Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExistingSolarEvolutionSection;

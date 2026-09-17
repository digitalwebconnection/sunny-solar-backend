import React from 'react';
import { ShieldCheck, Cpu, ArrowDownRight, ArrowUpRight, Gauge, CheckCircle2, AlertCircle, Wrench } from 'lucide-react';

export const UpgradeComparisonSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Technical Evolution: <br />
          <span className="text-slate-900">Legacy Systems vs. </span>
          <span className="text-emerald-600">Modernized Solar Architecture</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Solar technology has advanced dramatically over the past decade. Upgrading transforms your rooftop from an inefficient daytime trickle into a smart, high-yield household power station.
        </p>
      </div>

      {/* Side-by-Side Asymmetric Evolution Container (Not Just Plain Boxes!) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10">
        
        {/* Legacy System (Outdated Architecture) */}
        <div className="bg-slate-100/90  border border-slate-300 p-6 sm:p-8 relative flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-300 uppercase tracking-wide">
                Legacy Architecture (2012 – 2018)
              </span>
              <span className="text-xs font-bold text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> Outdated Standard
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              The Early Boom Solar System
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Designed primarily to feed 44¢ or 50¢ export tariffs, these systems were built for high exports rather than self-consumption, resulting in high grid reliance today.
            </p>

            {/* Spec breakdown */}
            <div className="mt-5 space-y-3">
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700">
                <ArrowDownRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">200W – 250W Polycrystalline:</span>
                  <p className="text-slate-500 text-[11px] mt-0.5">Low 15% efficiency rating with severe power drop-off in hot Queensland summers.</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700">
                <ArrowDownRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Single MPPT String Inverter:</span>
                  <p className="text-slate-500 text-[11px] mt-0.5">If shade or bird droppings hit just one panel, the entire roof string output collapses.</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700">
                <ArrowDownRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Zero App Telemetry:</span>
                  <p className="text-slate-500 text-[11px] mt-0.5">No way to check performance without walking out to the garage and reading faint LCD codes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Average Daily Yield: ~12–16 kWh</span>
            <span className="font-semibold text-rose-600">High Grid Reliance</span>
          </div>
        </div>

        {/* Modernized System (Current Tier-1 Standard) */}
        <div className="bg-white border-2 border-emerald-400 p-6 sm:p-8 shadow-sm relative flex flex-col justify-between">
          <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
            Current Tier-1 Standard
          </div>

          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300 uppercase tracking-wide">
                Modernized Architecture (2025/2026)
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              The Self-Consumption Powerhouse
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Engineered specifically to power high-draw domestic loads (heat pumps, ducted AC, EV chargers) directly during the day while seamlessly integrating battery storage.
            </p>

            {/* Spec breakdown */}
            <div className="mt-5 space-y-3">
              <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 flex items-start gap-2.5 text-xs text-slate-700">
                <ArrowUpRight className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">440W – 475W N-Type TOPCon:</span>
                  <p className="text-slate-500 text-[11px] mt-0.5">Ultra-high 22.5%+ efficiency with superior heat coefficient and early morning generation.</p>
                </div>
              </div>

              <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 flex items-start gap-2.5 text-xs text-slate-700">
                <ArrowUpRight className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Dual-MPPT Independent Tracking:</span>
                  <p className="text-slate-500 text-[11px] mt-0.5">East and West facets operate independently; partial shade on one string never affects the other.</p>
                </div>
              </div>

              <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 flex items-start gap-2.5 text-xs text-slate-700">
                <ArrowUpRight className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Instant Phone App & Wi-Fi Alerts:</span>
                  <p className="text-slate-500 text-[11px] mt-0.5">Live solar generation, household usage, and instant notifications if grid voltage fluctuates.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-emerald-100 flex items-center justify-between text-xs text-slate-500">
            <span>Average Daily Yield: ~34–48 kWh</span>
            <span className="font-bold text-emerald-700">85%+ Daytime Independence</span>
          </div>
        </div>

      </div>

   
    </section>
  );
};

export default UpgradeComparisonSection;

import React from 'react';
import { BatteryCharging, Zap, Check, ArrowRight, ShieldCheck, TrendingDown } from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

export const BuyerGuideBatterySection: React.FC = () => {
  return (
    <section className="my-10">
      <div className="relative bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 md:p-10 overflow-hidden shadow-xl border border-slate-700/80">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 max-w-7xl mx-auto">
          
          {/* Left: Real Photography */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden shadow-2xl border border-slate-700 group rounded-lg">
              <img
                src="/images/solutions/net-metering.jpg"
                alt="Solar and battery smart energy management"
                className="w-full h-64 sm:h-84 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Bottom Tag */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                <div className="flex items-center justify-between text-xs font-semibold text-amber-300 mb-1">
                  <span>Self-Consumption Rate</span>
                  <span>90%+ Solar Independence</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full w-[92%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative Educational Content (Non-box design) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold">
              <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
              <span>Guide Chapter 6 Preview</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
              Add Battery with Solar: Unlocking True 24-Hour Solar Independence
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              As explained in Chapter 6 of our comprehensive guide, solar-only homes export up to 60% of their generation to the grid for pennies. Adding a battery stops this leakage, storing clean solar energy for evening cooking, air conditioning, and EV charging.
            </p>

            {/* Organic Checklist Points */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-start gap-2.5 text-xs text-slate-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Check className="w-3 h-3" />
                </div>
                <span><strong>The Self-Consumption Jump:</strong> Boost your on-site solar utilization from an average of 35% with solar alone up to 92% with smart home storage.</span>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Check className="w-3 h-3" />
                </div>
                <span><strong>Seamless Blackout Protection:</strong> Automatically disconnects from the grid during neighborhood outages in 20 milliseconds, keeping essentials active.</span>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Check className="w-3 h-3" />
                </div>
                <span><strong>Single App Management:</strong> Monitor roof generation, battery reserve, household consumption, and grid status in one unified dashboard.</span>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-700/80">
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Tier-1 CEC Approved Lithium Storage</span>
              </div>
              <Button
                to="/resources/battery-decision-guide"
                variant="primary"
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Read Battery Decision Guide
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BuyerGuideBatterySection;

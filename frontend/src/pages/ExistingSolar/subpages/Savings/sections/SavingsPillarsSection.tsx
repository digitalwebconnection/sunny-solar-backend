import React from 'react';
import { SunMedium, ArrowLeftRight, ShieldAlert, Check, Layers, PieChart } from 'lucide-react';

export const SavingsPillarsSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-6xl mx-auto mb-10">
        
        <h2 className="text-2xl sm:text-3xl max-w-3xl mx-auto md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Where Do Your Solar Savings <br /> <span className="text-amber-600">Actually Come From?</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Many homeowners mistakenly evaluate solar solely on feed-in tariffs. In reality, the true financial powerhouse is avoided peak grid consumption and fixed supply cost neutralization.
        </p>
      </div>

      {/* 1. The Three Normal Containers (Pillars Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        {/* Pillar 1: Direct Daytime Self-Consumption */}
        <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-xs hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-5 shadow-inner">
              <SunMedium className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                Pillar 01 • 70% Value
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Daytime Self-Consumption
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
              Every kilowatt-hour consumed immediately by high-draw appliances (air-conditioning, pool filtration, heat pumps, EV charging) completely eliminates an expensive retail purchase.
            </p>

            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero variable kWh cost during sunshine hours</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Runs heavy loads completely free off the roof</span>
              </li>
            </ul>
          </div>

          {/* Small Container Nested Inside */}
          <div className="mt-6 pt-4 border-t border-slate-100 bg-amber-50/60 -mx-6 -mb-6 p-4 rounded-b-2xl border-t-amber-100/60">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-amber-800 uppercase tracking-wide">Direct Value Per kWh</p>
                <p className="text-base font-extrabold text-slate-900">32¢ – 38¢ Saved</p>
              </div>
              <span className="text-[11px] font-semibold text-amber-700 bg-white px-2.5 py-1 rounded-lg border border-amber-200 shadow-2xs">
                Highest ROI
              </span>
            </div>
          </div>
        </div>

        {/* Pillar 2: Feed-In Tariff Credits */}
        <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5 shadow-inner">
              <ArrowLeftRight className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                Pillar 02 • 20% Value
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Grid Export Credits (FIT)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
              Surplus daytime generation spills safely back into the Queensland grid. These credits directly chip away at mandatory daily service charges (typically $1.30/day).
            </p>

            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Offsets unavoidable daily connection fees</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Automatic quarterly credit deduction on bills</span>
              </li>
            </ul>
          </div>

          {/* Small Container Nested Inside */}
          <div className="mt-6 pt-4 border-t border-slate-100 bg-emerald-50/60 -mx-6 -mb-6 p-4 rounded-b-2xl border-t-emerald-100/60">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide">Export Credit Rate</p>
                <p className="text-base font-extrabold text-slate-900">6.0¢ – 11.5¢ / kWh</p>
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs">
                Bill Credit
              </span>
            </div>
          </div>
        </div>

        {/* Pillar 3: Utility Tariff Inflation Shield */}
        <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-5 shadow-inner">
              <ShieldAlert className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                Pillar 03 • 10% Value
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Inflation & Tariff Shield
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
              When energy retailers hike quarterly electricity rates, unsolarized neighbors pay more. For you, higher grid tariffs increase the exact financial value of every solar kWh produced.
            </p>

            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Locks in zero-cost daytime power for 25+ years</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Higher utility prices amplify your net ROI</span>
              </li>
            </ul>
          </div>

          {/* Small Container Nested Inside */}
          <div className="mt-6 pt-4 border-t border-slate-100 bg-blue-50/60 -mx-6 -mb-6 p-4 rounded-b-2xl border-t-blue-100/60">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-blue-800 uppercase tracking-wide">Compounding Protection</p>
                <p className="text-base font-extrabold text-slate-900">+8.5% YoY Hedge</p>
              </div>
              <span className="text-[11px] font-semibold text-blue-700 bg-white px-2.5 py-1 rounded-lg border border-blue-200 shadow-2xs">
                Guaranteed
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* 2. Visual Net-Metering Container Paired with Small Proportion Badges */}
      <div className="bg-slate-900  overflow-hidden text-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Visual Image Container Left */}
          <div className="lg:col-span-6 relative min-h-75 sm:min-h-90 h-full">
            <img
              src="/images/savings/10kw-solar-panel-system.png"
              alt="Solar net metering and bi-directional energy flow"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-r from-slate-950/70 via-transparent to-slate-900 lg:bg-linear-to-r lg:from-transparent lg:to-slate-900" />
            
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 backdrop-blur-md bg-slate-950/80 p-3  border border-white/20">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Real Flow Topology</span>
              <span className="text-sm font-extrabold text-white">Bi-Directional Smart Metering</span>
            </div>
          </div>

          {/* Normal Content Container Right with Embedded Small Badges */}
          <div className="lg:col-span-6 p-6 sm:p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <PieChart className="w-3.5 h-3.5" />
              Annual Bill Breakdown Composition
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white">
              Maximizing Your Net Solar Harvest
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Your bi-directional smart meter tracks daytime solar usage in real-time. Shifting just two major appliances to daylight hours typically boosts total annual bill savings by an extra $450 to $700.
            </p>

            {/* Grid of 4 Small Containers */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6">
              
              {/* Small Container 1 */}
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">Direct Rooftop Use</span>
                  <span className="text-xs font-black text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">68%</span>
                </div>
                <p className="text-base font-extrabold text-white mt-1">High-Impact</p>
                <p className="text-[11px] text-slate-400">AC, hot water, refrigeration</p>
              </div>

              {/* Small Container 2 */}
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">Grid Export Credits</span>
                  <span className="text-xs font-black text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded">22%</span>
                </div>
                <p className="text-base font-extrabold text-white mt-1">Daily Offsets</p>
                <p className="text-[11px] text-slate-400">Surplus sent to community</p>
              </div>

              {/* Small Container 3 */}
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">Residual Grid Draw</span>
                  <span className="text-xs font-black text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded">10%</span>
                </div>
                <p className="text-base font-extrabold text-white mt-1">Night Baseline</p>
                <p className="text-[11px] text-slate-400">Zero during sunshine hours</p>
              </div>

              {/* Small Container 4 */}
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">Net Annual Offset</span>
                  <span className="text-xs font-black text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded">4,900 kWh</span>
                </div>
                <p className="text-base font-extrabold text-white mt-1">Clean Yield</p>
                <p className="text-[11px] text-slate-400">Standard 6.6 kW system output</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SavingsPillarsSection;

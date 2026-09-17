import React from 'react';
import { ArrowRight, Check, Zap, BatteryCharging, Maximize2, ShieldCheck, Flame } from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

export const UpgradePathwaysSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Three Strategic Pathways to <br />
          <span className="text-amber-600">Modernize Your Rooftop Solar</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Not every home requires a total overhaul. Choose the targeted engineering pathway tailored to your equipment age, roof layout, and household power consumption.
        </p>
      </div>

      {/* Dynamic Stepped Pathways (Alternating Asymmetric Architecture - Far Beyond Plain Boxes) */}
      <div className="space-y-8">

        {/* Pathway 1: Inverter Modernization (Horizontal Split Container) */}
        <div className="bg-white  border border-slate-200/90 shadow-sm hover:border-amber-300 hover:shadow-md transition-all overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Image Side */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] overflow-hidden bg-slate-900">
              <img
                src="/images/about/gallery/electrician-mounting-inverter.jpg"
                alt="Master electrician mounting a modern smart hybrid inverter"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-3 py-1 rounded-md shadow-xs">
                  Pathway 01
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">Fast Turnaround</p>
                <p className="text-sm font-bold">1-Day Inverter Replacement & Wi-Fi Sync</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200 uppercase tracking-wide">
                    Equipment Replacement
                  </span>
                  <span className="text-xs text-slate-400">For 5–10 Yr Inverters</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Inverter Modernization & Hybrid Battery Integration
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If your panels are still generating well but your inverter has thermal clipping, red fault lights, or lacks phone telemetry, an inverter swap restores maximum conversion efficiency and prepares you for immediate battery storage.
                </p>

                {/* 4 Small Spec Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-lg px-3 py-2 text-xs text-slate-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Sungrow or Fronius Hybrid Unit</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-lg px-3 py-2 text-xs text-slate-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Real-Time Smartphone App Telemetry</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-lg px-3 py-2 text-xs text-slate-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Fixes Aging DC Isolator Hazards</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-lg px-3 py-2 text-xs text-slate-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Plug-and-Play Battery Expansion</span>
                  </div>
                </div>
              </div>

              {/* Small Container Strip at bottom */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                <div className="bg-amber-50/80 border border-amber-200 rounded-lg px-3 py-1.5">
                  <span className="text-[10px] font-bold uppercase text-amber-800 block">Investment Guide</span>
                  <span className="text-sm font-black text-slate-900">From $1,890 Installed</span>
                </div>
                <Button to="/solar/upgrades" variant="outline" size="sm">
                  Inverter Options & Pricing →
                </Button>
              </div>
            </div>

          </div>
        </div>

        {/* Pathway 2: Rooftop String Expansion (Highlighted Featured Container with Inverted Visual Flow) */}
        <div className="bg-gradient-to-br from-amber-500/5 via-white to-orange-500/5 rounded-lg border-2 border-amber-500/80 shadow-md hover:shadow-lg transition-all overflow-hidden relative">
          
          {/* Top Banner Ribbon */}
          <div className="bg-amber-500 text-slate-950 font-black text-[11px] uppercase tracking-wider py-1 px-4 text-center">
            ★ Most Popular Choice: Keep Working Panels & Expand Clean Generation
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Content Side (Left this time for visual variation!) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-md border border-amber-300 uppercase tracking-wide">
                    Pathway 02 • High ROI
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    STC Rebate Claimable
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Rooftop Panel String Expansion (3.5 kW – 6.6 kW Boost)
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Keep your current operational panels and add 8 to 16 ultra-efficient N-type monocrystalline modules to East or West roof facets. Powered by a dual-MPPT controller, morning and afternoon sun now powers pool pumps and EV charging directly.
                </p>

                {/* 4 Small Spec Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                  <div className="flex items-center gap-2 bg-white border border-amber-200/80 rounded-lg px-3 py-2 text-xs text-slate-800 shadow-2xs">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Add 8 to 16 Modern Tier-1 Modules</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-amber-200/80 rounded-lg px-3 py-2 text-xs text-slate-800 shadow-2xs">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Independent Dual-MPPT Stringing</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-amber-200/80 rounded-lg px-3 py-2 text-xs text-slate-800 shadow-2xs">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Eligible for Federal STC Discount</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-amber-200/80 rounded-lg px-3 py-2 text-xs text-slate-800 shadow-2xs">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Powers Daytime Air Conditioning & EV</span>
                  </div>
                </div>
              </div>

              {/* Small Container Strip at bottom */}
              <div className="mt-6 pt-4 border-t border-amber-100 flex items-center justify-between flex-wrap gap-3">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1.5">
                  <span className="text-[10px] font-bold uppercase text-emerald-800 block">Expected Annual Bill Relief</span>
                  <span className="text-sm font-black text-emerald-950">+$1,200 to $1,850 / yr</span>
                </div>
                <Button to="/get-started/free-assessment" variant="primary" size="sm">
                  Get Panel Expansion Quote →
                </Button>
              </div>
            </div>

            {/* Image Side (Right) */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] overflow-hidden bg-slate-900 order-1 lg:order-2">
              <img
                src="/images/solutions/adani-polycab.jpg"
                alt="High efficiency Tier-1 monocrystalline solar panels for string expansion"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Added Capacity</span>
                <span className="text-sm font-extrabold text-white">+18 to +26 kWh Added Every Sunny Day</span>
              </div>
            </div>

          </div>
        </div>

        {/* Pathway 3: Complete Rooftop Re-Powering (Wide Horizontal Container) */}
        <div className="bg-white  border border-slate-200/90 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Image Side */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] overflow-hidden bg-slate-900">
              <img
                src="/images/solutions/solar-kit.jpg"
                alt="Complete modern high-yield solar kit for full rooftop re-powering"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-black uppercase tracking-wider bg-emerald-600 text-white px-3 py-1 rounded-md shadow-xs">
                  Pathway 03
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">Max Density Upgrade</p>
                <p className="text-sm font-bold">Quadruple Output in Same Roof Area</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 uppercase tracking-wide">
                    Full Re-Powering
                  </span>
                  <span className="text-xs text-slate-400">For 10+ Year Old Arrays</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Full Rooftop Re-Powering (3.5× Energy Density Upgrade)
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Decommission obsolete 200W–250W panels from early feed-in booms and install cutting-edge 440W+ high-density modules in the exact same physical roof dimensions. Includes certified equipment recycling and 25-year performance warranties.
                </p>

                {/* 4 Small Spec Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-lg px-3 py-2 text-xs text-slate-800">
                    <Maximize2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>3.5× Output Density on Same Roof</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-lg px-3 py-2 text-xs text-slate-800">
                    <Maximize2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Full Safe Equipment Recycling Included</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-lg px-3 py-2 text-xs text-slate-800">
                    <Maximize2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>New Switchboard Protection AS/NZS 3000</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-lg px-3 py-2 text-xs text-slate-800">
                    <Maximize2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>25-Year Manufacturer Warranty</span>
                  </div>
                </div>
              </div>

              {/* Small Container Strip at bottom */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
                  <span className="text-[10px] font-bold uppercase text-slate-600 block">System Capacity Range</span>
                  <span className="text-sm font-black text-slate-900">8.8 kW to 13.2 kW Premium</span>
                </div>
                <Button to="/solar/systems" variant="outline" size="sm">
                  Browse Complete Systems →
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default UpgradePathwaysSection;

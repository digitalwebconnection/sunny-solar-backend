import React from 'react';
import { AlertTriangle, CloudLightning,  ShieldCheck } from 'lucide-react';


export const AddBatteryBackupSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-6xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-200/80 mb-3">
          <CloudLightning className="w-3.5 h-3.5 text-indigo-600" />
          Storm Season & Grid Outage Resilience
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Why Your Solar Panels Need a Battery to <br />
          <span className="text-emerald-600">Survive Power Blackouts</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Most homeowners assume solar panels work during an outage. In reality, standard solar inverters shut down immediately for lineman safety—leaving you in the dark unless backed by a smart battery.
        </p>
      </div>

      {/* Main Asymmetric Grid: Storm Visual & Islanding Reality (Normal Small Containers) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch mb-10">

        {/* Left Side: Storm Visual with Overlaid Floating Metrics */}
        <div className="lg:col-span-6 bg-slate-900 overflow-hidden border border-slate-800 shadow-md relative min-h-85 sm:min-h-105 flex flex-col justify-end group">
          <img
            src="/images/solutions/battery-storm.jpg"
            alt="Queensland severe summer storm with resilient battery powered home"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

          {/* Overlaid Bottom Content */}
          <div className="relative z-10 p-6 sm:p-8 text-white">

            <h3 className="text-xl font-bold text-white">
              Multi-Day Infinite Energy Loop
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              When the street loses power, the battery gateway creates an isolated micro-grid. Your rooftop solar charges the battery by day, and the battery powers your home by night—indefinitely.
            </p>
          </div>
        </div>

        {/* Right Side: Side-by-Side Reality Comparison (Not Plain Boxes!) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">

          {/* Situation 1: Solar WITHOUT Battery */}
          <div className="bg-white border-2 border-rose-200/90 p-5 sm:p-6 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-bl-lg tracking-wider">
              No Battery Installed
            </div>

            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">Standard Grid-Tied Solar System</h4>
                <p className="text-xs text-rose-600 font-semibold">Automatic Anti-Islanding Safety Cutoff</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              By Australian standard AS4777, your solar inverter MUST immediately shut down the second the street grid drops. Even at noon on a blazing sunny day, you have zero power.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-3 border-t border-rose-100">
              <span className="flex items-center gap-1.5 text-rose-700 font-medium">
                ✕ Fridge stops running
              </span>
              <span className="flex items-center gap-1.5 text-rose-700 font-medium">
                ✕ Solar generates 0 Watts
              </span>
            </div>
          </div>

          {/* Situation 2: Solar + AC-Coupled Battery Retrofit */}
          <div className="bg-white border-2 border-emerald-300/90 p-5 sm:p-6 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-bl-lg tracking-wider">
              AC-Coupled Retrofit
            </div>

            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">Solar + Smart AC Storage Gateway</h4>
                <p className="text-xs text-emerald-600 font-semibold">Continuous Off-Grid Islanding Mode</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              The backup gateway instantly forms a localized private mini-grid. Your existing solar inverter re-engages and continues harvesting solar daylight to power your home and refill the battery.
            </p>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-700 pt-3 border-t border-emerald-100">
              <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                ✓ Continuous refrigeration & lights
              </span>
              <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                ✓ Solar recharges battery daily
              </span>
            </div>
          </div>

          {/* Small Feature Pill Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="bg-slate-50 border border-slate-300/70 p-2.5 rounded-xl text-center">
              <span className="text-[10px] font-bold text-slate-600 uppercase block">Switch Speed</span>
              <span className="text-xs font-extrabold text-slate-900 mt-0.5 block">&lt;10 ms</span>
            </div>
            <div className="bg-slate-50 border border-slate-300/70 p-2.5 rounded-xl text-center">
              <span className="text-[10px] font-bold text-slate-600 uppercase block">Solar Recharging</span>
              <span className="text-xs font-extrabold text-emerald-600 mt-0.5 block">Full Daytime</span>
            </div>
            <div className="bg-slate-50 border border-slate-300/70 p-2.5 rounded-xl text-center">
              <span className="text-[10px] font-bold text-slate-600 uppercase block">Install Warranty</span>
              <span className="text-xs font-extrabold text-slate-900 mt-0.5 block">10 Yrs Guaranteed</span>
            </div>
          </div>

        </div>

      </div>


    </section>
  );
};

export default AddBatteryBackupSection;

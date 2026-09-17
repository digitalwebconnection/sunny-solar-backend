import React from 'react';
import { AlertTriangle, CheckCircle, Flame, Activity, Clock, ShieldCheck, Gauge, Zap } from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

export const SavingsOptimizationSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-6xl mx-auto mb-10">
    
        <h2 className="text-2xl sm:text-3xl md:text-4xl max-w-3xl mx-auto font-extrabold text-slate-900 tracking-tight">
          Why Many Systems <span className="text-rose-600">Lose Up to 40%</span> of Their Savings
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-900 leading-relaxed">
          Over 38% of rooftop installations older than 4 years suffer from undetected inverter throttling, soiling, or shifted energy habits. See how an unmonitored setup compares directly against a calibrated system.
        </p>
      </div>

      {/* Side-by-Side Normal Comparison Containers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10">
        
        {/* Normal Container 1: The Savings Leak (Unmonitored / Aging) */}
        <div className="bg-white rounded-lg border-2 border-rose-200/80 p-6 sm:p-8 shadow-xs relative flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
            Savings Leakage
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Unmonitored / Neglected System</h3>
                <p className="text-xs text-rose-600 font-semibold">Typical 4+ Year Old Rooftop Setup</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Without periodic inspections or production verification, systems silently degrade. Homeowners still receive an electricity bill, often unaware that their panels are generating far less than initial installation.
            </p>

            {/* Leak Breakdown List */}
            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-rose-50/50 p-3 rounded-xl border border-rose-100">
                <Flame className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Surface Soiling & Hotspots:</span>
                  <p className="text-slate-500 text-[11px] mt-0.5">Dust and organic build-up cause up to 15% generation loss on sunny days.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-rose-50/50 p-3 rounded-xl border border-rose-100">
                <Activity className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Inverter Throttling & Faults:</span>
                  <p className="text-slate-500 text-[11px] mt-0.5">Silent grid overvoltage trips or firmware drops can wipe out peak midday hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-rose-50/50 p-3 rounded-xl border border-rose-100">
                <Clock className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Mismatched Appliance Scheduling:</span>
                  <p className="text-slate-500 text-[11px] mt-0.5">Exporting power at 6¢ during the day while running appliances at 34¢ at night.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Small Warning Containers at bottom */}
          <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-rose-100">
            <div className="bg-rose-50 rounded-xl p-3 border border-rose-200/60">
              <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider block">Estimated Annual Leak</span>
              <span className="text-base sm:text-lg font-black text-rose-950 mt-0.5 block">-$840 / year</span>
              <span className="text-[10px] text-rose-600">Uncaptured financial value</span>
            </div>
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Performance Grade</span>
              <span className="text-base sm:text-lg font-black text-slate-900 mt-0.5 block">Grade D (Sub-Par)</span>
              <span className="text-[10px] text-slate-500">Below factory spec</span>
            </div>
          </div>
        </div>

        {/* Normal Container 2: The Calibrated & Monitored Setup */}
        <div className="bg-white rounded-lg border-2 border-emerald-300/80 p-6 sm:p-8 shadow-xs relative flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
            Optimized Solar
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Audited & Calibrated Setup</h3>
                <p className="text-xs text-emerald-600 font-semibold">Inspected by Master Electricians</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              With proactive string balancing, thermal inspection, and automated appliance timing, your system operates at peak capacity, converting virtually all solar daylight into direct bill relief.
            </p>

            {/* Optimization Breakdown List */}
            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Full Panel Output Restored:</span>
                  <p className="text-slate-500 text-[11px] mt-0.5">Clean surfaces and thermal hotspot repair reclaim +18% lost generation.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                <Zap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Dynamic MPPT Peak Harvesting:</span>
                  <p className="text-slate-500 text-[11px] mt-0.5">Inverter firmware calibrated to Australian grid voltage standards to prevent dropouts.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Daytime Heavy Load Synchronization:</span>
                  <p className="text-slate-500 text-[11px] mt-0.5">Pool pumps, hot water cylinders, and EV charging run 100% on free solar.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Small Success Containers at bottom */}
          <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-emerald-100">
            <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-200/60">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Recovered Cash Flow</span>
              <span className="text-base sm:text-lg font-black text-emerald-950 mt-0.5 block">+$1,120 / year</span>
              <span className="text-[10px] text-emerald-700">Guaranteed bill relief</span>
            </div>
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Performance Grade</span>
              <span className="text-base sm:text-lg font-black text-slate-900 mt-0.5 block">Grade A+ (Optimal)</span>
              <span className="text-[10px] text-slate-500">Certified by technician</span>
            </div>
          </div>
        </div>

      </div>

      {/* Visual Diagnostic Banner with Photo & 4 Small Diagnostic Test Containers */}
      <div className=" shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Image Left */}
          <div className="lg:col-span-4 rounded-xl overflow-hidden shadow-inner border border-slate-200 relative min-h-55 h-full">
            <img
              src="/images/about/gallery/electrician-testing-equipment.jpg"
              alt="Licensed electrician testing solar system efficiency"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Master Electrician Service</p>
              <p className="text-xs font-bold">24-Point Comprehensive Diagnostic</p>
            </div>
          </div>

          {/* 4 Small Diagnostic Test Containers Right */}
          <div className="lg:col-span-8 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                How We Recover Your Lost Rooftop Savings
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Our technicians test key physical and digital failure points to restore peak efficiency on existing solar setups across Queensland.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Small Container 1 */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 text-xs font-bold">
                  01
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Infrared Hotspot Thermography</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Identifies micro-fractured cells draining current before strings fail.</p>
                </div>
              </div>

              {/* Small Container 2 */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 text-xs font-bold">
                  02
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Inverter MPPT Calibration</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Eliminates grid-overvoltage trip lockouts during peak sunshine.</p>
                </div>
              </div>

              {/* Small Container 3 */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 text-xs font-bold">
                  03
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">DC Isolator Integrity Check</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Ensures no dangerous moisture ingress or thermal arcing hazards.</p>
                </div>
              </div>

              {/* Small Container 4 */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center shrink-0 text-xs font-bold">
                  04
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Smart Export Verification</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Audits meter feeds to ensure your energy provider credits every unit.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs text-slate-500">
                Special audit rate: <strong className="text-slate-900">$189 flat fee</strong> for existing rooftop solar systems.
              </span>
              <Button
                to="/existing-solar/health-check"
                variant="primary"
                size="sm"
              >
                Book System Check ($189)
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SavingsOptimizationSection;

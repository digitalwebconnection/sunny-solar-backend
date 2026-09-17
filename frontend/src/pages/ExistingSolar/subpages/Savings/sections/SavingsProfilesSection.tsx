import React from 'react';
import { Home, Zap, BatteryCharging, Phone, ArrowRight, ShieldCheck, FileCheck2, UserCheck, Award } from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

export const SavingsProfilesSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Real Queensland <span className="text-emerald-600">Household Savings</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          See verified annual savings profiles across different property types and rooftop capacities in South East Queensland.
        </p>
      </div>

      {/* 3 Normal Containers: Household Profiles */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        
        {/* Profile 1: Suburban Family */}
        <div className="bg-white  border border-slate-300/80 overflow-hidden shadow-lg hover:border-amber-300 shadow-black/50 hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            {/* Image Header */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-100">
              <img
                src="/images/about/happy-family-solar.jpg"
                alt="Brisbane suburban family enjoying solar savings"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white">
                <span className="text-xs font-bold bg-amber-500/90 text-slate-950 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  Brisbane • 4-Bed Home
                </span>
                <span className="text-xs font-semibold text-slate-200">6.6 kW System</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Home className="w-4 h-4 text-amber-500" />
                <h3 className="text-lg font-bold text-slate-900">The Everyday Suburban Home</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Family of four with daytime air-conditioning in summer and scheduled dishwasher and washing machine runs during peak sun hours.
              </p>

              {/* 3 Small Stat Containers Inside */}
              <div className="grid grid-cols-3 gap-2 mt-5">
                <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-2.5 text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Annual Cut</p>
                  <p className="text-sm font-extrabold text-emerald-600 mt-0.5">$2,180</p>
                </div>
                <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-2.5 text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase">5-Yr Total</p>
                  <p className="text-sm font-extrabold text-slate-900 mt-0.5">$10,900</p>
                </div>
                <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-2.5 text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Grid Drop</p>
                  <p className="text-sm font-extrabold text-amber-600 mt-0.5">-68%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 pb-6 pt-0">
            <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">Break-Even Status</span>
              <span className="font-bold text-emerald-700">Fully Paid in 3.4 Yrs</span>
            </div>
          </div>
        </div>

        {/* Profile 2: High Daytime Pool & EV */}
        <div className="bg-white  border border-slate-300/80 overflow-hidden shadow-lg shadow-black/50  hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            {/* Image Header */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-100">
              <img
                src="/images/solutions/solar-kit.jpg"
                alt="Gold Coast high consumption solar setup"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white">
                <span className="text-xs font-bold bg-emerald-500/90 text-slate-950 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  Gold Coast • Pool & EV
                </span>
                <span className="text-xs font-semibold text-slate-200">10 kW High Yield</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-emerald-500" />
                <h3 className="text-lg font-bold text-slate-900">High Daytime Energy Consumer</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dual-inverter system powering high-draw pool pump filtration and regular electric vehicle charging during the 11am to 2pm solar peak.
              </p>

              {/* 3 Small Stat Containers Inside */}
              <div className="grid grid-cols-3 gap-2 mt-5">
                <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-2.5 text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Annual Cut</p>
                  <p className="text-sm font-extrabold text-emerald-600 mt-0.5">$3,450</p>
                </div>
                <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-2.5 text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase">5-Yr Total</p>
                  <p className="text-sm font-extrabold text-slate-900 mt-0.5">$17,250</p>
                </div>
                <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-2.5 text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Grid Drop</p>
                  <p className="text-sm font-extrabold text-emerald-600 mt-0.5">-81%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 pb-6 pt-0">
            <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">Break-Even Status</span>
              <span className="font-bold text-emerald-700">Fully Paid in 3.1 Yrs</span>
            </div>
          </div>
        </div>

        {/* Profile 3: Solar + Battery Hybrid */}
        <div className="bg-white  border border-slate-300/80 overflow-hidden shadow-lg shadow-black/50 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            {/* Image Header */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-100">
              <img
                src="/images/solutions/battery-bundle.jpg"
                alt="Sunshine coast solar and battery retrofit savings"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white">
                <span className="text-xs font-bold bg-blue-500/90 text-slate-950 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  Sunshine Coast • Retrofit
                </span>
                <span className="text-xs font-semibold text-slate-200">8.8 kW + 10 kWh</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <BatteryCharging className="w-4 h-4 text-blue-500" />
                <h3 className="text-lg font-bold text-slate-900">Solar + Battery Storage Hybrid</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Added a 10 kWh battery retrofit to an existing 5-year-old array. Captures 100% of daytime excess to eliminate expensive evening grid rates.
              </p>

              {/* 3 Small Stat Containers Inside */}
              <div className="grid grid-cols-3 gap-2 mt-5">
                <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-2.5 text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Annual Cut</p>
                  <p className="text-sm font-extrabold text-emerald-600 mt-0.5">$4,120</p>
                </div>
                <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-2.5 text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase">5-Yr Total</p>
                  <p className="text-sm font-extrabold text-slate-900 mt-0.5">$20,600</p>
                </div>
                <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-2.5 text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Grid Drop</p>
                  <p className="text-sm font-extrabold text-blue-600 mt-0.5">-94%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 pb-6 pt-0">
            <div className="bg-blue-50 rounded-xl p-3 border border-blue-100 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">Night Grid Independence</span>
              <span className="font-bold text-blue-700">Zero Peak Inflow</span>
            </div>
          </div>
        </div>

      </div>

      
    </section>
  );
};

export default SavingsProfilesSection;

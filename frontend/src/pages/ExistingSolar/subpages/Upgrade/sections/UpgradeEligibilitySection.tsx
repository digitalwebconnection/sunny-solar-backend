import React from 'react';
import { ArrowRight, Phone, CheckCircle, ShieldCheck, Award, FileCheck2, UserCheck, Layers, HelpCircle } from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

export const UpgradeEligibilitySection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Is Your System <span className="text-amber-600">Eligible for an Upgrade?</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Four straightforward technical criteria determine your system’s expansion potential. Our licensed designers review your roof layout and historical generation data for free.
        </p>
      </div>

      {/* Split Assessment Container (Electrician Photo + 4 Modular Eligibility Containers) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        
        {/* Visual Showcase Left */}
        <div className="lg:col-span-5 relative  overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900 min-h-[340px] flex flex-col justify-end">
          <img
            src="/images/about/gallery/smiling-solar-electrician.jpg"
            alt="Licensed Sunny Solar Master Electrician evaluating solar upgrade eligibility"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

        

          <div className="relative p-6 text-white">
          
            <h3 className="text-lg font-bold text-white">
              Direct Advice from Real Electricians, Not Sales Reps
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              We inspect your physical roof condition, switchboard safety switches, and inverter error logs before recommending any changes.
            </p>
          </div>
        </div>

        {/* 4 Modular Eligibility Containers Right */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Eligibility Card 1 */}
          <div className="bg-white border border-slate-300/80 p-5 shadow-md shadow-black/60 hover:border-amber-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 font-black text-xs flex items-center justify-center border border-amber-200">
                  01
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  8–18 m² Needed
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Roof Surface Availability</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Requires space for 4 to 12 additional panels. East and West faces work excellently for powering morning routines and afternoon air-conditioning.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Tile, colorbond, or kliplok roofs
            </div>
          </div>

          {/* Eligibility Card 2 */}
          <div className="bg-white border border-slate-300/80 p-5 shadow-md shadow-black/60 hover:border-amber-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 font-black text-xs flex items-center justify-center border border-amber-200">
                  02
                </span>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Inverter Test
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Inverter Capacity & Strings</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                If your inverter has an unused MPPT input, new panels can be wired immediately. If your inverter is 7+ years old, we recommend a hybrid upgrade.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Free voltage curve check
            </div>
          </div>

          {/* Eligibility Card 3 */}
          <div className="bg-white border border-slate-300/80 p-5 shadow-md shadow-black/60 hover:border-amber-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 font-black text-xs flex items-center justify-center border border-amber-200">
                  03
                </span>
                <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                  Network Pre-Check
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Distribution Grid Pre-Approval</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Single-phase properties can typically export up to 5kW, while 3-phase can export up to 15kW. We manage all network pre-approvals directly with Energex and Ergon.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> 100% Paperwork handled
            </div>
          </div>

          {/* Eligibility Card 4 */}
          <div className="bg-white border border-slate-300/80 p-5 shadow-md shadow-black/60 hover:border-amber-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 font-black text-xs flex items-center justify-center border border-amber-200">
                  04
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Point-of-Sale
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Federal Government STC Rebate</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Newly added panels still qualify for Small-scale Technology Certificates (STCs), deducting up to $2,400 off your final installation invoice automatically.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Instant invoice discount
            </div>
          </div>

        </div>

      </div>

      
    </section>
  );
};

export default UpgradeEligibilitySection;

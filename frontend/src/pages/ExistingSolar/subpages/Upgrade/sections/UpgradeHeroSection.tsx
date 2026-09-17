import React from 'react';
import { ArrowRight, Zap, RefreshCw, Award, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

export const UpgradeHeroSection: React.FC = () => {
  return (
    <section className="relative">
      <div className="pt-28 sm:pt-29">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Normal Container Left: Image Showcase with Overlaid Small Badges */}
          <div className="lg:col-span-7 relative group overflow-hidden shadow-md border border-slate-200/80 bg-slate-900 min-h-[360px] sm:min-h-[460px] flex flex-col justify-end">
            <img
              src="/images/about/gallery/rooftop-solar-drill.jpg"
              alt="Electrician upgrading residential rooftop solar panel array"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out opacity-90"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />

            

            
         
          </div>

          {/* Normal Container Right: Technical Upgrade Thesis */}
          <div className="lg:col-span-5 p-6 sm:p-8 shadow-xs flex flex-col justify-between bg-white border-y lg:border-y-0 lg:border-r border-slate-200/80">
            <div>
            

              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight leading-snug">
                Why Modern Solar Upgrades Are 60% More Cost-Effective
              </h2>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                If your household now runs midday air conditioning, charges an EV, or added a swimming pool, an older 3 kW–5 kW setup leaves you exposed to peak evening grid rates. Modern high-density panels produce 2.5× the output in the same roof footprint.
              </p>

              {/* Pair of Small Spec Containers */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3.5">
                  <p className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">String Expansion</p>
                  <p className="text-base font-extrabold text-slate-900 mt-1">Keep Working Panels</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Add 3.5 kW to 6.6 kW new strings</p>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-200/60 rounded-xl p-3.5">
                  <p className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Hybrid Inverter</p>
                  <p className="text-base font-extrabold text-slate-900 mt-1">Battery-Ready Port</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Built-in Wi-Fi 24/7 telemetry</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
              <Button
                to="/get-started/free-assessment"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Upgrade Proposal
              </Button>
              
            </div>
          </div>

        </div>

    

      </div>
    </section>
  );
};

export default UpgradeHeroSection;

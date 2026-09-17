import React from 'react';
import { ArrowRight, Zap, ShieldCheck, Sparkles, CheckCircle2, BatteryCharging, Cpu } from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

export const AddBatteryHeroSection: React.FC = () => {
  return (
    <section className="relative">
      <div className="pt-28 sm:pt-29">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Normal Container Left: Image Showcase with Overlaid Contextual Badges */}
          <div className="lg:col-span-7 relative group overflow-hidden shadow-md border border-slate-200/80 bg-slate-900 min-h-[360px] sm:min-h-[460px] flex flex-col justify-end">
            <img
              src="/images/solutions/battery-hero.jpg"
              alt="Residential AC-coupled battery storage retrofit beside switchboard"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out opacity-90"
            />
            {/* Ambient Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />

           

           
          </div>

          {/* Normal Container Right: Technical & Financial Retrofit Thesis */}
          <div className="lg:col-span-5 p-6 sm:p-8 shadow-xs flex flex-col justify-between bg-white border-y lg:border-y-0 lg:border-r border-slate-200/80">
            <div>
            
              <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight leading-snug">
                Add a Battery to Your <span className="text-emerald-600">Existing Solar</span>
              </h1>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                You don't need to replace working rooftop panels or discard your current inverter. Through smart AC-coupling, a dedicated home battery connects at your switchboard—absorbing daytime solar overflow and ending 38¢/kWh peak evening grid purchases.
              </p>

              {/* Pair of Small Spec/Metric Containers */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3.5">
                  <p className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Solar Self-Use</p>
                  <p className="text-base font-extrabold text-slate-900 mt-1">25% → 85%+</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Keep solar in your home</p>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-200/60 rounded-xl p-3.5">
                  <p className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Inverter Freedom</p>
                  <p className="text-base font-extrabold text-slate-900 mt-1">All Solar Brands</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Fronius, Sungrow, SMA & more</p>
                </div>
              </div>

     
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
              <Button
                to="/get-started/free-assessment"
                variant="accent-green"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Retrofit Assessment
              </Button>
              
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AddBatteryHeroSection;

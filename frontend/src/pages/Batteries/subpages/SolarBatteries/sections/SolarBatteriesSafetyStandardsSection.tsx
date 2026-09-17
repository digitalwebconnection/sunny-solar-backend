import React from 'react';
import { ShieldCheck, ArrowRight, Flame, CheckCircle2, Lock, FileCheck } from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

export const SolarBatteriesSafetyStandardsSection: React.FC = () => {
  const safetyItems = [
    {
      icon: Flame,
      title: 'Non-Combustible Fire Barrier',
      desc: 'Certified 9mm compressed fibre-cement backing installed behind batteries on all timber and cavity walls.',
    },
    {
      icon: ShieldCheck,
      title: 'Strict Clearance Boundaries',
      desc: 'Mandatory 600mm to 900mm clearance from habitable windows, doors, ground level, and gas appliances.',
    },
    {
      icon: Lock,
      title: 'Emergency DC Rotary Isolator',
      desc: 'Independent, accessible lockable switch enabling emergency services or homeowners to instantly isolate power.',
    },
    {
      icon: FileCheck,
      title: 'Energex Form 16 Sign-Off',
      desc: 'Official Certificate of Electrical Safety compliance lodged directly with Energex/Ergon for your home insurance.',
    },
  ];

  return (
    <div className="pt-6 border-t border-slate-200/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Heading, Narrative & CTA */}
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>AS/NZS 5139:2019 Standard</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
            Rigorous Fire Safety & Location Engineering
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            Australian residential battery laws are among the strictest in the world. Our in-house Master Electricians ensure your installation is fully compliant, protecting your home insurance and maximizing battery cell life.
          </p>

          <div className="pt-2">
            <Button
              to="/get-started/free-assessment"
              variant="accent-green"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Check My Wall & Switchboard
            </Button>
          </div>
        </div>

        {/* Right Column: Open Safety Points with Minimal Dividers (No Box) */}
        <div className="lg:col-span-7 divide-y divide-slate-200/70 border-y border-slate-200/70">
          {safetyItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="py-4 first:pt-2 last:pb-2 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default SolarBatteriesSafetyStandardsSection;

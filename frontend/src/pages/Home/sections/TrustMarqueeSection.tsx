import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Sun 
} from 'lucide-react';

const trustBeltItems = [
  {
    icon: ShieldCheck,
    label: '25-Year Performance Warranty',
  },
  {
    icon: Zap,
    label: 'Up to 85% Bill Reduction',
  },
  {
    icon: CheckCircle2,
    label: '$0 Upfront Payment Options',
  },
  {
    icon: Sparkles,
    label: 'Fast 3D Roof Engineering',
  },
  {
    icon: Award,
    label: 'Master Electrician Founded',
  },
  {
    icon: Sun,
    label: 'CEC Approved Solar Retailer',
  },
];

// Repeat items to ensure seamless loop
const trustBeltRepeated = [
  ...trustBeltItems,
  ...trustBeltItems,
  ...trustBeltItems,
  ...trustBeltItems,
];

export const TrustMarqueeSection: React.FC = () => {
  return (
    <section 
      className="w-full bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304] py-3.5 sm:py-2 relative overflow-hidden z-20 shadow-lg select-none group border-t border-b border-orange-700/20"
      aria-label="Sunny Solar Guarantees and Key Benefits"
    >
      {/* Edge gradient masks for seamless fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-linear-to-r from-[#ed5001] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-linear-to-l from-[#f4a304] to-transparent z-10" />

      {/* Infinite Marquee Track */}
      <div className="flex w-max animate-marquee">
        {/* Track 1 */}
        <div className="flex items-center shrink-0">
          {trustBeltRepeated.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`belt-track1-${idx}`} className="flex items-center">
                <div className="flex items-center gap-2.5 px-4 sm:px-5 py-1 text-white text-xs sm:text-lg font-bold tracking-wide ">
                  <Icon className="w-4 h-4 text-white shrink-0" />
                  <span className="whitespace-nowrap">{item.label}</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 mx-2.5 sm:mx-3 shrink-0" />
              </div>
            );
          })}
        </div>

        {/* Track 2 (Clone for seamless infinite loop) */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {trustBeltRepeated.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`belt-track2-${idx}`} className="flex items-center">
                <div className="flex items-center gap-2.5 px-4 sm:px-5 py-1 text-white text-xs sm:text-lg font-bold tracking-wide ">
                  <Icon className="w-4 h-4 text-white shrink-0" />
                  <span className="whitespace-nowrap">{item.label}</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 mx-2.5 sm:mx-3 shrink-0" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustMarqueeSection;
